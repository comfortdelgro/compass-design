import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {OthersControl} from './controls/DropdownControls/Others/OthersControl'

import RichTextEditor, {
  CharacterCount,
  Color,
  Editor,
  FontFamily,
  Heading,
  HorizontalRule,
  Image,
  JSONContent,
  Link,
  StarterKit,
  Subscript,
  Superscript,
  TextAlign,
  TextStyle,
  Underline,
  useEditor,
} from './index'

type Props = {
  editor?: Editor | null
  onChange?: (html: string | JSONContent) => void
  outputType?: 'html' | 'json'
  characterCount?: number | null
}
export type DefaultRichTextEditorProps = StyledComponentProps &
  Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof StyledComponentProps>
export const DefaultRichTextEditor = ({
  editor,
  onChange,
  css = {},
  outputType = 'html',
  characterCount = null,
  ...delegated
}: DefaultRichTextEditorProps) => {
  const editorInstance =
    editor ??
    useEditor({
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
        Superscript,
        Subscript,
        HorizontalRule,
        CharacterCount.configure({
          limit: characterCount,
        }),
      ],
      content: ``,
      injectCSS: false,

      onUpdate: ({editor}) => {
        let output
        if (outputType === 'html') {
          output = editor.getHTML()
        } else {
          output = editor.getJSON()
        }
        if (!output) return
        onChange?.(output)
      },
    })

  return (
    <RichTextEditor
      editor={editorInstance}
      characterCount={characterCount}
      css={css}
      {...delegated}
    >
      <RichTextEditor.Toolbar>
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
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Image />
          <RichTextEditor.Blockquote />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <OthersControl />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>
    </RichTextEditor>
  )
}
