---
title: React Sidenav component
components: Sidenav
---

# Sidenav

<p class="description">The Sidenav displays horizontally information and navigation relating to the current screen.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Sidenav} from '@comfortdelgro/react-compass'
```

or

```jsx
import Sidenav from '@comfortdelgro/react-compass/sidenav'
```

## Example

### Sidenav

{{"demo": "SidenavBasic.tsx"}}
### Expand

{{"demo": "SidenavExpand.tsx"}}

### Delay

{{"demo": "SidenavDelay.tsx"}}

### Sidenav menu

{{"demo": "SidenavMenu.tsx"}}

### Sidenav item

{{"demo": "SidenavItem.tsx"}}

### Sidenav divider

{{"demo": "SidenavDivider.tsx"}}

## Props

### Sidenav

| Name     | Type              | Default | Description                                                      |
| :------- | :---------------- | :------ | :--------------------------------------------------------------- |
| children | `React.ReactNode` | —       |                                                                  |
| expand   | `boolean`         | false   | Whether the Sidenav is expanded by default or expanded by hover. |
| delay    | `number`          | 0       | The number of milliseconds to wait before expanding the sidenav. |
| css      | `CSS`             | —       |                                                                  |

### Sidenav Item

| Name       | Type              | Default | Description                                                                                                          |
| :--------- | :---------------- | :------ | :------------------------------------------------------------------------------------------------------------------- |
| children\* | `React.ReactNode` | —       | Accept only three children. First one should be Icon, second child should be title, the last one is for sidenav menu |
| isActive   | `boolean`         | false   | Whether the item is currently activated or not                                                                       |
| css        | `CSS`             | —       |                                                                                                                      |

### Sidenav Menu

| Name         | Type                              | Default                   | Description                                           |
| :----------- | :-------------------------------- | :------------------------ | :---------------------------------------------------- |
| children     | `React.ReactNode`                 | —                         | Should be Sidenav Item                                |
| isOpen       | `boolean`                         | false                     | Controlled opening state                              |
| placement    | `Placement`                       | 'right-start'             | Popover placement                                     |
| delay        | `{open?: number, close?: number}` | `{open: 150, close: 100}` | Delay time before popover appear or disappear         |
| shouldFlip   | `boolean`                         | true                      | Whether popover should flip side when not enough room |
| onOpenChange | `(isOpen: boolean) => void`       | —                         | Callback when popover change its opening state        |

### Sidenav Divider

| Name | Type  | Default | Description |
| :--- | :---- | :------ | :---------- |
| css  | `CSS` | —       |             |
