---
title: React Announcement component
components: Announcement
---

# Announcement

<p class="description">An announcement banner displays an important, succinct message, and provides actions for users to address (or dismiss the banner).</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Announcement} from '@comfortdelgro/react-compass'
```

## Example

### Variant

{{"demo": "Variant.tsx"}}

### Align

{{"demo": "Align.tsx"}}

## Props

### AnnouncementBannerProps & AnnouncementCardProps

| Name    | Type                                        | Default       | Description                                                                             |
| :------ | :------------------------------------------ | :------------ | :-------------------------------------------------------------------------------------- |
| variant | primary-light \| primary-dark \| gray-light | primary-light | Defines the style variant of the announcement                                           |
| css     | `CSS`                                       | —             | The system prop that allows defining system overrides as well as additional CSS styles. |

### AnnouncementBannerBodyProps

| Name  | Type                    | Default | Description               |
| :---- | :---------------------- | :------ | :------------------------ |
| align | left \| right \| center | left    | Alignment of body content |
