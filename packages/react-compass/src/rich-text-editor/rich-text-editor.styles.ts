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
  '& .ProseMirror code': {
    marginTop: '0.75em',
  },

  // Styling menubar and content container

  borderRadius: '5px',
  border: '1px solid #E9ECEF',
  width: '796px',
  overflow: 'clip',
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
export type MenuBarVariantProps = VariantProps<typeof StyledRichTextEditor>
