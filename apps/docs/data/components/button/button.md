# Button

<p class="description">Buttons allow users to take actions, and make choices, with a single tap.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {Button} from '@comfortdelgro/react-compass'
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

## Act as a link

{{"demo": "LinkButton.tsx"}}

## Custom styling

You can style React Compass's components with the css prop. <br/>
With css prop, you can basically do anything that css can do.

{{"demo": "CustomStyling.tsx"}}

## Props

| Name       | Type                                            | Default | Description                                                                                                                                                        |
| :--------- | :---------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color      | `info` \| `success` \| `warning` \| `danger`    |         | Specifies the color theme of the button, allowing it to convey different meanings like information, success, warning, or danger.                                   |
| rightIcon  | `ReactNode` \| `false` \| `true`                | —       | Determines the presence and type of icon on the right side of the button. Can be a ReactNode for a custom icon, `true` for a default icon, or `false` for no icon. |
| leftIcon   | `ReactNode` \| `false` \| `true`                |         | Determines the presence and type of icon on the left side of the button. Can be a ReactNode for a custom icon, `true` for a default icon, or `false` for no icon.  |
| variant    | `primary` \| `secondary` \| `danger` \| `ghost` |         | Defines the style variant of the button, such as primary, secondary, danger, or ghost (transparent).                                                               |
| css        | `CSS`                                           | —       | Used to apply custom CSS styles to the button, allowing for more detailed design customization.                                                                    |
| isDisabled | `boolean`                                       | `false` | If set to `true`, disables the button, making it unclickable and often changing its visual appearance to indicate it's disabled.                                   |
| loading    | `false` \| `true`                               | `false` | When `true`, shows a loading indicator on the button, typically used to signify that an action is in progress.                                                     |
| isSquare   | `false` \| `true`                               | `false` | Determines whether the button has a square shape. `true` for a square shape, `false` for the default rectangular shape.                                            |
| href       | `string`                                        | —       | If provided, turns the button into a link button, navigating to the specified URL when clicked.                                                                    |
