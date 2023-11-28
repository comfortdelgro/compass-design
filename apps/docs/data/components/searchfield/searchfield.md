---
title: React SearchField component
components: SearchField
---

# SearchField

<p class="description">Search Fields let users enter search input.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

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

### H5 variant

{{"demo": "SearchFieldH5.tsx"}}

## Props

| Name       | Type               | Default | Description |
| :--------- | :----------------- | :------ | :---------- |
| isDisabled | `false`\| `true`   |         |             |
| onSubmit   | `(i:string)=>void` | —       |             |
| css        | `CSS`              | —       |             |
