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
      console.log(html)
      if (!html) return

      setDescription(html)
    },
  })
  // const handleKeyDown = (event) => {

  // }
  return (
    <Column>
      <h3>Default Rich Text Editor</h3>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar wrapped>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.HeadingsControl levels={[1, 2, 3, 4, 5, 6]} />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.ColorControl
              colors={[
                '#212529',
                '#845EF7',
                '#339AF0',
                '#22B8CF',
                '#51CF66',
                '#FCC419',
                '#FF6B6B',
                '#F06595',
                '#CED4DA',
                '#5F3DC4',
                '#1864AB',
                '#0B7285',
                '#2B8A3E',
                '#E67700',
                '#C92A2A',
                '#C2255C',
              ]}
            />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.TextAlginmentSelector />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
          </RichTextEditor.ControlsGroup>
          {/* <RichTextEditor.ControlsGroup> */}
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
          <RichTextEditor.Image />
          {/* </RichTextEditor.ControlsGroup> */}
        </RichTextEditor.Toolbar>
      </RichTextEditor>
    </Column>
  )
}
