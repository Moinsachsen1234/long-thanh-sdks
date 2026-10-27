# Business

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** |  | 
**Name** | **string** |  | 
**Description** | **string** |  | 
**Url** | **string** |  | 
**Telephone** | **string** |  | 
**Address** | [**BusinessAddress**](BusinessAddress.md) |  | 
**OpeningHours** | [**BusinessOpeningHours**](BusinessOpeningHours.md) |  | 
**Ordering** | [**BusinessOrdering**](BusinessOrdering.md) |  | 
**Limitations** | **[]string** |  | 

## Methods

### NewBusiness

`func NewBusiness(version string, name string, description string, url string, telephone string, address BusinessAddress, openingHours BusinessOpeningHours, ordering BusinessOrdering, limitations []string, ) *Business`

NewBusiness instantiates a new Business object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessWithDefaults

`func NewBusinessWithDefaults() *Business`

NewBusinessWithDefaults instantiates a new Business object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *Business) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Business) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Business) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetName

`func (o *Business) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Business) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Business) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Business) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Business) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Business) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetUrl

`func (o *Business) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *Business) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *Business) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetTelephone

`func (o *Business) GetTelephone() string`

GetTelephone returns the Telephone field if non-nil, zero value otherwise.

### GetTelephoneOk

`func (o *Business) GetTelephoneOk() (*string, bool)`

GetTelephoneOk returns a tuple with the Telephone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephone

`func (o *Business) SetTelephone(v string)`

SetTelephone sets Telephone field to given value.


### GetAddress

`func (o *Business) GetAddress() BusinessAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *Business) GetAddressOk() (*BusinessAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *Business) SetAddress(v BusinessAddress)`

SetAddress sets Address field to given value.


### GetOpeningHours

`func (o *Business) GetOpeningHours() BusinessOpeningHours`

GetOpeningHours returns the OpeningHours field if non-nil, zero value otherwise.

### GetOpeningHoursOk

`func (o *Business) GetOpeningHoursOk() (*BusinessOpeningHours, bool)`

GetOpeningHoursOk returns a tuple with the OpeningHours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpeningHours

`func (o *Business) SetOpeningHours(v BusinessOpeningHours)`

SetOpeningHours sets OpeningHours field to given value.


### GetOrdering

`func (o *Business) GetOrdering() BusinessOrdering`

GetOrdering returns the Ordering field if non-nil, zero value otherwise.

### GetOrderingOk

`func (o *Business) GetOrderingOk() (*BusinessOrdering, bool)`

GetOrderingOk returns a tuple with the Ordering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrdering

`func (o *Business) SetOrdering(v BusinessOrdering)`

SetOrdering sets Ordering field to given value.


### GetLimitations

`func (o *Business) GetLimitations() []string`

GetLimitations returns the Limitations field if non-nil, zero value otherwise.

### GetLimitationsOk

`func (o *Business) GetLimitationsOk() (*[]string, bool)`

GetLimitationsOk returns a tuple with the Limitations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimitations

`func (o *Business) SetLimitations(v []string)`

SetLimitations sets Limitations field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


