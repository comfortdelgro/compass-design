import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledEditorContent = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  backgroundColor: '$background',
  color: '$primaryText',
  // styling
})

export const StyledRichTextEditor = styled('div', {
  // reset
  appearance: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  maxWidth: '820px',

  // Styling for ProposeMirror
  '& .ProseMirror': {
    padding: '10px',
    minHeight: '100px',
    outline: 'none',
  },
  '& .ProseMirror blockquote': {
    borderLeft: '3px solid $border',
    paddingLeft: '1rem',
  },
  '& .ProseMirror code': {
    marginTop: '0.75em',
  },
  '& .ProseMirror pre': {
    background: '$black',
    borderRadius: '0.5rem',
    color: '$white',
    padding: '0.75rem 1rem',
    code: {
      background: 'none',
      color: 'inherit',
      fontSize: '0.8rem',
      padding: 0,
    },
  },
  '& .ProseMirror sup': {
    top: '-0.5em',
  },
  '& .ProseMirror a': {
    color: '$info',
    textDecoration: 'underline',
    transition: '$default',
  },
  h1: {
    display: 'block',
    fontSize: '2em',
    fontWeight: 'bold',
  },
  h2: {
    display: 'block',
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  h3: {
    display: 'block',
    fontSize: '1.17em',
    fontWeight: 'bold',
  },
  h4: {
    display: 'block',
    fontSize: '1em',
    fontWeight: 'bold',
  },
  h5: {
    display: 'block',
    fontSize: '0.83em',
    fontWeight: 'bold',
  },
  h6: {
    display: 'block',
    fontSize: '0.67em',
    fontWeight: 'bold',
  },
  ul: {
    display: 'block',
    listStyle: 'disc',
    margin: 'unset',
    paddingLeft: '20px',
  },
  ol: {
    display: 'block',
    listStyle: 'decimal',
    margin: 'unset',
    paddingLeft: '20px',
  },

  // Styling menubar and content container

  borderRadius: '5px',
  border: '1px solid $gray40',
  overflow: 'clip',

  // styling character count
  '.character-count': {
    color: '$secondaryText',
    paddingTop: '1rem',
    paddingLeft: '1rem',
    paddingBottom: '1rem',
    backgroundColor: '$background',
  },
})

export const StyledColorItem = styled('div', {
  borderRadius: 4,
  width: 24,
  height: 24,
  variants: {
    active: {
      true: {},
    },
  },
})

export type MenuBarVariantProps = VariantProps<typeof StyledRichTextEditor>
