---
title: React SearchField component
components: SearchField
---

# SearchField

<p class="description">Search Fields let users enter search input.</p>

{{"component": "components/ComponentLinkHeader.tsx"}}

```jsx
import {SearchField} from '@comfortdelgro/react-compass'
```

or

```jsx
import {SearchField} from '@comfortdelgro/react-compass'
```

## Example

### Basic SearchField

{{"demo": "SearchFieldBasic.tsx"}}

### Custom styling

{{"demo": "SearchFieldCustom.tsx"}}

## Props

| Name       | Type               | Default | Description |
| :--------- | :----------------- | :------ | :---------- |
| isDisabled | `false`\| `true`   |         |             |
| onSubmit   | `(i:string)=>void` | —       |             |
| css        | `CSS`              | —       |             |
