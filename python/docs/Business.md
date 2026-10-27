# Business


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**url** | **str** |  | 
**telephone** | **str** |  | 
**address** | [**BusinessAddress**](BusinessAddress.md) |  | 
**opening_hours** | [**BusinessOpeningHours**](BusinessOpeningHours.md) |  | 
**ordering** | [**BusinessOrdering**](BusinessOrdering.md) |  | 
**limitations** | **List[str]** |  | 

## Example

```python
from long_thanh_sdk.models.business import Business

# TODO update the JSON string below
json = "{}"
# create an instance of Business from a JSON string
business_instance = Business.from_json(json)
# print the JSON string representation of the object
print(Business.to_json())

# convert the object into a dict
business_dict = business_instance.to_dict()
# create an instance of Business from a dict
business_from_dict = Business.from_dict(business_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


