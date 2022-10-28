import {styled} from '../theme'
import {spin} from '../theme/keyframes'
import type {VariantProps} from '../utils/stitches.types'

export const StyledSpinner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '.path, .path::after': {
    aspectRatio: '1 / 1',
    borderRadius: '$full',
  },

  '.path': {
    position: 'relative',
    borderStyle: 'solid',
    borderColor: '$gray30',
    borderLeftColor: '$info',
    transform: 'translateZ(0)',
    animation: `${spin} 1s infinite linear`,
  },

  '.label': {
    color: '$info',
    fontFamily: '$sans',
    marginTop: '$2',
    marginBottom: '$2',
  },

  variants: {
    size: {
      xl: {},
      lg: {
        '.path, .path::after': {
          width: '$10',
          height: '$10',
        },
        '.path': {
          borderWidth: '0.5rem',
        },
        '.label': {
          fontSize: '$label1',
        },
      },
      md: {
        '.path, .path::after': {
          width: '$8',
          height: '$8',
        },
        '.path': {
          borderWidth: '0.375rem',
        },
        '.label': {
          fontSize: '$label2',
        },
      },
      sm: {
        '.path, .path::after': {
          width: '$6',
          height: '$6',
        },
        '.path': {
          borderWidth: '0.25rem',
        },
        '.label': {
          fontSize: '$label3',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type SpinnerVariantProps = VariantProps<typeof StyledSpinner>
