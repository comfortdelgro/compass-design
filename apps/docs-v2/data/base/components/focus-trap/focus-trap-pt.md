---
productId: base-ui
title: React Focus Trap component
components: FocusTrap
githubLabel: 'component: FocusTrap'
---

# Focus Trap

<p class="description">The FocusTrap component prevents the user's focus from escaping its children components.</p>

## Introduction

`FocusTrap` is a utility component that is useful when implementing an overlay such as a [modal dialog](/base-ui/react-modal/), which should block all interactions outside of it while open.

{{"component": "modules/components/ComponentLinkHeader.js", "design": false}}

## Component

### Usage

After [installation](/base-ui/getting-started/quickstart/#installation), you can start building with this component using the following basic elements:

```jsx
import FocusTrap from '@mui/base/FocusTrap';

export default function MyApp() {
  return <FocusTrap>{/* children where the focus will be trapped */}</FocusTrap>;
}
```

### Basics

`FocusTrap` wraps around the UI elements that should hold the user's focus. For instance, if the focus needs to stay inside of a [`MenuUnstyled`](/base-ui/react-menu/), then the component will be structured like this:

```jsx
<FocusTrap>
  <MenuUnstyled>
    <MenuItemUnstyled>{/* item one */}</MenuItemUnstyled>
    <MenuItemUnstyled>{/* item two */}</MenuItemUnstyled>
  </MenuUnstyled>
</FocusTrap>
```

The following demo shows a `<button>` that opens a [`Box`](/material-ui/react-box/) component nested inside of a `FocusTrap`. As long as the `Box` is open, the user's keyboard cannot interact with the rest of the app. Press the **Open** button and then use the <kbd class="key">Tab</kbd> key to move the focus—notice that it will not leave the `Box`:

{{"demo": "BasicFocusTrap.js"}}

:::error
Because the `FocusTrap` component blocks interaction with the rest of the app by default, the demo above also behaves this way. If you leave the `Box` open in the demo, you won't be able to click on other buttons in this document. Click **Close** in the demo to resolve this.

The next section explains how to change this default behavior.
:::

## Customization

### Disable enforced focus

By default, clicks outside of the `FocusTrap` component are blocked.

You can disable this behavior with the `disableEnforceFocus` prop.

Compare the following demo with the demo from the [Basics section](#basics)—notice how that demo prevents you from clicking outside of it, while this one allows it:

{{"demo": "DisableEnforceFocus.js"}}

### Lazy activation

By default, the `FocusTrap` component automatically moves the focus to the first of its children when the `open` prop is present.

You can disable this behavior and make it lazy with the `disableAutoFocus` prop. When auto focus is disabled—as in the demo below—the component only traps the focus once the user moves it there:

{{"demo": "LazyFocusTrap.js"}}

### Escape the focus loop

The following demo uses the [`Portal`](/base-ui/react-portal/) component to render a subset of the `FocusTrap` children into a new "subtree" outside of the current DOM hierarchy, so they are no longer part of the focus loop:

{{"demo": "PortalFocusTrap.js"}}

### Using a toggle inside the trap

The most common use case for the `FocusTrap` component is to maintain focus within a [modal](/base-ui/react-modal/) component that is entirely separate from the element that opens the modal. But you can also create a toggle button for the `open` prop of the `FocusTrap` component that is stored inside of the component itself, as shown in the following demo:

{{"demo": "ContainedToggleTrappedFocus.js"}}
