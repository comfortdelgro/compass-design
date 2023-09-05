import clampValue from 'lodash/clamp'
import React, {useEffect, useMemo} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  ProgressBarVariantProps,
  StyledCurrentProgress,
  StyledProgressBar,
  StyledProgressDisplay,
} from './progress-bar.styles'

interface Props extends StyledComponentProps {
  rightLabel?: string
  /** @default "lg" */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Color visualization of the current value.
   * @default "blue" // $info - #009EDA
   */
  color?: string
  /**
   * Color of the progress bar.
   * @default "$gray30" // #EDEBE9
   */
  barColor?: string
  /** @default "normal" */
  variant?: 'normal' | 'rounded'
  label?: string
  /** @default 0 */
  value?: number
  /** @default 0 */
  minValue?: number
  /** @default 100 */
  maxValue?: number
  onComplete?: () => void
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
      barColor = '$gray30',
      color: inputColor = 'blue',
      variant = 'normal',
      value: inputValue = 0,
      minValue: inputMinValue = 0,
      maxValue: inputMaxValue = 100,
      onComplete,
      // html props
      ...delegated
    } = props

    const color = useMemo(() => {
      // support the old color variants
      if (inputColor === 'blue') {
        return '$info'
      }

      if (inputColor === 'green') {
        return '$success'
      }

      return inputColor
    }, [inputColor])

    const minValue = inputMinValue < 0 ? 0 : inputMinValue
    const maxValue = inputMaxValue < minValue ? minValue : inputMaxValue
    const value = clampValue(inputValue, minValue, maxValue)

    const linkRef = useDOMRef<HTMLDivElement>(ref)
    const labelProps = {
      role: 'progressbar',
      'aria-label': label ?? '',
      'aria-valuemin': minValue,
      'aria-valuenow': value,
      'aria-valuemax': maxValue,
    }

    const progressPercentage = useMemo(() => {
      if (maxValue - minValue === 0 || value === maxValue) {
        return 100
      }

      const percentage = (value - minValue) / (maxValue - minValue)
      return Math.round(percentage * 100)
    }, [value, minValue, maxValue])

    useEffect(() => {
      if (progressPercentage === 100) {
        onComplete?.()
      }
    }, [progressPercentage, onComplete])

    return (
      <StyledProgressBar
        className='progress-bar-wrapper'
        css={css}
        ref={linkRef}
        size={size}
        {...{variant}}
        {...labelProps}
        {...delegated}
      >
        {(!!label || !!rightLabel) && (
          <div className='progress-bar-label'>
            <span {...labelProps}>{label ?? ''}</span>
            {rightLabel && <span {...labelProps}>{rightLabel ?? ''}</span>}
          </div>
        )}

        <StyledProgressDisplay
          className='progress-bar'
          css={{backgroundColor: barColor}}
        >
          <StyledCurrentProgress
            className='progress-bar__current-state'
            css={{width: `${progressPercentage}%`, backgroundColor: color}}
          />
        </StyledProgressDisplay>
      </StyledProgressBar>
    )
  },
)

export default ProgressBar
