import Color from 'colorjs.io'
import React, {useMemo} from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {
  StyledLinearProgressBar1,
  StyledLinearProgressBar2,
  StyledLinearProgressDashed,
  StyledLinearProgressRoot,
} from './index.styles'

interface Props extends StyledComponentProps {
  size?: number
  color?: string
  value?: number
  valueBuffer?: number
  variant?: 'buffer' | 'determinate' | 'indeterminate'
}

export type LinearProgressProps = Props

const LinearProgress = React.forwardRef<HTMLDivElement, LinearProgressProps>(
  (props, ref) => {
    const {
      variant = 'determinate',
      value,
      size = 4,
      valueBuffer,
      color = '#0142af',
    } = props

    const rootRef = useDOMRef<HTMLDivElement>(ref)

    const shadeColor = React.useMemo(
      () => new Color(color).lighten(0.5),
      [color],
    )

    const bar1Css = useMemo(() => {
      if (variant === 'determinate' || variant === 'buffer') {
        if (value && value >= 0 && value <= 100) {
          const transform = value - 100
          return {
            transform: `translateX(${transform}%)`,
          }
        }
        return {
          transform: 'translateX(-100%)',
        }
      }
      return {}
    }, [value])

    const bar2Css = useMemo(() => {
      if (variant === 'buffer') {
        if (valueBuffer && valueBuffer >= 0 && valueBuffer <= 100) {
          const transform = (valueBuffer || 0) - 100
          return {
            transform: `translateX(${transform}%)`,
          }
        }
        return {
          transform: 'translateX(-100%)',
        }
      }
      return {}
    }, [valueBuffer])

    return (
      <StyledLinearProgressRoot
        ref={rootRef}
        variant={variant}
        css={{$$shadeColor: shadeColor, $$color: color, $$size: `${size}px`}}
      >
        {variant === 'buffer' && (
          <StyledLinearProgressDashed
            css={{
              $$shadeColor: shadeColor,
              $$color: color,
              $$size: `${size}px`,
            }}
          />
        )}
        <StyledLinearProgressBar1
          variant={variant}
          css={{...bar1Css, ...{$$shadeColor: shadeColor, $$color: color}}}
        />
        {variant !== 'determinate' && (
          <StyledLinearProgressBar2
            variant={variant}
            css={{...bar2Css, ...{$$shadeColor: shadeColor, $$color: color}}}
          />
        )}
      </StyledLinearProgressRoot>
    )
  },
)

export default LinearProgress
