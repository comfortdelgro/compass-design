# Button

<p class="description">Buttons allow users to take actions, and make choices, with a single tap.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {Button} from '@comfortdelgro/react-compass'
```

or

```js
import Button from '@comfortdelgro/react-compass/button'
```

## Button Sizes

{{"demo": "ButtonSize.tsx"}}

## Button with ripple effect

{{"demo": "ButtonRippleEffect.tsx"}}

## Button Variants

{{"demo": "ButtonVariants.tsx"}}

### Buttons with left icons

{{"demo": "ButtonWithLeftIcon.tsx"}}

### Buttons with right icons

{{"demo": "ButtonWithRightIcon.tsx"}}

### Buttons with both left and right icons

{{"demo": "ButtonLeftAndRightIcon.tsx"}}

### Buttons with icons as content

{{"demo": "ButtonIcon.tsx"}}

## Loading buttons

{{"demo": "ButtonLoading.tsx"}}

## Square buttons

{{"demo": "SquareButton.tsx"}}

## Custom styling

You can style React Compass's components with the css prop. <br/>
With css prop, you can basically do anything that css can do.

{{"demo": "CustomStyling.tsx"}}

## Props

| Name       | Type                                            | Default | Description |
| :--------- | :---------------------------------------------- | :------ | :---------- |
| color      | `info` \| `success` \| `warning` \| `danger`    |         |             |
| rightIcon  | `ReactNode`\|`false`\| `true`                   | —       |             |
| leftIcon   | `ReactNode`\|`false`\| `true`                   |         |             |
| variant    | `primary` \| `secondary` \| `danger` \| `ghost` |         |             |
| css        | `CSS`                                           | —       |             |
| isDisabled |                                                 |         |             |
| loading    | `false`\| `true`                                |         |             |
| isSquare   | `false`\| `true`                                |         |             |
