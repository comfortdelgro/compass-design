---
title: React Navbar component
components: Navbar
---

# Navbar

<p class="description">The Navbar displays horizontally information and navigation relating to the current screen.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Navbar} from '@comfortdelgro/react-compass'
```

or

```jsx
import Navbar from '@comfortdelgro/react-compass/navbar'
```

## Example

### Full Features

{{"demo": "Navbar.tsx"}}

<!-- ### Custom styling

{{"demo": "LinkCustom.tsx"}} -->

## Props

### Navbar

| Name     | Type                  | Default | Description |
| :------- | :-------------------- | :------ | :---------- |
| children | `React.ReactNode`     | —       |             |
| color    | `white` \| `blue`     | —       |             |
| variant  | `portal` \| `website` | —       |             |
| css      | `CSS`                 | —       |             |

### Navbar.Brand

| Name           | Type              | Default | Description                                                   |
| :------------- | :---------------- | :------ | :------------------------------------------------------------ |
| children       | `React.ReactNode` | —       |                                                               |
| hiddenOnMobile | `boolean`         | —       | Brand name will be hidden when screen is resize to small size |
| css            | `CSS`             | —       |                                                               |

### Navbar.Links

| Name     | Type              | Default | Description |
| :------- | :---------------- | :------ | :---------- |
| children | `React.ReactNode` | —       |             |
| css      | `CSS`             | —       |             |

### Navbar.Separator

| Name     | Type              | Default | Description |
| :------- | :---------------- | :------ | :---------- |
| children | `React.ReactNode` | —       |             |
| css      | `CSS`             | —       |             |

### Navbar.Actions

| Name               | Type              | Default | Description                                                         |
| :----------------- | :---------------- | :------ | :------------------------------------------------------------------ |
| children           | `React.ReactNode` | —       |                                                                     |
| alternativeElement | `React.ReactNode` | —       | Alternative element to show when the screen is resize to small size |
| css                | `CSS`             | —       |                                                                     |
