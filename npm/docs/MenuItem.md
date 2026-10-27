
# MenuItem


## Properties

Name | Type
------------ | -------------
`id` | string
`number` | string
`name` | string
`description` | string
`price` | string
`vegetarianMarked` | boolean

## Example

```typescript
import type { MenuItem } from '@swlservices/long-thanh-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "number": null,
  "name": null,
  "description": null,
  "price": null,
  "vegetarianMarked": null,
} satisfies MenuItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MenuItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


