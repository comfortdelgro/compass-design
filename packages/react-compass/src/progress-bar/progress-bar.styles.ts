import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledProgressBar = styled('div', {
  width: '100%',
  '.progress-bar-label': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '$2',
    '& span': {
      fontWeight: '$normal',
      fontSize: '$label1',
    },
  },
  '.progress-bar': {
    backgroundColor: '$gray30',
    '& div': {
      height: '100%',
      backgroundColor: '#009EDA',
    },
  },
  variants: {
    variant: {
      normal: {},
      rounded: {
        '.progress-bar': {
          borderRadius: '$full',
          '& div': {
            borderRadius: '$full',
          },
        },
      },
    },
    color: {
      blue: {
        '.progress-bar': {
          '& div': {
            backgroundColor: '#009EDA',
          },
        },
      },
      green: {
        '.progress-bar': {
          '& div': {
            backgroundColor: '$success',
          },
        },
      },
    },
    size: {
      sm: {
        '.progress-bar': {
          height: '$0_5',
        },
      },
      md: {
        '.progress-bar': {
          height: '$1',
        },
      },
      lg: {
        '.progress-bar': {
          height: '$2',
        },
      },
      xl: {
        '.progress-bar': {
          height: '$3',
        },
      },
    },
  },
  defaultVariants: {
    size: 'lg',
    color: 'green',
    variant: 'normal',
  },
})

export type ProgressBarVariantProps = VariantProps<typeof StyledProgressBar>
