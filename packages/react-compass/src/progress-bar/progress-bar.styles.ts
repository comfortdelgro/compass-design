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
    variant: 'normal',
  },
})

export const StyledProgressDisplay = styled('div', {})

export const StyledCurrentProgress = styled('div', {
  height: '100%',
  transition: 'width .2s linear',
})

export type ProgressBarVariantProps = VariantProps<typeof StyledProgressBar>
