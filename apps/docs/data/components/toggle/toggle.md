---
title: React Toggle component
components: Toggle
---

# Toggle

<p class="description">Provides the behavior and accessibility implementation for a toggle component. A toggle is similar to a checkbox, but represents on/off values as opposed to selection.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Toggle} from '@comfortdelgro/react-compass-old'
```

or

```jsx
import Toggle from '@comfortdelgro/react-compass-old/toggle'
```

## Controlled

{{"demo": "ToggleControlled.tsx"}}

## UnControlled

{{"demo": "ToggleUnControlled.tsx"}}

## isDisabled

{{"demo": "ToggleIsDisabled.tsx"}}

## isReadOnly

{{"demo": "ToggleIsReadOnly.tsx"}}

## Sizes

{{"demo": "ToggleSizes.tsx"}}

## Custom Styling

{{"demo": "ToggleCustomStyling.tsx"}}

<!-- ## Toggle Server (Experimental)

{{"demo": "ToggleServer.tsx"}} -->

## Props

| Name            | Type                            | Default | Description                                                                             |
| :-------------- | :------------------------------ | :------ | :-------------------------------------------------------------------------------------- |
| defaultSelected | `boolean`                       | `false` | Whether the Toggle should be selected (uncontrolled).                                   |
| isSelected      | `boolean`                       | `false` | Whether the Toggle should be selected (controlled).                                     |
| onChange        | `(isSelected: boolean) => void` | -       | Handler that is called when the Toggle's selection state changes.                       |
| value           | `string`                        | -       | The value of the input element, used when submitting an HTML form. See MDN.             |
| name            | `string`                        | -       | The name of the input element, used when submitting an HTML form. See MDN.              |
| isDisabled      | `boolean`                       | `false` | Whether the input is disabled.                                                          |
| isReadOnly      | `boolean`                       | `false` | Whether the input can be selected but not changed by the user.                          |
| autoFocus       | `boolean`                       | `false` | Whether the element should receive focus on render.                                     |
| onFocus         | `(e: FocusEvent) => void`       | -       | Handler that is called when the element receives focus.                                 |
| onBlur          | `(e: FocusEvent) => void`       | -       | Handler that is called when the element loses focus.                                    |
| onFocusChange   | `(isFocused: boolean) => void`  | -       | Handler that is called when the element's focus status changes.                         |
| onKeyDown       | `(e: KeyboardEvent) => void`    | -       | Handler that is called when a key is pressed.                                           |
| onKeyUp         | `(e: KeyboardEvent) => void`    | -       | Handler that is called when a key is released.                                          |
| onFocus         | `(e: FocusEvent) => void`       | -       | Handler that is called when the element receives focus.                                 |
| css             | `CSS`                           | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
