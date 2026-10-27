# BusinessOrdering

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Channel** | **string** |  | 
**Steps** | **[]string** |  | 
**OnlineCheckout** | **bool** |  | 
**AgentCanPlaceOrders** | **bool** |  | 
**Delivery** | **string** |  | 

## Methods

### NewBusinessOrdering

`func NewBusinessOrdering(channel string, steps []string, onlineCheckout bool, agentCanPlaceOrders bool, delivery string, ) *BusinessOrdering`

NewBusinessOrdering instantiates a new BusinessOrdering object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessOrderingWithDefaults

`func NewBusinessOrderingWithDefaults() *BusinessOrdering`

NewBusinessOrderingWithDefaults instantiates a new BusinessOrdering object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannel

`func (o *BusinessOrdering) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *BusinessOrdering) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *BusinessOrdering) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetSteps

`func (o *BusinessOrdering) GetSteps() []string`

GetSteps returns the Steps field if non-nil, zero value otherwise.

### GetStepsOk

`func (o *BusinessOrdering) GetStepsOk() (*[]string, bool)`

GetStepsOk returns a tuple with the Steps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSteps

`func (o *BusinessOrdering) SetSteps(v []string)`

SetSteps sets Steps field to given value.


### GetOnlineCheckout

`func (o *BusinessOrdering) GetOnlineCheckout() bool`

GetOnlineCheckout returns the OnlineCheckout field if non-nil, zero value otherwise.

### GetOnlineCheckoutOk

`func (o *BusinessOrdering) GetOnlineCheckoutOk() (*bool, bool)`

GetOnlineCheckoutOk returns a tuple with the OnlineCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnlineCheckout

`func (o *BusinessOrdering) SetOnlineCheckout(v bool)`

SetOnlineCheckout sets OnlineCheckout field to given value.


### GetAgentCanPlaceOrders

`func (o *BusinessOrdering) GetAgentCanPlaceOrders() bool`

GetAgentCanPlaceOrders returns the AgentCanPlaceOrders field if non-nil, zero value otherwise.

### GetAgentCanPlaceOrdersOk

`func (o *BusinessOrdering) GetAgentCanPlaceOrdersOk() (*bool, bool)`

GetAgentCanPlaceOrdersOk returns a tuple with the AgentCanPlaceOrders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentCanPlaceOrders

`func (o *BusinessOrdering) SetAgentCanPlaceOrders(v bool)`

SetAgentCanPlaceOrders sets AgentCanPlaceOrders field to given value.


### GetDelivery

`func (o *BusinessOrdering) GetDelivery() string`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *BusinessOrdering) GetDeliveryOk() (*string, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *BusinessOrdering) SetDelivery(v string)`

SetDelivery sets Delivery field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


