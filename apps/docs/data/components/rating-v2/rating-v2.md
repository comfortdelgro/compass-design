---
title: React Rating-v2 component
components: Rating-v2
---

# Rating-v2

<p class="description">Rating provides others' opinions and experiences.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {RatingV2} from '@comfortdelgro/react-compass'
```

or

```jsx
import RatingV2 from '@comfortdelgro/react-compass/rating-v2'
```

## Example

### Default rating

{{"demo": "Rating.tsx"}}

### Custom rating

{{"demo": "IconRating.tsx"}}

## Props

| Name          | Type                                         | Default | Description                                                                             |
| :------------ | :------------------------------------------- | :------ | :-------------------------------------------------------------------------------------- |
| maxRating     | `number`                                     |         | The maximum allowed rating that a user can select.                                      |
| onChange      | `(e: number \| null ) => void`               |         | Callback that is called when changing the rating.                                       |
| css           | `CSS`                                        | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
| disabled      | `boolean`                                    | —       | If true, the component is disabled.                                                     |
| readOnly      | `boolean`                                    | —       | If true, the component is read-only.                                                    |
| currentRating | `number`                                     | —       | The rating value.                                                                       |
| renderStar    | `function(isFilled: boolean, value: number)` | —       | function for custom render rating icon.                                                 |
