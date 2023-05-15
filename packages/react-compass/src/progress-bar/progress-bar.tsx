import {AriaProgressBarProps, useProgressBar} from '@react-aria/progress'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {ProgressBarVariantProps, StyledProgressBar} from './progress-bar.styles'

interface Props extends AriaProgressBarProps, StyledComponentProps {
  rightLabel?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'green' | 'blue'
  variant?: 'normal' | 'rounded'
}

export type ProgressBarProps = Props & ProgressBarVariantProps

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
      // AriaLinkProps
    } = props

    const variantProps = {} as ProgressBarVariantProps
    const linkRef = useDOMRef<HTMLDivElement>(ref)
    const {labelProps} = useProgressBar(props)

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
