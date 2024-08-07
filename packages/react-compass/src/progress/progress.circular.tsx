import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/circular.module.css'

interface Props {
  css?: CSS
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

  const rootClasses = classNames(
    styles.circular,
    variant === 'indeterminate' && styles.circularVariantIndeterminate,
    className,
    'cdg-progress-circular',
  )

  const svgCircleClasses = classNames(
    styles.svgCircle,
    variant === 'determinate'
      ? styles.svgCircleVariantDeterminate
      : styles.svgCircleVariantIndeterminate,
    variant === 'indeterminate' &&
      !disableShrink &&
      styles.svgCircleVariantDeterminateDisableShrink,
    'cdg-progress-svgCircle',
  )

  return (
    <CssInjection css={css} childrenRef={rootRef}>
      <div
        {...htmlProps}
        ref={rootRef}
        className={rootClasses}
        style={{color: color, width: size, height: size, ...rootStyle}}
      >
        <svg
          className={classNames(styles.svg, 'cdg-progress-svg')}
          viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
        >
          <circle
            cx={SIZE}
            cy={SIZE}
            fill='none'
            style={circleStyle}
            strokeWidth={thickness}
            r={(SIZE - thickness) / 2}
            className={svgCircleClasses}
          />
        </svg>
      </div>
    </CssInjection>
  )
})

export default CircularProgress
