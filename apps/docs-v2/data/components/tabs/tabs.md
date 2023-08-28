---
title: React Tabs component
components: Tabs
---

# Tabs

<p class="description">Provides the behavior and accessibility implementation for a tab list. Tabs organize content into multiple sections and allow users to navigate between them.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Tabs, TabsProps} from '@comfortdelgro/react-compass'
```

or

```jsx
import {Tabs, TabsProps} from '@comfortdelgro/react-compass/tabs'
```

## Example

### Basic

{{"demo": "TabsBasic.tsx"}}

### Variants

{{"demo": "TabsVariants.tsx"}}

### Server Interaction

{{"demo": "TabsServerInteraction.tsx"}}

## Props

### `<Tabs/>` | `<Tabs.Paneless/>`:

| Name               | Type                               | Default      | Description                                                                                              |
| :----------------- | :--------------------------------- | :----------- | :------------------------------------------------------------------------------------------------------- |
| children\*         | `ReactNode`                        | —            | The contents of the collection.                                                                          |
| variant            | `rounded`,`simple`                 | `rounded`    | Style of the tab                                                                                         |
| orientation        | `horizontal`\|`vertical`           | `horizontal` | Direction of the tab                                                                                     |
| icon               | `none` \| `left`\| `right`\| `top` | `none`       | Display icon in tab content                                                                              |
| isDisabled         | `boolean`                          | `false`      | Whether the Tabs are disabled. Shows that a selection exists, but is not available in that circumstance. |
| disabledKeys       | `Key[]`                            | —            | The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.  |
| defaultSelectedKey | `Key`                              | —            | The currently selected key in the collection (uncontrolled).                                             |
| selectedKey        | `Key`                              | —            | The currently selected key in the collection (controlled).                                               |
| onSelectionChange  | `(value) => void`                  | —            | Handler that is called when the selection changes.                                                       |
| keyboardActivation | `automatic`\|`manual`              | `automatic`  | Whether tabs are activated automatically on focus or manually.                                           |
| textColor          | `String`                           | —            | Color for the active tab.                                                                                |
| indicatorColor     | `String`                           | —            | Color for the indicator.                                                                                 |
| className          | `String`                           | —            | Extra class name for tab.                                                                                |
| css                | `CSS`                              | —            | The system prop that allows defining system overrides as well as additional CSS styles.                  |

### `<Tab.Item/>` :

| Name      | Type                    | Default | Description                                                                             |
| :-------- | :---------------------- | :------ | :-------------------------------------------------------------------------------------- |
| title     | `string`                | —       | The title of the tab.                                                                   |
| key       | `Key`                   | —       | The key of the tab.                                                                     |
| children  | `ReactNode` \| `String` | —       | The content of the tab Item                                                             |
| className | `String`                | -       | Extra class name for tab                                                                |
| css       | `CSS`                   | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
