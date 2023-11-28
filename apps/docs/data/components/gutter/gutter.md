---
title: React Gutter component
components: Gutter
---

# Gutter

<p class="description">Gutter is used to manage spacing and separation between elements in layout design.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Gutter} from '@comfortdelgro/react-compass'
```

## Basic

{{"demo": "GutterBasic.tsx"}}

## Left Side Gutter

{{"demo": "GutterLeftSide.tsx"}}

## Both Side Gutter

{{"demo": "GutterBothSide.tsx"}}

## Extend Button

{{"demo": "GutterExtendButton.tsx"}}

### Props:

| Name            | Type                             | Default   | Description                                                                   |
| :-------------- | :------------------------------- | :-------- | :---------------------------------------------------------------------------- |
| parentRef\*     | `React.ReactNode`                | —         | Reference to the parent element                                               |
| css             | `CSS`                            | —         |                                                                               |
| side            | `'left'` \| `'right'`            | `'right'` | The side that you want to resize of it's parent.                              |
| hasExpandButton | `boolean`                        | false     | To display quick collapse icon button on top of gutter.                       |
| minCollapse     | `CSS['width'] `                  |           | The minimum width when gutter collapse.                                       |
| maxExpand       | `CSS['width'] `                  |           | The maximum width when gutter expand.                                         |
| hasExpandButton | `boolean`                        | false     | To display quick collapse icon button on top of gutter.                       |
| onChange        | `(width: CSS['width'] ) => void` | —         | Callback event that will return the width for the parent as the gutter resize |
