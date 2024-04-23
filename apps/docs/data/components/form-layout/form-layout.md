---
title: React Form Layout component
components: FormLayout
---

# Form Layout

<p class="description">
The FormLayout component is a convenient way to build form layout.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {FormLayout} from '@comfortdelgro/react-compass'
```

## Example

{{"demo": "FormLayout.tsx"}}

## Props

### FormLayout

| Name     | Type        | Default | Description                                                                             |
| -------- | ----------- | ------- | --------------------------------------------------------------------------------------- |
| css      | `CSS`       | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
| children | `ReactNode` | —       | The content to display in the FormLayout.                                               |

### FormLayout.Row

| Name     | Type          | Default | Description                                                                             |
| -------- | ------------- | ------- | --------------------------------------------------------------------------------------- |
| css      | `CSS`         | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
| children | `ReactNode`   | —       | The content to display in the Row.                                                      |
| columns  | `1 \| 2 \| 3` | `1`     | The number of columns per row.                                                          |
