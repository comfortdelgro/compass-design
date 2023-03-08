// import {
//   IconAlignCenter,
//   IconAlignJustified,
//   IconAlignLeft,
//   IconAlignRight,
//   IconBlockquote,
//   IconBold,
//   IconCircleOff,
//   IconClearFormatting,
//   IconCode,
//   IconH1,
//   IconH2,
//   IconH3,
//   IconH4,
//   IconH5,
//   IconH6,
//   IconHighlight,
//   IconItalic,
//   IconLineDashed,
//   IconList,
//   IconListNumbers,
//   IconStrikethrough,
//   IconSubscript,
//   IconSuperscript,
//   IconUnderline,
//   IconUnlink,
// } from '@tabler/icons-react'
import H1Icon from '@comfortdelgro/compass-icons/react/h1'
import H3Icon from '@comfortdelgro/compass-icons/react/h3'
import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faBold,
  faItalic,
  faLaptopCode,
  faList,
  faListNumeric,
  faQuoteLeft,
  faRotateLeft,
  faRotateRight,
  faRulerHorizontal,
  faStrikethrough,
  faSubscript,
  faSuperscript,
  faUnderline,
  faUnlink,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Icon from '../../icon'
import {createControl} from './create-controls'

export const UndoControl = createControl({
  label: 'undo',

  icon: () => <Icon icon={faRotateLeft} />,
  isActive: {name: 'undo'},
  onPress: (editor) => () => editor?.chain().focus().undo().run(),
  // operation: {name: 'undo'},
})
export const RedoControl = createControl({
  label: 'redo',

  icon: () => <Icon icon={faRotateRight} />,
  isActive: {name: 'redo'},
  onPress: (editor) => () => editor?.chain().focus().redo().run(),
  // operation: {name: 'redo'},
})
export const BoldControl = createControl({
  label: 'bold',

  icon: () => <Icon icon={faBold} />,
  isActive: {name: 'bold'},
  // operation: {name: 'toggleBold'},
  onPress: (editor) => () => editor?.chain().focus().toggleBold().run(),
})

export const ItalicControl = createControl({
  label: 'italic',

  icon: () => <Icon icon={faItalic} />,
  isActive: {name: 'italic'},
  // operation: {name: 'toggleItalic'},
  onPress: (editor) => () => editor?.chain().focus().toggleItalic().run(),
})

export const UnderlineControl = createControl({
  label: 'underline',

  icon: () => <Icon icon={faUnderline} />,
  isActive: {name: 'underline'},
  onPress: (editor) => () => editor?.chain().focus().toggleUnderline().run(),
  // operation: {name: 'toggleUnderline'},
})

export const StrikeThroughControl = createControl({
  label: 'strike through',

  icon: () => <Icon icon={faStrikethrough} />,
  isActive: {name: 'strike'},
  onPress: (editor) => () => editor?.chain().focus().toggleStrike().run(),

  // operation: {name: 'toggleStrike'},
})

// export const ClearFormattingControl = createControl({
//   icon: () => <Icon icon={fa} />,
//   operation: {name: 'unsetAllMarks'},
// })

export const UnlinkControl = createControl({
  label: 'unset link',

  icon: () => <Icon icon={faUnlink} />,
  onPress: (editor) => () => editor?.chain().focus().unsetLink().run(),

  // operation: {name: 'unsetLink'},
})

export const BulletListControl = createControl({
  label: 'bullet list',

  icon: () => <Icon icon={faList} />,
  isActive: {name: 'bulletList'},
  // operation: {name: 'toggleBulletList'},
  onPress: (editor) => () => editor?.chain().focus().toggleBulletList().run(),
})

export const OrderedListControl = createControl({
  label: 'ordered list',

  icon: () => <Icon icon={faListNumeric} />,
  isActive: {name: 'orderedList'},
  // operation: {name: 'toggleOrderedList'},
  onPress: (editor) => () => editor?.chain().focus().toggleOrderedList().run(),
})

export const H1Control = createControl({
  label: 'H1',
  icon: () => <H1Icon />,
  isActive: {name: 'heading', attributes: {level: 1}},
  // operation: {name: 'toggleHeading', attributes: {level: 1}},
  onPress: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 1}).run(),
})

export const H2Control = createControl({
  label: 'H2',

  icon: () => <H1Icon />,
  isActive: {name: 'heading', attributes: {level: 2}},
  // operation: {name: 'toggleHeading', attributes: {level: 2}},
  onPress: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 2}).run(),
})

export const H3Control = createControl({
  label: 'H3',

  icon: () => <H3Icon />,
  isActive: {name: 'heading', attributes: {level: 3}},
  // operation: {name: 'toggleHeading', attributes: {level: 3}},
  onPress: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 3}).run(),
})

export const H4Control = createControl({
  label: 'H4',
  icon: () => <H1Icon />,
  isActive: {name: 'heading', attributes: {level: 4}},
  // operation: {name: 'toggleHeading', attributes: {level: 4}},
  onPress: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 4}).run(),
})

export const H5Control = createControl({
  label: 'H5',
  icon: () => <H1Icon />,
  isActive: {name: 'heading', attributes: {level: 5}},
  // operation: {name: 'toggleHeading', attributes: {level: 5}},
  onPress: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 5}).run(),
})

export const H6Control = createControl({
  label: 'H6',
  icon: () => <H1Icon />,
  isActive: {name: 'heading', attributes: {level: 6}},
  // operation: {name: 'toggleHeading', attributes: {level: 6}},
  onPress: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 6}).run(),
})

export const BlockquoteControl = createControl({
  label: 'blockquote',
  icon: () => <Icon icon={faQuoteLeft} />,
  isActive: {name: 'blockquote'},
  // operation: {name: 'toggleBlockquote'},
  onPress: (editor) => () => editor?.chain().focus().toggleBlockquote().run(),
})

export const AlignLeftControl = createControl({
  label: 'left alignment text',

  icon: () => <Icon icon={faAlignLeft} />,
  // operation: {name: 'setTextAlign', attributes: 'left'},
  onPress: (editor) => () => editor?.chain().focus().setTextAlign('left').run(),
})

export const AlignRightControl = createControl({
  label: 'right alignment text',

  icon: () => <Icon icon={faAlignRight} />,
  // operation: {name: 'setTextAlign', attributes: 'right'},
  onPress: (editor) => () =>
    editor?.chain().focus().setTextAlign('right').run(),
})

export const AlignCenterControl = createControl({
  label: 'center alignment text',

  icon: () => <Icon icon={faAlignCenter} />,
  // operation: {name: 'setTextAlign', attributes: 'center'},
  onPress: (editor) => () =>
    editor?.chain().focus().setTextAlign('center').run(),
})

export const AlignJustifyControl = createControl({
  label: 'justify alignment text',

  icon: () => <Icon icon={faAlignJustify} />,
  // operation: {name: 'setTextAlign', attributes: 'justify'},
  onPress: (editor) => () =>
    editor?.chain().focus().setTextAlign('justify').run(),
})

export const SubscriptControl = createControl({
  label: 'subscript',
  icon: () => <Icon icon={faSubscript} />,
  isActive: {name: 'subscript'},
  // operation: {name: 'toggleSubscript'},
  onPress: (editor) => () => editor?.chain().focus().toggleSubscript().run(),
})

export const SuperscriptControl = createControl({
  label: 'superscript',
  icon: () => <Icon icon={faSuperscript} />,
  isActive: {name: 'superscript'},
  // operation: {name: 'toggleSuperscript'},
  onPress: (editor) => () => editor?.chain().focus().toggleSuperscript().run(),
})

export const CodeBlockControl = createControl({
  label: 'code block',

  icon: () => <Icon icon={faLaptopCode} />,
  isActive: {name: 'codeBlock'},
  // operation: {name: 'toggleCodeBlock'},
  onPress: (editor) => () => editor?.chain().focus().toggleCodeBlock().run(),
})

export const HrControl = createControl({
  label: 'horizontal rule',

  icon: () => <Icon icon={faRulerHorizontal} />,
  onPress: (editor) => () => editor?.chain().focus().setHorizontalRule().run(),

  // operation: {name: 'setHorizontalRule'},
})
