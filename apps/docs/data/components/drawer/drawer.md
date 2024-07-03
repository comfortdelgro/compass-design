---
title: React Drawer component
components: Drawer
---

# Drawer

<p class="description">Display overlay area on top of a page and slides in from the side. Build on top of the native HTML <strong>&#60;dialog/></strong> element.
</p>

{{"component": "components/ComponentLinkHeader.tsx"}}

```jsx
import {Drawer} from '@comfortdelgro/react-compass'
```

## Basic

{{"demo": "Drawer.tsx"}}

## Positions

{{"demo": "DrawerPosition.tsx"}}

## Non-modal mode

A Drawer that has no backdrop and also doesn't render on the top-layer. It can NOT be closed by pressing the `ESC` key.
The content below the non-modal drawer can be interacted.

{{"demo": "DrawerMode.tsx"}}

## Compound components

- `Drawer.Header` – a fully customizable header for drawer, usually contains a title and the close button.
- `Drawer.Footer` – bottom of drawer, usually contains actions.

## Accessibility

`Drawer` component build on top of the HTML [`<dialog/>`](https://developer.mozilla.org/docs/Web/HTML/Element/dialog) element.

By default, it respects the default accessibility behavior and settings of a `<dialog/>` element.

### Keyboard interactions

| Key                                               | Description                                                                        |
| :------------------------------------------------ | :--------------------------------------------------------------------------------- |
| <kbd>Escape</kbd>                                 | Close the drawer. This behavior will be disabled if `drawerMode` is `'non-modal'`. |
| <kbd>Tab</kbd> \| <kbd>Shift</kbd> <kbd>Tab</kbd> | Cycles through all the focusable elements of the drawer only.                      |

## Styling

### CSS Variables

| Variable                                | Default                          | Description                                                                 |
| :-------------------------------------- | :------------------------------- | :-------------------------------------------------------------------------- |
| `--cdg-drawer-animation-timing-fn`      | `cubic-bezier(0.32, 0.72, 0, 1)` | Drawer's animation timing function.                                         |
| `--cdg-drawer-open-animation-duration`  | `500ms`                          | Drawer's opening duration.                                                  |
| `--cdg-drawer-close-animation-duration` | `200ms`                          | Drawer's closing duration.                                                  |
| `--cdg-drawer-backdrop-bg`              | `rgba(0, 0, 0, 0.4)`             | Backdrop's background.                                                      |
| `--cdg-drawer-backdrop-blur`            | `0`                              | Backdrop blur effect. It will be used by `backdrop-filter`'s blur function. |
| `--cdg-drawer-backdrop-opacity`         | `1`                              | Backdrop's opacity.                                                         |

### Elements

`classNames` and `styles` are 2 more available options for styling the Drawer component and its child elements.<br/>
See the [Special Types section](#special-types) below for available selectors.

_Note:_

- Some examples and demos in the documentation use the `styles` prop for convenience, but it is not recommended to use the `styles` prop as the primary means of styling components,
  as the `classNames` prop is more flexible and has better performance.
- Styles in `styles[selector]` will be ignored if the related selector element's `style` property has already provided.

```jsx
<Drawer
  classNames={{header: 'from-classNames'}}
  styles={{header: {backgroundColor: 'red'}}}
>
  <Drawer.Header className='drawer-header' style={{backgroundColor: 'blue'}}>
    Header
  </Drawer.Header>
</Drawer>
```

In this case, `styles.header` will be ignored, the Drawer's header will have a blue background color. `Drawer.Header`'s class will be `'... drawer-header from-classNames'`

### Backdrop

We can customize the Drawer's backdrop by

- Using the <code>backdropProps</code> prop.
- Update related CSS variables.
- Apply styles directly to the <code>::backdrop</code> CSS pseudo-element.

{{"demo": "DrawerStyling.tsx"}}

## Component Props

### Special Types

| Name                     | Type                                                               | Description                                                         |
| :----------------------- | :----------------------------------------------------------------- | :------------------------------------------------------------------ |
| `DrawerStylingSelectors` | `'root' \| 'header' \| 'content' \| 'footer'`                      | Special styles APIs's available selectors (`classNames`, `styles`). |
| `BackdropProps`          | `{background?: string; blur?: string \| number; opacity?: number}` | `backdropProps` prop's options.                                     |

### Shared Props

| Name            | Type                                                     | Default     | Description                                                                                                                                                           |
| :-------------- | :------------------------------------------------------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `classNames`    | `Partial<Record<DrawerStylingSelectors, string>>`        | —           | Add provided className to the current `className` prop of related selector elements.<br/><small>See the [Styling section](#styling).</small>                          |
| `styles`        | `Partial<Record<DrawerStylingSelectors, CSSProperties>>` | —           | `styles[selector]` is applied to related selector element ONLY if its `style` property has not been provided.<br/><small>See the [Styling section](#styling).</small> |
| `backdropProps` | `BackdropProps`                                          | —           | Custom Drawer's backdrop styles.                                                                                                                                      |
| `variant`       | `'default'` \| `'mobile'`                                | `'default'` |                                                                                                                                                                       |
| `drawerMode`    | `'modal'` \| `'non-modal'`                               | `'modal'`   | `'modal'`<sup>(1)</sup><br/>`'non-modal'`<sup>(2)</sup>                                                                                                               |
| `preventFocus`  | `boolean`                                                | `false`     | If `true`, disable a default behavior of `<dialog>` element: Browser won't autofocus on the first nested focusable element anymore.                                   |
| `preventClose`  | `boolean`                                                | `false`     | If `true`, the drawer won't close when users press `Escape` key or click/tap on the backdrop.                                                                         |

### Variant `'default'`

| Name       | Type                                | Default   | Description                                          |
| :--------- | :---------------------------------- | :-------- | :--------------------------------------------------- |
| `position` | `'left'` \| `'bottom'` \| `'right'` | `'right'` | Side of the screen where drawer will be opened.      |
| `css`      | `CSS`                               | —         | A legacy common prop that allows styling components. |

\*: Required.

(1): Act the same as a default `<dialog/>`. It will be rendered on the top-layer with a backdrop. Everything other than the drawer and its contents will be ignored by the browsers and can't be interact with.<br/>
(2): It has no backdrop and also doesn't render on the top-layer. It can not be closed by pressing the `ESC` key. The content below the non-modal drawer can be interacted. [Read more](https://developer.mozilla.org/docs/Web/HTML/Element/dialog/#accessibility).
