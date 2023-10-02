import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/spinner.module.css'

interface Props {
  label?: boolean | string
  css?: unknown
  className?: string
  size: string
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
        className={`${styles.spinner} ${
          size ? styles[`size-${size}`] : ''
        } ${className}`}
        {...delegated}
      >
        <div className={styles.ring} tabIndex={-1}>
          <div className={styles.bg} />
          <div className={styles.segment} />
          <div className={styles.segment} />
          <div className={styles.segment} />
        </div>
        {labelText ? <div className={styles.label}>{labelText}</div> : null}
      </div>
    </CssInjection>
  )
})

export default Spinner
