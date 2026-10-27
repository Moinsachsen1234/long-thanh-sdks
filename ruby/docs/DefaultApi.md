# LongThanhSdk::DefaultApi

All URIs are relative to *https://longthanh-imbiss.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_menu**](DefaultApi.md#get_menu) | **GET** /speisekarte.txt | Read the existing German plain-text menu |
| [**get_public_business_v1**](DefaultApi.md#get_public_business_v1) | **GET** /api/v1/business | Read business contact, hours and ordering policy as JSON |
| [**get_public_menu_v1**](DefaultApi.md#get_public_menu_v1) | **GET** /api/v1/menu | Read the published menu and prices as JSON |


## get_menu

> String get_menu

Read the existing German plain-text menu

Compatibility feed with UTF-8 Markdown-style headings and EUR prices. Rebuilt with the website; not live inventory. Static feeds do not emit application quota headers. Use /api/v1/menu for typed JSON and structured API errors.

### Examples

```ruby
require 'time'
require 'long_thanh_sdk'

api_instance = LongThanhSdk::DefaultApi.new

begin
  # Read the existing German plain-text menu
  result = api_instance.get_menu
  p result
rescue LongThanhSdk::ApiError => e
  puts "Error when calling DefaultApi->get_menu: #{e}"
end
```

#### Using the get_menu_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(String, Integer, Hash)> get_menu_with_http_info

```ruby
begin
  # Read the existing German plain-text menu
  data, status_code, headers = api_instance.get_menu_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => String
rescue LongThanhSdk::ApiError => e
  puts "Error when calling DefaultApi->get_menu_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/problem+json, application/json, text/html, text/markdown


## get_public_business_v1

> <Business> get_public_business_v1

Read business contact, hours and ordering policy as JSON

Use when a user asks where Long Thanh Imbiss is, how to contact it, its regular opening hours or how to order. Hours use Europe/Berlin time; holidays and changes require telephone confirmation. No parameters. Returns the complete resource without pagination. HEAD returns the same status and headers without a body.

### Examples

```ruby
require 'time'
require 'long_thanh_sdk'

api_instance = LongThanhSdk::DefaultApi.new

begin
  # Read business contact, hours and ordering policy as JSON
  result = api_instance.get_public_business_v1
  p result
rescue LongThanhSdk::ApiError => e
  puts "Error when calling DefaultApi->get_public_business_v1: #{e}"
end
```

#### Using the get_public_business_v1_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Business>, Integer, Hash)> get_public_business_v1_with_http_info

```ruby
begin
  # Read business contact, hours and ordering policy as JSON
  data, status_code, headers = api_instance.get_public_business_v1_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Business>
rescue LongThanhSdk::ApiError => e
  puts "Error when calling DefaultApi->get_public_business_v1_with_http_info: #{e}"
end
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


## get_public_menu_v1

> <Menu> get_public_menu_v1(opts)

Read the published menu and prices as JSON

Use when answering questions about Long Thanh Imbiss dishes or published EUR prices. Returns all sections without pagination. Confirm availability, ingredients and orders by telephone. HEAD returns the same status and headers without a body.

### Examples

```ruby
require 'time'
require 'long_thanh_sdk'

api_instance = LongThanhSdk::DefaultApi.new
opts = {
  language: 'de' # String | Menu translation; omit for German. Repeated or unsupported query parameters return 400.
}

begin
  # Read the published menu and prices as JSON
  result = api_instance.get_public_menu_v1(opts)
  p result
rescue LongThanhSdk::ApiError => e
  puts "Error when calling DefaultApi->get_public_menu_v1: #{e}"
end
```

#### Using the get_public_menu_v1_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Menu>, Integer, Hash)> get_public_menu_v1_with_http_info(opts)

```ruby
begin
  # Read the published menu and prices as JSON
  data, status_code, headers = api_instance.get_public_menu_v1_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Menu>
rescue LongThanhSdk::ApiError => e
  puts "Error when calling DefaultApi->get_public_menu_v1_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **language** | **String** | Menu translation; omit for German. Repeated or unsupported query parameters return 400. | [optional][default to &#39;de&#39;] |

### Return type

[**Menu**](Menu.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

