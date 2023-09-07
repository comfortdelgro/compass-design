---
title: React Pagination component
components: Pagination
---

# Pagination

<p class="description">The Pagination component enables the user to select a specific page from a range of pages.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Pagination} from '@comfortdelgro/react-compass'
```

or

```jsx
import Pagination from '@comfortdelgro/react-compass/pagination'
```

## Basic

{{"demo": "PaginationBasic.tsx"}}

## Controlled Pagination

{{"demo": "PaginationControlled.tsx"}}

## With Items Counter

{{"demo": "PaginationItemsCounting.tsx"}}

## Props

### Pagination

| Name     | Type       | Default | Description                                                                             |
| :------- | :--------- | :------ | :-------------------------------------------------------------------------------------- |
| total    | `number`   | `1`     | Total pages to be displayed.                                                            |
| page     | `number`   | `1`     | Currenty selected page.                                                                 |
| onChange | `function` | —       | Callback to catch current page.                                                         |
| css      | `CSS`      | —       | The system prop that allows defining system overrides as well as additional CSS styles. |

### ItemCounting

| Name       | Type     | Default | Description                                                                             |
| :--------- | :------- | :------ | :-------------------------------------------------------------------------------------- |
| totalItems | `number` | `0`     | Total items .                                                                           |
| page       | `number` | `0`     | Currenty selected page.                                                                 |
| css        | `CSS`    | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
