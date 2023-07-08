---
productId: system
title: React Box component
components: Box
githubLabel: 'component: Box'
---

# Box

<p class="description">The Box component serves as a wrapper component for most of the CSS utility needs.</p>

The Box component packages [all the style functions](/system/getting-started/the-sx-prop/) that are exposed in `@mui/system`.

{{"component": "modules/components/ComponentLinkHeader.js", "design": false}}

## Example

[The palette](/system/palette/) style function.

## The `sx` prop

All system properties are available via the [`sx` prop](/system/getting-started/the-sx-prop/).
In addition, the `sx` prop allows you to specify any other CSS rules you may need. Here's an example of how you can use it:

{{"demo": "BoxSx.js", "defaultCodeOpen": true }}

## Overriding MUI components

The Box component wraps your component.
It creates a new DOM element, a `<div>` by default that can be changed with the `component` prop.
Let's say you want to use a `<span>` instead:

{{"demo": "BoxComponent.js", "defaultCodeOpen": true }}

This works great when the changes can be isolated to a new DOM element.
For instance, you can change the margin this way.

However, sometimes you have to target the underlying DOM element.
As an example, you may want to change the border of the Button.
The Button component defines its own styles. CSS inheritance doesn't help.
To workaround the problem, you can use the [`sx`](/system/getting-started/the-sx-prop/) prop directly on the child if it is an MUI component.

```diff
-<Box sx={{ border: '1px dashed grey' }}>
-  <Button>Save</Button>
-</Box>
+<Button sx={{ border: '1px dashed grey' }}>Save</Button>
```

For non-MUI components, use the `component` prop.

```diff
-<Box sx={{ border: '1px dashed grey' }}>
-  <button>Save</button>
-</Box>
+<Box component="button" sx={{ border: '1px dashed grey' }}>Save</Box>
```

## System props

As a CSS utility component, the `Box` also supports all [`system`](/system/properties/) properties. You can use them as prop directly on the component.
For instance, a margin-top:

```jsx
<Box mt={2}>
```

## Create your own `Box` component

If you want to have a different default theme for the `Box` component, you can create your own version of it, using the `createBox()` utility.

```js
import { createBox, createTheme } from '@mui/system';

const defaultTheme = createTheme({
  // your custom theme values
});

const Box = createBox({ defaultTheme });

export default Box;
```
