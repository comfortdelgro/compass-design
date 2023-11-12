---
title: React SearchField component
components: Search Field
---

# Search Field

<p class="description">Search Fields let users enter search input.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {SearchField} from '@comfortdelgro/react-compass-old'
```

or

```jsx
import SearchField from '@comfortdelgro/react-compass-old/searchfield'
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
