#!/usr/bin/env node
'use strict';

const { parseArgs } = require('node:util');
const { Configuration, DefaultApi } = require('../dist/index.js');
const { version } = require('../package.json');

const help = `Long Thanh Imbiss CLI — SWL Services
Usage: long-thanh <command> [options]

Commands:
  menu       Published menu and EUR prices as JSON
  business   Contact, regular hours and ordering guidance as JSON

Options:
  --language <de|en|zh|vi>  Menu language (default: de; menu only)
  --json                  Explicit JSON output (the default)
  -h, --help              Show help without making a request
  -v, --version           Show the installed version

Examples:
  long-thanh menu --language en
  long-thanh business

Public reads need no account or API key. Requests time out after 15 seconds.
Cache facts for five minutes. On 429, wait for retry_after before retrying.
Exit codes: 0 success, 1 API/network error, 2 invalid arguments.
Documentation: https://longthanh-imbiss.com/developers/cli/
`;

async function run(argv, { fetchApi = globalThis.fetch, stdout = process.stdout, stderr = process.stderr } = {}) {
  let command, language;
  try {
    const { values, positionals } = parseArgs({ args: argv, allowPositionals: true, options: {
      language: { type: 'string' }, json: { type: 'boolean' },
      help: { type: 'boolean', short: 'h' }, version: { type: 'boolean', short: 'v' },
    } });
    if (values.help || argv.length === 0) { stdout.write(help); return 0; }
    if (values.version) { stdout.write(version + '\n'); return 0; }
    [command] = positionals;
    language = values.language;
    if (positionals.length !== 1 || !['menu', 'business'].includes(command)) throw new Error('Choose one command: menu or business.');
    if (language !== undefined && (command !== 'menu' || !['de', 'en', 'zh', 'vi'].includes(language))) throw new Error('--language accepts de, en, zh or vi and is only supported by menu.');
  } catch (error) {
    stderr.write(JSON.stringify({ error: { code: 'INVALID_ARGUMENT', message: error.message, resolution: 'Run long-thanh --help.' } }) + '\n');
    return 2;
  }
  try {
    const api = new DefaultApi(new Configuration({
      basePath: 'https://longthanh-imbiss.com',
      headers: { Accept: 'application/json', 'User-Agent': `LongThanhImbiss-CLI/${version}` },
      fetchApi: (url, options) => fetchApi(url, { ...options, signal: AbortSignal.timeout(15000) }),
    }));
    const result = command === 'menu' ? await api.getPublicMenuV1Raw({ language }) : await api.getPublicBusinessV1Raw();
    // Preserve the public API's JSON field names for scripts and agents.
    stdout.write(JSON.stringify(await result.raw.json(), null, 2) + '\n');
    return 0;
  } catch (error) {
    const response = error.response;
    const problem = response ? await response.json().catch(() => ({})) : {};
    stderr.write(JSON.stringify({ error: {
      code: problem.code || (response ? 'HTTP_ERROR' : 'NETWORK_ERROR'),
      message: problem.detail || problem.title || (response ? `HTTP ${response.status}` : 'Could not reach the Long Thanh Imbiss API within 15 seconds.'),
      ...(response ? { status: response.status } : {}),
      resolution: problem.resolution || 'Check your connection and retry later.',
      ...(response?.headers.get('Retry-After') ? { retry_after: response.headers.get('Retry-After') } : {}),
    } }) + '\n');
    return 1;
  }
}

module.exports = { run };
if (require.main === module) run(process.argv.slice(2)).then(code => { process.exitCode = code; });
