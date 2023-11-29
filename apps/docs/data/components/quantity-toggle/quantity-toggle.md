---
title: React Quantity Toggle component
components: QuantityToggle
---

# Quantity Toggle

<p class="description">Quantity Toggle fields allow users to enter a number, and increment or decrement the value using stepper buttons.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {QuantityToggle} from '@comfortdelgro/react-compass'
```


## Support

Support for internationalized number formatting and parsing including decimals, percentages, currency values, and units

Automatically detects the numbering system used and supports parsing numbers not in the default numbering system for the locale

Support for multiple currency formats including symbol, code, and name in standard or accounting notation

Validates keyboard entry as the user types so that only valid numeric input according to the locale and numbering system is accepted

Handles composed input from input method editors, e.g. Pinyin

Automatically selects an appropriate software keyboard for mobile according to the current platform and allowed values

Supports rounding to a configurable number of fraction digits

Support for clamping the value between a configurable minimum and maximum, and snapping to a step value

Support for stepper buttons and arrow keys to increment and decrement the value according to the step value

Supports pressing and holding the stepper buttons to continuously increment or decrement

Handles floating point rounding errors when incrementing, decrementing, and snapping to step

Supports using the scroll wheel to increment and decrement the value

Exposed to assistive technology as a text field with a custom localized role description using ARIA

Follows the spinbutton ARIA pattern

Works around bugs in VoiceOver with the spinbutton role

## Example

### Controlled

{{"demo": "QuantityToggleControlled.tsx"}}

### Custom Quantity Toggle

{{"demo": "QuantityToggleUnControlled.tsx"}}

### Unit Quantity Toggle

{{"demo": "QuantityToggleUnit.tsx"}}

## Props

| Name            | Type                                      | Default | Description                                                                                                                                               |
| :-------------- | :---------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| step            | `number`                                  | —       | The amount that the input value changes with each increment or decrement "tick".                                                                          |
| label           | `ReactNode`                               | —       | The content to display as the label.                                                                                                                      |
| value           | `number`                                  | —       | The current value (controlled).                                                                                                                           |
| minValue        | `number`                                  | —       | The smallest value allowed for the input.                                                                                                                 |
| maxValue        | `number`                                  | —       | The largest value allowed for the input.                                                                                                                  |
| autoFocus       | `boolean`                                 | —       | Whether the element should receive focus on render.                                                                                                       |
| isErrored       | `boolean`                                 | false   | Whether the input is isErrored.                                                                                                                           |
| isDisabled      | `boolean`                                 | false   | Whether the input is disabled.                                                                                                                            |
| isReadOnly      | `boolean`                                 | false   | Whether the input can be selected but not changed by the user.                                                                                            |
| isRequired      | `boolean`                                 | false   | Whether user input is required on the input before form submission. Often paired with the necessityIndicator prop to add a visual indicator to the input. |
| helperText      | `string`                                  | —       | The helper text below.                                                                                                                                    |
| placeholder     | `string`                                  | —       | Temporary text that occupies the text input when it is empty.                                                                                             |
| defaultValue    | `number`                                  | —       | The default value (uncontrolled).                                                                                                                         |
| formatOptions   | `Intl.FormatOptions`                      | —       | Formatting options for the value displayed in the number field. This also affects what characters are allowed to be typed by the user.                    |
| disabledScroll  | `boolean`                                 | true    | Whether the scroll to change value is disabled.                                                                                                           |
| validationState | `ValidationState`                         | —       | Whether the input should display its "valid" or "invalid" visual styling.                                                                                 |
| onBlur          | `(e: FocusEvent) => void`                 | —       | Handler that is called when the element loses focus.                                                                                                      |
| onFocus         | `(e: FocusEvent) => void`                 | —       | Handler that is called when the element receives focus.                                                                                                   |
| onKeyUp         | `(e: FocusEvent) => void`                 | —       | Handler that is called when a key is released.                                                                                                            |
| onChange        | `(value: T) => void`                      | —       | Handler that is called when the value changes.                                                                                                            |
| onKeyDown       | `(e: FocusEvent) => void`                 | —       | Handler that is called when a key is pressed.                                                                                                             |
| onFocusChange   | `(isFocused: boolean) => void`            | —       | Handler that is called when the element's focus status changes.                                                                                           |
| onUpdate        | `(textVal: T, numberVal: number) => void` | —       | Handler that is called when the value changes, returned text value and number value                                                                       |
| css             | `CSS`                                     | —       | The system prop that allows defining system overrides as well as additional CSS styles.                                                                   |
