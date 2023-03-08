import React from 'react'
import {Column} from '../utils/components'
import RichTextEditor, {
  Color,
  FontFamily,
  Heading,
  Image,
  Link,
  StarterKit,
  TextAlign,
  TextStyle,
  Underline,
  useEditor,
} from './index'

export const Default: React.FC = () => {
  const [description, setDescription] = React.useState<string>('')
  return (
    <Column>
      <h3>Default Rich Text Editor</h3>
      <RichTextEditor.Default onChange={(html) => setDescription(html)} />
    </Column>
  )
}

export const Cutomized: React.FC = () => {
  const [description, setDescription] = React.useState<string>('')
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      FontFamily,
      TextStyle,
      Color,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      Link,
      Image,
    ],
    content: ``,
    injectCSS: false,

    onUpdate: ({editor}) => {
      const html = editor.getHTML()
      if (!html) return
      setDescription(html)
    },
  })
  return (
    <Column>
      <h3>Cutomized Rich Text Editor</h3>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H3 />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignRight />
            <RichTextEditor.AlignJustify />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
          <RichTextEditor.Image />
          <RichTextEditor.Superscript />
          <RichTextEditor.Subscript />
          <RichTextEditor.Hr />
          <RichTextEditor.Undo />
          <RichTextEditor.Redo />
        </RichTextEditor.Toolbar>
      </RichTextEditor>
    </Column>
  )
}
