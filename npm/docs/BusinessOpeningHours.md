
# BusinessOpeningHours


## Properties

Name | Type
------------ | -------------
`days` | Array&lt;string&gt;
`opens` | string
`closes` | string
`closed` | Array&lt;string&gt;
`timeZone` | string
`holidayHours` | string

## Example

```typescript
import type { BusinessOpeningHours } from '@swlservices/long-thanh-sdk'

// TODO: Update the object below with actual values
const example = {
  "days": null,
  "opens": null,
  "closes": null,
  "closed": null,
  "timeZone": null,
  "holidayHours": null,
} satisfies BusinessOpeningHours

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessOpeningHours
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


