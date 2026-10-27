
# BusinessOrdering


## Properties

Name | Type
------------ | -------------
`channel` | string
`steps` | Array&lt;string&gt;
`onlineCheckout` | boolean
`agentCanPlaceOrders` | boolean
`delivery` | string

## Example

```typescript
import type { BusinessOrdering } from '@swlservices/long-thanh-sdk'

// TODO: Update the object below with actual values
const example = {
  "channel": null,
  "steps": null,
  "onlineCheckout": null,
  "agentCanPlaceOrders": null,
  "delivery": null,
} satisfies BusinessOrdering

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessOrdering
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


