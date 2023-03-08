import {VariantProps} from '@stitches/react'
import {styled} from '../../theme'

export const StyledToolbar = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',

  // Styling
  padding: '5px 24px',
  backgroundColor: '#F3F2F1',
  width: 820,
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
    // wrapped: {
    //   true: {
    //     flexWrap: 'wrap',
    //   },
    // },
  },
})

export type StyledToolbarProps = VariantProps<typeof StyledToolbar>
