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
  paddingLeft: '24px',
  paddingRight: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#F3F2F1',
  width: '796px',

  '& div': {
    fontSize: '18px',
    margin: '7px',
    marginRight: '15px',
    outline: 'none',
    border: 'none',
    background: 'none',
    color: 'rgb(70, 70, 70)',
    cursor: 'pointer',
  },

  '& div:last-child': {
    marginRight: '7px',
  },

  '& .is_active': {
    background: 'rgb(197, 197, 197)',
    padding: '2px 3px',
    borderRadius: '2px',
  },
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

export type MenuBarVariantProps = VariantProps<typeof StyledRichTextEditor>
