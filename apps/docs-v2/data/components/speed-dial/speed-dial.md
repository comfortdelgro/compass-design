---
title: React SpeedDial component
components: SpeedDial
---

# SpeedDial

<p class="description">Provides the behavior and accessibility implementation for a speed-dial component.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {SpeedDial} from '@comfortdelgro/react-compass'
```

or

```jsx
import SpeedDial from '@comfortdelgro/react-compass/speed-dial'
```

## Example

{{"demo": "SpeedDial.tsx"}}


## Props

| Name     | Type            | Default | Description                                                |
| :------- | :-------------- | :------ | :--------------------------------------------------------- |
| actions  | `Array<Object>` | `{}`    | Array of Object define the actions can show on speed dial. |
| position | `string`        | `up`    | Define the position where the actions list show            |
