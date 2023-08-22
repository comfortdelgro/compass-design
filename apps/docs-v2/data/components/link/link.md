---
title: React Link component
components: Link
---

# Link

<p class="description">The Link component allows you to easily customize anchor elements with your theme colors and typography styles.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Link} from '@comfortdelgro/react-compass'
```

or

```jsx
import Link from '@comfortdelgro/react-compass/link'
```

## Example

### Basic

{{"demo": "LinkBasic.tsx"}}

### Custom styling

{{"demo": "LinkCustom.tsx"}}


## Props

| Name     | Type             | Default | Description                        |
| :------- | :--------------- | :------ | :--------------------------------- |
| external | `false`\| `true` | `false` | `Set to extinal website when true` |
| css      | `CSS`            | —       |                                    |