
# Menu


## Properties

Name | Type
------------ | -------------
`version` | string
`name` | string
`language` | string
`currency` | string
`source` | string
`limitations` | Array&lt;string&gt;
`sections` | [Array&lt;MenuSection&gt;](MenuSection.md)

## Example

```typescript
import type { Menu } from '@swl-services/long-thanh-sdk'

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "name": null,
  "language": null,
  "currency": null,
  "source": null,
  "limitations": null,
  "sections": null,
} satisfies Menu

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Menu
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


