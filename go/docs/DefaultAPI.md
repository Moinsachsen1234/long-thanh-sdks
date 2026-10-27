# \DefaultAPI

All URIs are relative to *https://longthanh-imbiss.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetMenu**](DefaultAPI.md#GetMenu) | **Get** /speisekarte.txt | Read the existing German plain-text menu
[**GetPublicBusinessV1**](DefaultAPI.md#GetPublicBusinessV1) | **Get** /api/v1/business | Read business contact, hours and ordering policy as JSON
[**GetPublicMenuV1**](DefaultAPI.md#GetPublicMenuV1) | **Get** /api/v1/menu | Read the published menu and prices as JSON



## GetMenu

> string GetMenu(ctx).Execute()

Read the existing German plain-text menu



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/Moinsachsen1234/long-thanh-sdks/go"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.GetMenu(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.GetMenu``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMenu`: string
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.GetMenu`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetMenuRequest struct via the builder pattern


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/problem+json, application/json, text/html, text/markdown

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPublicBusinessV1

> Business GetPublicBusinessV1(ctx).Execute()

Read business contact, hours and ordering policy as JSON



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/Moinsachsen1234/long-thanh-sdks/go"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.GetPublicBusinessV1(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.GetPublicBusinessV1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPublicBusinessV1`: Business
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.GetPublicBusinessV1`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPublicBusinessV1Request struct via the builder pattern


### Return type

[**Business**](Business.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPublicMenuV1

> Menu GetPublicMenuV1(ctx).Language(language).Execute()

Read the published menu and prices as JSON



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/Moinsachsen1234/long-thanh-sdks/go"
)

func main() {
	language := "language_example" // string | Menu translation; omit for German. Repeated or unsupported query parameters return 400. (optional) (default to "de")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.GetPublicMenuV1(context.Background()).Language(language).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.GetPublicMenuV1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPublicMenuV1`: Menu
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.GetPublicMenuV1`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPublicMenuV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **string** | Menu translation; omit for German. Repeated or unsupported query parameters return 400. | [default to &quot;de&quot;]

### Return type

[**Menu**](Menu.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

