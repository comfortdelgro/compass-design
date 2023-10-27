---
title: React Banner component
components: Banner
---

# Banner

<p class="description">The Banner component is a reusable React component that displays a banner or header section on a web page.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {Banner} from '@comfortdelgro/react-compass'
```

or

```js
import Banner from '@comfortdelgro/react-compass/banner'
```

## Example

### Basic

{{"demo": "BannerBasic.tsx"}}

### Size

{{"demo": "BannerSizing.tsx"}}

### Custom styling

You can style React Compass's components with the css prop.<br>
With css prop, you can basically do anything that css can do.

{{"demo": "BannerCustom.tsx"}}

## Banner Server (Experimental)

{{"demo": "BannerServer.tsx"}}

## Props

| Name    | Type              | Default | Description                                                                                 |
| :------ | :---------------- | :------ | :------------------------------------------------------------------------------------------ |
| size    | `sm`\|`md`\| `lg` | —       | This prop will determine the size of the banner                                             |
| css     | `CSS`             | —       | The system prop that allows defining system overrides as well as additional CSS styles.     |
| onError | `function`        | —       | This prop will allow users to handle error when loading the background image of the banner. |
