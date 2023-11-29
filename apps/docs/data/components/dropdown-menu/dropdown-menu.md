---
title: React Dropdown Menu component
components: DropdownMenu
---

# Dropdown Menu

<p class="description">A drop-down menu is toggle contextual overlays for displaying lists of links and more.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {DropdownMenu} from '@comfortdelgro/react-compass'
```
## Example

### Basic

{{"demo": "DropdownMenuBasic.tsx"}}

### DropdownMenu with Submenu

{{"demo": "DropdownMenuSub.tsx"}}

## Props

### `<DropdownMenu/>`

| Name         | Type                        | Default | Description                                       |
| :----------- | :-------------------------- | :------ | :------------------------------------------------ |
| isOpen       | `boolean`                   | `false` | Whether the overlay is open by default            |
| onOpenChange | `(isOpen: boolean) => void` | —       | Callback when popover change its opening state    |
| onClose      | `() => void`                | —       | Callback fired when the modal needs to be closed. |
| css          | `CSS`                       | —       |                                                   |

### `<DropdownMenu.Item/>`

| Name       | Type        | Default | Description                                                                                     |
| :--------- | :---------- | :------ | :---------------------------------------------------------------------------------------------- |
| children   | `ReactNode` | —       | The content of the dropdown Item                                                                |
| isDisabled | `boolean`   | false   | Whether the item is disabled.                                                                   |
| isActived  | `boolean`   | false   | Whether the item is actived.                                                                    |
| eventKey   | `string`    | null    | Value passed to the onSelect handler, useful for identifying the selected menu item.            |
| onSelect   | `Function`  | —       | A callback fired when a menu item is selected((event: React.MouseEvent, eventKey: any) => void) |
