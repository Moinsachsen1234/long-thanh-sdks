const { test } = require('node:test');
const assert = require('node:assert/strict');
const { run } = require('../npm/bin/long-thanh.cjs');
const { version } = require('../npm/package.json');

async function invoke(args, fetchApi = () => { throw new Error('Unexpected request'); }) {
  let out = '', err = '';
  const code = await run(args, { fetchApi, stdout: { write: text => { out += text; } }, stderr: { write: text => { err += text; } } });
  return { code, out, err };
}

test('CLI help and version work offline', async () => {
  for (const args of [[], ['--help'], ['menu', '-h']]) {
    const r = await invoke(args); assert.equal(r.code, 0); assert.match(r.out, /Long Thanh Imbiss CLI/); assert.equal(r.err, '');
  }
  assert.equal((await invoke(['--version'])).out, version + '\n');
});

test('CLI rejects invalid commands, languages and options before a request', async () => {
  for (const args of [['order'], ['menu', 'business'], ['menu', '--language', 'fr'], ['menu', '--language'], ['business', '--language', 'en'], ['menu', '--unknown']]) {
    const r = await invoke(args); assert.equal(r.code, 2); assert.equal(r.out, ''); assert.equal(JSON.parse(r.err).error.code, 'INVALID_ARGUMENT');
  }
});

test('CLI reads menu translations and business through the generated SDK and preserves JSON', async () => {
  for (const language of ['de', 'en', 'zh', 'vi', undefined]) {
    const data = { language: language || 'de', wire_field: 'unchanged', sections: [{ items: [{ price: '7.50' }] }] };
    const r = await invoke(['menu', ...(language ? ['--language', language] : []), '--json'], async (url, options) => {
      assert.equal(url, 'https://longthanh-imbiss.com/api/v1/menu' + (language ? '?language=' + language : ''));
      assert.equal(options.method, 'GET'); assert.equal(options.headers.Accept, 'application/json'); assert.ok(options.signal instanceof AbortSignal);
      return Response.json(data);
    });
    assert.equal(r.code, 0); assert.equal(r.err, ''); assert.deepEqual(JSON.parse(r.out), data);
  }
  const r = await invoke(['business'], async url => {
    assert.equal(url, 'https://longthanh-imbiss.com/api/v1/business'); return Response.json({ name: 'Long Thanh Imbiss', ordering: { agentCanPlaceOrders: false } });
  });
  assert.equal(r.code, 0); assert.equal(JSON.parse(r.out).ordering.agentCanPlaceOrders, false);
});

test('CLI reports structured HTTP errors and Retry-After without retries', async () => {
  for (const status of [400, 404, 429, 503]) {
    let calls = 0;
    const r = await invoke(['menu'], async () => {
      calls++;
      return Response.json({ code: 'TEST_ERROR', detail: 'Problem details', resolution: 'Wait and retry.' }, { status, headers: status === 429 ? { 'Retry-After': '60' } : {} });
    });
    assert.equal(calls, 1); assert.equal(r.code, 1); assert.equal(r.out, '');
    assert.deepEqual(JSON.parse(r.err).error, { code: 'TEST_ERROR', message: 'Problem details', status, resolution: 'Wait and retry.', ...(status === 429 ? { retry_after: '60' } : {}) });
  }
  const r = await invoke(['business'], async () => new Response('<html>upstream</html>', { status: 502 }));
  assert.equal(JSON.parse(r.err).error.code, 'HTTP_ERROR'); assert.equal(r.code, 1);
});

test('CLI reports network and timeout failures as JSON on stderr', async () => {
  for (const error of [new Error('offline'), new DOMException('timeout', 'TimeoutError')]) {
    const r = await invoke(['business'], async () => { throw error; });
    assert.equal(r.code, 1); assert.equal(r.out, ''); assert.equal(JSON.parse(r.err).error.code, 'NETWORK_ERROR');
  }
});
