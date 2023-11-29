---
title: React List component
components: List
---

# List

<p class="description">Lists show a large set of items or options to the user.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {List, ListCard, InteractiveList} from '@comfortdelgro/react-compass'
```

## Example

### Basic

{{"demo": "ListBasic.tsx"}}

### Disabled

{{"demo": "DisabledList.tsx"}}

### Size

{{"demo": "SizeList.tsx"}}

### Variant

{{"demo": "VariantList.tsx"}}

### ListCard

{{"demo": "ListCard.tsx"}}

### Variant

{{"demo": "VariantList.tsx"}}

### List Interactive

{{"demo": "ListInteractive.tsx"}}

### Drag And Drop

{{"demo": "ListDragDrop.tsx"}}

## Props

### List

| Name         | Type                                        | Default       | Description                      |
| :----------- | :------------------------------------------ | :------------ | :------------------------------- |
| leftInfo     | `React.ReactNode`                           | —             | Left side information component  |
| title        | `string`                                    | —             |                                  |
| description  | `string`                                    | —             |                                  |
| rightInfo    | `{ text?: string, icon?: React.ReactNode }` | —             | Right side information component |
| rightContent | `React.ReactNode`                           | —             | Right side content               |
| isDisabled   | `boolean`                                   | —             |                                  |
| variant      | `"item" \| "interactive"`                   | `interactive` |                                  |
| css          | `CSS`                                       | —             |                                  |

### List.Image

| Name | Type  | Default | Description |
| :--- | :---- | :------ | :---------- |
| css  | `CSS` | —       |             |

### ListCard

| Name             | Type              | Default | Description                         |
| :--------------- | :---------------- | :------ | :---------------------------------- |
| title            | `string`          | —       |                                     |
| badge            | `React.ReactNode` | —       |                                     |
| description      | `string`          | —       |                                     |
| showActionButton | `boolean`         | —       | Whether the action button is showed |
| isDisabled       | `boolean`         | —       |                                     |
| css              | `CSS`             | —       |                                     |

### ListCard.Detail

| Name        | Type              | Default | Description |
| :---------- | :---------------- | :------ | :---------- |
| title       | `string`          | —       |             |
| description | `string`          | —       |             |
| avatar      | `React.ReactNode` | —       |             |
| css         | `CSS`             | —       |             |

### InteractiveList

| Name       | Type                      | Default | Description                |
| :--------- | :------------------------ | :------ | :------------------------- |
| groupLabel | `React.ReactNode`         | —       |                            |
| avatar     | `React.ReactNode`         | —       |                            |
| title      | `string`                  | —       |                            |
| variant    | `'default' \| 'dropdown'` | —       |                            |
| showIcon   | `boolean`                 | —       | Whether the icon is showed |
| css        | `CSS`                     | —       |                            |

### DragAndDropList

| Name                     | Type       | Default | Description                                                |
| :----------------------- | :--------- | :------ | :--------------------------------------------------------- |
| onReorder                | `Function` | —       | Fire when drag and drop an items, returned an event object |
| onReorderonReorderByKeys | `Function` | —       | Fire when drag and drop an items, returned an array keys   |
| css                      | `CSS`      | —       |                                                            |

### DragAndDropList.Item

| Name      | Type                  | Default | Description                                                                             |
| :-------- | :-------------------- | :------ | :-------------------------------------------------------------------------------------- |
| title     | `string`              | —       | The title of the tab.                                                                   |
| key       | `Key`                 | —       | The key of the tab.                                                                     |
| children  | `ReactNode`\|`String` | —       | The content of the tab Item                                                             |
| className | `String`              | -       | Extra class name for tab                                                                |
| css       | `CSS`                 | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
