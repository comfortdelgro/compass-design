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
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 16,
  position: 'static',
  flexWrap: 'wrap',
  variants: {
    sticky: {
      true: {
        position: 'sticky',
        top: 0,
      },
    },
  },
})

export type StyledToolbarProps = VariantProps<typeof StyledToolbar>
