import {VariantProps} from '@stitches/react'
import {styled} from '../../theme'

export const StyledToolbar = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  // Styling
  padding: '$2 $4',
  backgroundColor: '$gray20',
  overflow: 'hidden',
  maxHeight: 44,
  position: 'relative',
})

export type StyledToolbarProps = VariantProps<typeof StyledToolbar>
