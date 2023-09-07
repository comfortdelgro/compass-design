import clampValue from 'lodash/clamp'
import React, {useEffect, useMemo} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  ProgressBarWrapperVariantProps,
  StyledCurrentProgress,
  StyledLoadingProgress,
  StyledProgressBar,
  StyledProgressBarWrapper,
} from './progress-bar.styles'

type Props = {
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
  loading?: 'stripes' | boolean
} & StyledComponentProps &
  ProgressBarWrapperVariantProps

export type ProgressBarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      loading = false,
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
      <StyledProgressBarWrapper
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

        <StyledProgressBar
          className='progress-bar'
          css={{backgroundColor: barColor}}
        >
          {!loading && (
            <StyledCurrentProgress
              className='progress-bar__current-state'
              css={{width: `${progressPercentage}%`, backgroundColor: color}}
            />
          )}

          <StyledLoadingProgress
            className='progress-bar__loading'
            css={{
              ...(loading === 'stripes'
                ? {
                    backgroundImage: `repeating-linear-gradient(-45deg,transparent 0 1.5%,${color} 1.5% 3%)`,
                    '@sm': {
                      backgroundImage: `repeating-linear-gradient(-45deg,transparent 0 .8%,${color} .8% 1.6%)`,
                    },
                  }
                : {
                    backgroundColor: color,
                  }),
            }}
            {...{loading}}
          />
        </StyledProgressBar>
      </StyledProgressBarWrapper>
    )
  },
)

export default ProgressBar
