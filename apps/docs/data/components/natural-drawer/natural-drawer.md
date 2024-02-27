---
title: React Natural Drawer component
components: Natural Drawer
---

# Natural Drawer

<p class="description">The new version of Drawer that using natural scrollbar to handle everything and have less logic.
</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Natural Drawer} from '@comfortdelgro/react-compass'
```

## Basic

{{"demo": "NaturalDrawer.tsx"}}

## Full Screen

{{"demo": "NaturalDrawerFullScreen.tsx"}}

## Interact With Background

{{"demo": "AccessibleBackground.tsx"}}

## Interact With Background Full Screen

{{"demo": "AccessibleBackgroundFullScreen.tsx"}}

## Bottom Sheet

{{"demo": "BottomSheet.tsx"}}

## Bottom Sheet Full Screen

{{"demo": "BottomSheetFullScreen.tsx"}}

## Compound components

- `NaturalDrawer.Header` – pass it as header property to use the header part with dragging bar. |

## Component Props

### Common Props

| Name          | Type                   | Default  | Description                                                                                          |
| :------------ | :--------------------- | :------- | :--------------------------------------------------------------------------------------------------- |
| type          | `drawer` `bottomSheet` | `drawer` | Use `drawer` for the view that always show on screen, `bottomSheet` for the view looks like a dialog |
| children      | `React.ReactNode`      | —        | The content of the drawer                                                                            |
| expanded      | `boolean`              | —        | To let the drawer expanded                                                                           |
| fullscreen    | `true`                 | —        | To display drawer inside a view or full screen with fixed position                                   |
| header        | `React.ReactNode`      | —        | Header element will be places on top                                                                 |
| fixedContent  | `React.ReactNode`      | —        | Content that can be interact with under the Drawer (Don not use it with `bottonSheet` type)          |
| className     | `visibleHeight`        | `36%`    | How much height auto display on screen                                                               |
| drawerScroll  | `void`                 | —        | Event when user scroll the drawer                                                                    |
| onReachBotton | `void`                 | —        | Event when user scroll to less than 10px from the bottom                                             |
| onCollapsed   | `void`                 | —        | Event when drawer has changed to collapsed                                                           |
| onExpanded    | `void`                 | —        | Event when drawer has changed to expanded                                                            |
| className     | `string`               | —        | Custom class name                                                                                    |
| style         | `React.CSSProperties`  | —        | Custom style                                                                                         |
