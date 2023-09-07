---
title: React Rating component
components: Rating
---

# Rating

<p class="description">Rating provides others' opinions and experiences.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Rating} from '@comfortdelgro/react-compass'
```

or

```jsx
import Rating from '@comfortdelgro/react-compass/rating'
```

## Example

{{"demo": "Rating.tsx"}}


## Props

| Name     | Type                           | Default | Description                                                                             |
| :------- | :----------------------------- | :------ | :-------------------------------------------------------------------------------------- |
| useIcons | `boolean`                      |         | The minimum allowed date that a user may select.                                        |
| onChange | `(e: number \| null ) => void` |         | Callback that is called when changing the rating.                                       |
| css      | `CSS`                          | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
| disabled | `boolean`                      | —       | If true, the component is disabled.                                                     |
| readOnly | `boolean`                      | —       | If true, the component is disabled.                                                     |
| value    | `number`                       | —       | The rating value.                                                                       |
