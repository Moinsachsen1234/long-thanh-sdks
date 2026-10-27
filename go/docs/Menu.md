# Menu

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** |  | 
**Name** | **string** |  | 
**Language** | **string** |  | 
**Currency** | **string** |  | 
**Source** | **string** |  | 
**Limitations** | **[]string** |  | 
**Sections** | [**[]MenuSection**](MenuSection.md) |  | 

## Methods

### NewMenu

`func NewMenu(version string, name string, language string, currency string, source string, limitations []string, sections []MenuSection, ) *Menu`

NewMenu instantiates a new Menu object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMenuWithDefaults

`func NewMenuWithDefaults() *Menu`

NewMenuWithDefaults instantiates a new Menu object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *Menu) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Menu) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Menu) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetName

`func (o *Menu) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Menu) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Menu) SetName(v string)`

SetName sets Name field to given value.


### GetLanguage

`func (o *Menu) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *Menu) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *Menu) SetLanguage(v string)`

SetLanguage sets Language field to given value.


### GetCurrency

`func (o *Menu) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *Menu) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *Menu) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetSource

`func (o *Menu) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Menu) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Menu) SetSource(v string)`

SetSource sets Source field to given value.


### GetLimitations

`func (o *Menu) GetLimitations() []string`

GetLimitations returns the Limitations field if non-nil, zero value otherwise.

### GetLimitationsOk

`func (o *Menu) GetLimitationsOk() (*[]string, bool)`

GetLimitationsOk returns a tuple with the Limitations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimitations

`func (o *Menu) SetLimitations(v []string)`

SetLimitations sets Limitations field to given value.


### GetSections

`func (o *Menu) GetSections() []MenuSection`

GetSections returns the Sections field if non-nil, zero value otherwise.

### GetSectionsOk

`func (o *Menu) GetSectionsOk() (*[]MenuSection, bool)`

GetSectionsOk returns a tuple with the Sections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSections

`func (o *Menu) SetSections(v []MenuSection)`

SetSections sets Sections field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


