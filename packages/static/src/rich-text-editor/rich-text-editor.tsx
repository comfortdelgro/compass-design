// import Heading from '@tiptap/extension-heading'
import CharacterCount from '@tiptap/extension-character-count'
import Color from '@tiptap/extension-color'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import {Content, EditorContent, JSONContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import isEqual from 'lodash/isEqual'
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import * as controls from './controls'
import Control from './controls/Control'
import ControlsGroup from './controls/ControlsGroup'
import {RichTextEditorProvider} from './rich-text-editor.context'
import styles from './styles/rich-text-editor.module.css'
import Toolbar from './toolbar'

interface Props {
  children?: React.ReactNode
  outputType?: 'html' | 'json'
  characterCount?: number | null
  onChange?: (html: string | JSONContent) => void
  isEditable?: boolean
  content?: Content
  placeholder?: string
  className?: string
  css?: unknown
}
interface StorageCount {
  characters: () => number
}

export type RichTextEditorProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const RichTextEditor = React.forwardRef<HTMLDivElement, RichTextEditorProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      characterCount,
      outputType = 'html',
      onChange,
      isEditable = true,
      content = null,
      placeholder,
      className = '',
      ...htmlProps
    } = props

    const editor = useEditor({
      content: content,
      extensions: [
        StarterKit,
        Underline,
        TextStyle,
        Color,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        Link,
        Image,
        CharacterCount.configure({
          limit: characterCount,
        }),
        Superscript,
        Subscript,
        Placeholder.configure({
          placeholder: placeholder as string,
        }),
      ],
      injectCSS: false,

      onTransaction: ({editor}) => {
        let output
        let shouldChange
        if (outputType === 'html') {
          output = editor.getHTML()
          shouldChange = content !== output
        } else {
          output = editor.getJSON()
          shouldChange = !isEqual(content, output)
        }
        if (!output) return
        if (shouldChange) {
          onChange?.(output)
        }
      },
    })
    editor?.setEditable(isEditable)

    const CharacterCountFunc = () => {
      if (characterCount) {
        const storageCount = editor?.storage['characterCount'] as StorageCount
        return storageCount?.characters() || 0
      }
      return 0
    }

    const textEditorRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <RichTextEditorProvider
        value={{
          editor,
        }}
      >
        <CssInjection childrenRef={textEditorRef} css={css}>
          <div
            ref={textEditorRef}
            {...htmlProps}
            className={`cdg-rich-text-editor ${className} ${styles.cdgRichTextEditor}`}
          >
            {children}
            <EditorContent
              editor={editor}
              className={`cdg-rich-text-editor-content ${styles.editorContent}`}
            />
            {characterCount && (
              <div className={`${styles.characterCount}`}>
                {CharacterCountFunc()}/{characterCount}
              </div>
            )}
          </div>
        </CssInjection>
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
  CodeBlock: typeof controls.CodeBlockControl
  ColorControl: typeof controls.ColorControl
  HeadingsControl: typeof controls.HeadingsControl
  TextAlginmentSelector: typeof controls.TextAlignmentSelectorControl
  Hr: typeof controls.HrControl
  Undo: typeof controls.UndoControl
  Redo: typeof controls.RedoControl
}
