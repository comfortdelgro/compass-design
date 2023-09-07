import {styled} from '../theme'
import {keyframes} from '../theme/stitches.config'
import type {VariantProps} from '../utils/stitches.types'

const progressLoading = keyframes({
  from: {
    backgroundPositionX: '200%',
  },
  to: {
    backgroundPositionX: 0,
  },
})

const progressSlideLoading = keyframes({
  '0%': {
    left: '0%',
    right: '100%',
    width: '0%',
  },
  '10%': {
    left: '0%',
    right: '75%',
    width: '25%',
  },
  '90%': {
    right: '0%',
    left: '75%',
    width: '25%',
  },
  '100%': {
    left: '100%',
    right: '0%',
    width: '0%',
  },
})

export const StyledProgressBarWrapper = styled('div', {
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

export const StyledProgressBar = styled('div', {
  position: 'relative',
})

export const StyledCurrentProgress = styled('div', {
  height: '100%',
  transition: 'width .2s linear',

  variants: {
    loading: {
      true: {},
      slide: {},
      false: {},
    },
  },
})

export const StyledLoadingProgress = styled('div', {
  position: 'absolute',
  inset: 0,
  height: '100%',

  variants: {
    loading: {
      stripes: {
        width: '100%',
        backgroundSize: '200% 100%',
        animation: `${progressLoading} 10s linear infinite`,
        willChange: 'background-position',
      },
      true: {
        animation: `${progressSlideLoading} 2s linear infinite`,
      },
      false: {
        display: 'none',
      },
    },
  },
})

export type ProgressBarWrapperVariantProps = VariantProps<
  typeof StyledProgressBarWrapper
>
