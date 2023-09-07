---
title: React Checkbox component
components: Checkbox
---

# Checkbox

<p class="description">Checkbox is a small interactive box that can be toggled by the user to indicate an affirmative or negative choice.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Checkbox} from '@comfortdelgro/react-compass'
```

or

```jsx
import Checkbox from '@comfortdelgro/react-compass/checkbox'
```

## Example

### Controlled

{{"demo": "CheckboxDefault.tsx"}}

### Uncontrolled

{{"demo": "CheckboxUncontrolled.tsx"}}

### Variants

{{"demo": "CheckboxVariant.tsx"}}

## Props

| Name            | Type                     | Default | Description |
| :-------------- | :----------------------- | :------ | :---------- |
| isSelected      | boolean                  | —       |             |
| variant         | `'default' or 'rounded'` | —       |             |
| isIndeterminate | boolean                  | —       |             |
| defaultSelected | boolean                  | —       |             |
| isDisabled      | boolean                  | —       |             |
| css             | `CSS`                    | —       |             |
