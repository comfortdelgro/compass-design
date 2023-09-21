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

{{"demo": "ToastAsAService.tsx"}}

## Props

### `<Toast/>`

| Name        | Type                                                   | Default   | Description                                                                             |
| :---------- | :----------------------------------------------------- | :-------- | :-------------------------------------------------------------------------------------- |
| color       | `informative` \| `neutral` \| `negative` \| `positive` | 'neutral' | Variants                                                                                |
| handleClose | `Function`                                             | -         | Callback to close toast.                                                                |
| isOpen      | `boolean`                                              | false     | The toast is visible when true.                                                         |
| autoClose   | `false` \| `number`                                    | false     | Number of miliseconds to auto close.                                                    |
| portalTo    | `HTMLElement`                                          | -         | Using ReactPortals to create portal to an element, example document.body                |
| css         | `CSS`                                                  | —         | The system prop that allows defining system overrides as well as additional CSS styles. |

### `useToast()`

| Name     | Type       | Default | Description                                  |
| :------- | :--------- | :------ | :------------------------------------------- |
| show     | `Function` | -       | Call to add toast to show in ToastContainer. |
| remove   | `Function` | -       | Call to remove toast from ToastContext.      |
| clearAll | `Function` | —       | Call to remove all toasts from ToastContext. |

### `ToastContextProvider`

| Name         | Type     | Default                                  | Description                   |
| :----------- | :------- | :--------------------------------------- | :---------------------------- |
| anchorOrigin | `Anchor` | `{horizontal: 'right', vertical: 'top'}` | Placements of ToastContainer. |
