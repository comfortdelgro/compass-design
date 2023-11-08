# Guidelines for enhancing React-Compass to accommodate server components

## You just need to read this file if you want to know what goes behind the scene. If you just want to know how to convert our current components to server-supported components, you can just read the code of Chip component (static/src/chip).

To support server components, we need to do the following:

1. add directive to our components' ts files.
2. remove `@stitches/react` and replace it with css module.

The first task is easy but the second one is tricky because we want to keep it backward compatible and `@stitches/react` brings a lot of features that are hard to re-create.

These are the main features of `@stitches/react` that are being used by CDG's teams. We need to replicate them with vanilla JavaScript and css module:

## 1. "css" prop (Tai has already done it, now we just need to implement it to all components)

This prop is a way to apply custom styling to our components.
This "css" prop is powerful than "style' prop because it allows:

a. Nesting
b. Variables

Example:

```js
<Chip>
  hasCloseButton css=
  {{
    border: '1px solid purple',
    '&:hover': {color: '$success'},
    '& > div:first-child': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        height: '$8',
        width: '2rem',
      },
    },
  }}> Close button
</Chip>
```

Note: "css" prop in `@stitches/react` even allows new variable assignment. However, this feature is mostly needed on the library side; users do not really need it. So we can ignore this feature for now.

Example of new variable assignment through "css" prop in `@stitches/react`:

```js
<StyledTransition
  css={{
    $$speed: `${speed}s`,
    $$collapsedSize: collapsedSize ?? `${childrenHeight}px`,
    $$collapseDirection: collapseDirection,
    $$slideDirection: determineSlideDirection(),
    ...css,
  }}
  ref={TransitionWrapperRef}
  effect={effect}
  show={show}
  orientation={effect === 'collapse' ? orientation : 'none'}
  {...htmlProps}
>
  {renderChildren()}
</StyledTransition>
```

This step of replicating "css" prop involves creating new folder called "theme-static".

This "theme-static" folder will contain theme.ts and theme.module.css.

"theme/theme.ts" containes vanilla JavaScript version of light/dark theme object for our new "css" prop to loop through to find the meanings of variables. For example, with the above example of component Chip, the new "css" prop will loop through objects in "theme/theme.ts" to know that "$8" means "2rem" and "$success" means "#107C10".

"theme/theme.module.css" is just the "theme/theme.ts" re-written in css so that the components' .module.css files can import and use its css variables.

Note: for every change in terms of theming, we need to make update to both of these files. In the future, we might spend time writing script to automate that process.

## 2. Dark theme (Tai has already done it, now we just need to implement it to all components)

To apply dark theme to our components from our end, we need to create 2 ".module.css" files for each component.

For example, for our Chip (static/src/chip) component, we have "styles/light.module.css" and "styles/dark.module.css". The first one is applied when useIsLightTheme() is true, and the second one is applied when useIsLightTheme() is false.

You can go Chip (static/src/chip) component to see how this is implemented.

Note: to generate the file 'dark.module.css', you just have to copy the content of 'light.module.css' and replace all the word 'lightTheme' with 'darkTheme'. In the future, we might spend time writing a script to automate this process.

## 2. Styled Component and Light Theme Object (These are exported from "theme/stitches.config.ts" file) (Keep it as it is)

```js
import {styled, theme} from '@comfortdelgro/react-compass'
```

We will not re-create this "styled" because it is too complex and it is not good for server components anyway.

Rather, we would keep our current "theme/stitches.config.ts" file and its related properties for the sake of backward compatibility but do not use it ourselves.

"theme/stitches.config.ts" depends on 2 other files: "theme/breakpoints.ts" and "theme/theme.ts".

## 3. Custom theming (Theme Provider, useColors() and useCurrentTheme()) - (pending)

We need to modify the "theme/ThemeProvider.tsx", "theme/useColors.ts" and "useCurrentTheme.ts" in a way that it supports light/dark theme object from both "theme/theme.ts" and "theme/theme.ts".

Example to illustrate the idea:

```js
import createTheme from '@comfortdelgro/react-compass/theme/theme'
import createStaticTheme from '@comfortdelgro/react-compass/theme/theme'

// This works
export const lightThemeCustom = createTheme('light-theme-custom', {
  colors: {
    primaryText: 'red',
  },
})

// This also works
export const darkThemeCustom = createStaticTheme('dark-theme-custom', {
  colors: {
    primaryText: 'blue',
  },
})

// And both of those above can work when being mixed
function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider
      lightThemeCustom={lightThemeCustom}
      darkThemeCustom={darkThemeCustom}
    >
      {children}
    </ThemeProvider>
  )
}
```

To achieve this, "createTheme" from "theme/theme.ts" should not be imported from "@stitches/react", but instead it is a reference to its vanilla js version in "theme/theme.ts". And the custom theme recieved by the Theme Provider will go to light/dark theme object in "theme/theme.ts", not "theme/theme.ts".

## 4. Tasks allocation

Not only do you have to take the responsibility of migrating the components under your name to new react-compass, but you will also need to take care of every bugs raised regarding the components under your name.

You have to make sure your components in old react-compass sync with new react-compass. In other word, for every fix/update, you will have to do for both new and old react-compass.

### Tai

- Alert
- Autocomplete
- Badge
- Box
- Button
- Dashboard sidecard
- Dialog
- Modal
- Error
- Grid
- Icon component
- Link
- No Ssr
- OTP input
- Popover
- Portal
- Preflight
- Rich text renderer
- Timeline
- Transitions
- Typography
- Utils

### Hien

- Pagination
- Spinner
- Progress Bar
- Radio
- Rating
- Searchfield
- Sidebar
- Sidenav
- Sub header
- Banner
- Sub Banner
- Tabs
- Upload
- Upload V2
- Video Player

### Duong

- Action Bar
- Avatar
- Form Layout
- Layouts
- Carousel

### Tu

- Chip
- Dropdown
- Multiple Dropdown
- Dropdown Menu
- Text Area
- Text Field
- Time Picker
- Toast
- Tag Box v2

### Minh

- Accordion
- App Nav
- Card
- Footer
- Menu List
- Nav Bar
- Calendar
- Range Calendar
- Date Picker
- Date Range Picker
- Page Header

### Tung

- Breadscrumbs
- Chart
- Checkbox
- Divider
- File
- Gutter
- List
- Progress
- Quantity toggle
- Skeleton
- Tag Box
- Wizard

### Hoa

- Image Viewer
- Theme (everything inside folder theme)

### Hai

- Internationalized
- Rich-text-editor
- Speed dial
- Table (as well as Table V2)
- Toggle
- Tooltip

### Khai

- Confirm Pickup
- Drawer
- Multiple choices slider
- Pudo
- Slide Action
- Slider
