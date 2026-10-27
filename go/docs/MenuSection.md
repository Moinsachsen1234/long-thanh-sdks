# MenuSection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Name** | **string** |  | 
**Items** | [**[]MenuItem**](MenuItem.md) |  | 

## Methods

### NewMenuSection

`func NewMenuSection(id string, name string, items []MenuItem, ) *MenuSection`

NewMenuSection instantiates a new MenuSection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMenuSectionWithDefaults

`func NewMenuSectionWithDefaults() *MenuSection`

NewMenuSectionWithDefaults instantiates a new MenuSection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MenuSection) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MenuSection) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MenuSection) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *MenuSection) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MenuSection) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MenuSection) SetName(v string)`

SetName sets Name field to given value.


### GetItems

`func (o *MenuSection) GetItems() []MenuItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *MenuSection) GetItemsOk() (*[]MenuItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *MenuSection) SetItems(v []MenuItem)`

SetItems sets Items field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


