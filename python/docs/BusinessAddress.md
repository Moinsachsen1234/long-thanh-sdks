# BusinessAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street_address** | **str** |  | 
**postal_code** | **str** |  | 
**address_locality** | **str** |  | 
**address_country** | **str** |  | 

## Example

```python
from long_thanh_sdk.models.business_address import BusinessAddress

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessAddress from a JSON string
business_address_instance = BusinessAddress.from_json(json)
# print the JSON string representation of the object
print(BusinessAddress.to_json())

# convert the object into a dict
business_address_dict = business_address_instance.to_dict()
# create an instance of BusinessAddress from a dict
business_address_from_dict = BusinessAddress.from_dict(business_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


