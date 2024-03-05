import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {capitalizeFirstLetter} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/spinner.module.css'

interface Props {
  label?: boolean | string
  css?: unknown
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
        tabIndex={-1}
        ref={spinnerRef}
        className={`cdg-spinner ${styles.spinner} ${
          size ? styles[capitalizeFirstLetter(size)] : ''
        } ${className}`}
        {...htmlProps}
      >
        <div
          className={`cdg-spinner-ring ${styles.ring} ${toSpinnerClassName(
            'ring',
          )}`}
          tabIndex={-1}
        >
          <div
            className={`cdg-spinner-bg ${styles.bg} ${toSpinnerClassName(
              'bg',
            )}`}
          />
          <div
            className={`cdg-spinner-segment ${
              styles.segment
            } ${toSpinnerClassName('segment')} ${styles.segment1}`}
          />
          <div
            className={`cdg-spinner-segment ${
              styles.segment
            } ${toSpinnerClassName('segment')} ${styles.segment2}`}
          />
          <div
            className={`cdg-spinner-segment ${
              styles.segment
            } ${toSpinnerClassName('segment')} ${styles.segment3}`}
          />
        </div>
        {labelText ? (
          <div
            className={`cdg-spinner-label ${styles.label} ${toSpinnerClassName(
              'label',
            )}`}
          >
            {labelText}
          </div>
        ) : null}
      </div>
    </CssInjection>
  )
})

export default Spinner
