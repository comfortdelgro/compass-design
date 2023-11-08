import clampValue from 'lodash/clamp'
import React, {useEffect, useMemo} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/progress-bar.module.css'

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
  css?: unknown
  className?: string
}

export type ProgressBarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      className = '',
      // ComponentProps
      loading = false,
      label,
      rightLabel,
      size = 'lg',
      barColor = '#EDEBE9',
      color: inputColor = 'blue',
      variant = 'normal',
      value: inputValue = 0,
      minValue: inputMinValue = 0,
      maxValue: inputMaxValue = 100,
      onComplete,
      // html props
      ...htmlProps
    } = props

    const color = useMemo(() => {
      // support the old color variants
      if (inputColor === 'blue') {
        return '#009EDA'
      }

      if (inputColor === 'green') {
        return '#107C10'
      }

      return inputColor
    }, [inputColor])

    const minValue = inputMinValue < 0 ? 0 : inputMinValue
    const maxValue = inputMaxValue < minValue ? minValue : inputMaxValue
    const value = clampValue(inputValue, minValue, maxValue)

    const linkRef = useDOMRef<HTMLDivElement>(ref)
    const loadingProgressRef = useDOMRef<HTMLDivElement>(ref)
    const currentProgressRef = useDOMRef<HTMLDivElement>(ref)
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
      <CssInjection css={css} childrenRef={linkRef}>
        <div
          className={`cdg-progress-bar-wrapper ${styles.progressBarWrapper} ${className}`}
          ref={linkRef}
          {...labelProps}
          {...htmlProps}
        >
          {(!!label || !!rightLabel) && (
            <div
              className={`cdg-progress-bar-label ${styles.progressBarLabel}`}
            >
              <span {...labelProps} className={styles.progressBarLabelSpan}>
                {label}
              </span>
              {rightLabel && (
                <span {...labelProps} className={styles.progressBarLabelSpan}>
                  {rightLabel}
                </span>
              )}
            </div>
          )}

          <div
            className={`cdg-progress-bar ${styles.progressBar} ${
              styles[
                `variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`
              ]
            } ${styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]}`}
            style={{backgroundColor: barColor}}
          >
            {!loading && (
              <CssInjection
                css={{
                  width: `${progressPercentage}%`,
                  backgroundColor: color,
                }}
                childrenRef={currentProgressRef}
              >
                <div
                  className={`progress-bar__current-state ${styles.currentProgress}`}
                  ref={currentProgressRef}
                />
              </CssInjection>
            )}

            {loading && (
              <CssInjection
                css={{
                  ...(loading === 'stripes'
                    ? {
                        backgroundImage: `repeating-linear-gradient(-45deg,transparent 0 1.5%,${color} 1.5% 3%)`,
                        '@media (max-width: 600px)': {
                          backgroundImage: `repeating-linear-gradient(-45deg,transparent 0 .8%,${color} .8% 1.6%)`,
                        },
                      }
                    : {
                        backgroundColor: color,
                      }),
                }}
                childrenRef={currentProgressRef}
              >
                <div
                  className={`progress-bar__loading ${styles.loadingProgress} ${
                    styles[
                      `loading${
                        loading.toString().charAt(0).toUpperCase() +
                        loading.toString().slice(1)
                      }`
                    ]
                  }`}
                  {...{loading}}
                  ref={loadingProgressRef}
                />
              </CssInjection>
            )}
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default ProgressBar
