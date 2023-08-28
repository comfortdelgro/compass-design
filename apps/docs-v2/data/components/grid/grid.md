---
title: React Grid component
components: Grid
---

# Grid

<p class="description">The Grid component is designed to create responsive and fluid grid layouts for your application.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Grid} from '@comfortdelgro/react-compass'
```

or

```jsx
import Grid from '@comfortdelgro/react-compass/grid'
```

## Example

{{"demo": "GridBasic.tsx"}}

### Grid Component Usage:

1. Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically.
2. It uses CSS's Flexible Box module for high flexibility.
3. There are two types of layout: containers and items.
4. Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
5. Items have padding to create the spacing between individual items.
6. There are five grid breakpoints: xs, sm, md, lg, and xl.
7. Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the component when the viewport width satisfies the breakpoint constraints.


### Default Breakpoints:

1. xs, extra-small: 0px
2. sm, small: 600px
3. md, medium: 900px
4. lg, large: 1200px
5. xl, extra-large: 1536px


### Props of Grid:

| Name           | Type                        | Default | Description                                                                                                                                                  |
| -------------- | --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| spacing        | string                      | —       | The spacing between grid items. Possible values: `"none"`, `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"xxl"`, or a custom CSS value (e.g., `"8px"`, `"16px"`). |
| direction      | string                      | —       | The direction of the grid layout. Possible values: `"row"`, `"column"`, `"row-reverse"`, or `"column-reverse"`.                                              |
| wrap           | string                      | —       | Determines whether the grid items should wrap when there's not enough space. Possible values: `"nowrap"`, `"wrap"`, `"wrap-reverse"`.                        |
| alignItems     | string                      | —       | Determines the vertical alignment of the grid items. Possible values: `"start"`, `"end"`, `"center"`, `"stretch"`, or `"baseline"`.                          |
| justifyContent | string                      | —       | Determines the horizontal alignment of the grid items. Possible values: `"start"`, `"end"`, `"center"`, `"between"`, `"around"`, or `"evenly"`.              |
| alignContent   | string                      | —       | Determines the alignment of grid items when there's extra space. Possible values: `"start"`, `"end"`, `"center"`, `"stretch"`, `"between"`, or `"around"`.   |
| itemComponent  | React.ElementType \| string | `'div'` | The component or HTML element to use as the grid item container.                                                                                             |
| css            | `CSS`                       | —       | The system prop that allows defining system overrides as well as additional CSS styles.                                                                      |

### Props of Grid.Item:

| Name | Type   | Default | Description                                                                                                               |
| ---- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| xs   | number | —       | The number of columns the item should occupy at the `"xs"` breakpoint (viewport width less than `600px`).                 |
| sm   | number | —       | The number of columns the item should occupy at the `"sm"` breakpoint (viewport width greater than or equal to `600px`).  |
| md   | number | —       | The number of columns the item should occupy at the `"md"` breakpoint (viewport width greater than or equal to `900px`).  |
| lg   | number | —       | The number of columns the item should occupy at the `"lg"` breakpoint (viewport width greater than or equal to `1200px`). |
| xl   | number | —       | The number of columns the item should occupy at the `"xl"` breakpoint (viewport width greater than or equal to `1536px`). |
| css  | `CSS`  | —       | The system prop that allows defining system overrides as well as additional CSS styles.                                   |