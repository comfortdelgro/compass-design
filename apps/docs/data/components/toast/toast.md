---
title: React Page Toast component
components: Toast
---

# Toast

<p class="description">Toasts provide brief notifications.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import Toast from '@comfortdelgro/react-compass/toast'
```

or

```jsx
import {Toast} from '@comfortdelgro/react-compass'
```

## Examples

### Default

{{"demo": "ToastDefault.tsx"}}

### Color

{{"demo": "ToastColor.tsx"}}

### Auto Close

{{"demo": "ToastAutoClose.tsx"}}

### Toast as a service

#### Note: Toast As AService has an API that makes it easy to display toasts, without having to handle their open/close state.

#### Store multiple toasts and display them in the same container.

{{"demo": "ToastAsAService.tsx"}}

## Props

### `<Toast/>`

| Name         | Type                                                   | Default                                      | Description                                                                             |
| :----------- | :----------------------------------------------------- | :------------------------------------------- | :-------------------------------------------------------------------------------------- |
| color        | `informative` \| `neutral` \| `negative` \| `positive` | 'neutral'                                    | Variants                                                                                |
| handleClose  | `Function`                                             | -                                            | Callback to close toast.                                                                |
| isOpen       | `boolean`                                              | false                                        | The toast is visible when true.                                                         |
| autoClose    | `false` \| `number`                                    | false                                        | Number of miliseconds to auto close.                                                    |
| css          | `CSS`                                                  | —                                            | The system prop that allows defining system overrides as well as additional CSS styles. |
| portalTo     | `HTMLElement`                                          | -                                            | Using ReactPortals to create portal to an element, example document.body                |
| anchorOrigin | `Anchor`                                               | `{horizontal: 'center', vertical: 'center'}` | Placements of Toast.                                                                    |

### `useToast()`

##### Used for Children component located in Toast Context Provider to add/remove current Toast

| Name     | Type       | Default | Description                                  |
| :------- | :--------- | :------ | :------------------------------------------- |
| show     | `Function` | -       | Call to add toast to show in ToastContainer. |
| remove   | `Function` | -       | Call to remove toast from ToastContext.      |
| clearAll | `Function` | —       | Call to remove all toasts from ToastContext. |

### `ToastContextProvider`

##### Store multiple toasts and display them in the same container and handle toast's open/close state.

| Name         | Type     | Default                                  | Description                   |
| :----------- | :------- | :--------------------------------------- | :---------------------------- |
| anchorOrigin | `Anchor` | `{horizontal: 'right', vertical: 'top'}` | Placements of ToastContainer. |
