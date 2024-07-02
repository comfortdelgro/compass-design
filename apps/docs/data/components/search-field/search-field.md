---
title: React SearchField component
components: Search Field
---

# Search Field

<p class="description">Search Fields let users enter search input.</p>

{{"component": "components/ComponentLinkHeader.tsx"}}

```jsx
import {SearchField} from '@comfortdelgro/react-compass'
```

## Basic

{{"demo": "SearchFieldBasic.tsx"}}

## CustomStyling

{{"demo": "RadioCustomStyling.tsx"}}

## Props

| Name       | Type               | Default | Description |
| :--------- | :----------------- | :------ | :---------- |
| isDisabled | `false`\| `true`   |         |             |
| onSubmit   | `(i:string)=>void` | —       |             |
| css        | `CSS`              | —       |             |
