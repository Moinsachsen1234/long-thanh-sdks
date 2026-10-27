# LongThanhSdk::MenuItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **number** | **String** |  |  |
| **name** | **String** |  |  |
| **description** | **String** |  |  |
| **price** | **String** | Decimal EUR amount including VAT. Extras may cost more. |  |
| **vegetarian_marked** | **Boolean** | True only when labelled vegetarian on the published menu; false means no label, not a dietary assessment. Never infer allergen safety or vegan suitability. |  |

## Example

```ruby
require 'long_thanh_sdk'

instance = LongThanhSdk::MenuItem.new(
  id: null,
  number: null,
  name: null,
  description: null,
  price: null,
  vegetarian_marked: null
)
```

