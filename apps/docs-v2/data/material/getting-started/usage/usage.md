# Usage

<p class="description">Learn the basics of working with Material UI components.</p>

## Quickstart

The following code snippet demonstrates a simple app that uses the Material UI [Button](/material-ui/react-button/) component:

```jsx
import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyApp() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}
```

You can play around with this code in the interactive Code Sandbox demo below.
Try changing the `variant` on the Button to `outlined` to see how the style changes:

{{"demo": "Usage.js", "hideToolbar": true, "bg": true}}

## Globals

Since Material UI components are built to function in isolation, they don't require any kind of globally scoped styles.
For a better user experience and developer experience, we recommend adding the following globals to your app.

### Responsive meta tag

Material UI is a _mobile-first_ component library—we write code for mobile devices first, and then scale up the components as necessary using CSS media queries.

To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>` element:

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
```

### CssBaseline

Material UI provides an optional [CssBaseline](/material-ui/react-css-baseline/) component.
It fixes some inconsistencies across browsers and devices while providing resets that are better tailored to fit Material UI than alternative global style sheets like [normalize.css](https://github.com/necolas/normalize.css/).

### Default font

Material UI uses the Roboto font by default.
See [Installation—Roboto font](/material-ui/getting-started/installation/#roboto-font) for complete details.
