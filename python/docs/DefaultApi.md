# long_thanh_sdk.DefaultApi

All URIs are relative to *https://longthanh-imbiss.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_menu**](DefaultApi.md#get_menu) | **GET** /speisekarte.txt | Read the existing German plain-text menu
[**get_public_business_v1**](DefaultApi.md#get_public_business_v1) | **GET** /api/v1/business | Read business contact, hours and ordering policy as JSON
[**get_public_menu_v1**](DefaultApi.md#get_public_menu_v1) | **GET** /api/v1/menu | Read the published menu and prices as JSON


# **get_menu**
> str get_menu()

Read the existing German plain-text menu

Compatibility feed with UTF-8 Markdown-style headings and EUR prices. Rebuilt with the website; not live inventory. Static feeds do not emit application quota headers. Use /api/v1/menu for typed JSON and structured API errors.

### Example


```python
import long_thanh_sdk
from long_thanh_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://longthanh-imbiss.com
# See configuration.py for a list of all supported configuration parameters.
configuration = long_thanh_sdk.Configuration(
    host = "https://longthanh-imbiss.com"
)


# Enter a context with an instance of the API client
with long_thanh_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = long_thanh_sdk.DefaultApi(api_client)

    try:
        # Read the existing German plain-text menu
        api_response = api_instance.get_menu()
        print("The response of DefaultApi->get_menu:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_menu: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/problem+json, application/json, text/html, text/markdown

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | German menu text |  -  |
**404** | Missing resource. Request application/problem+json or application/json for JSON, or text/markdown for Markdown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_public_business_v1**
> Business get_public_business_v1()

Read business contact, hours and ordering policy as JSON

Use when a user asks where Long Thanh Imbiss is, how to contact it, its regular opening hours or how to order. Hours use Europe/Berlin time; holidays and changes require telephone confirmation. No parameters. Returns the complete resource without pagination. HEAD returns the same status and headers without a body.

### Example


```python
import long_thanh_sdk
from long_thanh_sdk.models.business import Business
from long_thanh_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://longthanh-imbiss.com
# See configuration.py for a list of all supported configuration parameters.
configuration = long_thanh_sdk.Configuration(
    host = "https://longthanh-imbiss.com"
)


# Enter a context with an instance of the API client
with long_thanh_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = long_thanh_sdk.DefaultApi(api_client)

    try:
        # Read business contact, hours and ordering policy as JSON
        api_response = api_instance.get_public_business_v1()
        print("The response of DefaultApi->get_public_business_v1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_public_business_v1: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Business**](Business.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Published information. Cache facts in your client for at least five minutes. Shared caching is disabled so quota headers remain per client. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Link - API, manifest and policy discovery. rel&#x3D;\&quot;deprecation\&quot; points to the support policy and does not mean the resource is deprecated. <br>  |
**400** | Invalid or repeated parameters; code INVALID_PARAMETER. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
**404** | Unknown resource; code NOT_FOUND. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
**405** | Read-only endpoint; code METHOD_NOT_ALLOWED. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Allow -  <br>  |
**429** | Quota exhausted; code RATE_LIMITED. Honor Retry-After. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Retry-After -  <br>  |
**500** | Unexpected error; code INTERNAL_ERROR. No internal diagnostics are returned. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
**503** | Quota service unavailable; code SERVICE_UNAVAILABLE. No remaining quota is claimed when it cannot be measured. |  * RateLimit-Policy -  <br>  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_public_menu_v1**
> Menu get_public_menu_v1(language=language)

Read the published menu and prices as JSON

Use when answering questions about Long Thanh Imbiss dishes or published EUR prices. Returns all sections without pagination. Confirm availability, ingredients and orders by telephone. HEAD returns the same status and headers without a body.

### Example


```python
import long_thanh_sdk
from long_thanh_sdk.models.menu import Menu
from long_thanh_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://longthanh-imbiss.com
# See configuration.py for a list of all supported configuration parameters.
configuration = long_thanh_sdk.Configuration(
    host = "https://longthanh-imbiss.com"
)


# Enter a context with an instance of the API client
with long_thanh_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = long_thanh_sdk.DefaultApi(api_client)
    language = 'de' # str | Menu translation; omit for German. Repeated or unsupported query parameters return 400. (optional) (default to 'de')

    try:
        # Read the published menu and prices as JSON
        api_response = api_instance.get_public_menu_v1(language=language)
        print("The response of DefaultApi->get_public_menu_v1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_public_menu_v1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| Menu translation; omit for German. Repeated or unsupported query parameters return 400. | [optional] [default to &#39;de&#39;]

### Return type

[**Menu**](Menu.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Published information. Cache facts in your client for at least five minutes. Shared caching is disabled so quota headers remain per client. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Link - API, manifest and policy discovery. rel&#x3D;\&quot;deprecation\&quot; points to the support policy and does not mean the resource is deprecated. <br>  |
**400** | Invalid or repeated parameters; code INVALID_PARAMETER. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
**404** | Unknown resource; code NOT_FOUND. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
**405** | Read-only endpoint; code METHOD_NOT_ALLOWED. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Allow -  <br>  |
**429** | Quota exhausted; code RATE_LIMITED. Honor Retry-After. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * Retry-After -  <br>  |
**500** | Unexpected error; code INTERNAL_ERROR. No internal diagnostics are returned. |  * RateLimit -  <br>  * RateLimit-Policy -  <br>  |
**503** | Quota service unavailable; code SERVICE_UNAVAILABLE. No remaining quota is claimed when it cannot be measured. |  * RateLimit-Policy -  <br>  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

