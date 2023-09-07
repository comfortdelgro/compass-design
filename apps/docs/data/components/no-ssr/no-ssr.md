---
title: React No-SSR component
components: No-SSR
---

# No-SSR

<p class="description">The No-SSR component defers the rendering of children components from the server to the client.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {NoSsr} from '@comfortdelgro/react-compass'
```

or

```jsx
import NoSsr from '@comfortdelgro/react-compass/nossr'
```

## No-SSR is a component that prevents rendering its children on the server. It has various uses:

- It is helpful when dealing with dependencies that do not support server-side rendering (SSR).
- It improves the initial loading time by only rendering the visible content.
- It reduces server rendering workload and can improve performance.
- It allows for service degradation during heavy server load.
- With the defer option, it prioritizes essential content for quicker interactivity.

## Delay client-side rendering

No-SSR can be used to delay rendering certain components on the client side. This is useful when you want the rest of the application to load before dealing with complex or data-heavy components.

{{"demo": "NoSsr.tsx"}}

## Props:

| Name  | Type      | Default | Description                                                                                                                                         |
| :---- | :-------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| defer | `boolean` | false   | If true, the component will not only prevent server-side rendering. It will also defer the rendering of the children into a different screen frame. |

**The component cannot hold a ref**
