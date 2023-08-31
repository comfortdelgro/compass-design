import {styled} from '../theme'
import {keyframes} from '../theme/stitches.config'
import {VariantProps} from '../utils/stitches.types'

const gradientWave = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
})

const gradientWaveText = keyframes({
  from: {
    backgroundPosition: '400% 0',
  },
})

export const StyledSlideAction = styled('div', {
  position: 'relative',
  padding: '$2',
  '@sm': {
    maxWidth: '$80',
  },

  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  borderRadius: '$full',
  border: '1px solid $dangerShades',
  overflow: 'hidden',
})

export const StyledSlideDragger = styled('button', {
  width: '$12',
  height: '$12',
  zIndex: '1',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$dangerShades',
  borderRadius: '$full',
  border: 'none',
  cursor: 'grab',

  '&:active': {
    cursor: 'grabbing',
  },
})

export const StyledSlideLabel = styled('div', {
  flex: '1',

  fontWeight: '$semibold',
  color: '$dangerShades',
  textAlign: 'center',

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  cursor: 'default',

  variants: {
    labelType: {
      default: {},
      slide: {
        '@media (prefers-reduced-motion: no-preference)': {
          animation: `${gradientWaveText} 8s infinite linear`,
        },
      },
    },
  },
})

export const StyledSlideBg = styled('div', {
  position: 'absolute',
  width: 'calc(100% - $4)',
  height: 'calc(100% - $4)',
  borderRadius: '$full',
  opacity: 0.2,

  variants: {
    bgType: {
      static: {
        opacity: 0,
      },
      slide: {
        // transform: 'translateX(-110%)',
        width: '$12',
      },
    },
    slideBg: {
      mono: {},
      gradient: {
        background:
          'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        animation: `${gradientWave} 4s ease infinite`,
      },
    },
  },
})

export type SlideActionVariantProps = VariantProps<typeof StyledSlideAction>
export type SlideLabelVariantProps = VariantProps<typeof StyledSlideLabel>
export type SlideBgVariantProps = VariantProps<typeof StyledSlideBg>
