---
title: React Drawer component
components: Drawer
---

# Drawer

<p class="description">Display overlay area on top of a page and slides in from the side. Build on top of the native HTML `<dialog/>` element.
</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Drawer} from '@comfortdelgro/react-compass'
```

or

```jsx
import Drawer from '@comfortdelgro/react-compass/drawer'
```
## Example

{{"demo": "Drawer.tsx"}}

## Props

| Name           | Type        | Default | Description                                                                             |
| :------------- | :---------- | :------ | :-------------------------------------------------------------------------------------- |
| children \*    | `ReactNode` | —       | The content to display in the accordion.                                                |
| hasCloseButton | `Boolean`   | `false` | Whether the close button is shown.                                                      |
| isErrored      | `boolean`   | `false` | Error state when dropdown is isErrored                                                  |
| onClick        | `Function`  | —       | Fire click to the close button.                                                         |
| css            | `CSS`       | —       | The system prop that allows defining system overrides as well as additional CSS styles. |