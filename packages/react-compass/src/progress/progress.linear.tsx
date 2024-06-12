import Color from 'colorjs.io'
import React, {useMemo} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/linear.module.css'

interface Props {
  css?: CSS
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

    const rootClasses = classNames(
      styles.linear,
      variant === 'indeterminate' && styles.linearVariantIndeterminate,
      variant === 'determinate' && styles.linearVariantDeterminate,
      variant === 'buffer' && styles.linearVariantBuffer,
      rounded && styles.linearRounded,
      className,
      'cdg-progress-linear',
    )

    const bar1Classes = classNames(
      styles.bar1,
      variant === 'indeterminate' && styles.bar1VariantIndeterminate,
      variant === 'determinate' && styles.bar1VariantDeterminate,
      variant === 'buffer' && styles.bar1VariantBuffer,
      rounded && styles.linearRounded,
      'cdg-progress-bar1',
    )

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

    const bar2Classes = classNames(
      styles.bar2,
      variant === 'indeterminate' && styles.bar2VariantIndeterminate,
      variant === 'determinate' && styles.bar2VariantDeterminate,
      variant === 'buffer' && styles.bar2VariantBuffer,
      rounded && styles.linearRounded,
      'cdg-progress-bar2',
    )

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
          {...delegated}
          ref={rootRef}
          className={rootClasses}
          style={
            {
              '--cdg-progress-linear-color': color,
              height: `${size}px`,
            } as React.CSSProperties
          }
        >
          {variant === 'buffer' && (
            <div
              className={classNames(
                styles.dashed,
                'cdg-progress-linear-dashed',
              )}
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
            className={bar1Classes}
            style={{...bar1Style, backgroundColor: color}}
          />
          {variant !== 'determinate' && (
            <div
              className={bar2Classes}
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
