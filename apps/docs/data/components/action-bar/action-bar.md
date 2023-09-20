---
title: React Actionbar component
components: Action Bar
---

# Action Bar

<p class="description">The ActionBar component is a versatile user interface element that provides a cohesive grouping of buttons, icons, and interactive elements within a container.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {ActionBar} from '@comfortdelgro/react-compass'
```

or

```jsx
import ActionBar from '@comfortdelgro/react-compass/action-bar'
```

## Example

### Default

{{"demo": "ActionBarDefault.tsx"}}

### Center

{{"demo": "ActionBarCenter.tsx"}}

### Left

{{"demo": "ActionBarLeft.tsx"}}

### Right

{{"demo": "ActionBarRight.tsx"}}

## Props

| Name     | Type        | Default | Description                                                                             |
| :------- | :---------- | :------ | :-------------------------------------------------------------------------------------- |
| children | `ReactNode` | —       | The content to display in the accordion.                                                |
| css      | `CSS`       | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
