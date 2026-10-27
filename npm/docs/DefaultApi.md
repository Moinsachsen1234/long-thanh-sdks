# DefaultApi

All URIs are relative to *https://longthanh-imbiss.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMenu**](DefaultApi.md#getmenu) | **GET** /speisekarte.txt | Read the existing German plain-text menu |
| [**getPublicBusinessV1**](DefaultApi.md#getpublicbusinessv1) | **GET** /api/v1/business | Read business contact, hours and ordering policy as JSON |
| [**getPublicMenuV1**](DefaultApi.md#getpublicmenuv1) | **GET** /api/v1/menu | Read the published menu and prices as JSON |



## getMenu

> string getMenu()

Read the existing German plain-text menu

Compatibility feed with UTF-8 Markdown-style headings and EUR prices. Rebuilt with the website; not live inventory. Static feeds do not emit application quota headers. Use /api/v1/menu for typed JSON and structured API errors.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@swl-services/long-thanh-sdk';
import type { GetMenuRequest } from '@swl-services/long-thanh-sdk';

async function example() {
  console.log("🚀 Testing @swl-services/long-thanh-sdk SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getMenu();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/problem+json`, `application/json`, `text/html`, `text/markdown`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | German menu text |  -  |
| **404** | Missing resource. Request application/problem+json or application/json for JSON, or text/markdown for Markdown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicBusinessV1

> Business getPublicBusinessV1()

Read business contact, hours and ordering policy as JSON

Use when a user asks where Long Thanh Imbiss is, how to contact it, its regular opening hours or how to order. Hours use Europe/Berlin time; holidays and changes require telephone confirmation. No parameters. Returns the complete resource without pagination. HEAD returns the same status and headers without a body.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@swl-services/long-thanh-sdk';
import type { GetPublicBusinessV1Request } from '@swl-services/long-thanh-sdk';

async function example() {
  console.log("🚀 Testing @swl-services/long-thanh-sdk SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getPublicBusinessV1();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Business**](Business.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Published information. Cache facts in your client for at least five minutes. Shared caching is disabled so quota headers remain per client. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Link - API, manifest and policy discovery. rel&#x3D;\&quot;deprecation\&quot; points to the support policy and does not mean the resource is deprecated. <br>  |
| **400** | Invalid or repeated parameters; code INVALID_PARAMETER. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
| **404** | Unknown resource; code NOT_FOUND. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
| **405** | Read-only endpoint; code METHOD_NOT_ALLOWED. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Allow -  <br>  |
| **429** | Quota exhausted; code RATE_LIMITED. Honor Retry-After. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Retry-After -  <br>  |
| **500** | Unexpected error; code INTERNAL_ERROR. No internal diagnostics are returned. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
| **503** | Quota service unavailable; code SERVICE_UNAVAILABLE. No remaining quota is claimed when it cannot be measured. |  * RateLimit-Policy -  <br>  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicMenuV1

> Menu getPublicMenuV1(language)

Read the published menu and prices as JSON

Use when answering questions about Long Thanh Imbiss dishes or published EUR prices. Returns all sections without pagination. Confirm availability, ingredients and orders by telephone. HEAD returns the same status and headers without a body.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@swl-services/long-thanh-sdk';
import type { GetPublicMenuV1Request } from '@swl-services/long-thanh-sdk';

async function example() {
  console.log("🚀 Testing @swl-services/long-thanh-sdk SDK...");
  const api = new DefaultApi();

  const body = {
    // 'de' | 'en' | 'zh' | 'vi' | Menu translation; omit for German. Repeated or unsupported query parameters return 400. (optional)
    language: language_example,
  } satisfies GetPublicMenuV1Request;

  try {
    const data = await api.getPublicMenuV1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **language** | `de`, `en`, `zh`, `vi` | Menu translation; omit for German. Repeated or unsupported query parameters return 400. | [Optional] [Defaults to `&#39;de&#39;`] [Enum: de, en, zh, vi] |

### Return type

[**Menu**](Menu.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Published information. Cache facts in your client for at least five minutes. Shared caching is disabled so quota headers remain per client. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Link - API, manifest and policy discovery. rel&#x3D;\&quot;deprecation\&quot; points to the support policy and does not mean the resource is deprecated. <br>  |
| **400** | Invalid or repeated parameters; code INVALID_PARAMETER. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
| **404** | Unknown resource; code NOT_FOUND. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
| **405** | Read-only endpoint; code METHOD_NOT_ALLOWED. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Allow -  <br>  |
| **429** | Quota exhausted; code RATE_LIMITED. Honor Retry-After. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Retry-After -  <br>  |
| **500** | Unexpected error; code INTERNAL_ERROR. No internal diagnostics are returned. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
| **503** | Quota service unavailable; code SERVICE_UNAVAILABLE. No remaining quota is claimed when it cannot be measured. |  * RateLimit-Policy -  <br>  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

