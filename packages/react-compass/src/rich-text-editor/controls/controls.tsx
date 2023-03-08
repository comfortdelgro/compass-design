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
  faCode,
  faHighlighter,
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
  operation: {name: 'undo'},
})
export const RedoControl = createControl({
  label: 'redo',

  icon: () => <Icon icon={faRotateRight} />,
  isActive: {name: 'redo'},
  operation: {name: 'redo'},
})
export const BoldControl = createControl({
  label: 'bold',

  icon: () => <Icon icon={faBold} />,
  isActive: {name: 'bold'},
  operation: {name: 'toggleBold'},
})

export const ItalicControl = createControl({
  label: 'italic',

  icon: () => <Icon icon={faItalic} />,
  isActive: {name: 'italic'},
  operation: {name: 'toggleItalic'},
})

export const UnderlineControl = createControl({
  label: 'underline',

  icon: () => <Icon icon={faUnderline} />,
  isActive: {name: 'underline'},
  operation: {name: 'toggleUnderline'},
})

export const StrikeThroughControl = createControl({
  label: 'strike through',

  icon: () => <Icon icon={faStrikethrough} />,
  isActive: {name: 'strike'},
  operation: {name: 'toggleStrike'},
})

// export const ClearFormattingControl = createControl({
//   icon: () => <Icon icon={fa} />,
//   operation: {name: 'unsetAllMarks'},
// })

export const UnlinkControl = createControl({
  label: 'unset link',

  icon: () => <Icon icon={faUnlink} />,
  operation: {name: 'unsetLink'},
})

export const BulletListControl = createControl({
  label: 'bullet list',

  icon: () => <Icon icon={faList} />,
  isActive: {name: 'bulletList'},
  operation: {name: 'toggleBulletList'},
})

export const OrderedListControl = createControl({
  label: 'ordered list',

  icon: () => <Icon icon={faListNumeric} />,
  isActive: {name: 'orderedList'},
  operation: {name: 'toggleOrderedList'},
})

export const H1Control = createControl({
  label: 'H1',
  icon: () => <H1Icon />,
  isActive: {name: 'heading', attributes: {level: 1}},
  operation: {name: 'toggleHeading', attributes: {level: 1}},
})

export const H2Control = createControl({
  label: 'H2',

  icon: () => <H1Icon />,
  isActive: {name: 'heading', attributes: {level: 2}},
  operation: {name: 'toggleHeading', attributes: {level: 2}},
})

export const H3Control = createControl({
  label: 'H3',

  icon: () => <H3Icon />,
  isActive: {name: 'heading', attributes: {level: 3}},
  operation: {name: 'toggleHeading', attributes: {level: 3}},
})

export const H4Control = createControl({
  label: 'H4',
  icon: () => <H1Icon />,
  isActive: {name: 'heading', attributes: {level: 4}},
  operation: {name: 'toggleHeading', attributes: {level: 4}},
})

export const H5Control = createControl({
  label: 'H5',
  icon: () => <H1Icon />,
  isActive: {name: 'heading', attributes: {level: 5}},
  operation: {name: 'toggleHeading', attributes: {level: 5}},
})

export const H6Control = createControl({
  label: 'H6',
  icon: () => <H1Icon />,
  isActive: {name: 'heading', attributes: {level: 6}},
  operation: {name: 'toggleHeading', attributes: {level: 6}},
})

export const BlockquoteControl = createControl({
  label: 'blockquote',
  icon: () => <Icon icon={faQuoteLeft} />,
  isActive: {name: 'blockquote'},
  operation: {name: 'toggleBlockquote'},
})

export const AlignLeftControl = createControl({
  label: 'left alignment text',

  icon: () => <Icon icon={faAlignLeft} />,
  operation: {name: 'setTextAlign', attributes: 'left'},
})

export const AlignRightControl = createControl({
  label: 'right alignment text',

  icon: () => <Icon icon={faAlignRight} />,
  operation: {name: 'setTextAlign', attributes: 'right'},
})

export const AlignCenterControl = createControl({
  label: 'center alignment text',

  icon: () => <Icon icon={faAlignCenter} />,
  operation: {name: 'setTextAlign', attributes: 'center'},
})

export const AlignJustifyControl = createControl({
  label: 'justify alignment text',

  icon: () => <Icon icon={faAlignJustify} />,
  operation: {name: 'setTextAlign', attributes: 'justify'},
})

export const SubscriptControl = createControl({
  label: 'subscript',
  icon: () => <Icon icon={faSubscript} />,
  isActive: {name: 'subscript'},
  operation: {name: 'toggleSubscript'},
})

export const SuperscriptControl = createControl({
  label: 'superscript',

  icon: () => <Icon icon={faSuperscript} />,
  isActive: {name: 'superscript'},
  operation: {name: 'toggleSuperscript'},
})

export const CodeControl = createControl({
  label: 'code',

  icon: () => <Icon icon={faCode} />,
  isActive: {name: 'code'},
  operation: {name: 'toggleCode'},
})

export const CodeBlockControl = createControl({
  label: 'code block',

  icon: () => <Icon icon={faLaptopCode} />,
  isActive: {name: 'codeBlock'},
  operation: {name: 'toggleCodeBlock'},
})

export const HighlightControl = createControl({
  label: 'highlight',

  icon: () => <Icon icon={faHighlighter} />,
  isActive: {name: 'highlight'},
  operation: {name: 'toggleHighlight'},
})

export const HrControl = createControl({
  label: 'horizontal rule',

  icon: () => <Icon icon={faRulerHorizontal} />,
  operation: {name: 'setHorizontalRule'},
})
// export const LinkControl = createControl({
//   label: 'link',

//   icon: () => <Icon icon={faLink} />,
//   operation: {name: 'setHorizontalRule'},
// })
// export const ImageControl = createControl({
//   label: 'image',

//   icon: () => <Icon icon={faImage} />,
//   operation: {name: 'setHorizontalRule'},
// })

// export const UnsetColorControl = createControl({
//   icon: () => <Icon icon={faBold} />,
//   operation: {name: 'unsetColor'},
// })
