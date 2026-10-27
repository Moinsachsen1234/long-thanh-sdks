# MenuSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** |  | 
**items** | [**List[MenuItem]**](MenuItem.md) |  | 

## Example

```python
from long_thanh_sdk.models.menu_section import MenuSection

# TODO update the JSON string below
json = "{}"
# create an instance of MenuSection from a JSON string
menu_section_instance = MenuSection.from_json(json)
# print the JSON string representation of the object
print(MenuSection.to_json())

# convert the object into a dict
menu_section_dict = menu_section_instance.to_dict()
# create an instance of MenuSection from a dict
menu_section_from_dict = MenuSection.from_dict(menu_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


