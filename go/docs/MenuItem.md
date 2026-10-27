# MenuItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Number** | **string** |  | 
**Name** | **string** |  | 
**Description** | **string** |  | 
**Price** | **string** | Decimal EUR amount including VAT. Extras may cost more. | 
**VegetarianMarked** | **bool** | True only when labelled vegetarian on the published menu; false means no label, not a dietary assessment. Never infer allergen safety or vegan suitability. | 

## Methods

### NewMenuItem

`func NewMenuItem(id string, number string, name string, description string, price string, vegetarianMarked bool, ) *MenuItem`

NewMenuItem instantiates a new MenuItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMenuItemWithDefaults

`func NewMenuItemWithDefaults() *MenuItem`

NewMenuItemWithDefaults instantiates a new MenuItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MenuItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MenuItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MenuItem) SetId(v string)`

SetId sets Id field to given value.


### GetNumber

`func (o *MenuItem) GetNumber() string`

GetNumber returns the Number field if non-nil, zero value otherwise.

### GetNumberOk

`func (o *MenuItem) GetNumberOk() (*string, bool)`

GetNumberOk returns a tuple with the Number field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumber

`func (o *MenuItem) SetNumber(v string)`

SetNumber sets Number field to given value.


### GetName

`func (o *MenuItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MenuItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MenuItem) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *MenuItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MenuItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MenuItem) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetPrice

`func (o *MenuItem) GetPrice() string`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *MenuItem) GetPriceOk() (*string, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *MenuItem) SetPrice(v string)`

SetPrice sets Price field to given value.


### GetVegetarianMarked

`func (o *MenuItem) GetVegetarianMarked() bool`

GetVegetarianMarked returns the VegetarianMarked field if non-nil, zero value otherwise.

### GetVegetarianMarkedOk

`func (o *MenuItem) GetVegetarianMarkedOk() (*bool, bool)`

GetVegetarianMarkedOk returns a tuple with the VegetarianMarked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVegetarianMarked

`func (o *MenuItem) SetVegetarianMarked(v bool)`

SetVegetarianMarked sets VegetarianMarked field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


