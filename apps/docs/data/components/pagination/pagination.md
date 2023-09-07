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

## Props:

| Name     | Type       | Default | Description                                                                             |
| :------- | :--------- | :------ | :-------------------------------------------------------------------------------------- |
| total    | `number`   | `1`     | Total pages to be displayed.                                                            |
| page     | `number`   | `1`     | Currenty selected page.                                                                 |
| onChange | `function` | —       | Callback to catch current page.                                                         |
| css      | `CSS`      | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
