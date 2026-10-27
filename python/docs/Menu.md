# Menu


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** |  | 
**name** | **str** |  | 
**language** | **str** |  | 
**currency** | **str** |  | 
**source** | **str** |  | 
**limitations** | **List[str]** |  | 
**sections** | [**List[MenuSection]**](MenuSection.md) |  | 

## Example

```python
from long_thanh_sdk.models.menu import Menu

# TODO update the JSON string below
json = "{}"
# create an instance of Menu from a JSON string
menu_instance = Menu.from_json(json)
# print the JSON string representation of the object
print(Menu.to_json())

# convert the object into a dict
menu_dict = menu_instance.to_dict()
# create an instance of Menu from a dict
menu_from_dict = Menu.from_dict(menu_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


