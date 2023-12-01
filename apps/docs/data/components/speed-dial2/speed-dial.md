---
title: SpeedDial 2 component
components: SpeedDial2
---

# SpeedDial2

<p class="description">Provides the behavior and accessibility implementation for a speed-dial component.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {SpeedDial2} from '@comfortdelgro/react-compass'
```

## Example

### Default

{{"demo": "SpeedDial.tsx"}}

### Right

{{"demo": "SpeedDialRight.tsx"}}

### Left

{{"demo": "SpeedDialLeft.tsx"}}

### Hover

{{"demo": "SpeedDialHover.tsx"}}

<!-- ### SpeedDial Server (Experimental)

{{"demo": "SpeedDialServer.tsx"}} -->

## Props

| Name     | Type                                      | Default | Description                            |
| :------- | :---------------------------------------- | :------ | :------------------------------------- |
| showing  | `boolean`                                 | `false` | Whether actions list is showing or not |
| position | `'up'` \| `'down'`\| `'left'`\| `'right'` | `up`    | Position of the Speed Dial Actions     |
