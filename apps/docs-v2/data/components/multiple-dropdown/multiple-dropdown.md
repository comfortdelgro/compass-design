---
title: React Multiple Dropdown component
components: Multiple Dropdown
---

# Error

<p class="description">Provides the behavior and accessibility implementation for a listbox component. A listbox displays a list of options and allows a user to select one or more of them.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Dropdown} from '@comfortdelgro/react-compass'
```

or

```jsx
import Dropdown from '@comfortdelgro/react-compass/dropdown'
```

## Controlled

{{"demo": "MultipleDropdownControlled.tsx"}}

## Controlled

{{"demo": "MultipleDropdownUnControlled.tsx"}}

## isErrored

{{"demo": "MultipleDropdownIsErrored.tsx"}}


## Errored Values

{{"demo": "MultipleDropdownErroredValues.tsx"}}


## Custom Display Values

{{"demo": "MultipleDropdownCustomDisplayValue.tsx"}}


## With Header

{{"demo": "MultipleDropdownWithHeader.tsx"}}

## Loading

{{"demo": "MultipleDropdownLoading.tsx"}}

## With Icon

{{"demo": "MultipleDropdownWithIcon.tsx"}}

## With Section

{{"demo": "MultipleDropdownWithSection.tsx"}}


## Custom styling for popover

{{"demo": "MultipleDropdownCustomPopoverStyling.tsx"}}


### Props:

#### `<MultipleDropdown/>` :

| Name               | Type                                    | Default | Description                                                                                                                                               |
| :----------------- | :-------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| icon               | `ReactNode`                             | -       | Icon display in right side                                                                                                                                |
| name               | `string`                                | —       | The name of the input element, used when submitting an HTML form. See MDN.                                                                                |
| label              | `ReactNode`                             | —       | The content to display as the label.                                                                                                                      |
| customDisplayValue | `ReactNode`                             | —       | Replace the chips with your own message.                                                                                                                  |
| isOpen             | `boolean`                               | —       | Open state of the menu.                                                                                                                                   |
| isLoading          | `boolean`                               | 'false' | Loading effect when list of items is loading by API                                                                                                       |
| isErrored          | `boolean`                               | 'false' | Error state when dropdown is isErrored                                                                                                                    |
| isDisabled         | `boolean`                               | —       | Whether the input is disabled.                                                                                                                            |
| isReadOnly         | `boolean`                               | —       | Whether the input can be selected but not changed by the user.                                                                                            |
| isRequired         | `boolean`                               | —       | Whether user input is required on the input before form submission. Often paired with the necessityIndicator prop to add a visual indicator to the input. |
| values             | `Key[]`                                 | `[]`    | The currently selected values in the collection (controlled).                                                                                             |
| description        | `string`                                | —       | A description for the field. Provides a hint such as specific requirements for what to choose.                                                            |
| placeholder        | `string`                                | —       | Temporary text that occupies the text input when it is empty.                                                                                             |
| errorMessage       | `string`                                | -       | Error message for dropdown                                                                                                                                |
| disabledValues     | `Key[]`                                 | —       | The item values that are disabled. These items cannot be selected, focused, or otherwise interacted with.                                                 |
| numberOfRows       | `number`                                | —       | Number of items displayed in Popover.                                                                                                                     |
| defaultValues      | `Key[]`                                 | —       | The initial selected value in the collection (uncontrolled).                                                                                              |
| onLoadMore         | `() => void`                            | —       | Handler when user scrolls to the end.                                                                                                                     |
| onValuesChange     | `(key: Array<string \| number>) => any` | —       | Handler that is called when the selection changes.                                                                                                        |
| onOpenChange       | `(isOpen: boolean) => void`             | —       | Method that is called when the open state of the menu changes. Returns the new open state and the action that caused the opening of the menu.             |
| isLoadingMore      | `boolean`                               | 'false' | Prevent to fire function `onLoadMore`.                                                                                                                    |
| popoverCSS         | `CSS`                                   | —       | The system prop that allows defining system overrides as well as additional CSS styles of Popover.                                                        |

#### `<MultipleDropdown.Item/>` :

| Name      | Type                           | Default | Description                      |
| :-------- | :----------------------------- | :------ | :------------------------------- |
| value     | `Key`                          | —       | The value of the dropdown.       |
| icon      | `icon` \| `color`              | —       | The content of the dropdown Item |
| title     | `ReactNode`                    | —       | The title of the dropdown.       |
| children  | `ReactNode`                    | —       | The content of the dropdown Item |
| checkmark | `none` \| `checkbox` \| `tick` | -       | Variant for the selected         |

---

#### `<MultipleDropdown.Section/>` :

| Name        | Type                 | Default | Description                           |
| :---------- | :------------------- | :------ | :------------------------------------ |
| title       | `ReactNode`          | —       | The title of the section.             |
| children    | `ReactNode`          | —       | The content of the section            |
| id          | `string`             | —       | The id to handle click to the section |
| isClickable | `boolean`            | false   | Whether the section is clickable.     |
| isChecked   | `boolean`            | false   | Whether the section is selected.      |
| onClick     | `Function`           | —       | Fire click to the section.            |
| checkmark   | `checkbox` \| `tick` | -       | Variant for the selected              |
