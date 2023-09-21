---
title: H5 App Naviation component
components: AppNav
---

# AppNav

<p class="description">AppNav is a navigation bar containing a number of destinations at the top or bottom of the screen.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {AppNav} from '@comfortdelgro/react-compass'
```

or

```jsx
import AppNav from '@comfortdelgro/react-compass/appnav'
```

## Example

{{"demo": "AppNav.tsx"}}

## Props

| Name    | Type                                         | Default | Description                                                                                                                       |
| :------ | :------------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| color   | `info` \| `success` \| `warning` \| `danger` | info    | These colors will determine the color of background of the badges.                                                                |
| label   | `String `                                    | —       | Lable of the badges.                                                                                                              |
| variant | `primary` \| `secondary` \| `outline`        | primary | Variants will determine the color of the badges' label, border and the darkness of its background .                               |
| icon    | `ReactNode`\|`false`\| `true`                | false   | When false, no icon is shown in the badge. When true, the default icons are shown. And you can pass in custom icons to this prop. |
| css     | `CSS`                                        | —       | The system prop that allows defining system overrides as well as additional CSS styles.                                           |