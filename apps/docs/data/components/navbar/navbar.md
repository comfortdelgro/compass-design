---
title: React Navbar component
components: Navbar
---

# Navbar

<p class="description">The Navbar displays horizontally information and navigation relating to the current screen.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Navbar} from '@comfortdelgro/react-compass-old'
```

or

```jsx
import Navbar from '@comfortdelgro/react-compass-old/navbar'
```

## Example

### Full Features

{{"demo": "Navbar.tsx"}}

### Website Version

{{"demo": "WebsiteVersion.tsx"}}

### With alternative element

Change screen size to less than 768px

{{"demo": "Alternative.tsx"}}

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
