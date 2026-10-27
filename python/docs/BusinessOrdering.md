# BusinessOrdering


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | 
**steps** | **List[str]** |  | 
**online_checkout** | **bool** |  | 
**agent_can_place_orders** | **bool** |  | 
**delivery** | **str** |  | 

## Example

```python
from long_thanh_sdk.models.business_ordering import BusinessOrdering

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessOrdering from a JSON string
business_ordering_instance = BusinessOrdering.from_json(json)
# print the JSON string representation of the object
print(BusinessOrdering.to_json())

# convert the object into a dict
business_ordering_dict = business_ordering_instance.to_dict()
# create an instance of BusinessOrdering from a dict
business_ordering_from_dict = BusinessOrdering.from_dict(business_ordering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


