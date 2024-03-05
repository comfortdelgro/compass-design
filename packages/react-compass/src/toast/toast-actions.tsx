import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
}

export type ToastActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastActions = React.forwardRef<HTMLDivElement, ToastActionsProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...delegated} = props
    const toastActionsRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={toastActionsRef}>
        <div
          ref={toastActionsRef}
          className={`${className} ${styles.toastActionsContainer}`}
          {...delegated}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ToastActions
