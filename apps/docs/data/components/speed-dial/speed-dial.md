---
title: React SpeedDial component
components: SpeedDial
---

# SpeedDial

<p class="description">Provides the behavior and accessibility implementation for a speed-dial component.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {SpeedDial} from '@comfortdelgro/react-compass-old'
```

or

```jsx
import SpeedDial from '@comfortdelgro/react-compass-old/speed-dial'
```

## Example

### Default

{{"demo": "SpeedDial.tsx"}}

### Position

{{"demo": "SpeedDialPosition.tsx"}}

<!-- ### SpeedDial Server (Experimental)

{{"demo": "SpeedDialServer.tsx"}} -->

## Props

| Name     | Type                                      | Default | Description                                                |
| :------- | :---------------------------------------- | :------ | :--------------------------------------------------------- |
| actions  | `Array<Object>`                           | `{}`    | Array of Object define the actions can show on speed dial. |
| position | `'up'` \| `'down'`\| `'left'`\| `'right'` | `up`    | Define the position where the actions list show            |
