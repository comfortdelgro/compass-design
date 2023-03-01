import {
  faBold,
  faItalic,
  faRotateLeft,
  faRotateRight,
  faStrikethrough,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons'
import FontFamily from '@tiptap/extension-font-family'
// import Heading from '@tiptap/extension-heading'
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
  StyledMenuBlock,
  StyledMenuItem,
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
        // Heading.configure({
        //   levels: [1, 2, 3],
        // }),
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
          <StyledMenuItem onClick={() => editor.chain().focus().undo().run()}>
            <Icon icon={faRotateLeft} />
          </StyledMenuItem>
          <StyledMenuItem onClick={() => editor.chain().focus().redo().run()}>
            <Icon icon={faRotateRight} />
          </StyledMenuItem>
          {/* <div>
            <MenuBarSelect>
              <MenuBarSelect.Item key={0}>Poppins</MenuBarSelect.Item>
              <MenuBarSelect.Item key={1}>
                <h1>Heading 1</h1>
              </MenuBarSelect.Item>
              <MenuBarSelect.Item key={2}>
                <h2>Heading 2</h2>
              </MenuBarSelect.Item>
              <MenuBarSelect.Item key={3}>
                <h3>Heading 3</h3>
              </MenuBarSelect.Item>
            </MenuBarSelect>
          </div> */}
          <StyledMenuBlock>
            <StyledMenuItem
              className={editor.isActive('bold') ? 'is_active' : ''}
              onClick={() => editor.chain().focus().toggleBold().run()}
            >
              <Icon icon={faBold} />
            </StyledMenuItem>
            <StyledMenuItem
              className={editor.isActive('italic') ? 'is_active' : ''}
              onClick={() => editor.chain().focus().toggleItalic().run()}
            >
              <Icon icon={faItalic} />
            </StyledMenuItem>
            <StyledMenuItem
              className={editor.isActive('underline') ? 'is_active' : ''}
              onClick={() => editor.chain().focus().toggleUnderline().run()}
            >
              <Icon icon={faUnderline} />
            </StyledMenuItem>
            <StyledMenuItem
              className={editor.isActive('strike') ? 'is_active' : ''}
              onClick={() => editor.chain().focus().toggleStrike().run()}
            >
              <Icon icon={faStrikethrough} />
            </StyledMenuItem>
          </StyledMenuBlock>
        </StyledMenuBar>
        <StyledEditorContent>
          <EditorContent editor={editor} />
        </StyledEditorContent>
      </StyledRichTextEditor>
    )
  },
)

export default RichTextEditor
