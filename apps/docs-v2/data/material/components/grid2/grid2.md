---
productId: material-ui
title: React Grid component
githubLabel: 'component: Grid'
materialDesign: https://m2.material.io/design/layout/understanding-layout.html
---

# Grid version 2

<p class="description">The responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.</p>

{{"component": "modules/components/ComponentLinkHeader.js", "design": false}}

The `Grid` component works well for a layout with a known number of columns.
The columns can be configured with multiple breakpoints to specify the column span of each child.

## What's changed

We built the `Grid` component from scratch in order to:

- Fix [known issues](https://github.com/mui/material-ui/pull/32746) introduced in Material UI v5.
- Simplify the logic with CSS variables, removing the unnecessary `item` prop and reducing CSS specificity.
- Introduce a proper fix for [preventing a scrollbar](#prevent-scrollbar) by switching between negative margin approaches.
- Set negative margins of equal size on all sides of the grid container by default.

Since the new implementation is considered a breaking change, we introduced it as `Unstable_Grid2` to gather feedbacks from the community before making it stable in the next major release of Material UI.

We encourage everyone to try the new version of the `Grid` by visiting the [Grid v2 migration guide](/material-ui/migration/migration-grid-v2/).

:::info
From now on, the `Grid` v1 and `Grid` v2 refer to the import as:

```js
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
```

:::

## How it works

The grid system is implemented with the `Grid` component:

- It uses [CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/) (rather than CSS Grid) for high flexibility.
- The grid is always a flex item. Use the `container` prop to add a flex container.
- Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
- There are five default grid breakpoints: xs, sm, md, lg, and xl. If you need custom breakpoints, check out [custom breakpoints grid](#custom-breakpoints).
- You can give integer values for each breakpoint, to indicate how many of the 12 available columns are occupied by the component when the viewport width satisfies the [breakpoint constraints](/material-ui/customization/breakpoints/#default-breakpoints).
- It uses negative margins and padding to create gaps between children, which behave similarly to [the `gap` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
- It does _not_ support row spanning. Children elements cannot span multiple rows. We recommend using [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) if you need this functionality.
- It does _not_ automatically place children. It will try to fit the children one by one, and if there is not enough space, the rest of the children will start on the next line, and so on. If you need auto-placement, we recommend using [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) instead.

:::warning
The `Grid` component is a _layout_ grid, not a _data_ grid.
If you need a data grid, check out [the MUI X `DataGrid` component](/x/react-data-grid/).
:::

## Fluid grids

Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically.

### Basic grid

In order to create a grid layout, you need a container.
Use the `container` prop to create a grid container that wraps the grid items (the `Grid` is always an item).

Column widths are integer values between 1 and 12.
They can be applied at any breakpoint to indicate how many columns are occupied by the component.

A value given to a breakpoint applies to all the other wider breakpoints unless overridden—see [Multiple breakpoints](#multiple-breakpoints) for details.
For example, a component with `xs={12}` occupies the whole viewport width regardless of its size.

{{"demo": "BasicGrid.js", "bg": true}}

### Multiple breakpoints

Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.

For example, a component with `xs={12} sm={6}` occupies the entire viewport width when the viewport is [less than 600 pixels wide](/material-ui/customization/breakpoints/#default-breakpoints).
When the viewport grows beyond this size, the component occupies half of the total width—six columns rather than 12.

{{"demo": "FullWidthGrid.js", "bg": true}}

## Spacing

Use the `spacing` prop to control the space between children.
The spacing value can be any positive number (including decimals) or a string.
The prop is converted into a CSS property using the [`theme.spacing()`](/material-ui/customization/spacing/) helper.

The following demo illustrates the use of the `spacing` prop:

{{"demo": "SpacingGrid.js", "bg": true, "hideToolbar": true}}

### Row and column spacing

The `rowSpacing` and `columnSpacing` props let you specify row and column gaps independently of one another.
They behave similarly to the `row-gap` and `column-gap` properties of [CSS Grid](/system/grid/#row-gap-amp-column-gap).

{{"demo": "RowAndColumnSpacing.js", "bg": true}}

## Responsive values

You can set prop values to change when a given breakpoint is active.
For instance, we can implement Material Design's [recommended](https://m2.material.io/design/layout/responsive-layout-grid.html) responsive layout grid, as seen in the following demo:

{{"demo": "ResponsiveGrid.js", "bg": true}}

Responsive values are supported by:

- `columns`
- `columnSpacing`
- `direction`
- `rowSpacing`
- `spacing`
- all other [MUI System props](#system-props)

## Auto-layout

The auto-layout feature gives equal space to all items present.
When you set the width of one item, the others will automatically resize to match it.

{{"demo": "AutoGrid.js", "bg": true}}

### Variable width content

When a breakpoint's value is given as `"auto"` instead of `true` or a number, then a column's size will automatically adjust to match the width of its content.
The demo below shows how this works:

{{"demo": "VariableWidthGrid.js", "bg": true}}

## Nested grid

The grid container that renders as a **direct child** inside another grid container is a nested grid that inherits its [`columns`](#columns) and [`spacing`](#spacing) from the top level.
It will also inherit the props of the top-level grid if it receives those props.

:::success

Note that a nested grid container should be a direct child of another grid container. If there are non-grid elements in between, the grid container will start as the new root container.

```js
<Grid container>
  <Grid container> // A nested grid container that inherits columns and spacing from above.
    <div>
      <Grid container> // A new root grid container with its own variables scope.
```

:::

### Inheriting spacing

A nested grid container will inherits the row and column spacing from its parent unless the `spacing` prop is specified to the instance.

{{"demo": "NestedGrid.js", "bg": true}}

### Inheriting columns

A nested grid container will inherits the columns from its parent unless the `columns` prop is specified to the instance.

{{"demo": "NestedGridColumns.js", "bg": true}}

## Columns

Use the `columns` prop to change the default number of columns (12) in the grid, as shown below:

{{"demo": "ColumnsGrid.js", "bg": true}}

## Offset

Offset props (such as `smOffset`, `mdOffset`) push an item to the right side of the grid.
These props accept:

- numbers—for example, `mdOffset={2}` pushes an item two columns to the right when the viewport size is equal to or greater than the `md` breakpoint.
- `"auto"`—this pushes the item to the far right side of the grid container.

The demo below illustrates how to use the offset props:

{{"demo": "OffsetGrid.js", "bg": true}}

## Custom breakpoints

If you specify custom breakpoints in the theme, you can use those names as grid item props in responsive values:

```js
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Demo() {
  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
      <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid mobile={6} tablet={4} laptop={3} key={index}>
            <div>{index + 1}</div>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
```

:::info
Custom breakpoints affect both size and offset props:

```diff
- <Grid xs={6} xsOffset={2}>
+ <Grid mobile={6} mobileOffset={2}>
```

:::

### TypeScript

You have to set module augmentation on the theme breakpoints interface.
Properties set to `true` will appear as `{key}`(size prop) and `{key}Offset`(offset prop).

```ts
declare module '@mui/system' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
```

## Disable the scrollbar

If you use grid as a container in a small viewport, you might see a horizontal scrollbar because the negative margin is applied on all sides of the grid container.

To disable this scrollbar, set the `disableEqualOverflow` prop to `true`.
This removes the negative margins from the bottom and right sides of the grid to prevent overflow.

The demo below shows how this works:

{{"demo": "OverflowGrid.js", "bg": true}}

:::warning
You should avoid adding borders and backgrounds to the grid when `disableEqualOverflow` is `true` because the negative margin (applied only at the top and left sides) causes the grid to be visually misaligned.
:::

## Customization

### Centered elements

To center a grid item's content, specify `display="flex"` directly on the item.
Then use `justifyContent` and/or `alignItems` to adjust the position of the content, as shown below:

{{"demo": "CenteredElementGrid.js", "bg": true}}

:::warning
Using the `container` prop does not work in this situation because the grid container is designed exclusively to wrap grid items.
It cannot wrap other elements.
:::

### Full border

{{"demo": "FullBorderedGrid.js"}}

### Half border

{{"demo": "HalfBorderedGrid.js"}}

## Limitations

### Column direction and reversing

The column width (`xs`, ..., `xl`) and offset props are _not_ supported within containers that use `direction="column"` or `direction="column-reverse"`.

Size and offset props define the number of columns the component will use for a given breakpoint.
They are intended to control the width using `flex-basis` in `row` containers, but they will impact the height in `column` containers.
If used, these props may have undesirable effects on the height of the `Grid` item elements.
