import React from 'react'
import {styled} from '../theme'
import {keyframes} from '../theme/stitches.config'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props extends StyledComponentProps {
  color?: string
  width?: string | number
  height?: string | number
  children?: React.ReactNode
  component?: keyof JSX.IntrinsicElements
  animation?: 'pulse' | 'wave' | false
  variant?: 'circular' | 'rectangular' | 'rounded' | 'text'
}

export type SkeletonProps = Props

const Skeleton = React.forwardRef<HTMLElement, SkeletonProps>((props, ref) => {
  const {
    width,
    height,
    children,
    css = {},
    variant = 'text',
    component = 'span',
    animation = 'pulse',
    color = '#0000001c',
  } = props

  const skeletonRef = useDOMRef<HTMLElement>(ref)

  const StyledSkeleton = styled(component, {
    display: 'block',
    backgroundColor: '$$color',
    height: '1.2em',
    variants: {
      variant: {
        rectangular: {},
        text: {
          marginTop: 0,
          marginBottom: 0,
          height: 'auto',
          transformOrigin: '0 55%',
          transform: 'scale(1, 0.60)',
          borderRadius: '4px / 6.7px',
          '&:empty:before': {
            content: '"\\00a0"',
          },
        },
        circular: {
          borderRadius: '50%',
        },
        rounded: {
          borderRadius: '4px',
        },
      },
      animation: {
        false: {},
        pulse: {
          animation: `${pulseKeyframe} 1.5s ease-in-out 0.5s infinite`,
        },
        wave: {
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            animation: `${waveKeyframe} 1.6s linear 0.5s infinite`,
            background:
              'linear-gradient(90deg, transparent, #0000000a, transparent)',
            content: '',
            position: 'absolute',
            transform: 'translateX(-100%)',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          },
        },
      },
      hasChildren: {
        true: {
          '& > *': {
            visibility: 'hidden',
          },
        },
        false: {},
      },
      hasWidth: {
        true: {},
        false: {},
      },
      hasHeight: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      {
        hasChildren: true,
        hasWidth: false,
        css: {
          maxWidth: 'fit-content',
        },
      },
      {
        hasChildren: true,
        hasWidth: false,
        css: {
          height: 'auto',
        },
      },
    ],
  })

  return (
    <StyledSkeleton
      css={{
        ...css,
        ...{
          $$color: color,
          width,
          height,
        },
      }}
      ref={skeletonRef}
      variant={variant}
      animation={animation}
      hasWidth={!!width}
      hasHeight={!!height}
      hasChildren={!!children}
    >
      {children}
    </StyledSkeleton>
  )
})

const pulseKeyframe = keyframes({
  '0%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.4,
  },
  '100%': {
    opacity: 1,
  },
})

const waveKeyframe = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '50%': {
    transform: 'translateX(100%)',
  },
  '100%': {
    transform: 'translateX(100%)',
  },
})

export default Skeleton
