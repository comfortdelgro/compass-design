import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/circular.module.css'

interface Props {
  css?: unknown
  size?: number
  color?: string
  value?: number
  thickness?: number
  disableShrink?: boolean
  variant?: 'determinate' | 'indeterminate'
}

export type CircularProgressProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SIZE = 44

const CircularProgress = React.forwardRef<
  HTMLDivElement,
  CircularProgressProps
>((props, ref) => {
  const {
    css = {},
    className,
    value = 0,
    size = 40,
    thickness = 3.6,
    color = '#0142af',
    disableShrink = false,
    variant = 'indeterminate',
    ...htmlProps
  } = props

  const rootRef = useDOMRef<HTMLDivElement>(ref)

  const rootStyle = React.useMemo(() => {
    return variant === 'determinate' ? {transform: 'rotate(-90deg)'} : {}
  }, [variant])

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
  }, [thickness, value, variant])

  const circularClass = React.useMemo(() => {
    let classes = `cdg-progress-circular ${styles.circular}`
    if (variant === 'indeterminate')
      classes += ` ${styles.circularVariantIndeterminate}`
    if (className) classes += ` ${className}`
    return classes
  }, [variant, className])

  const svgCircleClass = React.useMemo(() => {
    let classes = `cdg-progress-svgCircle ${styles.svgCircle}`
    if (variant === 'determinate')
      classes += ` ${styles.svgCircleVariantDeterminate}`
    else classes += ` ${styles.svgCircleVariantIndeterminate}`
    if (variant === 'indeterminate' && !disableShrink)
      classes += ` ${styles.svgCircleVariantDeterminateDisableShrink}`
    return classes
  }, [variant, disableShrink])

  return (
    <CssInjection css={css} childrenRef={rootRef}>
      <div
        {...htmlProps}
        ref={rootRef}
        className={circularClass}
        style={{color: color, width: size, height: size, ...rootStyle}}
      >
        <svg
          className={`cdg-progress-svg ${styles.svg}`}
          viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
        >
          <circle
            cx={SIZE}
            cy={SIZE}
            fill='none'
            style={circleStyle}
            strokeWidth={thickness}
            r={(SIZE - thickness) / 2}
            className={svgCircleClass}
          />
        </svg>
      </div>
    </CssInjection>
  )
})

export default CircularProgress
