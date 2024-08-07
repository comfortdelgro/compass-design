import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
}

export type ToastMessageProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastMessage = React.forwardRef<HTMLDivElement, ToastMessageProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...delegated} = props
    const toastMessageRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={toastMessageRef}>
        <div
          {...delegated}
          ref={toastMessageRef}
          className={classNames(
            styles.toastMessage,
            className,
            'cdg-toast-message',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ToastMessage
