---
title: React Dropdown Textfield component
components: DropdownTextfield
---

# Dropdown Textfield

<p class="description">A drop-down textfield is the component including two items, the left dropdown for showing selective information and the right textfield.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {DropdownTextfield} from '@comfortdelgro/react-compass'
```

## Example

### Basic

{{"demo": "DropdownTextfield.tsx"}}

### Controlled State

{{"demo": "Controlled.tsx"}}

## Props

### `<DropdownTextfield/>`

| Name                   | Type                                                 | Default | Description                                     |
| :--------------------- | :--------------------------------------------------- | :------ | :---------------------------------------------- |
| `textfieldPlaceholder` | `string` \| `null`                                   | `null`  | `Placeholder of the text field.`                |
| `dropdownPlaceholder`  | `string` \| `null`                                   | `null`  | `Placeholder of the dropdown.`                  |
| `label`                | `string` \| `null`                                   | `null`  | `Label of the dropdown text field.`             |
| `isErrored`            | `true` \| `false`                                    | `false` | `Throw error when input value is wrong.`        |
| `isDisabled`           | `false`\| `true`                                     | `false` | `Disable the text field when true.`             |
| `isErrored`            | `false`\| `true`                                     | `false` | `Disable the text field when true.`             |
| `errorMessage`         | `string`                                             |         | `Error message.`                                |
| `isRequired`           | `false`\| `true`                                     | `false` | `Whether the dropdown textfield is required.`   |
| `isReadOnly`           | `false`\| `true`                                     | `false` | `Readonly mode for the dropdown and textfield.` |
| `defaultSelectedKey`   | `string`                                             |         | `Default selected key.`                         |
| `defaultInputValue`    | `string`\| `number`                                  |         | `Default input value.`                          |
| `inputType`            | `text`\| `numeric` \| `text`\| `email` \| `password` |         | `Type of the input.`                            |
| `options`              | `DropdownOptions[]`                                  |         | `List of options passed to the dropdown.`       |
| `maxLength`            | `number`                                             | `false` | `Textfield's max length.`                       |
| `minLength`            | `number`                                             | `false` | `Textfield's min length.`                       |
| `css `                 | `CSS`                                                | —       |                                                 |
