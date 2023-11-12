---
title: React Card component
components: Card
---

# Card

<p class="description">Cards provide a flexible and extensible content container with multiple variants and options.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Card} from '@comfortdelgro/react-compass-old'
```

or

```jsx
import Card from '@comfortdelgro/react-compass-old/card'
```

## Example

### Sizes

{{"demo": "CardSize.tsx"}}

### Variants

{{"demo": "CardVariant.tsx"}}

### Shadowless

{{"demo": "CardShadowless.tsx"}}

## Props

### Card

| Name         | Type                   | Default | Description                                                                             |
| :----------- | :--------------------- | :------ | :-------------------------------------------------------------------------------------- |
| children     | `ReactNode`            | —       | The content to display in the Card.                                                     |
| size         | `sm` \| `lg` \| `full` | `full`  | The size of the Card                                                                    |
| isDisabled   | `boolean`              | false   | Whether the card is disabled.                                                           |
| isClickable  | `boolean`              | false   | Whether the card is clickable.                                                          |
| isShadowless | `boolean`              | false   | Whether the card is shadowless.                                                         |
| css          | `CSS`                  | —       | The system prop that allows defining system overrides as well as additional CSS styles. |

### Card Body

| Name     | Type        | Default | Description                                                                             |
| :------- | :---------- | :------ | :-------------------------------------------------------------------------------------- |
| children | `ReactNode` | —       | The content to display in the Card Image.                                               |
| css      | `CSS`       | —       | The system prop that allows defining system overrides as well as additional CSS styles. |

### Card Title

| Name     | Type        | Default | Description                                                                             |
| :------- | :---------- | :------ | :-------------------------------------------------------------------------------------- |
| children | `ReactNode` | —       | The content to display in the Card Image.                                               |
| css      | `CSS`       | —       | The system prop that allows defining system overrides as well as additional CSS styles. |

### Card Action

| Name     | Type        | Default | Description                                                                             |
| :------- | :---------- | :------ | :-------------------------------------------------------------------------------------- |
| children | `ReactNode` | —       | The content to display in the Card Image.                                               |
| css      | `CSS`       | —       | The system prop that allows defining system overrides as well as additional CSS styles. |

### Card Image

| Name   | Type     | Default | Description                                                                             |
| :----- | :------- | :------ | :-------------------------------------------------------------------------------------- |
| src \* | `string` | —       | The URL of the image.                                                                   |
| alt \* | `string` | —       | Text description of the image.                                                          |
| css    | `CSS`    | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
