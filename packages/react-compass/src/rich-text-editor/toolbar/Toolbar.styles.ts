import {VariantProps} from '@stitches/react'
import {styled} from '../../theme'

export const StyledToolbar = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  // Styling
  padding: '5px 20px',
  backgroundColor: '#F3F2F1',
  overflow: 'hidden',
  maxHeight: 38,
  position: 'relative',
  rowGap: 5,
})

export type StyledToolbarProps = VariantProps<typeof StyledToolbar>
