---
title: React Dropdown component
components: Dropdown
---

# Dropdown

<p class="description">Dropdown components are used for collecting user provided information from a list of options.</p>

{{"component": "components/ComponentLinkHeader.tsx"}}

```jsx
import {Dropdown} from '@comfortdelgro/react-compass'
```

## Example

### Select Controlled:

We provide 2 type of dropdown that can be used to select: `Dropdown.Select` and `Dropdown.ComboBox`

### Controlled

{{"demo": "DropdownControlled.tsx"}}

### UnControlled

{{"demo": "UnControlled.tsx"}}

### Error

{{"demo": "Error.tsx"}}

### Allows Custom Value:

{{"demo": "CustomValue.tsx"}}

### With Section

{{"demo": "DropdownSection.tsx"}}

### With Header

{{"demo": "DropdownHeader.tsx"}}

### With Icon

{{"demo": "DropdownIcon.tsx"}}

### Disable Clearable

{{"demo": "DisableClearable.tsx"}}

### Loading

{{"demo": "Loading.tsx"}}

## Props:

### `<Dropdown.Select/>` | `<Dropdown.ComboBox/>` :

| Name             | Type                             | Default | Description                                                                                                                                               |
| :--------------- | :------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| icon             | `ReactNode`                      | -       | Icon display in right side                                                                                                                                |
| name             | `string`                         | —       | The name of the input element, used when submitting an HTML form. See MDN.                                                                                |
| label            | `ReactNode`                      | —       | The content to display as the label.                                                                                                                      |
| isOpen           | `boolean`                        | —       | Open state of the menu.                                                                                                                                   |
| isLoading        | `boolean`                        | 'false' | Loading effect when list of items is loading by API                                                                                                       |
| isErrored        | `boolean`                        | 'false' | Error state when dropdown is isErrored                                                                                                                    |
| isDisabled       | `boolean`                        | —       | Whether the input is disabled.                                                                                                                            |
| isReadOnly       | `boolean`                        | —       | Whether the input can be selected but not changed by the user.                                                                                            |
| isRequired       | `boolean`                        | —       | Whether user input is required on the input before form submission. Often paired with the necessityIndicator prop to add a visual indicator to the input. |
| value            | `number \| string`               | `''`    | The currently selected value in the collection (controlled).                                                                                              |
| description      | `string`                         | —       | A description for the field. Provides a hint such as specific requirements for what to choose.                                                            |
| placeholder      | `string`                         | —       | Temporary text that occupies the text input when it is empty.                                                                                             |
| errorMessage     | `string`                         | -       | Error message for dropdown                                                                                                                                |
| shouldDeselect   | `boolean`                        | `false` | When it true, active item can be remove by click one more time                                                                                            |
| disabledValues   | `Array<number \| string>`        | —       | The item values that are disabled. These items cannot be selected, focused, or otherwise interacted with.                                                 |
| numberOfRows     | `number`                         | —       | Number of items displayed in Popover.                                                                                                                     |
| defaultValue     | `number \| string`               | —       | The initial selected value in the collection (uncontrolled).                                                                                              |
| onLoadMore       | `() => void`                     | —       | Handler when user scrolls to the end.                                                                                                                     |
| onValueChange    | `(key: string \| number) => any` | —       | Handler that is called when the selection changes.                                                                                                        |
| onOpenChange     | `(isOpen: boolean) => void`      | —       | Method that is called when the open state of the menu changes. Returns the new open state and the action that caused the opening of the menu.             |
| isCloseOnSelect  | `boolean`                        | `false` | Prevent closing popup after selecting item.                                                                                                               |
| isLoadingMore    | `boolean`                        | `false` | Prevent to fire function `onLoadMore`.                                                                                                                    |
| popoverCSS       | `CSS`                            | —       | The system prop that allows defining system overrides as well as additional CSS styles of Popover.                                                        |
| disableClearable | `boolean`                        | `false` | If `true`, the input can't be cleared.                                                                                                                    |
| isFloatingPortal | `boolean`                        | `true`  | If true, it would render the popover outside of the current React Tree, just like createPortal from React                                                 |

### `<Dropdown.Item/>` :

| Name       | Type                           | Default | Description                                   |
| :--------- | :----------------------------- | :------ | :-------------------------------------------- |
| value      | `number \| string`             | —       | The value of the dropdown.                    |
| type       | `icon` \| `color`              | —       | The type of the dropdown Item                 |
| children   | `ReactNode`                    | —       | The content of the dropdown Item              |
| leftIcon   | `ReactNode`                    | -       | Left icon of the dropdown Item                |
| rightIcon  | `ReactNode`                    | -       | Right icon of the dropdown Item               |
| rightColor | `string`                       | -       | Right color of the dropdown Item              |
| checkmark  | `none` \| `checkbox` \| `tick` | -       | Variant for the selected                      |
| textValue  | `ReactNode`                    | -       | Custom value to display when item is selected |

### `<Dropdown.Section/>` :

| Name        | Type                     | Default | Description                       |
| :---------- | :----------------------- | :------ | :-------------------------------- |
| title       | `ReactNode`              | —       | The title of the section.         |
| children    | `ReactNode`              | —       | The content of the section        |
| isClickable | `boolean`                | false   | Whether the section is clickable. |
| isChecked   | `boolean`                | false   | Whether the section is selected.  |
| onClick     | `Function`               | —       | Fire click to the section.        |
| checkmark   | `'checkbox'` \| `'tick'` | -       | Variant for the selected          |
