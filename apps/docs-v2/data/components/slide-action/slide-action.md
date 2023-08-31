---
title: React Slide Action component
components: Slide Action
---

# Slide Action / Swiper

<p class="description">A component that requires user to swipe to confirm an action. Use for important actions, such as purchase order, privacy setting changes, delete something, etc.
</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {SlideAction} from '@comfortdelgro/react-compass'
```

or

```jsx
import SlideAction from '@comfortdelgro/react-compass/slide-action'
```

## Usage

### Basic

{{"demo": "SlideAction.tsx"}}

### Effects

{{"demo": "SlideEffect.tsx"}}

### Icon

{{"demo": "SlideActionIcon.tsx"}}

### Color

{{"demo": "SlideColorful.tsx"}}

### Compact

{{"demo": "SlideCompact.tsx"}}

### allowSwipeAfterEnd

Avoid enabling this flag as much as possible. If you wanna reset the component state, please use `reset()` function that shipped with `onSwipeEnd` instead.

#### ⚠️ Accessibility considerations: Act unintentionally

Since an action is a successful action when users dragged/swiped this component all the way to the end.

On that state, if users tap & release without swiping, this component will assume that it is an successful or confirmatory action. As a result, `onSwipeEnd` will be triggered.

{{"demo": "SlideActionBehavior.tsx"}}

## Component Props

| Name                 | Type                           | Default                     | Description                                                                                                                     |
| :------------------- | :----------------------------- | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `children`           | `ReactNode`                    | —                           | Will be consider as a label                                                                                                     |
| `css`                | `CSS`                          | —                           | The system prop that allows defining system overrides as well as additional CSS styles.                                         |
| `icon`               | `ReactNode`                    | Double arrow right          | Icon for the swiper                                                                                                             |
| `color`              | `string`                       | `$dangerShades` - `#E31617` |                                                                                                                                 |
| `label`              | `string`                       | `'Slide'`                   |                                                                                                                                 |
| `labelType`          | `'default'` \| `'slide'`       | `'default'`                 | Label effect                                                                                                                    |
| `slideColor`         | `'mono'` \| `'gradient'`       | `'mono'`                    | Color type of the background that left behind by the slide button                                                               |
| `slideType`          | `'static'` \| `'slide'`        | `'slide'`                   | The left behind background color's effect                                                                                       |
| `onSwipeEnd`         | `(reset: () => void) => void`  | —                           | Trigger when users swiped all the way to the end.<br/><small>Call the `reset()` function to reset the component status.</small> |
| `onChange`           | `(isSuccess: boolean) => void` | —                           | Trigger when component's status changes                                                                                         |
| `compact`            | `boolean`                      | `false`                     | Compact size                                                                                                                    |
| `allowSwipeAfterEnd` | `boolean`                      | `false`                     | Read the section **allowSwipeAfterEnd** above for detail                                                                        |
