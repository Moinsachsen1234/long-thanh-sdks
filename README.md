# Long Thanh Imbiss SDKs

Publisher: **SWL Services**. Product homepage: https://longthanh-imbiss.com

Copyright (c) 2026 SWL Services. All rights reserved. No open-source licence is granted.

Generated clients for the public read-only API at
https://longthanh-imbiss.com/openapi.json. npm SDK and CLI version: 0.1.1; other SDK versions: 0.1.0.

| Ecosystem | Package/module | Homepage metadata |
| --- | --- | --- |
| npm | `@swlservices/long-thanh-sdk` | package.json homepage |
| Python | `long-thanh-sdk` | project.urls.Homepage and setup.py URL |
| Go | `github.com/Moinsachsen1234/long-thanh-sdks/go` | Repository homepage and package README |
| RubyGems | `long_thanh_sdk` | gem homepage and metadata.homepage_uri |

All four SDKs are published. npm 0.1.1 includes the official CLI; Python, Ruby and Go remain at 0.1.0 (Go v0.1.0).

- npm: https://www.npmjs.com/package/@swlservices/long-thanh-sdk
- PyPI: https://pypi.org/project/long-thanh-sdk/
- Go: https://github.com/Moinsachsen1234/long-thanh-sdks/tree/main/go
- RubyGems: https://rubygems.org/gems/long_thanh_sdk

Current installation instructions: https://longthanh-imbiss.com/developers/sdks/
PyPI and RubyGems releases use short-lived GitHub OIDC credentials.
The npm scope belongs to the SWL Services organization swlservices. The authenticated publisher account moinsachsen1234 is its owner.

## API scope

- Read the published menu: German, English, Chinese and Vietnamese.
- Read regular hours, contact and telephone ordering guidance.
- Read the legacy German menu feed.

No credentials are needed for these reads. These clients cannot place orders,
take payments, reserve tables, or verify live availability or allergen safety.
Cache facts for five minutes; inspect RateLimit and honor Retry-After on 429.

## Reproduce generation

Requirements: Node.js 24 and Java 21. Run `node --use-system-ca scripts/generate-sdks.mjs`
from the SDK repository root (or from the website source root). The pinned
OpenAPI Generator 7.26.0 JAR is downloaded to the user's cache and verified with
the SHA-256 in config/generator.json. No generator executable is bundled here.
GENERATION.json records the source OpenAPI checksum and publisher.

Generation includes two portability fixes: Python boolean const validators
must compare against False rather than the string 'false', and Ruby gem file
enumeration uses Ruby Dir.glob instead of a platform shell `find` command.
The API description itself is unchanged. Each package retains generated source
and the all-rights-reserved licence selected by the owner.

Build npm with `npm ci && npm run build` in npm/. Build Python with
`python -m build` in python/. Build Ruby with `gem build long_thanh_sdk.gemspec`
in ruby/. Test Go with `go test ./...` in go/.

## Integration checks

The tests exercise real generated clients, four-language menu data, business
information, text feeds, quota headers and structured 404/429/500 failures.
The website source's `scripts/check-sdks.mjs` supplies an isolated fixture server.
Each language also passed direct live API checks.

To run a live smoke check, set SDK_BASE_URL=https://longthanh-imbiss.com and
SDK_TEST_LIVE=1, then run tests/npm-smoke.cjs (after building npm),
tests/python-smoke.py (after installing python/), tests/ruby-smoke.rb (after
installing Ruby dependencies), or `go test -run TestSdkIntegration -v` in go/.

The source repository contains generated clients and public API information
only. It does not include the private restaurant website, server credentials,
registry credentials, or signing keys.

## Official CLI

Run `npx --yes --package=@swlservices/long-thanh-sdk long-thanh menu --language en` or `npx --yes --package=@swlservices/long-thanh-sdk long-thanh business`. The maintained CLI source in cli/ is copied into npm/bin/ by the generator. Run `node --test tests/cli.test.cjs` after building npm/. Documentation: https://longthanh-imbiss.com/developers/cli/
