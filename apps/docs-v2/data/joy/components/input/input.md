---
productId: joy-ui
title: React Input component
components: FormControl, FormHelperText, FormLabel, Input
unstyled: /base-ui/react-input/
---

# Input

<p class="description">The Input component facilitates the entry of text data from the user.</p>

{{"component": "modules/components/ComponentLinkHeader.js", "design": false}}

## Introduction

The Input component enhances the functionality of the native HTML `<input>` tag by providing expanded customization options and accessibility features.

{{"demo": "InputUsage.js", "hideToolbar": true, "bg": "gradient"}}

## Basics

```jsx
import Input from '@mui/joy/Input';
```

The Input component provides a customizable input field that can be used to collect user information, such as name, email, password, or other types of data.

{{"demo": "BasicInput.js"}}

## Customization

### Variants

The Input component supports Joy UI's four [global variants](/joy-ui/main-features/global-variants/): `solid` (default), `soft`, `outlined`, and `plain`.

{{"demo": "InputVariants.js"}}

:::info
To learn how to add your own variants, check out [Themed components—Extend variants](/joy-ui/customization/themed-components/#extend-variants).
Note that you lose the global variants when you add custom variants.
:::

### Sizes

The input component comes in three sizes: `sm`, `md` (default), and `lg`:

{{"demo": "InputSizes.js"}}

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](/joy-ui/customization/themed-components/#extend-sizes).
:::

### Colors

Every palette included in the theme is available via the `color` prop.

{{"demo": "InputColors.js"}}

### Form props

You can add standard form attributes such as `required` and `disabled` to the Input component:

{{"demo": "InputFormProps.js"}}

### Focused ring

Provide these CSS variables to `sx` prop to control the focused ring appearance:

- `--Input-focusedInset`: the focused ring's **position**, either inside(`inset`) or outside(`var(--any, )`) of the Input.
- `--Input-focusedThickness`: the **size** of the focused ring.
- `--Input-focusedHighlight`: the **color** of the focused ring.

{{"demo": "FocusedRingInput.js"}}

:::success
To get full control of the focused ring, customize the `box-shadow` of the `::before` pseudo element directly

```js
<Input sx={{ '&:focus-within::before': { boxShadow: '...your custom value' } }} />
```

:::

#### Debugging the focus ring

To display the Input's focus ring by simulating user's focus, inspect the Input element and toggle the [pseudostate panel](https://developer.chrome.com/docs/devtools/css/#pseudostates).

- If you inspect the Input's root element, with `.MuiInput-root` class, you have to toggle on the `:focus-within` state.
- If you inspect the `<input>` element, you can toggle with either `:focus` or `:focus-within` states.

### Triggering the focus ring

To trigger the focus ring programmatically, set the CSS variable `--Input-focused: 1`.

{{"demo": "TriggerFocusInput.js"}}

:::info
💡 The focus ring still appear on focus even though you set `--Input-focused: 0`.
:::

### Validation

Use the `error` prop to toggle the error state:

{{"demo": "InputValidation.js"}}

:::info
Using the `color` prop with `danger` as the value gives you the same result:

```js
<Input color="danger" />
```

:::

### Decorators

The `startDecorator` and `endDecorator` props can be used to add supporting icons or elements to the input.
With inputs, decorators are typically located at the top and/or bottom of the input field.

{{"demo": "InputDecorators.js"}}

### Inner HTML input

If you need to pass props to the inner HTML `<input>`, use `slotProps={{ input: { ...props } }}`.
These props may include HTML attributes such as `ref`, `min`, `max`, and `autocomplete`.

{{"demo": "InputSlotProps.js"}}

## Common examples

### Focus outline

This example shows how to replace the default focus ring (using `::before`) with CSS `outline`.

{{"demo": "FocusOutlineInput.js"}}

### Floating label

To create a floating label input, a custom component (combination of `<input>` and `<label>`) is required to replace the default input slot.

{{"demo": "FloatingLabelInput.js"}}

### Underline input

{{"demo": "UnderlineInput.js"}}

### Newsletter Subscription

{{"demo": "InputSubscription.js"}}

### Password meter

{{"demo": "PasswordMeterInput.js"}}

## CSS variable playground

Play around with the CSS variables available to the Input component to see how the design changes.
You can use these to customize the component with both the `sx` prop and the theme.

{{"demo": "InputVariables.js", "hideToolbar": true}}

## Accessibility

All inputs should have a descriptive label linked to help users understand its purpose.

The Form Control component automatically generates a unique ID that links the Input with the Form Label and Form Helper Text components:

{{"demo": "InputField.js"}}

Alternatively, you can do this manually by targeting the input slot—see [inner HTML input](#inner-html-input) for details:

```jsx
<label htmlFor="unique-id">Label</label>
<Input
  slotProps={{
    input: {
      id: 'unique-id',
    }
  }}
/>
```

## Anatomy

The Input component is composed of a root `<div>` with an `<input>` nested inside:

```html
<div class="MuiInput-root">
  <input class="MuiInput-input" />
</div>
```
