import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
  onClose?: () => void
  css?: unknown
}

export type ToastCloseIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastCloseIcon = React.forwardRef<HTMLDivElement, ToastCloseIconProps>(
  (props, ref) => {
    const {children, css = {}, className = '', onClose, ...delegated} = props
    const toastCloseIconRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={toastCloseIconRef}>
        <div
          ref={toastCloseIconRef}
          className={`${className} ${styles.toastCloseIcon}`}
          {...delegated}
          onClick={() => onClose?.()}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ToastCloseIcon
