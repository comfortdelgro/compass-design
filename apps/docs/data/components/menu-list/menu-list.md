---
title: React MenuList component
components: MenuList
---

# MenuList

<p class="description">The Menu List component allows you to create a menu with expandable items.</p>

{{"component": "components/ComponentLinkHeader.tsx"}}

```jsx
import {MenuList, MenuListDropdown} from '@comfortdelgro/react-compass'
```

## Example

### Menu List

{{"demo": "MenuList.tsx"}}

### Disabled

{{"demo": "DisabledMenuList.tsx"}}

## Props

### MenuList

| Name     | Type              | Default | Description |
| :------- | :---------------- | :------ | :---------- |
| children | `React.ReactNode` | —       |             |
| css      | `CSS`             | —       |             |

### MenuListDropdown

| Name             | Type                        | Default | Description                                         |
| :--------------- | :-------------------------- | :------ | :-------------------------------------------------- |
| children\*       | `React.ReactNode`           | —       | The first child must be the trigger.                |
| isOpen           | `boolean`                   | —       | Whether the list is open by default (controlled).   |
| defaultOpen      | `boolean`                   | true    | Whether the list is open by default (uncontrolled). |
| onMenuListChange | `(isOpen: boolean) => void` | —       | Handler that is called when the list changes.       |
| css              | `CSS`                       | —       |                                                     |

### MenuListDropdown.Header

| Name      | Type                         | Default | Description |
| :-------- | :--------------------------- | :------ | :---------- |
| children  | `React.ReactNode`            | —       |             |
| leftIcon  | `React.ReactNode` \| `false` | true    |             |
| rightIcon | `React.ReactNode` \| `true`  | false   |             |
| css       | `CSS`                        | —       |             |

### MenuListDropdown.Item

| Name       | Type              | Default | Description                                    |
| :--------- | :---------------- | :------ | :--------------------------------------------- |
| children   | `React.ReactNode` | —       |                                                |
| isActive   | `boolean`         | false   | Whether the item is currently activated or not |
| isDisabled | `boolean`         | false   | Whether the item is currently disabled or not  |
| icon       | `ReactNode`       | —       |                                                |
| css        | `CSS`             | —       |                                                |
