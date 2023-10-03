import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/spinner.module.css'

interface Props {
  label?: boolean | string
  css?: unknown
  className?: string
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm';
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
    ...delegated
  } = props

  const spinnerRef = useDOMRef<HTMLDivElement>(ref)
  const labelText =
    typeof label === 'boolean' ? (label ? 'Loading...' : null) : label

  return (
    <CssInjection css={css} childrenRef={spinnerRef}>
      <div
        tabIndex={-1}
        ref={spinnerRef}
        className={`cdg-spinner ${styles.spinner} ${
          size ? styles[`${size.charAt(0).toUpperCase() + size.slice(1)}`] : ''
        } ${className}`}
        {...delegated}
      >
        <div
          className={`cdg-spinner-ring ${styles.ring} ${
            size ? styles[`ring${size.charAt(0).toUpperCase() + size.slice(1)}`] : ''
          }`}
          tabIndex={-1}
        >
          <div
            className={`cdg-spinner-bg ${styles.bg} ${
              size ? styles[`bg${size.charAt(0).toUpperCase() + size.slice(1)}`] : ''
            }`}
          />
          <div
            className={`cdg-spinner-segment ${styles.segment} ${
              size ? styles[`segment${size.charAt(0).toUpperCase() + size.slice(1)}`] : ''
            } ${styles.segment1}`}
          />
          <div
            className={`cdg-spinner-segment ${styles.segment} ${
              size ? styles[`segment${size.charAt(0).toUpperCase() + size.slice(1)}`] : ''
            } ${styles.segment2}`}
          />
          <div
            className={`cdg-spinner-segment ${styles.segment} ${
              size ? styles[`segment${size.charAt(0).toUpperCase() + size.slice(1)}`] : ''
            } ${styles.segment3}`}
          />
        </div>
        {labelText ? (
          <div
            className={`cdg-spinner-label ${styles.label} ${
              size ? styles[`label${size.charAt(0).toUpperCase() + size.slice(1)}`] : ''
            }`}
          >
            {labelText}
          </div>
        ) : null}
      </div>
    </CssInjection>
  )
})

export default Spinner
