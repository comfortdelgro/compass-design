import * as controls from './controls'
import Control from './controls/Control'
import ControlsGroup from './controls/ControlsGroup'
import ComposableRTE from './rich-text-editor'
import Toolbar from './toolbar'
// export {Blockquote} from '@tiptap/extension-blockquote'
// export {CharacterCount} from '@tiptap/extension-character-count'
// export {Color} from '@tiptap/extension-color'
// export {FontFamily} from '@tiptap/extension-font-family'
// export {Heading} from '@tiptap/extension-heading'
// export {HorizontalRule} from '@tiptap/extension-horizontal-rule'
// export {Image} from '@tiptap/extension-image'
// export {Link} from '@tiptap/extension-link'
// export {Subscript} from '@tiptap/extension-subscript'
// export {Superscript} from '@tiptap/extension-superscript'
// export {TextAlign} from '@tiptap/extension-text-align'
// export {TextStyle} from '@tiptap/extension-text-style'
// export {Underline} from '@tiptap/extension-underline'
// export {Editor, useEditor} from '@tiptap/react'
export type {Content, JSONContent} from '@tiptap/react'
// export {StarterKit} from '@tiptap/starter-kit'
export type {RichTextEditorProps} from './rich-text-editor'

ComposableRTE.displayName = 'RichTextEditor'
ComposableRTE.Control = Control
ComposableRTE.ControlsGroup = ControlsGroup
ComposableRTE.Toolbar = Toolbar
ComposableRTE.Bold = controls.BoldControl
ComposableRTE.Italic = controls.ItalicControl
ComposableRTE.Strikethrough = controls.StrikeThroughControl
ComposableRTE.Underline = controls.UnderlineControl
ComposableRTE.H1 = controls.H1Control
ComposableRTE.H2 = controls.H2Control
ComposableRTE.H3 = controls.H3Control
ComposableRTE.H4 = controls.H4Control
ComposableRTE.H5 = controls.H5Control
ComposableRTE.H6 = controls.H6Control
ComposableRTE.BulletList = controls.BulletListControl
ComposableRTE.OrderedList = controls.OrderedListControl
ComposableRTE.Unlink = controls.UnlinkControl
ComposableRTE.Blockquote = controls.BlockquoteControl
ComposableRTE.AlignLeft = controls.AlignLeftControl
ComposableRTE.AlignRight = controls.AlignRightControl
ComposableRTE.AlignCenter = controls.AlignCenterControl
ComposableRTE.AlignJustify = controls.AlignJustifyControl
ComposableRTE.Superscript = controls.SuperscriptControl
ComposableRTE.Subscript = controls.SubscriptControl
ComposableRTE.CodeBlock = controls.CodeBlockControl
ComposableRTE.Link = controls.LinkControl
ComposableRTE.Image = controls.ImageControl
ComposableRTE.ColorControl = controls.ColorControl
ComposableRTE.TextAlginmentSelector = controls.TextAlignmentSelectorControl
ComposableRTE.HeadingsControl = controls.HeadingsControl
ComposableRTE.Hr = controls.HrControl
ComposableRTE.Undo = controls.UndoControl
ComposableRTE.Redo = controls.RedoControl
// RichTextEditor.ClearFormatting = controls.ClearFormattingControl
// RichTextEditor.Highlight = controls.HighlightControl

export default ComposableRTE
