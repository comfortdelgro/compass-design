---
title: React Image Viewer component
components: ImageViewer
---

# Image Viewer

<p class="description">Using to display list of images.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {ImageViewer} from '@comfortdelgro/react-compass'
```

or

```jsx
import ImageViewer from '@comfortdelgro/react-compass/image-viewer'
```

## Example

### Basic

{{"demo": "ImageViewer.tsx"}}


## Props

| Name                   | Type                                            | Default | Description                                                                    |
| :--------------------- | :---------------------------------------------- | :------ | :----------------------------------------------------------------------------- |
| visible                | `boolean`                                       | —       | If true, the image viewer is open.                                             |
| onClose                | `() => void`                                    | —       | Callback fired when the modal needs to be closed.                              |
| activeIndex            | `number`                                        | `0`     | Set default image position                                                     |
| drag                   | `boolean`                                       | `true`  | If true, the user will be able to drag the image                               |
| zoomable               | `boolean`                                       | `true`  | If true, the user will be able to zoom the image (zoom-in, zoom-out).          |
| rotatable              | `boolean`                                       | `true`  | If true, the user will be able to rotate the image                             |
| scalable               | `boolean`                                       | `true`  | If true, the user will be able to scale the image                              |
| onMaskClick            | `(e: React.MouseEvent<HTMLDivElement>) => void` | `true`  | This function will be called when the user clicks on the mash background image |
| loop                   | `boolean`                                       | `true`  | If true, when user clicks next or previous the image will loop continuously    |
| disableMouseZoom       | `boolean`                                       | `false` | If true, user cannot zoom                                                      |
| noClose                | `boolean`                                       | `false` | If true, when the user won't be able to close the modal                        |
| isShowImageInformation | `boolean`                                       | `true`  | If true, image information will be displayed                                   |
| isShowPreview          | `boolean`                                       | `true`  | If true, a list of preview images will be displayed                            |
| isShowToolbar          | `boolean`                                       | `true`  | If true, toolbar will be displayed                                             |
| zoomSpeed              | `number`                                        | `0.05`  |                                                                                |