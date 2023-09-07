---
title: React Popover component
components: Popover
---

# Popover

<p class="description">When you want to show a content on above and anchor with an element when user click on it, just use this component follow this guidelines.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Popover} from '@comfortdelgro/react-compass'
```

or

```jsx
import Popover from '@comfortdelgro/react-compass/popover'
```

## Example

### Default

{{"demo": "Popover.tsx"}}


## Props

| Name             | Type                                                                             | Default        | Description                                                                                               |
| :--------------- | :------------------------------------------------------------------------------- | :------------- | :-------------------------------------------------------------------------------------------------------- |
| anchor           | `React.ReactNode`                                                                | `-`            | Element that when you click on to show the Popover                                                        |
| isOpen           | `boolean`                                                                        | `-`            | Let Popover content open                                                                                  |
| offset           | `number`                                                                         | `10`           | Distance from anchor to popover content                                                                   |
| direction        | `bottom-right` `bottom-left` `bottom-center` `top-right` `top-left` `top-center` | `bottom-right` | Direction of Popover content                                                                              |
| `css `           | `CSS`                                                                            | —              |                                                                                                           |
| onClose          | `() => void`                                                                     |                | Callback to close popover                                                                                 |
| isFloatingPortal | `boolean`                                                                        | `true`         | If true, it would render the popover outside of the current React Tree, just like createPortal from React |
