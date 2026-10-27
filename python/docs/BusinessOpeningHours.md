# BusinessOpeningHours


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **List[str]** |  | 
**opens** | **str** |  | 
**closes** | **str** |  | 
**closed** | **List[str]** |  | 
**time_zone** | **str** |  | 
**holiday_hours** | **str** |  | 

## Example

```python
from long_thanh_sdk.models.business_opening_hours import BusinessOpeningHours

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessOpeningHours from a JSON string
business_opening_hours_instance = BusinessOpeningHours.from_json(json)
# print the JSON string representation of the object
print(BusinessOpeningHours.to_json())

# convert the object into a dict
business_opening_hours_dict = business_opening_hours_instance.to_dict()
# create an instance of BusinessOpeningHours from a dict
business_opening_hours_from_dict = BusinessOpeningHours.from_dict(business_opening_hours_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


