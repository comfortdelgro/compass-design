---
title: React Modal component
components: Modal
---

# Modal

<p class="description">The Modal component is a flexible and customizable modal/dialog that can be used in various use cases like confirmation dialogs, information popups, and more.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Modal} from '@comfortdelgro/react-compass'
```

or

```jsx
import Modal from '@comfortdelgro/react-compass/modal'
```

## Example

### Basic

{{"demo": "ModalDefault.tsx"}}

### Modal Variant

{{"demo": "ModalVariant.tsx"}}

### Modal Nested

{{"demo": "ModalNested.tsx"}}

### H5

{{"demo": "ModalH5.tsx"}}

## Props

| Name            | Type                                                          | Default | Description                                                             |
| :-------------- | :------------------------------------------------------------ | :------ | :---------------------------------------------------------------------- |
| isOpen          | `boolean`                                                     | —       | If true, the modal is open.                                             |
| handleClose     | `() => void`                                                  | —       | Callback fired when the modal needs to be closed.                       |
| size            | `'sm'` \| `'md'` \| `'lg'`                                    | `md`    | Size of the modal. 'sm' for small, 'md' for medium, and 'lg' for large. |
| children        | `React.ReactNode`                                             | —       | The content of the component.                                           |
| disableBackdrop | `boolean`                                                     | `false` | If true, clicking the backdrop will not fire the handleClose callback.  |
| modalProps      | `React.HTMLAttributes<HTMLDivElement>`                        | —       | Additional props to be spread to the Modal component.                   |
| backdropProps   | `React.HTMLAttributes<HTMLDivElement>`                        | —       | Additional props to be spread to the backdrop (overlay) component.      |
| containerProps  | `React.HTMLAttributes<HTMLDivElement> & {className?: string}` | —       | Additional props to be spread to the container component.               |
