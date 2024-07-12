---
title: React Dialog component
components: Dialog
---

# Dialog

<p class="description">These <b>Dialog</b> boxes can be used to raise and alert, or to get confirmation on any input or to have a kind of input from the users.
</p>


```jsx
import {Dialog} from '@comfortdelgro/react-compass'
```

## Example

### Basic

{{"demo": "DialogBasic.tsx"}}

### Variant Dialog

{{"demo": "DialogVariant.tsx"}}

### Nested Dialog

{{"demo": "DialogNested.tsx"}}

## Props

| Name    | Type                        | Default | Description |
| :------ | :-------------------------- | :------ | :---------- |
| onClose | `() => void`                | —       |             |
| variant | `"confirmation" or "alert"` | —       |             |
| css     | `CSS`                       | —       |             |
