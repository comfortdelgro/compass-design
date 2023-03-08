// import Heading from '@tiptap/extension-heading'
import {Editor, EditorContent} from '@tiptap/react'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import * as controls from './controls'
import Control from './controls/Control/Control'
import ControlsGroup from './controls/ControlsGroup/ControlsGroup'
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
}

export type RichTextEditorProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export type ForwardRefWithStaticComponents<
  Props extends Record<string, any>,
  Static extends Record<string, any>,
> = ((props: Props) => React.ReactElement) &
  Static & {
    displayName: string
  }

const RichTextEditor = React.forwardRef<HTMLDivElement, RichTextEditorProps>(
  (props, ref) => {
    const {
      children,
      // setDescription = () => null,
      css = {},
      editor,
      ...delegated
    } = props
    return (
      <RichTextEditorProvider
        value={{
          editor,
        }}
      >
        <StyledRichTextEditor css={css} {...delegated}>
          {children}
          <StyledEditorContent>
            <EditorContent editor={editor} />
          </StyledEditorContent>
        </StyledRichTextEditor>
      </RichTextEditorProvider>
    )
    //   const modalActionRef = useDOMRef<HTMLDivElement>(ref)
    //   const editor = useEditor({
    //     extensions: [
    //       StarterKit,
    //       Underline,
    //       FontFamily,
    //       TextStyle,
    //       Color,
    //       TextAlign.configure({
    //         types: ['heading', 'paragraph'],
    //       }),
    //       Heading.configure({
    //         levels: [1, 2, 3],
    //       }),
    //     ],
    //     content: ``,
    //     injectCSS: false,

    //     onUpdate: ({editor}) => {
    //       const html = editor.getHTML()
    //       if (!html) return
    //       setDescription(html)
    //     },
    //   })
    //   if (!editor) return <></>
    //   return (
    //     <StyledRichTextEditor css={css} ref={modalActionRef} {...delegated}>
    //       <StyledMenuBar>
    //         <StyledMenuItem onClick={() => editor.chain().focus().undo().run()}>
    //           <Icon icon={faRotateLeft} />
    //         </StyledMenuItem>
    //         <StyledMenuItem onClick={() => editor.chain().focus().redo().run()}>
    //           <Icon icon={faRotateRight} />
    //         </StyledMenuItem>
    //         <StyledMenuBlock>
    //           <ColorSelector
    //             onSelectionChange={(key: React.Key) =>
    //               editor
    //                 .chain()
    //                 .focus()
    //                 .setColor(key as string)
    //                 .run()
    //             }
    //             defaultSelectedKey='#212529'
    //           >
    //             <Item key='#212529' textValue=''>
    //               <StyledColorItem color='gray-9' />
    //             </Item>
    //             <Item key='#845EF7' textValue=''>
    //               <StyledColorItem color='violet-5' />
    //             </Item>
    //             <Item key='#339AF0' textValue=''>
    //               <StyledColorItem color='blue-5' />
    //             </Item>
    //           </ColorSelector>
    //         </StyledMenuBlock>
    //         <StyledMenuBlock>
    //           <TextAlignmentSelector
    //             onSelectionChange={(key: React.Key) =>
    //               editor
    //                 .chain()
    //                 .focus()
    //                 .setTextAlign(key as string)
    //                 .run()
    //             }
    //             defaultSelectedKey='left'
    //           >
    //             <Item key='left'>
    //               <Icon className='dropdown-button-icon' icon={faAlignLeft} />{' '}
    //               left
    //             </Item>
    //             <Item key='center'>
    //               <Icon className='dropdown-button-icon' icon={faAlignCenter} />{' '}
    //               center
    //             </Item>
    //             <Item key='right'>
    //               <Icon className='dropdown-button-icon' icon={faAlignRight} />{' '}
    //               right
    //             </Item>
    //             <Item key='justify'>
    //               <Icon className='dropdown-button-icon' icon={faAlignJustify} />{' '}
    //               justify
    //             </Item>
    //           </TextAlignmentSelector>
    //         </StyledMenuBlock>
    //         <StyledMenuBlock>
    //           <HeadingSelector
    //             onSelectionChange={(key: React.Key) =>
    //               editor
    //                 .chain()
    //                 .focus()
    //                 .setHeading({level: Number(key) as Level})
    //                 .run()
    //             }
    //           >
    //             <Item key='1' textValue='Heading 1'>
    //               <h1>Heading 1</h1>
    //             </Item>
    //             <Item key='2' textValue='Heading 2'>
    //               <h2>Heading 2</h2>
    //             </Item>
    //             <Item key='3' textValue='Heading 3'>
    //               <h3>Heading 3</h3>
    //             </Item>
    //           </HeadingSelector>
    //         </StyledMenuBlock>
    //         <StyledMenuBlock>
    //           <StyledMenuItem
    //             className={editor.isActive('bold') ? 'is_active' : ''}
    //             onClick={() => editor.chain().focus().toggleBold().run()}
    //           >
    //             <Icon icon={faBold} />
    //           </StyledMenuItem>
    //           <StyledMenuItem
    //             className={editor.isActive('italic') ? 'is_active' : ''}
    //             onClick={() => editor.chain().focus().toggleItalic().run()}
    //           >
    //             <Icon icon={faItalic} />
    //           </StyledMenuItem>
    //           <StyledMenuItem
    //             className={editor.isActive('underline') ? 'is_active' : ''}
    //             onClick={() => editor.chain().focus().toggleUnderline().run()}
    //           >
    //             <Icon icon={faUnderline} />
    //           </StyledMenuItem>
    //           <StyledMenuItem
    //             className={editor.isActive('strike') ? 'is_active' : ''}
    //             onClick={() => editor.chain().focus().toggleStrike().run()}
    //           >
    //             <Icon icon={faStrikethrough} />
    //           </StyledMenuItem>
    //         </StyledMenuBlock>
    //       </StyledMenuBar>
    //       <StyledEditorContent>
    //         <EditorContent editor={editor} />
    //       </StyledEditorContent>
    //     </StyledRichTextEditor>
    //   )
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
  Code: typeof controls.CodeControl
  CodeBlock: typeof controls.CodeBlockControl
  // ColorPicker: typeof controls.ColorPickerControl
  ColorControl: typeof controls.ColorControl
  HeadingsControl: typeof controls.HeadingsControl
  TextAlginmentSelector: typeof controls.TextAlignmentSelectorControl
  Highlight: typeof controls.HighlightControl
  Hr: typeof controls.HrControl
  Undo: typeof controls.UndoControl
  Redo: typeof controls.RedoControl
  // UnsetColor: typeof controls.UnsetColorControl
}
