---
title: React Rich text editor component
components: RichTextEditor
---

# Rich text editor

<p class="description">A rich text editor is an interface or input field for text editing.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {
  RichTextEditor,
  JSONContent,
  Content,
} from '@comfortdelgro/react-compass'
```

or

```jsx
import {
  RichTextEditor,
  JSONContent,
  Content,
} from '@comfortdelgro/react-compass/rich-text-editor'
```

## Example


{{"demo": "RichTextEditor.tsx"}}

## Components:

| Name                                 | Type        | Default | Description                                                     |
| :----------------------------------- | :---------- | :------ | :-------------------------------------------------------------- |
| RichTextEditor                       | `Component` |         | The core component, used for wrapping editing controls.         |
| RichTextEditor.Default               | `Component` |         | Default rich text editor.                                       |
| RichTextEditor.Toolbar               | `Component` |         | The toolbar for the editor.                                     |
| RichTextEditor.ControlsGroup         | `Component` |         | Used for grouping editor controls.                              |
| RichTextEditor.Undo                  | `Component` |         | Undo the last change.                                           |
| RichTextEditor.Redo                  | `Component` |         | Redo the last change.                                           |
| RichTextEditor.H1                    | `Component` |         | Heading 1.                                                      |
| RichTextEditor.H2                    | `Component` |         | Heading 2.                                                      |
| RichTextEditor.H3                    | `Component` |         | Heading 3.                                                      |
| RichTextEditor.H4                    | `Component` |         | Heading 4.                                                      |
| RichTextEditor.H5                    | `Component` |         | Heading 5.                                                      |
| RichTextEditor.H6                    | `Component` |         | Heading 6.                                                      |
| RichTextEditor.AlignLeft             | `Component` |         | Left text alignment.                                            |
| RichTextEditor.AlignCenter           | `Component` |         | Center text alignment.                                          |
| RichTextEditor.AlignRight            | `Component` |         | Right text alignment.                                           |
| RichTextEditor.AlignJustify          | `Component` |         | Justify text alignment.                                         |
| RichTextEditor.Bold                  | `Component` |         | Render text in bold.                                            |
| RichTextEditor.Italic                | `Component` |         | Render text in italic.                                          |
| RichTextEditor.Underline             | `Component` |         | Render text in underline.                                       |
| RichTextEditor.Strikethrough         | `Component` |         | Render text in strike through.                                  |
| RichTextEditor.BulletList            | `Component` |         | Render a bullet list.                                           |
| RichTextEditor.OrderedList           | `Component` |         | Render an ordered list.                                         |
| RichTextEditor.Link                  | `Component` |         | Render a link.                                                  |
| RichTextEditor.Unlink                | `Component` |         | Removes a link.                                                 |
| RichTextEditor.Image                 | `Component` |         | Render an image from a provided link.                           |
| RichTextEditor.Superscript           | `Component` |         | Render text in superscript.                                     |
| RichTextEditor.Subscript             | `Component` |         | Render text in subscript.                                       |
| RichTextEditor.Hr                    | `Component` |         | Render a line breaker.                                          |
| RichTextEditor.ColorControl          | `Component` |         | Render a color selector, provide colors via **colors** props.   |
| RichTextEditor.TextAlginmentSelector | `Component` |         | Render a text alignment selector.                               |
| RichTextEditor.HeadingsControl       | `Component` |         | Render a heading selector, provide levels via **levels** props. |
| RichTextEditor.CodeBlock             | `Component` |         | Render a code block.                                            |


## Props

### RichTextEditor

| Name           | Type               | Default | Description                                                                             |
| :------------- | :----------------- | :------ | :-------------------------------------------------------------------------------------- |
| outputType     | `html` \| `json`   | 'html'  | Output type.                                                                            |
| onChange       | `Function`         | -       | Callback when the editor content changes.                                               |
| isEditable     | `boolean`          | true    | Whether the editor is editable.                                                         |
| characterCount | `number` \| `null` | null    | Show maximum allowed characters.                                                        |
| css            | `CSS`              | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
| content        | `null`             | null    | You can provide the initial content for the editor.                                     |

### HeadingsControl

| Name   | Type       | Default            | Description        |
| :----- | :--------- | :----------------- | :----------------- |
| levels | `number[]` | [1, 2, 3, 4, 5, 6] | Levels of heading. |
