import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
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
          {...delegated}
          ref={toastActionsRef}
          className={classNames(
            styles.toastActionsContainer,
            className,
            'cdg-toast-actions',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ToastActions
