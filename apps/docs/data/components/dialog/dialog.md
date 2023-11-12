---
title: React Dialog component
components: Dialog
---

# Dialog

<p class="description">These <b>Dialog</b> boxes can be used to raise and alert, or to get confirmation on any input or to have a kind of input from the users.
</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Dialog} from '@comfortdelgro/react-compass-old'
```

or

```jsx
import Dialog from '@comfortdelgro/react-compass-old/dialog'
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
