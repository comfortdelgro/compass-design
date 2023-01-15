import {faRotateLeft, faRotateRight} from '@fortawesome/free-solid-svg-icons'
import FontFamily from '@tiptap/extension-font-family'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import Icon from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledEditorContent,
  StyledMenuBar,
  StyledRichTextEditor,
} from './rich-text-editor.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  setDescription?: (html: string) => void
}

export type RichTextMenuBarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const RichTextEditor = React.forwardRef<HTMLDivElement, RichTextMenuBarProps>(
  (props, ref) => {
    const {
      children,
      setDescription = () => null,
      css = {},
      ...delegated
    } = props
    const modalActionRef = useDOMRef<HTMLDivElement>(ref)
    const editor = useEditor({
      extensions: [
        StarterKit,
        Underline,
        FontFamily,
        TextStyle,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      ],
      content: ``,
      injectCSS: false,

      onUpdate: ({editor}) => {
        const html = editor.getHTML()
        if (!html) return
        setDescription(html)
      },
    })
    if (!editor) return <></>
    return (
      <StyledRichTextEditor css={css} ref={modalActionRef} {...delegated}>
        <StyledMenuBar>
          <div onClick={() => editor.chain().focus().undo().run()}>
            <Icon icon={faRotateLeft} />
          </div>
          <div onClick={() => editor.chain().focus().redo().run()}>
            <Icon icon={faRotateRight} />
          </div>
        </StyledMenuBar>
        <StyledEditorContent>
          <EditorContent editor={editor} />
        </StyledEditorContent>
      </StyledRichTextEditor>
    )
  },
)

export default RichTextEditor
