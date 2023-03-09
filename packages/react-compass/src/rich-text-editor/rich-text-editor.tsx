// import Heading from '@tiptap/extension-heading'
import {Editor, EditorContent} from '@tiptap/react'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import * as controls from './controls'
import Control from './controls/Control/Control'
import ControlsGroup from './controls/ControlsGroup/ControlsGroup'
import {DefaultRichTextEditor} from './DefaultRichTextEditor'
import {RichTextEditorProvider} from './rich-text-editor.context'
import {
  StyledEditorContent,
  StyledRichTextEditor,
} from './rich-text-editor.styles'
import Toolbar from './toolbar/Toolbar'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  setDescription?: (html: string) => void
  editor: Editor | null
  characterCount?: number | null
}

export type RichTextEditorProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const RichTextEditor = React.forwardRef<HTMLDivElement, RichTextEditorProps>(
  (props, ref) => {
    const {
      children,
      // setDescription = () => null,
      css = {},
      editor,
      characterCount,
      ...delegated
    } = props
    return (
      <RichTextEditorProvider
        value={{
          editor,
        }}
      >
        <StyledRichTextEditor ref={ref} css={css} {...delegated}>
          {children}
          <StyledEditorContent>
            <EditorContent editor={editor} />
          </StyledEditorContent>
          {characterCount && (
            <div className='character-count'>
              {editor?.storage['characterCount'].characters()}/{characterCount}
            </div>
          )}
        </StyledRichTextEditor>
      </RichTextEditorProvider>
    )
  },
)
export default RichTextEditor as typeof RichTextEditor & {
  Control: typeof Control
  ControlsGroup: typeof ControlsGroup
  Toolbar: typeof Toolbar
  Bold: typeof controls.BoldControl
  Italic: typeof controls.ItalicControl
  Strikethrough: typeof controls.StrikeThroughControl
  Underline: typeof controls.UnderlineControl
  // ClearFormatting: typeof controls.ClearFormattingControl
  H1: typeof controls.H1Control
  H2: typeof controls.H2Control
  H3: typeof controls.H3Control
  H4: typeof controls.H4Control
  H5: typeof controls.H5Control
  H6: typeof controls.H6Control
  BulletList: typeof controls.BulletListControl
  OrderedList: typeof controls.OrderedListControl
  Link: typeof controls.LinkControl
  Unlink: typeof controls.UnlinkControl
  Image: typeof controls.ImageControl
  Blockquote: typeof controls.BlockquoteControl
  AlignLeft: typeof controls.AlignLeftControl
  AlignRight: typeof controls.AlignRightControl
  AlignCenter: typeof controls.AlignCenterControl
  AlignJustify: typeof controls.AlignJustifyControl
  Superscript: typeof controls.SuperscriptControl
  Subscript: typeof controls.SubscriptControl
  // Code: typeof controls.CodeControl
  CodeBlock: typeof controls.CodeBlockControl
  // ColorPicker: typeof controls.ColorPickerControl
  ColorControl: typeof controls.ColorControl
  HeadingsControl: typeof controls.HeadingsControl
  TextAlginmentSelector: typeof controls.TextAlignmentSelectorControl
  // Highlight: typeof controls.HighlightControl
  Hr: typeof controls.HrControl
  Undo: typeof controls.UndoControl
  Redo: typeof controls.RedoControl
  Default: typeof DefaultRichTextEditor
  // UnsetColor: typeof controls.UnsetColorControl
}
