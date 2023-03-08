import {styled} from '../../../theme'
import {VariantProps} from '../../../utils/stitches.types'

export const StyledControl = styled('button', {
  position: 'relative',
  flexShrink: 0,
  fontFamily: '$sans',
  lineHeight: '$normal',
  fontWeight: '$semibold',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  background: 'none',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    background: '#E1DFDD',
    color: '#000000',
  },
  '&:disabled': {
    background: '$divider',
    color: '$disabledText',
    borderColor: '$divider',
    cursor: 'not-allowed',
  },
  variants: {
    active: {
      true: {
        background: '#605E5C',
        color: '#FFFFFF',
      },
    },
  },
})

export type ControlVariantProps = VariantProps<typeof StyledControl>
