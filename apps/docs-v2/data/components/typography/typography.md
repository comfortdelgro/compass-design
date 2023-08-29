---
title: React Typography component
components: Typography
---

# Typography

<p class="description">The Typography component.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Typography} from '@comfortdelgro/react-compass'
```

or

```jsx
import Typography from '@comfortdelgro/react-compass/link'
```

## Example

{{"demo": "Typography.tsx"}}

## Props

### Body

| Name      | Type                         | Default | Description |
| :-------- | :--------------------------- | :------ | :---------- |
| variant   | `body1`\| `body2`\| `body3`  | -       |             |
| component | `Component`                  | —       |             |
| weight    | `none`\| `bold`\| `semibold` | —       |             |
| children  | `React.ReactNode`            | —       |             |

### Display

| Name      | Type                                 | Default | Description |
| :-------- | :----------------------------------- | :------ | :---------- |
| variant   | `display1`\| `display2`\| `display3` | -       |             |
| component | `Component`                          | —       |             |
| children  | `React.ReactNode`                    | —       |             |

### Header

| Name      | Type                                                                  | Default | Description |
| :-------- | :-------------------------------------------------------------------- | :------ | :---------- |
| variant   | `header0`\| `header1`\| `header2`\| `header3`\| `header4`\| `header5` | -       |             |
| component | `Component`                                                           | —       |             |
| children  | `React.ReactNode`                                                     | —       |             |

### Label

| Name      | Type                                   | Default | Description |
| :-------- | :------------------------------------- | :------ | :---------- |
| variant   | `label1`\| `label2`\| `label3`         | -       |             |
| component | `Component`                            | —       |             |
| children  | `React.ReactNode`                      | —       |             |
| weight    | `none`\| `bold`\| `semibold`\| `light` | —       |             |

### Link

| Name     | Type                        | Default | Description |
| :------- | :-------------------------- | :------ | :---------- |
| variant  | `link1`\| `link2`\| `link3` | -       |             |
| children | `React.ReactNode`           | —       |             |
| weight   | `none`\| `semibold`         | —       |             |
