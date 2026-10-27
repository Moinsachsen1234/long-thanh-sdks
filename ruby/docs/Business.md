# LongThanhSdk::Business

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **version** | **String** |  |  |
| **name** | **String** |  |  |
| **description** | **String** |  |  |
| **url** | **String** |  |  |
| **telephone** | **String** |  |  |
| **address** | [**BusinessAddress**](BusinessAddress.md) |  |  |
| **opening_hours** | [**BusinessOpeningHours**](BusinessOpeningHours.md) |  |  |
| **ordering** | [**BusinessOrdering**](BusinessOrdering.md) |  |  |
| **limitations** | **Array&lt;String&gt;** |  |  |

## Example

```ruby
require 'long_thanh_sdk'

instance = LongThanhSdk::Business.new(
  version: null,
  name: null,
  description: null,
  url: null,
  telephone: null,
  address: null,
  opening_hours: null,
  ordering: null,
  limitations: null
)
```

