---
title: React Transitions component
components: Transitions
---

# Transitions

<p class="description">The Transitions component provides you various transition effects.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Transitions} from '@comfortdelgro/react-compass-old'
```

or

```jsx
import Transitions from '@comfortdelgro/react-compass-old/transitions'
```

## Fade

{{"demo": "TransitionsFade.tsx"}}

## Collapse

{{"demo": "TransitionsCollapse.tsx"}}

## Zoom

{{"demo": "TransitionsZoom.tsx"}}

## Slide

{{"demo": "TransitionsSlide.tsx"}}

## Props

| Name           | Type                                        | Default      | Description                                                                                                             |
| :------------- | :------------------------------------------ | :----------- | :---------------------------------------------------------------------------------------------------------------------- |
| effect         | `'collapse' \| 'fade' \| 'zoom' \| 'slide'` | -            | The type of transition effect to apply to the child component.                                                          |
| show           | `boolean`                                   | -            | Determines whether the child component should be shown or hidden with the specified transition effect.                  |
| speed          | `number`                                    | -            | The speed of the transition effect in seconds.                                                                          |
| collapsedSize  | `string`                                    | `'1000px'`   | The size of the child component when it is collapsed or hidden.                                                         |
| orientation    | `'vertical' \| 'horizontal'`                | `'vertical'` | The direction of the collapse animation for the `'collapse'` effect.                                                    |
| slideDirection | `'top' \| 'bottom' \| 'left' \| 'right'`    | `'bottom'`   | The direction of the slide animation for the `'slide'` effect.                                                          |
| css            | `CSS`                                       | -            | The system prop that allows defining system overrides as well as additional CSS styles for the `Transitions` component. |
