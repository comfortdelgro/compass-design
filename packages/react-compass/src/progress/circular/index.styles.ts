import {styled} from '../../theme'
import {keyframes} from '../../theme/stitches.config'

const circularRotateKeyframe = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

const circularDashKeyframe = keyframes({
  '0%': {
    strokeDasharray: '1px,200px',
    strokeDashoffset: '0',
  },
  '50%': {
    strokeDasharray: '100px,200px',
    strokeDashoffset: '-15px',
  },
  '100%': {
    strokeDasharray: '100px,200px',
    strokeDashoffset: '-125px',
  },
})

export const StyledCircularProgressRoot = styled('div', {
  display: 'inline-block',
  color: '$$color',
  variants: {
    variant: {
      determinate: {
        transform: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
      indeterminate: {
        animation: `${circularRotateKeyframe} 1.4s linear infinite`,
      },
    },
  },
})

export const StyledCircularProgressSVG = styled('svg', {
  display: 'block',
})

export const StyledCircularProgressCircle = styled('circle', {
  stroke: 'currentColor',
  variants: {
    variant: {
      determinate: {
        transition: 'stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
      indeterminate: {
        strokeDasharray: '80px, 200px',
        strokeDashoffset: 0,
      },
    },
    disableShrink: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variant: 'indeterminate',
      disableShrink: 'false',
      css: {
        animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`,
      },
    },
  ],
})
