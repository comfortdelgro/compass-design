import React from 'react'
import {createControl} from './create-controls'

export const UndoControl = createControl({
  label: 'undo',
  icon: () => (
    <svg viewBox='0 0 512 512'>
      <path
        fill='currentColor'
        d='M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z'
      />
    </svg>
  ),
  isActive: {name: 'undo'},
  onClick: (editor) => () => editor?.chain().focus().undo().run(),
})
export const RedoControl = createControl({
  label: 'redo',
  icon: () => (
    <svg viewBox='0 0 512 512'>
      <path
        fill='currentColor'
        d='M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z'
      />
    </svg>
  ),
  isActive: {name: 'redo'},
  onClick: (editor) => () => editor?.chain().focus().redo().run(),
})
export const BoldControl = createControl({
  label: 'bold',
  icon: () => (
    <svg viewBox='0 0 384 512'>
      <path
        fill='currentColor'
        d='M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z'
      />
    </svg>
  ),
  isActive: {name: 'bold'},
  onClick: (editor) => () => editor?.chain().focus().toggleBold().run(),
})

export const ItalicControl = createControl({
  label: 'italic',
  icon: () => (
    <svg viewBox='0 0 384 512'>
      <path
        fill='currentColor'
        d='M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z'
      />
    </svg>
  ),
  isActive: {name: 'italic'},
  onClick: (editor) => () => editor?.chain().focus().toggleItalic().run(),
})

export const UnderlineControl = createControl({
  label: 'underline',
  icon: () => (
    <svg viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z'
      />
    </svg>
  ),
  isActive: {name: 'underline'},
  onClick: (editor) => () => editor?.chain().focus().toggleUnderline().run(),
})

export const StrikeThroughControl = createControl({
  label: 'strike through',
  icon: () => (
    <svg viewBox='0 0 512 512'>
      <path
        fill='currentColor'
        d='M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H270.1c-.1 0-.3-.1-.4-.1l-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3l0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6l0 0 .2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1H335.1c7 5.6 11.4 11.2 13.9 17.2z'
      />
    </svg>
  ),
  isActive: {name: 'strike'},
  onClick: (editor) => () => editor?.chain().focus().toggleStrike().run(),
})

export const UnlinkControl = createControl({
  label: 'unset link',
  icon: () => (
    <svg viewBox='0 0 640 512'>
      <path
        fill='currentColor'
        d='M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM406.6 416.4L220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3zm-290-228.5L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9z'
      />
    </svg>
  ),
  onClick: (editor) => () => editor?.chain().focus().unsetLink().run(),
})

export const BulletListControl = createControl({
  label: 'bullet list',
  icon: () => (
    <svg viewBox='0 0 512 512'>
      <path
        fill='currentColor'
        d='M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z'
      />
    </svg>
  ),
  isActive: {name: 'bulletList'},
  onClick: (editor) => () => editor?.chain().focus().toggleBulletList().run(),
})

export const OrderedListControl = createControl({
  label: 'ordered list',
  icon: () => (
    <svg viewBox='0 0 512 512'>
      <path
        fill='currentColor'
        d='M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z'
      />
    </svg>
  ),
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
  icon: () => (
    <svg viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'
      />
    </svg>
  ),
  isActive: {name: 'blockquote'},
  onClick: (editor) => () => editor?.chain().focus().toggleBlockquote().run(),
})

export const AlignLeftControl = createControl({
  label: 'left alignment text',
  icon: () => (
    <svg viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
      />
    </svg>
  ),
  onClick: (editor) => () => editor?.chain().focus().setTextAlign('left').run(),
})

export const AlignRightControl = createControl({
  label: 'right alignment text',
  icon: () => (
    <svg viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
      />
    </svg>
  ),
  onClick: (editor) => () =>
    editor?.chain().focus().setTextAlign('right').run(),
})

export const AlignCenterControl = createControl({
  label: 'center alignment text',
  icon: () => (
    <svg viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z'
      />
    </svg>
  ),
  onClick: (editor) => () =>
    editor?.chain().focus().setTextAlign('center').run(),
})

export const AlignJustifyControl = createControl({
  label: 'justify alignment text',
  icon: () => (
    <svg viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z'
      />
    </svg>
  ),
  onClick: (editor) => () =>
    editor?.chain().focus().setTextAlign('justify').run(),
})

export const SubscriptControl = createControl({
  label: 'subscript',
  icon: () => (
    <svg viewBox='0 0 512 512'>
      <path
        fill='currentColor'
        d='M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32H47.3l89.6 128L47.3 384H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H304.7L215.1 256l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-10.4 0-20.2 5.1-26.2 13.6L176 200.2 90.2 77.6C84.2 69.1 74.4 64 64 64H32zM480 320c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 361.5 404.3 368 416 368v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32V320z'
      />
    </svg>
  ),
  isActive: {name: 'subscript'},
  onClick: (editor) => () => editor?.chain().focus().toggleSubscript().run(),
})

export const SuperscriptControl = createControl({
  label: 'superscript',
  icon: () => (
    <svg viewBox='0 0 512 512'>
      <path
        fill='currentColor'
        d='M480 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 73.5 404.3 80 416 80v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32V32zM32 64C14.3 64 0 78.3 0 96s14.3 32 32 32H47.3l89.6 128L47.3 384H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H304.7L215.1 256l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-10.4 0-20.2 5.1-26.2 13.6L176 200.2 90.2 77.6C84.2 69.1 74.4 64 64 64H32z'
      />
    </svg>
  ),
  isActive: {name: 'superscript'},
  onClick: (editor) => () => editor?.chain().focus().toggleSuperscript().run(),
})

export const CodeBlockControl = createControl({
  label: 'code block',
  icon: () => (
    <svg viewBox='0 0 640 512'>
      <path
        fill='currentColor'
        d='M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z'
      />
    </svg>
  ),
  isActive: {name: 'codeBlock'},
  onClick: (editor) => () => editor?.chain().focus().toggleCodeBlock().run(),
})

export const HrControl = createControl({
  label: 'horizontal rule',
  icon: () => (
    <svg viewBox='0 0 640 512'>
      <path
        fill='currentColor'
        d='M0 336c0 26.5 21.5 48 48 48l544 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0c-26.5 0-48 21.5-48 48L0 336z'
      />
    </svg>
  ),
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
