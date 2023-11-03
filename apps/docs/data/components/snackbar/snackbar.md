---
title: React Page Snackbar component
components: Snackbar
---

# Snackbar

<p class="description">Snackbars provide brief messages of a process that an app has performed or will perform at the bottom of the screen.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import Snackbar from '@comfortdelgro/react-compass/snackbar'
```

or

```jsx
import {Snackbar} from '@comfortdelgro/react-compass'
```

## Examples

### Default

{{"demo": "SnackbarDefault.tsx"}}

### Snackbar as a service

#### Note: Snackbar As A Service has an API that makes it easy to display snackbars, without having to handle their open/close state.

#### Store multiple snackbars and display them in the same container.

{{"demo": "SnackbarAsService.tsx"}}

## Props

### `<Snackbar/>`

| Name        | Type                                                                    | Default   | Description                                                                                                      |
| :---------- | :---------------------------------------------------------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------- |
| type        | `default` \| `error` \| `warning` \| `success`\| `reminder`\| `ongoing` | 'default' | Variants                                                                                                         |
| handleClose | `Function`                                                              | -         | Callback to close snackbar.                                                                                      |
| onClick     | `Function`                                                              | -         | Callback fired on clicking the entire snackbar, including 2 paramerters: the event and the optional snackbar id. |
| isOpen      | `boolean`                                                               | false     | The snackbar is visible when true.                                                                               |
| autoClose   | `false` \| `number`                                                     | false     | Number of miliseconds to auto close.                                                                             |
| css         | `CSS`                                                                   | —         | The system prop that allows defining system overrides as well as additional CSS styles.                          |
| portalTo    | `HTMLElement`                                                           | -         | Using ReactPortals to create portal to an element, example document.body                                         |

### `useSnackbar()`

##### Used for Children component located in Snackbar Context Provider to add/remove current Snackbar

| Name     | Type       | Default | Description                                        |
| :------- | :--------- | :------ | :------------------------------------------------- |
| show     | `Function` | -       | Call to add snackbar to show in SnackbarContainer. |
| remove   | `Function` | -       | Call to remove snackbar from SnackbarContext.      |
| clearAll | `Function` | —       | Call to remove all snackbars from SnackbarContext. |

### `SnackbarContextProvider`

##### Store multiple snackbars and display them in the same container and handle snackbar's open/close state.

| Name         | Type  | Default | Description                                                                                                                                                                        |
| :----------- | :---- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| containerCSS | `CSS` | `{}`    | Additional CSS to the snackbars container. It can be used to override the inset of the container in case you dont want the snackbars to cover any floating elements on the screen. |
