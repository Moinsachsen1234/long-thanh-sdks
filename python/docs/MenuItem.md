# MenuItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**number** | **str** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**price** | **str** | Decimal EUR amount including VAT. Extras may cost more. | 
**vegetarian_marked** | **bool** | True only when labelled vegetarian on the published menu; false means no label, not a dietary assessment. Never infer allergen safety or vegan suitability. | 

## Example

```python
from long_thanh_sdk.models.menu_item import MenuItem

# TODO update the JSON string below
json = "{}"
# create an instance of MenuItem from a JSON string
menu_item_instance = MenuItem.from_json(json)
# print the JSON string representation of the object
print(MenuItem.to_json())

# convert the object into a dict
menu_item_dict = menu_item_instance.to_dict()
# create an instance of MenuItem from a dict
menu_item_from_dict = MenuItem.from_dict(menu_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


