---
title: React Alert component
components: Alert
---

# Alert

<p class="description">Alerts provide short, timely, and relevant information for your users without interrupting their tasks.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {Alert} from '@comfortdelgro/react-compass-old'
```

or

```js
import Alert from '@comfortdelgro/react-compass-old/alert'
```

## Example

### Basic Example

{{"demo": "AlertBasic.tsx"}}

### Dismissible Alert

{{"demo": "AlertDismissible.tsx"}}

### Icons

{{"demo": "AlertIconProp.tsx"}}

### Custom Alert

{{"demo": "AlertCustom.tsx"}}

## Props

| Name        | Type                   | Default | Description                                                                             |
| :---------- | :--------------------- | :------ | :-------------------------------------------------------------------------------------- |
| children    | `ReactNode` \|`String` | —       | The content to display in th alerts.                                                    |
| dismissible | `boolean`              | `false` | If true, show the close icon.                                                           |
| onDismiss   | `function`             | —       | Callback to close the alerts.                                                           |
| icon        | `ReactNode` \| `false` | —       | The icon of the alerts. It'd disappear if the value is false.                           |
| css         | `CSS`                  | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
