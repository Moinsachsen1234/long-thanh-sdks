const assert = require('node:assert/strict');
const { DefaultApi, Configuration, ResponseError } = require('../npm/dist/index.js');
const base = process.env.SDK_BASE_URL;
const api = new DefaultApi(new Configuration({ basePath: base }));
(async () => {
  for (const language of process.env.SDK_TEST_LIVE ? ['en'] : ['de', 'en', 'zh', 'vi']) {
    const raw = await api.getPublicMenuV1Raw({ language });
    const menu = await raw.value();
    assert.equal(menu.language, language); assert.equal(menu.currency, 'EUR');
    assert.equal(menu.sections.length, 9);
    assert.match(menu.sections[0].items[0].price, /^\d+\.\d{2}$/);
    assert.ok(raw.raw.headers.get('RateLimit'));
  }
  const business = await api.getPublicBusinessV1();
  assert.equal(business.name, 'Long Thanh Imbiss');
  assert.equal(business.ordering.onlineCheckout, false);
  assert.match(await api.getMenu(), /Peking Suppe/);
  if (!process.env.SDK_TEST_LIVE) for (const status of [404, 429, 500]) {
    const failing = new DefaultApi(new Configuration({ basePath: base + '/error' + status }));
    await assert.rejects(() => failing.getPublicMenuV1(), asyncError => asyncError instanceof ResponseError && asyncError.response.status === status);
    try { await failing.getPublicMenuV1(); } catch (error) {
      const problem = await error.response.json(); assert.equal(problem.status, status); assert.ok(problem.resolution);
      if (status === 429) assert.equal(error.response.headers.get('Retry-After'), '60');
    }
  }
  console.log(JSON.stringify({ ecosystem: 'npm', passed: true, live: Boolean(process.env.SDK_TEST_LIVE) }));
})().catch(error => { console.error(error); process.exitCode = 1; });
