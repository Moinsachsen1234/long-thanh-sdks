# SWL Services SDK publishing

Product domain: https://longthanh-imbiss.com

These SDKs retain all rights reserved, as selected by the owner. Only generated
SDK source is in this public repository; the website repository remains private.

## npm

The verified organization is **swlservices** (no hyphen). Authenticated account
moinsachsen1234 is its owner. Package: `@swlservices/long-thanh-sdk`, version 0.1.0.
Its homepage is https://longthanh-imbiss.com and author is SWL Services.
CLI publication uses the organization's scope and browser authentication.

## Go

Module: `github.com/Moinsachsen1234/long-thanh-sdks/go`.
Tag: `go/v0.1.0`. Install with:

```sh
go get github.com/Moinsachsen1234/long-thanh-sdks/go@v0.1.0
```

## PyPI and RubyGems: token-free first publication

The release workflow is `.github/workflows/publish-sdks.yml`. Its jobs are
manual, disabled by default, and authenticate using short-lived GitHub OIDC
credentials. No permanent registry token is stored in GitHub or this repository.

Configure a pending trusted publisher while signed into each registry:

| Field | PyPI | RubyGems |
| --- | --- | --- |
| Setup page | https://pypi.org/manage/account/publishing/ | https://rubygems.org/profile/oidc/pending_trusted_publishers |
| Project/gem name | `long-thanh-sdk` | `long_thanh_sdk` |
| GitHub owner | `Moinsachsen1234` | `Moinsachsen1234` |
| Repository | `long-thanh-sdks` | `long-thanh-sdks` |
| Workflow filename | `publish-sdks.yml` | `publish-sdks.yml` |
| Environment | `pypi` | `rubygems` |

Leave optional reusable-workflow repository fields blank; this workflow runs
directly in this repository. The final setup action authorizes this exact
repository/workflow/environment to publish this package. Sign-in, 2FA and that
authorization must be completed by the registry account owner.

After configuration, dispatch the workflow with only the configured registry
selected. Query the public registry afterward to verify the version, homepage
metadata and uploaded artifacts; a completed build does not establish publication.

References:

- https://docs.pypi.org/trusted-publishers/creating-a-project-through-oidc/
- https://guides.rubygems.org/trusted-publishing/
