
# BusinessAddress


## Properties

Name | Type
------------ | -------------
`streetAddress` | string
`postalCode` | string
`addressLocality` | string
`addressCountry` | string

## Example

```typescript
import type { BusinessAddress } from '@swlservices/long-thanh-sdk'

// TODO: Update the object below with actual values
const example = {
  "streetAddress": null,
  "postalCode": null,
  "addressLocality": null,
  "addressCountry": null,
} satisfies BusinessAddress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessAddress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


