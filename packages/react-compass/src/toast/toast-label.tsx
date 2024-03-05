import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
}

export type ToastLabelProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastLabel = React.forwardRef<HTMLDivElement, ToastLabelProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...delegated} = props
    const toastLabelRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={toastLabelRef}>
        <div
          ref={toastLabelRef}
          className={`${className} ${styles.toastLabel}`}
          {...delegated}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ToastLabel
