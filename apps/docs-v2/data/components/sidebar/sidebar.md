---
title: React Sidebar component
components: Sidebar
---

# Sidebar

<p class="description">is an expandable and collapsible component that typically acts as a side container to place primary or secondary content alongside the main content.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Sidebar} from '@comfortdelgro/react-compass'
```

or

```jsx
import Sidebar from '@comfortdelgro/react-compass/sidebar'
```

## Example

### Primary

{{"demo": "SidebarPrimary.tsx"}}

### Custom styling

{{"demo": "SidebarSecondary.tsx"}}

## Props

| Name        | Type                     | Default   | Description                                                                             |
| :---------- | :----------------------- | :-------- | :-------------------------------------------------------------------------------------- |
| variant     | `primary` \| `secondary` | 'primary' | Variants                                                                                |
| position    | `left` \| `right`        | 'left'    | Display position of the side bar                                                        |
| handleClose | `Function`               | -         | Callback to close sidebar.                                                              |
| isOpen      | `boolean`                | false     | The sidebar is visible when true.                                                       |
| css         | `CSS`                    | —         | The system prop that allows defining system overrides as well as additional CSS styles. |
