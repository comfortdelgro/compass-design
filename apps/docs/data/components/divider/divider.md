---
title: React Divider component
components: Divider
---

# Divider

<p class="description">A divider is a thin line that groups content in lists and layouts.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Divider} from '@comfortdelgro/react-compass'
```

or


## Example

### Basic

{{"demo": "DividerBasic.tsx"}}

### Align Divider

{{"demo": "DividerAlign.tsx"}}

## Props

| Name        | Type                                           | Default      | Description                                                                                                                                                                                         |
| :---------- | :--------------------------------------------- | :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color       | `string`                                       | —            | Color of the line.                                                                                                                                                                                  |
| flexItem    | `Boolean`                                      | `false`      | If true, a vertical divider will have the correct height when used in flex container. (By default, a vertical divider will have a calculated height of 0px if it is the child of a flex container.) |
| absolute    | `Boolean`                                      | `false`      | Absolutely position the element.                                                                                                                                                                    |
| children    | `Node`                                         | —            | The content of the component.                                                                                                                                                                       |
| component   | `JSX.IntrinsicElements`                        | —            | The component used for the root node. Either a string to use a HTML element or a component.                                                                                                         |
| textAlign   | `center`\| `right`\| `left`\| `top`\| `bottom` | `center`     | The text alignment.                                                                                                                                                                                 |
| orientation | `vertical`\| `horizontal`                      | `horizontal` | The component orientation.                                                                                                                                                                          |
| variant     | `fullWidth`\| `inset`\| `middle`               | `fullWidth`  | The variant to use.                                                                                                                                                                                 |
| css         | `CSS`                                          | —            |                                                                                                                                                                                                     |
