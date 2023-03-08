import * as controls from './controls'
import Control from './controls/Control/Control'
import ControlsGroup from './controls/ControlsGroup/ControlsGroup'
import {DefaultRichTextEditor} from './DefaultRichTextEditor'
import RichTextEditor from './rich-text-editor'
import Toolbar from './toolbar/Toolbar'
export {Blockquote} from '@tiptap/extension-blockquote'
export {Color} from '@tiptap/extension-color'
export {FontFamily} from '@tiptap/extension-font-family'
export {Heading} from '@tiptap/extension-heading'
export {HorizontalRule} from '@tiptap/extension-horizontal-rule'
export {Image} from '@tiptap/extension-image'
export {Link} from '@tiptap/extension-link'
export {Subscript} from '@tiptap/extension-subscript'
export {Superscript} from '@tiptap/extension-superscript'
export {TextAlign} from '@tiptap/extension-text-align'
export {TextStyle} from '@tiptap/extension-text-style'
export {Underline} from '@tiptap/extension-underline'
export {Editor, useEditor} from '@tiptap/react'
export {StarterKit} from '@tiptap/starter-kit'
export type {RichTextEditorProps} from './rich-text-editor'

RichTextEditor.displayName = 'RichTextEditor'
RichTextEditor.Control = Control
RichTextEditor.ControlsGroup = ControlsGroup
RichTextEditor.Toolbar = Toolbar
// Extensions
// RichTextEditor.Extensions.Blockquote = Blockquote
// Controls components
RichTextEditor.Bold = controls.BoldControl
RichTextEditor.Italic = controls.ItalicControl
RichTextEditor.Strikethrough = controls.StrikeThroughControl
RichTextEditor.Underline = controls.UnderlineControl
RichTextEditor.H1 = controls.H1Control
RichTextEditor.H2 = controls.H2Control
RichTextEditor.H3 = controls.H3Control
RichTextEditor.H4 = controls.H4Control
RichTextEditor.H5 = controls.H5Control
RichTextEditor.H6 = controls.H6Control
RichTextEditor.BulletList = controls.BulletListControl
RichTextEditor.OrderedList = controls.OrderedListControl
RichTextEditor.Unlink = controls.UnlinkControl
RichTextEditor.Blockquote = controls.BlockquoteControl
RichTextEditor.AlignLeft = controls.AlignLeftControl
RichTextEditor.AlignRight = controls.AlignRightControl
RichTextEditor.AlignCenter = controls.AlignCenterControl
RichTextEditor.AlignJustify = controls.AlignJustifyControl
RichTextEditor.Superscript = controls.SuperscriptControl
RichTextEditor.Subscript = controls.SubscriptControl
RichTextEditor.Code = controls.CodeControl
RichTextEditor.CodeBlock = controls.CodeBlockControl
RichTextEditor.Link = controls.LinkControl
// RichTextEditor.ClearFormatting = controls.ClearFormattingControl
// RichTextEditor.ColorPicker = controls.ColorPickerControl
RichTextEditor.Image = controls.ImageControl
RichTextEditor.ColorControl = controls.ColorControl
RichTextEditor.TextAlginmentSelector = controls.TextAlignmentSelectorControl
RichTextEditor.HeadingsControl = controls.HeadingsControl
RichTextEditor.Highlight = controls.HighlightControl
RichTextEditor.Hr = controls.HrControl
RichTextEditor.Undo = controls.UndoControl
RichTextEditor.Redo = controls.RedoControl
RichTextEditor.Default = DefaultRichTextEditor

export default RichTextEditor
