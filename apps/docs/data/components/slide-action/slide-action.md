---
title: React Slide Action component
components: Slide Action
---

# Slide Action | Swiper

<p class="description">A component that requires user to swipe to confirm an action. Use for important actions, such as purchase order, privacy setting changes, delete something, etc.
</p>

{{"component": "components/ComponentLinkHeader.tsx"}}

```jsx
import {SlideAction} from '@comfortdelgro/react-compass'
```

## Basic

When users swiped all the way to the end, we can call it a successful or confirmatory action.

{{"demo": "SlideAction.tsx"}}

### Interactive

{{"demo": "SlideActionInteractive.tsx"}}

## Reset

How to reset the component state?

{{"demo": "SlideActionReset.tsx"}}

## Effects

{{"demo": "SlideEffect.tsx"}}

## Icon

{{"demo": "SlideActionIcon.tsx"}}

## Color

{{"demo": "SlideColorful.tsx"}}

## Compact

{{"demo": "SlideCompact.tsx"}}

## allowSwipeAfterEnd

Avoid enabling this flag as much as possible. If you wanna reset the component state, see the [Reset section](#reset).

#### ⚠️ Accessibility considerations: Act unintentionally

Since an action is a successful action when users dragged/swiped this component all the way to the end.

On that state, if users tap & release without swiping, this component will assume that it is an successful or confirmatory action. As a result, `onSwipeEnd` will be triggered.

{{"demo": "SlideActionAvoidBehavior.tsx"}}

## Component Props

| Name                 | Type                           | Default                           | Description                                                                                                                    |
| :------------------- | :----------------------------- | :-------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `children`           | `ReactNode`                    | —                                 | Will be consider as a label                                                                                                    |
| `css`                | `CSS`                          | —                                 | The system prop that allows defining system overrides as well as additional CSS styles                                         |
| `icon`               | `ReactNode`                    | Double arrow right                | Icon for the swiper                                                                                                            |
| `color`              | `string`                       | `--cdg-color-cdgBlue` - `#0142AF` | Component theme color.<br/><small>Includes label, slide background, border and the dragger color</small>                       |
| `label`              | `string`                       | `'Slide'`                         | Label                                                                                                                          |
| `labelType`          | `'default'` \| `'slide'`       | `'default'`                       | Label effect                                                                                                                   |
| `slideType`          | `'static'` \| `'slide'`        | `'slide'`                         | The left behind background color's effect                                                                                      |
| `onSwipeEnd`         | `(reset: () => void) => void`  | —                                 | Trigger when users swiped all the way to the end.<br/><small>Call the `reset()` function to reset the component status</small> |
| `onChange`           | `(isSuccess: boolean) => void` | —                                 | Trigger when component's status changes                                                                                        |
| `compact`            | `boolean`                      | `false`                           | Compact size                                                                                                                   |
| `allowSwipeAfterEnd` | `boolean`                      | `false`                           | See the [allowSwipeAfterEnd section](#allowswipeafterend) above                                                                |

## Other Types

| Name                    | Type                           | Description                   |
| :---------------------- | :----------------------------- | :---------------------------- |
| `SlideActionOnSwipeEnd` | `(reset: () => void) => void`  | Type of `onSwipeEnd` callback |
| `SlideActionOnChange`   | `(isSuccess: boolean) => void` | Type of `onChange` callback   |
