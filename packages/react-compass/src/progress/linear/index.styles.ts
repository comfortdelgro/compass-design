import {styled} from '../../theme'
import {keyframes} from '../../theme/stitches.config'
// import type {VariantProps} from '../utils/stitches.types'

const bufferKeyframe = keyframes({
  '0%': {
    opacity: 1,
    backgroundPosition: '0 -23px',
  },

  '60%': {
    opacity: 0,
    backgroundPosition: '0 -23px',
  },

  '100%': {
    opacity: 1,
    backgroundPosition: '-200px -23px',
  },
})

const indeterminate1Keyframe = keyframes({
  '0%': {
    left: '-35%',
    right: '100%',
  },
  '60%': {
    left: '100%',
    right: '-90%',
  },
  '100%': {
    left: '100%',
    right: '-90%',
  },
})

const indeterminate2Keyframe = keyframes({
  '0%': {
    left: '-200%',
    right: '100%',
  },
  '60%': {
    left: '107%',
    right: '-8%',
  },
  '100%': {
    left: '107%',
    right: '-8%',
  },
})

export const StyledLinearProgressRoot = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  display: 'block',
  height: 4,
  zIndex: 0, // Fix Safari's bug during composition of different paint.
  '@media print': {
    colorAdjust: 'exact',
  },
  variants: {
    variant: {
      determinate: {
        backgroundColor: 'none',
        opacity: 1,
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '$$color',
          opacity: 0.3,
        },
      },
      buffer: {
        backgroundColor: 'transparent',
        opacity: 1,
      },
      indeterminate: {
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '$$color',
          opacity: 0.3,
        },
      },
    },
  },
})

export const StyledLinearProgressDashed = styled('div', {
  position: 'absolute',
  marginTop: 0,
  height: '100%',
  width: '100%',
  opacity: 0.3,
  backgroundImage: `radial-gradient($$color 16%, transparent 30%)`,
  backgroundSize: '10px 10px',
  backgroundPosition: '0 -23px',
  animation: `${bufferKeyframe} 3s infinite linear`,
})

export const StyledLinearProgressBar1 = styled('div', {
  width: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0,
  transition: 'transform 0.2s linear',
  transformOrigin: 'left center',
  backgroundColor: '$$color',
  variants: {
    variant: {
      determinate: {
        transition: 'transform .4s linear',
      },
      buffer: {
        zIndex: 1,
        transition: 'transform .4s linear',
      },
      indeterminate: {
        width: 'auto',
        animation: `${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`,
      },
    },
  },
})

export const StyledLinearProgressBar2 = styled('div', {
  width: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0,
  transition: 'transform 0.2s linear 0s',
  transformOrigin: 'left center',
  variants: {
    variant: {
      determinate: {
        backgroundColor: '$$color',
      },
      buffer: {
        backgroundColor: '$$shadeColor',
        transition: `transform .4s linear`,
      },
      indeterminate: {
        backgroundColor: '$$color',
        width: 'auto',
        animation: `2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite normal none running ${indeterminate2Keyframe}`,
      },
    },
  },
})
