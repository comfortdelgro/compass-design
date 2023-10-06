import Color from 'colorjs.io'
import React, {useMemo} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/linear.module.css'

interface Props {
  css?: unknown
  size?: number
  color?: string
  value?: number
  valueBuffer?: number
  variant?: 'buffer' | 'determinate' | 'indeterminate'
  rounded?: boolean
}

export type LinearProgressProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const LinearProgress = React.forwardRef<HTMLDivElement, LinearProgressProps>(
  (props, ref) => {
    const {
      css = {},
      value,
      size = 4,
      className,
      valueBuffer,
      rounded = false,
      color = '#0142af',
      variant = 'indeterminate',
      ...delegated
    } = props

    const rootRef = useDOMRef<HTMLDivElement>(ref)

    const shadeColor = React.useMemo(
      () => new Color(color).set('lch.l', 70),
      [color],
    )

    const linearClass = React.useMemo(() => {
      let classes = `cdg-progress-linear ${styles.linear}`
      if (variant === 'indeterminate')
        classes += ` ${styles.linearVariantIndeterminate}`
      if (variant === 'determinate')
        classes += ` ${styles.linearVariantDeterminate}`
      if (variant === 'buffer') classes += ` ${styles.linearVariantBuffer}`
      if (rounded) classes += ` ${styles.linearRounded}`
      if (className) classes += ` ${className}`
      return classes
    }, [variant, rounded, className])

    const bar1Class = React.useMemo(() => {
      let classes = `cdg-progress-bar1 ${styles.bar1}`
      if (variant === 'indeterminate')
        classes += ` ${styles.bar1VariantIndeterminate}`
      if (variant === 'determinate')
        classes += ` ${styles.bar1VariantDeterminate}`
      if (variant === 'buffer') classes += ` ${styles.bar1VariantBuffer}`
      if (rounded) classes += ` ${styles.linearRounded}`
      return classes
    }, [rounded, variant])

    const bar1Style = useMemo(() => {
      if (variant === 'determinate' || variant === 'buffer') {
        let transform = 'translateX(-100%)'
        if (value && value >= 0 && value <= 100) {
          transform = `translateX(${value - 100}%)`
        }
        return {transform}
      }
      return {}
    }, [value, variant])

    const bar2Class = React.useMemo(() => {
      let classes = `cdg-progress-bar2 ${styles.bar2}`
      if (variant === 'indeterminate')
        classes += ` ${styles.bar2VariantIndeterminate}`
      if (variant === 'determinate')
        classes += ` ${styles.bar2VariantDeterminate}`
      if (variant === 'buffer') classes += ` ${styles.bar2VariantBuffer}`
      if (rounded) classes += ` ${styles.linearRounded}`
      return classes
    }, [rounded, variant])

    const bar2Syle = useMemo(() => {
      if (variant === 'buffer') {
        let transform = 'translateX(-100%)'
        if (valueBuffer && valueBuffer >= 0 && valueBuffer <= 100) {
          transform = `translateX(${(valueBuffer || 0) - 100}%)`
        }
        return {transform}
      }
      return {}
    }, [valueBuffer, variant])

    return (
      <CssInjection css={css} childrenRef={rootRef}>
        <div
          ref={rootRef}
          className={linearClass}
          style={
            {
              '--cdg-progress-linear-color': color,
              height: `${size}px`,
            } as React.CSSProperties
          }
          {...delegated}
        >
          {variant === 'buffer' && (
            <div
              className={`cdg-progress-linear-dashed ${styles.dashed}`}
              style={
                {
                  '--cdg-progress-linear-color': color,
                  backgroundImage: `radial-gradient(circle at center, ${color} 40%, transparent 0%)`,
                  backgroundSize: `${size * 2}px ${size}px`,
                } as React.CSSProperties
              }
            />
          )}
          <div
            className={bar1Class}
            style={{...bar1Style, backgroundColor: color}}
          />
          {variant !== 'determinate' && (
            <div
              className={bar2Class}
              style={
                {
                  ...bar2Syle,
                  '--cdg-progress-linear-color': color,
                  '--cdg-progress-linear-shadeColor': shadeColor,
                } as unknown as React.CSSProperties
              }
            />
          )}
        </div>
      </CssInjection>
    )
  },
)

export default LinearProgress
