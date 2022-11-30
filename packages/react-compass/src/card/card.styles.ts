import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledCard = styled('div', {
  width: '100%',
  position: 'relative',
  backgroundColor: '$background',
  boxShadow:
    '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
  borderRadius: '$md',
  display: 'flex',
  flexDirection: 'column',

  '& button': {
    marginTop: '$6',
  },

  '& button+button': {
    marginLeft: '$8',
  },

  variants: {
    variant: {
      default: {},
      disabled: {
        opacity: '0.5',
        userSelect: 'none',
        cursor: 'not-allowed',
      },
    },
    size: {
      sm: {
        maxWidth: '$60',
      },
      lg: {
        maxWidth: '$96',
      },
      full: {
        width: '100%',
      },
    },
  },
})

export type CardVariantProps = VariantProps<typeof StyledCard>
