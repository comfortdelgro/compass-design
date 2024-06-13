import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
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
          {...delegated}
          ref={toastLabelRef}
          className={classNames(
            styles.toastLabel,
            className,
            'cdg-toast-label',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ToastLabel
