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
  onClick: (editor) => () => editor?.chain().focus().undo().run(),
})
export const RedoControl = createControl({
  label: 'redo',
  icon: () => <Icon icon={faRotateRight} />,
  isActive: {name: 'redo'},
  onClick: (editor) => () => editor?.chain().focus().redo().run(),
})
export const BoldControl = createControl({
  label: 'bold',
  icon: () => <Icon icon={faBold} />,
  isActive: {name: 'bold'},
  onClick: (editor) => () => editor?.chain().focus().toggleBold().run(),
})

export const ItalicControl = createControl({
  label: 'italic',
  icon: () => <Icon icon={faItalic} />,
  isActive: {name: 'italic'},
  onClick: (editor) => () => editor?.chain().focus().toggleItalic().run(),
})

export const UnderlineControl = createControl({
  label: 'underline',
  icon: () => <Icon icon={faUnderline} />,
  isActive: {name: 'underline'},
  onClick: (editor) => () => editor?.chain().focus().toggleUnderline().run(),
})

export const StrikeThroughControl = createControl({
  label: 'strike through',
  icon: () => <Icon icon={faStrikethrough} />,
  isActive: {name: 'strike'},
  onClick: (editor) => () => editor?.chain().focus().toggleStrike().run(),
})

export const UnlinkControl = createControl({
  label: 'unset link',
  icon: () => <Icon icon={faUnlink} />,
  onClick: (editor) => () => editor?.chain().focus().unsetLink().run(),
})

export const BulletListControl = createControl({
  label: 'bullet list',
  icon: () => <Icon icon={faList} />,
  isActive: {name: 'bulletList'},
  onClick: (editor) => () => editor?.chain().focus().toggleBulletList().run(),
})

export const OrderedListControl = createControl({
  label: 'ordered list',
  icon: () => <Icon icon={faListNumeric} />,
  isActive: {name: 'orderedList'},
  onClick: (editor) => () => editor?.chain().focus().toggleOrderedList().run(),
})

export const H1Control = createControl({
  label: 'H1',
  icon: () => <H1Icon />,
  isActive: {name: 'heading', attributes: {level: 1}},
  onClick: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 1}).run(),
})

export const H2Control = createControl({
  label: 'H2',

  icon: () => <H2Icon />,
  isActive: {name: 'heading', attributes: {level: 2}},
  onClick: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 2}).run(),
})

export const H3Control = createControl({
  label: 'H3',
  icon: () => <H3Icon />,
  isActive: {name: 'heading', attributes: {level: 3}},
  onClick: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 3}).run(),
})

export const H4Control = createControl({
  label: 'H4',
  icon: () => <H4Icon />,
  isActive: {name: 'heading', attributes: {level: 4}},
  onClick: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 4}).run(),
})

export const H5Control = createControl({
  label: 'H5',
  icon: () => <H5Icon />,
  isActive: {name: 'heading', attributes: {level: 5}},
  onClick: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 5}).run(),
})

export const H6Control = createControl({
  label: 'H6',
  icon: () => <H6Icon />,
  isActive: {name: 'heading', attributes: {level: 6}},
  onClick: (editor) => () =>
    editor?.chain().focus().toggleHeading({level: 6}).run(),
})

export const BlockquoteControl = createControl({
  label: 'blockquote',
  icon: () => <Icon icon={faQuoteLeft} />,
  isActive: {name: 'blockquote'},
  onClick: (editor) => () => editor?.chain().focus().toggleBlockquote().run(),
})

export const AlignLeftControl = createControl({
  label: 'left alignment text',
  icon: () => <Icon icon={faAlignLeft} />,
  onClick: (editor) => () => editor?.chain().focus().setTextAlign('left').run(),
})

export const AlignRightControl = createControl({
  label: 'right alignment text',
  icon: () => <Icon icon={faAlignRight} />,
  onClick: (editor) => () =>
    editor?.chain().focus().setTextAlign('right').run(),
})

export const AlignCenterControl = createControl({
  label: 'center alignment text',
  icon: () => <Icon icon={faAlignCenter} />,
  onClick: (editor) => () =>
    editor?.chain().focus().setTextAlign('center').run(),
})

export const AlignJustifyControl = createControl({
  label: 'justify alignment text',
  icon: () => <Icon icon={faAlignJustify} />,
  onClick: (editor) => () =>
    editor?.chain().focus().setTextAlign('justify').run(),
})

export const SubscriptControl = createControl({
  label: 'subscript',
  icon: () => <Icon icon={faSubscript} />,
  isActive: {name: 'subscript'},
  onClick: (editor) => () => editor?.chain().focus().toggleSubscript().run(),
})

export const SuperscriptControl = createControl({
  label: 'superscript',
  icon: () => <Icon icon={faSuperscript} />,
  isActive: {name: 'superscript'},
  onClick: (editor) => () => editor?.chain().focus().toggleSuperscript().run(),
})

export const CodeBlockControl = createControl({
  label: 'code block',
  icon: () => <Icon icon={faLaptopCode} />,
  isActive: {name: 'codeBlock'},
  onClick: (editor) => () => editor?.chain().focus().toggleCodeBlock().run(),
})

export const HrControl = createControl({
  label: 'horizontal rule',
  icon: () => <Icon icon={faRulerHorizontal} />,
  onClick: (editor) => () => editor?.chain().focus().setHorizontalRule().run(),
})

const H1Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='24'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth='2'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M19 18v-8l-2 2'></path>
    <path d='M4 6v12'></path>
    <path d='M12 6v12'></path>
    <path d='M11 18h2'></path>
    <path d='M3 18h2'></path>
    <path d='M4 12h8'></path>
    <path d='M3 6h2'></path>
    <path d='M11 6h2'></path>
  </svg>
)

const H2Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='24'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth='2'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0'></path>
    <path d='M4 6v12'></path>
    <path d='M12 6v12'></path>
    <path d='M11 18h2'></path>
    <path d='M3 18h2'></path>
    <path d='M4 12h8'></path>
    <path d='M3 6h2'></path>
    <path d='M11 6h2'></path>
  </svg>
)

const H3Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='24'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth='2'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M19 14a2 2 0 1 0 -2 -2'></path>
    <path d='M17 16a2 2 0 1 0 2 -2'></path>
    <path d='M4 6v12'></path>
    <path d='M12 6v12'></path>
    <path d='M11 18h2'></path>
    <path d='M3 18h2'></path>
    <path d='M4 12h8'></path>
    <path d='M3 6h2'></path>
    <path d='M11 6h2'></path>
  </svg>
)
const H4Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='24'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth='2'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M20 18v-8l-4 6h5'></path>
    <path d='M4 6v12'></path>
    <path d='M12 6v12'></path>
    <path d='M11 18h2'></path>
    <path d='M3 18h2'></path>
    <path d='M4 12h8'></path>
    <path d='M3 6h2'></path>
    <path d='M11 6h2'></path>
  </svg>
)
const H5Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='24'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth='2'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M17 18h2a2 2 0 1 0 0 -4h-2v-4h4'></path>
    <path d='M4 6v12'></path>
    <path d='M12 6v12'></path>
    <path d='M11 18h2'></path>
    <path d='M3 18h2'></path>
    <path d='M4 12h8'></path>
    <path d='M3 6h2'></path>
    <path d='M11 6h2'></path>
  </svg>
)

const H6Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='24'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth='2'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z'></path>
    <path d='M21 12a2 2 0 1 0 -4 0v4'></path>
    <path d='M4 6v12'></path>
    <path d='M12 6v12'></path>
    <path d='M11 18h2'></path>
    <path d='M3 18h2'></path>
    <path d='M4 12h8'></path>
    <path d='M3 6h2'></path>
    <path d='M11 6h2'></path>
  </svg>
)
