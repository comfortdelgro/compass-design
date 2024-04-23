---
title: React Badges component
components: Badges
---

# Badge

<p class="description">Badge can be used to highlight important bits of information such as labels, notifications, data trends & status.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {Badge} from '@comfortdelgro/react-compass'
```

## Example

### Basic

{{"demo": "BadgeBasic.tsx"}}

### Colors

{{"demo": "BadgeColors.tsx"}}

### Variants

{{"demo": "BadgeVariants.tsx"}}

### Default icon

{{"demo": "BadgeIcon.tsx"}}

### Custom icon

{{"demo": "BadgeCustomIcon.tsx"}}

### Status

{{"demo": "BadgeStatus.tsx"}}

### Custom styling

You can style React Compass's components with the css prop.<br>
With css prop, you can basically do anything that css can do.
{{"demo": "BadgeCustom.tsx"}}

## Props

| Name       | Type                                              | Default | Description                                                                                                                       |
| :--------- | :------------------------------------------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| color      | `info` \| `success` \| `warning` \| `danger`      | info    | These colors will determine the color of background of the badges.                                                                |
| label      | `String `                                         | —       | Lable of the badges.                                                                                                              |
| variant    | `primary` \| `secondary` \| `outline`\| `rounded` | primary | Variants will determine the color of the badges' label, border and the darkness of its background .                               |
| icon       | `ReactNode`\|`false`\| `true`                     | false   | When false, no icon is shown in the badge. When true, the default icons are shown. And you can pass in custom icons to this prop. |
| status     | `online` \| `offline` \| `away`\| `busy`          | —       | The color set for `status` variant.                                                                                               |
| statusSize | `8` \| `12` \| `16`\| `20` \| `24` \| `28`        | —       | The size of status badges, from `8px` to `28px`.                                                                                  |
| css        | `CSS`                                             | —       | The system prop that allows defining system overrides as well as additional CSS styles.                                           |
