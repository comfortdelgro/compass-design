---
title: React Drawer component
components: Drawer
---

# Drawer

<p class="description">Display overlay area on top of a page and slides in from the side. Build on top of the native HTML <strong>&#60;dialog/></strong> element.
</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Drawer} from '@comfortdelgro/react-compass'
```

or

```jsx
import Drawer from '@comfortdelgro/react-compass/drawer'
```

## Usage

### Basic

{{"demo": "Drawer.tsx"}}

### Positions

{{"demo": "DrawerPosition.tsx"}}

### H5 variant

{{"demo": "DrawerH5.tsx"}}

### Non-modal mode

A Drawer that has no backdrop and also doesn't render on the top-layer. It can NOT be closed by pressing the `ESC` key.
The content below the non-modal drawer can be interacted.

{{"demo": "DrawerMode.tsx"}}

## Control behavior

{{"demo": "DrawerCustomize.tsx"}}

## Compound components

- `Drawer.Header` – a fully customizable header for drawer, usually contains a title and the close button.
- `Drawer.Footer` – bottom of drawer, usually contains action buttons.

## Accessibility

`Drawer` component build on top of the native HTML [`<dialog/>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog/) element.

By default, it respects the default accessibility behavior and settings of a `<dialog/>` element.

### Keyboard interactions

| Key                                               | Description                                                                        |
| :------------------------------------------------ | :--------------------------------------------------------------------------------- |
| <kbd>Escape</kbd>                                 | Close the drawer. This behavior will be disabled if `drawerMode` is `'non-modal'`. |
| <kbd>Tab</kbd> \| <kbd>Shift</kbd> <kbd>Tab</kbd> | Cycles through all the focusable elements of the drawer only                       |

## Component Props

### Common Props

| Name           | Type                       | Default     | Description                                                                                                                         |
| :------------- | :------------------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `css`          | `CSS`                      | —           | The system prop that allows defining system overrides as well as additional CSS styles.                                             |
| `variant`      | `'default'` \| `'h5'`      | `'default'` |                                                                                                                                     |
| `drawerMode`   | `'modal'` \| `'non-modal'` | `'modal'`   | `'modal'`<sup>(1)</sup><br/>`'non-modal'`<sup>(2)</sup>                                                                             |
| `preventFocus` | `boolean`                  | `false`     | If `true`, disable a default behavior of `<dialog>` element: Browser won't autofocus on the first nested focusable element anymore. |
| `preventClose` | `boolean`                  | `false`     | If `true`, the drawer won't close when users press `Escape` key or click/tap on the backdrop.                                       |

### Variant `'default'`

| Name       | Type                                | Default   | Description                                     |
| :--------- | :---------------------------------- | :-------- | :---------------------------------------------- |
| `position` | `'left'` \| `'bottom'` \| `'right'` | `'right'` | Side of the screen where drawer will be opened. |

### Variant `'h5'`

| Name                 | Type                          | Default                                                              | Description                                                                                                                                                                                                                                |
| :------------------- | :---------------------------- | :------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expanderCSS`        | `CSS`                         | —                                                                    | Allows to custom CSS styles for the expander (use for drag & drop).                                                                                                                                                                        |
| `onExpandChange`     | `(isExpand: boolean) => void` | —                                                                    | Trigger when the H5 drawer expanded.                                                                                                                                                                                                       |
| `expandedPoint`      | `number`                      | `100` - <small>the top edge of available viewport</small>            | How many **percentage** of the viewport height that the drawer will be fully expanded.<br/><small>Accepted value range: `0` - `100`<br/>Must be greater than `expandableLine` and the drawer initialization height (percent).</small>      |
| `expandableLine`     | `number`                      | `67` - <small>2/3 viewport from bottom of available viewport</small> | A boundary to tell the drawer to fully expand when its top crosses this line.<br/><small>Accepted value range: `0` - `100`<br/>It must be smaller than `expandedPoint` and greater than drawer initialization height (percentage).</small> |
| `disableResize`      | `boolean`                     | `true`                                                               | If `true`, the H5 drawer will NOT be able to expand/collapse and the expander line will be hidden.                                                                                                                                         |
| `disableDragClose`   | `boolean`                     | `true`                                                               | If `true`, the H5 drawer will NOT close itself if user drags and drops it below the default height.                                                                                                                                        |

(1): Act the same as a default `<dialog/>`. It will be rendered on the top-layer with a backdrop. Everything other than the drawer and its contents will be ignored by the browsers and can't be interact with.<br/>
(2): It has no backdrop and also doesn't render on the top-layer. It can not be closed by pressing the `ESC` key. The content below the non-modal drawer can be interacted. [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog/#accessibility_considerations).
