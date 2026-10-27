import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const root = fileURLToPath(new URL('../', import.meta.url));
const sdkRoot = existsSync(resolve(root, 'config/generator.json')) ? root : resolve(root, 'sdk');
const specPath = sdkRoot === root ? resolve(root, 'openapi.json') : resolve(root, 'public/api/openapi.json');
const generator = JSON.parse(await readFile(resolve(sdkRoot, 'config/generator.json')));
const cache = resolve(homedir(), '.cache/long-thanh-sdk-tools');
const jar = resolve(cache, `openapi-generator-cli-${generator.version}.jar`);
await mkdir(cache, { recursive: true });
let binary;
try { binary = await readFile(jar); }
catch (error) {
  if (error.code !== 'ENOENT') throw error;
  const response = await fetch(generator.url);
  if (!response.ok) throw new Error(`Generator download failed: ${response.status}`);
  binary = Buffer.from(await response.arrayBuffer());
}
if (createHash('sha256').update(binary).digest('hex') !== generator.sha256) throw new Error('Generator checksum mismatch');
await writeFile(jar, binary);
const license = 'Copyright (c) 2026 SWL Services. All rights reserved.\n\nNo open-source license is granted for these SDKs.\n';
const selected = process.argv.slice(2);
const generators = { npm: 'typescript-fetch', python: 'python', go: 'go', ruby: 'ruby' };
for (const [ecosystem, name] of Object.entries(generators)) {
  if (selected.length && !selected.includes(ecosystem)) continue;
  const directory = resolve(sdkRoot, ecosystem);
  const result = spawnSync('java', ['-jar', jar, 'generate', '-i', specPath, '-g', name, '-o', directory,
    '-c', resolve(sdkRoot, 'config', ecosystem + '.json'), '--global-property', 'apiTests=false,modelTests=false', '--http-user-agent', 'LongThanhImbiss-SDK/0.1.0'], { cwd: root, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${ecosystem} generator failed (${result.status})`);
  await writeFile(resolve(directory, 'LICENSE.txt'), license);
  const readme = resolve(directory, 'README.md');
  const generated = await readFile(readme, 'utf8');
  await writeFile(readme, '# Long Thanh Imbiss ' + ecosystem + ' SDK\n\nPublisher: SWL Services. Product homepage: https://longthanh-imbiss.com\n\nGenerated from https://longthanh-imbiss.com/openapi.json. This SDK is read-only; it cannot place orders, take payments or confirm live availability. Cache facts for five minutes and honor RateLimit / Retry-After.\n\nCopyright (c) 2026 SWL Services. All rights reserved. See LICENSE.txt.\n\n' + generated);
  if (ecosystem === 'npm') {
    const path = resolve(directory, 'package.json');
    const packageJson = JSON.parse(await readFile(path, 'utf8'));
    Object.assign(packageJson, { homepage: 'https://longthanh-imbiss.com', author: 'SWL Services', license: 'UNLICENSED', files: ['dist', 'README.md', 'LICENSE.txt'], repository: { type: 'git', url: 'https://github.com/Moinsachsen1234/long-thanh-sdks.git', directory: 'npm' }, publishConfig: { access: 'public' } });
    await writeFile(path, JSON.stringify(packageJson, null, 2) + '\n');
  }
  if (ecosystem === 'python') {
    const path = resolve(directory, 'pyproject.toml');
    let project = await readFile(path, 'utf8');
    project = project.replace(/authors = \[[\s\S]*?\]/, 'authors = [{ name = "SWL Services" }]')
      .replace('name = "long_thanh_sdk"', 'name = "long-thanh-sdk"')
      .replace('readme = "README.md"', 'readme = "README.md"\nlicense = "LicenseRef-Proprietary"\nlicense-files = ["LICENSE.txt"]')
      .replace('[project.urls]', '[project.urls]\nHomepage = "https://longthanh-imbiss.com"\nDocumentation = "https://longthanh-imbiss.com/developers/"')
      .replace('requires = ["setuptools"]', 'requires = ["setuptools>=77", "wheel"]');
    await writeFile(path, project);
    const setup = resolve(directory, 'setup.py');
    await writeFile(setup, (await readFile(setup, 'utf8')).replace('author="OpenAPI Generator community"', 'author="SWL Services"').replace(/    author_email=.*\n/, ''));
    // Generator 7.26.0 emits string 'false' for OpenAPI 3.1 boolean const
    // validators. Preserve the actual false-only contract in these two fields.
    const orderingPath = resolve(directory, 'long_thanh_sdk/models/business_ordering.py');
    const ordering = await readFile(orderingPath, 'utf8');
    if ((ordering.match(/set\(\['false'\]\)/g) || []).length !== 2) throw new Error('Review Python boolean-const generator workaround');
    await writeFile(orderingPath, ordering.replaceAll("set(['false'])", 'set([False])'));
  }
  if (ecosystem === 'ruby') {
    const path = resolve(directory, 'long_thanh_sdk.gemspec');
    // Generated shell `find` commands are not portable on Windows and can
    // accidentally produce an empty gem. Use Ruby's own file enumeration.
    const spec = (await readFile(path, 'utf8'))
      .replace(/s\.files\s*=.*\n/, 's.files = Dir.glob("{lib,docs}/**/*").select { |f| File.file?(f) } + ["README.md", "LICENSE.txt"]\n')
      .replace(/s\.test_files\s*=.*\n/, 's.test_files = []\n');
    await writeFile(path, spec);
  }
}
await writeFile(resolve(sdkRoot, 'GENERATION.json'), JSON.stringify({ generator, openapiSha256: createHash('sha256').update(await readFile(specPath)).digest('hex'), publisher: 'SWL Services', version: '0.1.0', license: 'All rights reserved', status: 'generated release candidate; package-registry publication is a separate step' }, null, 2) + '\n');
