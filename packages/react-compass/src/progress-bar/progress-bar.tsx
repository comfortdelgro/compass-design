import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {ProgressBarVariantProps, StyledProgressBar} from './progress-bar.styles'

interface Props extends StyledComponentProps {
  rightLabel?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'green' | 'blue'
  variant?: 'normal' | 'rounded'
  label?: ''
  value: number
  minValue: number
  maxValue: number
}

export type ProgressBarProps = Props &
  ProgressBarVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      label,
      rightLabel,
      size = 'lg',
      color = 'blue',
      variant = 'normal',
      value = 0,
      minValue = 0,
      maxValue = 100,
      // html props
      ...delegated
    } = props

    const variantProps = {} as ProgressBarVariantProps
    const linkRef = useDOMRef<HTMLDivElement>(ref)
    const labelProps = {
      role: 'progressbar',
      'aria-label': label ?? '',
      'aria-valuemin': minValue,
      'aria-valuenow': value,
      'aria-valuemax': maxValue,
    }

    const percentage = (value - minValue) / (maxValue - minValue)
    const barWidth = `${Math.round(percentage * 100)}%`
    return (
      <StyledProgressBar
        css={css}
        ref={linkRef}
        size={size}
        color={color}
        variant={variant}
        {...labelProps}
        {...variantProps}
        {...delegated}
      >
        {(!!label || !!rightLabel) && (
          <div className='progress-bar-label'>
            <span {...labelProps}>{label ?? ''}</span>
            {rightLabel && <span {...labelProps}>{rightLabel ?? ''}</span>}
          </div>
        )}
        <div className='progress-bar'>
          <div style={{width: barWidth}} />
        </div>
      </StyledProgressBar>
    )
  },
)

export default ProgressBar
