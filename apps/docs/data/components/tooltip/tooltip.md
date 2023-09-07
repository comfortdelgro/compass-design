---
title: React Tooltip component
components: Tooltip
---

# Tooltip

<p class="description">Display container for Tooltip content. Has a directional arrow dependent on its placement.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Tooltip} from '@comfortdelgro/react-compass'
```

or

```jsx
import Tooltip from '@comfortdelgro/react-compass/tooltip'
```

## Example

### Basic

{{"demo": "TooltipBasic.tsx"}}

### Custom styling

#### Child element

The tooltip needs to apply DOM event listeners to its child element. If the child is a custom React element, you need to make sure that it spreads its props to the underlying DOM element.

```js
const MyComponent = React.forwardRef(function MyComponent(props, ref) {
  //  Spread the props to the underlying DOM element.
  return (
    <div {...props} ref={ref}>
      Custom Component
    </div>
  )
})

// ...
<TooltipTrigger>
  <MyComponent/>
  <Tooltip dismissible>Tooltip</Tooltip>
</TooltipTrigger>
```

{{"demo": "TooltipCustom.tsx"}}

## Props

### TooltipTrigger Props

| Name               | Type                                                | Default  | Description                                                                                                                                                                                                                                   |
| :----------------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children\*         | [`ReactElement`, `ReactElement`]                    | —        | The first child must be a trigger, the second child must be Tooltip component                                                                                                                                                                 |
| offset             | `number` \| `{mainAxis: number, crossAxis: number}` |          | The additional offset applied along the main axis and(or) cross axis between the element and its anchor element.                                                                                                                              |
| delay              | `number`                                            | `0`      | The delay time for the tooltip to show up                                                                                                                                                                                                     |
| trigger            | `'focus'` \| `null`                                 | `null`   | By default, opens for both focus and hover. Can be made to open only for focus.                                                                                                                                                               |
| isOpen             | `boolean`                                           | —        | Whether the overlay is open by default (controlled)                                                                                                                                                                                           |
| defaultOpen        | `boolean`                                           | —        | Whether the overlay is open by default (uncontrolled).                                                                                                                                                                                        |
| placement          | [`Placement`](#placement-prop)                      | `bottom` | The placement of the element with respect to its anchor element.                                                                                                                                                                              |
| shouldFlip         | `boolean`                                           | `true`   | Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.                                                                                            |
| withArrow          | `boolean`                                           | `true`   | Whether the element should have an arrow pointed to anchor element                                                                                                                                                                            |
| disableInteractive | `boolean`                                           | `false`  | Tooltips are interactive by default (to pass WCAG 2.1 success criterion 1.4.13). It won't close when the user hovers over the tooltip. You can disable this behavior (thus failing the success criterion which is required to reach level AA) |
| onOpenChange       | `(isOpen: boolean) => void`                         | —        | Handler that is called when the overlay's open state changes.                                                                                                                                                                                 |
| css                | `CSS`                                               | —        | The system prop that allows defining system overrides as well as additional CSS styles.                                                                                                                                                       |

### Placement Prop

| Name      | Type                                                                                                                                                                 | Default  | Description                                                      |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :--------------------------------------------------------------- |
| placement | `bottom`\| ` bottom-end` \| ` bottom-start` \| ` left` \|` left-end` \|` left-start` \|` right` \|` right-end` \|` right-start` \|` top` \|` top-end` \|` top-start` | `bottom` | The placement of the element with respect to its anchor element. |

### Tooltip Props

| Name        | Type                    | Default | Description                                                                             |
| :---------- | :---------------------- | :------ | :-------------------------------------------------------------------------------------- |
| children\*  | `ReactNode`             | —       |                                                                                         |
| title       | `ReactNode` \| `string` | —       | Render tooltip title                                                                    |
| dismissible | `boolean`               | `false` | If true, show the close icon.                                                           |
| css         | `CSS`                   | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
