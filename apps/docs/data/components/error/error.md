---
title: React Error component
components: Error
---

# Error

<p class="description">An error displays a message that describes an error that occurred.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Error} from '@comfortdelgro/react-compass'
```

or

```jsx
import Error from '@comfortdelgro/react-compass/error'
```

## Example

### Default

{{"demo": "ErrorDefault.tsx"}}

### Secondary variant

{{"demo": "ErrorVariant.tsx"}}

### With Css

{{"demo": "ErrorCss.tsx"}}

## Props

| Name    | Type                     | Default | Description                |
| :------ | :----------------------- | :------ | :------------------------- |
| variant | `primary` \| 'secondary' | primary | Variants.                  |
| css     | `CSS`                    | —       | To custom styling of Error |
