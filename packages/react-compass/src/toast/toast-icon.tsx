import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
}

export type ToastIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastIcon = React.forwardRef<HTMLDivElement, ToastIconProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...delegated} = props
    const toastIconRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={toastIconRef}>
        <div
          ref={toastIconRef}
          className={`${className} ${styles.toastIcon}`}
          {...delegated}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ToastIcon
