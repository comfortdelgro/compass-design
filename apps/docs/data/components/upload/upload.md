---
title: React Upload component
components: Upload
---

# Upload

<p class="description">The upload component allows users to upload files of various types and sizes.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Upload} from '@comfortdelgro/react-compass'
```

## Example

### Basic

{{"demo": "UploadBasic.tsx"}}

### Drag-and-Drop Upload

{{"demo": "DragAndDrop.tsx"}}

## Props

| Name                | Type                     | Default | Description                                                                                             |
| ------------------- | ------------------------ | ------- | ------------------------------------------------------------------------------------------------------- |
| getFile             | `(file: File[]) => any`  | —       | A callback function that receives the selected file(s) as an array of `File` objects.                   |
| accept              | string                   | —       | A string specifying the file types that are accepted. It follows the format: `'image/*, .docs, .docx'`. |
| fileSizeLimit       | number                   | —       | The maximum file size limit in bytes.                                                                   |
| onError             | `(error: string) => any` | —       | A callback function that receives an error message if an error occurs during file upload.               |
| customErrorMessages | React.ReactNode          | —       | Custom error message to display when an error occurs during file upload.                                |
| helperText          | React.ReactNode          | —       | Helper text to display instructions or limitations to the user.                                         |
| label               | string                   | —       | A label to provide a descriptive name for the file upload field.                                        |
| isRequired          | boolean                  | `false` | Indicates whether the file upload is required.                                                          |
| isDisabled          | boolean                  | `false` | Indicates whether the file upload is disabled and cannot be interacted with.                            |
| css                 | `CSS`                    | —       | The system prop that allows defining system overrides as well as additional CSS styles.                 |

## Upload.DragAndDrop

| Name                | Type                     | Default | Description                                                                                             |
| ------------------- | ------------------------ | ------- | ------------------------------------------------------------------------------------------------------- |
| getFile             | `(file: File[]) => any`  | —       | A callback function that receives the selected file(s) as an array of `File` objects.                   |
| accept              | string                   | —       | A string specifying the file types that are accepted. It follows the format: `'image/*, .docs, .docx'`. |
| fileSizeLimit       | number                   | —       | The maximum file size limit in bytes.                                                                   |
| onError             | `(error: string) => any` | —       | A callback function that receives an error message if an error occurs during file upload.               |
| customErrorMessages | React.ReactNode          | —       | Custom error message to display when an error occurs during file upload.                                |
| helperText          | React.ReactNode          | —       | Helper text to display instructions or limitations to the user.                                         |
| label               | string                   | —       | A label to provide a descriptive name for the file upload field.                                        |
| isRequired          | boolean                  | `false` | Indicates whether the file upload is required.                                                          |
| isDisabled          | boolean                  | `false` | Indicates whether the file upload is disabled and cannot be interacted with.                            |
| variant             | string                   | —       | Determines the variant of the drag-and-drop area. Possible values: "primary" or "secondary".            |
| multiple            | boolean                  | `false` | Indicates whether multiple files can be selected for upload.                                            |
| css                 | `CSS`                    | —       | The system prop that allows defining system overrides as well as additional CSS styles.                 |
