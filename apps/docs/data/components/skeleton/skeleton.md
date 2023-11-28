---
title: React Skeleton component
components: Skeleton
---

# Skeleton

<p class="description">Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Skeleton} from '@comfortdelgro/react-compass'
```


## Example

### Variant

{{"demo": "SkeletonVariants.tsx"}}

### Animation

{{"demo": "SkeletonAnimation.tsx"}}

### Custom styling

{{"demo": "SkeletonAnimations.tsx"}}

## Props

| Name      | Type                                               | Default | Description                                                                                                         |
| :-------- | :------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------ |
| color     | `string`                                           | —       | Color for the background                                                                                            |
| width     | `string` \| `number`                               | —       | Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.               |
| height    | `string` \| `number`                               | —       | Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card. |
| children  | `Node`                                             | —       | Optional children to infer width and height from.                                                                   |
| component | `JSX.IntrinsicElements`                            | —       | The component used for the root node. Either a string to use a HTML element or a component.                         |
| animation | `pulse` \| `wave` \| `false`                       | `pulse` | The animation. If false the animation effect is disabled.                                                           |
| variant   | `circular` \| `rectangular` \| `rounded` \| `text` | `text`  | The type of content that will be rendered.                                                                          |
| css       | `CSS`                                              | —       |                                                                                                                     |
