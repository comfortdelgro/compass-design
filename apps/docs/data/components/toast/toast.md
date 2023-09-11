---
title: React Page Toast component
components: Toast
---

# Toast

<p class="description">Toasts provide brief notifications.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Sidebar} from '@comfortdelgro/react-compass'
```

or

```jsx
import Sidebar from '@comfortdelgro/react-compass/progress'
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


| Name        | Type                                                   | Default   | Description                                                                             |
| :---------- | :----------------------------------------------------- | :-------- | :-------------------------------------------------------------------------------------- |
| color       | `informative` \| `neutral` \| `negative` \| `positive` | 'neutral' | Variants                                                                                |
| handleClose | `Function`                                             | -         | Callback to close toast.                                                                |
| isOpen      | `boolean`                                              | false     | The toast is visible when true.                                                         |
| autoClose   | `false` \| `number`                                    | false     | Number of miliseconds to auto close.                                                    |
| css         | `CSS`                                                  | —         | The system prop that allows defining system overrides as well as additional CSS styles. |