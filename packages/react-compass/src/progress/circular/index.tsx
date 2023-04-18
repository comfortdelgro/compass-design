import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {
  StyledCircularProgressCircle,
  StyledCircularProgressRoot,
  StyledCircularProgressSVG,
} from './index.styles'

interface Props extends StyledComponentProps {
  size?: number
  color?: string
  value?: number
  valueBuffer?: number
  thickness?: number
  disableShrink?: boolean
  variant?: 'determinate' | 'indeterminate'
}

export type CircularProgressProps = Props

const SIZE = 44

const CircularProgress = React.forwardRef<
  HTMLDivElement,
  CircularProgressProps
>((props, ref) => {
  const {
    css = {},
    value = 0,
    size = 40,
    thickness = 3.6,
    color = '#0142af',
    disableShrink = false,
    variant = 'indeterminate',
  } = props

  const rootRef = useDOMRef<HTMLDivElement>(ref)

  const rootStyle = React.useMemo(() => {
    return variant === 'determinate' ? {transform: 'rotate(-90deg)'} : {}
  }, [value])

  const circleStyle = React.useMemo(() => {
    if (variant === 'determinate') {
      const circumference = 2 * Math.PI * ((SIZE - thickness) / 2)
      const offset = ((100 - value) / 100) * circumference
      return {
        strokeDasharray: circumference.toFixed(3),
        strokeDashoffset: `${offset.toFixed(3)}px`,
      }
    }
    return {}
  }, [value])

  return (
    <StyledCircularProgressRoot
      ref={rootRef}
      variant={variant}
      style={{width: size, height: size, ...rootStyle}}
      css={{...css, ...{$$color: color}}}
    >
      <StyledCircularProgressSVG
        viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
      >
        <StyledCircularProgressCircle
          fill='none'
          cx={SIZE}
          cy={SIZE}
          style={circleStyle}
          r={(SIZE - thickness) / 2}
          variant={variant}
          disableShrink={disableShrink}
          strokeWidth={thickness}
        />
      </StyledCircularProgressSVG>
    </StyledCircularProgressRoot>
  )
})

export default CircularProgress
