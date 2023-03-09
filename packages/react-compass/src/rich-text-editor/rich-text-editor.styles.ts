import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledEditorContent = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  // styling
  width: '796px',
})

export const StyledMenuBar = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',

  // Styling
  padding: '5px 24px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F3F2F1',
  width: '796px',
  gap: '16px',
})

export const StyledRichTextEditor = styled('div', {
  // reset
  appearance: 'none',
  //border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // Styling for ProposeMirror
  '& .ProseMirror': {
    padding: '10px',
    borderTop: '1px solid #E9ECEF',
    background: 'white',
    borderRadius: '0 0 5px 5px',
    minHeight: '100px',
    outline: 'none',
  },
  '& .ProseMirror blockquote': {
    borderLeft: '3px solid #0d0d0d1a',
    paddingLeft: '1rem',
  },
  '& .ProseMirror code': {
    marginTop: '0.75em',
  },
  '& .ProseMirror pre': {
    background: '#0d0d0d',
    borderRadius: '0.5rem',
    color: '#fff',
    padding: '0.75rem 1rem',
    code: {
      background: 'none',
      color: 'inherit',
      fontSize: '0.8rem',
      padding: 0,
    },
  },
  '& .ProseMirror sup': {
    top: '-1rem',
  },

  // Styling menubar and content container

  borderRadius: '5px',
  border: '1px solid #E9ECEF',
  width: '796px',
  overflow: 'clip',

  // styling character count
  '.character-count': {
    color: '#868e96',
    marginTop: '1rem',
    marginLeft: '1rem',
    marginBottom: '1rem',
  },
})

export const StyledMenuBlock = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})
export const StyledMenuItem = styled('div', {
  borderRadius: '2px',
  fontSize: '18px',
  outline: 'none',
  border: 'none',
  background: 'none',
  color: 'rgb(70, 70, 70)',
  cursor: 'pointer',
  padding: '10px',
  '&.is_active': {
    background: 'rgb(197, 197, 197)',
  },
})
export const StyledColorItem = styled('div', {
  borderRadius: 4,
  width: 24,
  height: 24,
  variants: {
    active: {
      true: {
        background: 'red',
      },
    },
  },
})

export const List = styled('ul', {
  maxHeight: '300px',
  overflow: 'auto',
  listStyle: 'none',
  padding: 0,
  margin: '4px 0',
  outline: 'none',
  width: '100%',
})
export const Grid = styled('ul', {
  maxHeight: '300px',
  padding: 9,
  overflow: 'auto',
  listStyle: 'none',
  margin: '4px 0',
  outline: 'none',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto auto auto auto',
})

export const ListItem = styled('li', {
  fontSize: '14px',
  background: 'none',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  outline: 'none',
  color: '#333',
  position: 'relative',
  gap: 8,
  '.overlapped-icon': {
    position: 'absolute',
    zIndex: 1,
    color: '#FFFFFF !important',
    left: '35%',
    top: '32%',
  },
  variants: {
    isFocused: {
      true: {
        background: '#F3F2F1',
      },
    },
    isSelected: {
      true: {
        background: '#F3F2F1',
        '.check-icon': {
          color: '#0142AF',
        },
      },
    },
  },
})

export const ItemContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 5,
})

export type MenuBarVariantProps = VariantProps<typeof StyledRichTextEditor>
