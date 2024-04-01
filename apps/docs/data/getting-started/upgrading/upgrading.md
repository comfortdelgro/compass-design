# Upgrading

<p class="description">This page to guides you to update the compass design package version</p>

## From v3.x.x to v4.x.x

There's will be some breaking change because of resolving limitation of the previous version.

The `react-compass` version should be greater or equal to `4.4.0`. Since this version, we have so much more changes to help new version more backward compatible. Specific changes are: wrap in `@layer` all preflight css, exported missing interfaces, fixed some of components.

To upgrade the package version, run this command:

```bash
pnpm up @comfortdelgro/react-compass --latest
```

After that you will see some errors, but don't worry, just follow these steps below.

### Change the way we import the component

When you're trying to run the project, you will see some exceptions thrown in the complier because there's some components need to be changed the way we import them.

They are: `Preflight`, `Drawer`, `Typography`, `Button`, `TextField`...

All you need to do is changing them one by one until the complier console got no errors follow this pattern:

Change this `import Typography from '@comfortdelgro/react-compass/typography';` to this pattern `import {Typography} from '@comfortdelgro/react-compass';`

We've no longer supported you to import children component like this `DrawerHeader`, so you should use `Drawer.Header` instead. Same for the others.

### useDeepCompareEffect

Simply the way we import common hooks.

Change `import {useDeepCompareEffect} from '@comfortdelgro/react-compass/utils/hooks';` to `import {useDeepCompareEffect} from '@comfortdelgro/react-compass';`

### Re-import CSS Type

Since we've removed stiches, CSS is not available in `@comfortdelgro/react-compass`.

You need to remove this: `import type {CSS} from '@comfortdelgro/react-compass/utils/stitches.types';`

And then change `css?: CSS;` to `css?: React.CSSProperties;`

### Import css file

Since version 4, there will be a `style.css` file because of switching to use static css instead of using styled component. It because of the layout will be flashing when your page is using SSR.

To let the layout works, you will need to import it into `main.tsx` by adding this line:

`import '@comfortdelgro/react-compass/style.css';`

### Change color variable

Colors variables are missing because we changed them to have this convention: `--cdg-color-`.

You can search all for `--colors-` then replace all to `--cdg-color-`

### Other errors

If you still get the errors after taken those steps.

Please raise ticket to: [Compass Design Github](https://github.com/comfortdelgro/compass-design)
