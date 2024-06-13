import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {capitalizeFirstLetter, classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/spinner.module.css'

interface Props {
  label?: boolean | string
  css?: CSS
  className?: string
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm'
}

export type SpinnerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    label = true,
    // VariantProps
    size = 'md',
    className = '',
    ...htmlProps
  } = props

  const spinnerRef = useDOMRef<HTMLDivElement>(ref)
  const labelText =
    typeof label === 'boolean' ? (label ? 'Loading...' : null) : label

  const toSpinnerClassName = (type: string = '') => {
    return size ? styles[`${type}${capitalizeFirstLetter(size)}`] : ''
  }

  return (
    <CssInjection css={css} childrenRef={spinnerRef}>
      <div
        {...htmlProps}
        tabIndex={-1}
        ref={spinnerRef}
        className={classNames(
          styles.spinner,
          size && styles[capitalizeFirstLetter(size)],
          className,
          'cdg-spinner',
        )}
      >
        <div
          className={classNames(
            styles.ring,
            toSpinnerClassName('ring'),
            'cdg-spinner-ring',
          )}
          tabIndex={-1}
        >
          <div
            className={classNames(
              styles.bg,
              toSpinnerClassName('bg'),
              'cdg-spinner-bg',
            )}
          />
          <div
            className={classNames(
              styles.segment,
              styles.segment1,
              toSpinnerClassName('segment'),
              'cdg-spinner-segment',
            )}
          />
          <div
            className={classNames(
              styles.segment,
              styles.segment2,
              toSpinnerClassName('segment'),
              'cdg-spinner-segment',
            )}
          />
          <div
            className={classNames(
              styles.segment,
              styles.segment3,
              toSpinnerClassName('segment'),
              'cdg-spinner-segment',
            )}
          />
        </div>
        {labelText ? (
          <div
            className={classNames(
              styles.label,
              toSpinnerClassName('label'),
              'cdg-spinner-label',
            )}
          >
            {labelText}
          </div>
        ) : null}
      </div>
    </CssInjection>
  )
})

export default Spinner
