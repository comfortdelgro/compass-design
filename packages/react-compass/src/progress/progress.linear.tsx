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
      return [
        styles.linear,
        variant === 'indeterminate' && styles.linearVariantIndeterminate,
        variant === 'determinate' && styles.linearVariantDeterminate,
        variant === 'buffer' && styles.linearVariantBuffer,
        rounded && styles.linearRounded,
        'cdg-progress-linear',
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }, [variant, rounded, className])

    const bar1Class = React.useMemo(() => {
      return [
        styles.bar1,
        variant === 'indeterminate' && styles.bar1VariantIndeterminate,
        variant === 'determinate' && styles.bar1VariantDeterminate,
        variant === 'buffer' && styles.bar1VariantBuffer,
        rounded && styles.linearRounded,
        'cdg-progress-bar1',
      ]
        .filter(Boolean)
        .join(' ')
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
      return [
        styles.bar2,
        variant === 'indeterminate' && styles.bar2VariantIndeterminate,
        variant === 'determinate' && styles.bar2VariantDeterminate,
        variant === 'buffer' && styles.bar2VariantBuffer,
        rounded && styles.linearRounded,
        'cdg-progress-bar2',
      ]
        .filter(Boolean)
        .join(' ')
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
              className={`${styles.dashed} cdg-progress-linear-dashed`}
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
