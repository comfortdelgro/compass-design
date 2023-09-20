---
title: React File component
components: File
---

# File

<p class="description">
The File component allows you to display state and preview of the file uploaded.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {File} from '@comfortdelgro/react-compass'
```

or

```js
import File from '@comfortdelgro/react-compass/file'
```

### Basic States

{{"demo": "FileBasic.tsx"}}

### Icon

{{"demo": "FileIcon.tsx"}}

### Errored

{{"demo": "FileErrored.tsx"}}

### Basic Preview

{{"demo": "FilePreview.tsx"}}

### Custom Styling

{{"demo": "FileCustomStyling.tsx"}}

## Props

### File State Props:

| Name        | Type              | Default | Description                                                                             |
| :---------- | :---------------- | :------ | :-------------------------------------------------------------------------------------- |
| fileName    | `string`          | -       | Filename of the state                                                                   |
| imageIcon   | `React.ReactNode` | -       | Little icon display on left of the filename                                             |
| onIconPress | `() => void`      | -       | Fired when clicked on the icon                                                          |
| icon        | `React.ReactNode` | -       | Left icon of the state                                                                  |
| isLoading   | `boolean`         | -       | Loading state                                                                           |
| css         | `CSS`             | —       | The system prop that allows defining system overrides as well as additional CSS styles. |

### File Preview Props:

| Name      | Type              | Default | Description                                                                             |
| :-------- | :---------------- | :------ | :-------------------------------------------------------------------------------------- |
| imageSrc  | `string`          | -       | Image source to display                                                                 |
| childrend | `React.ReactNode` | -       | Display child, example: File.State                                                      |
| css       | `CSS`             | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
