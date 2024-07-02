---
title: React Breadcrumbs component
components: Breadcrumbs
---

# Breadcrumbs

<p class="description">Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website.</p>

{{"component": "components/ComponentLinkHeader.tsx"}}

```jsx
import {Breadcrumbs} from '@comfortdelgro/react-compass'
```

## Example

### Basic

{{"demo": "BreadcrumbsBasic.tsx"}}

### Custom divider

{{"demo": "BreadcrumbsCustomDivider.tsx"}}

## Props

| Name        | Type                          | Default | Description |
| :---------- | :---------------------------- | :------ | :---------- |
| isCurrent   | `(i:number) => boolean`       | false   |             |
| dividerIcon | `ReactNode`\|`false`\| `true` | —       |             |
