import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
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
          {...delegated}
          ref={toastIconRef}
          className={classNames(styles.toastIcon, className, 'cdg-toast-icon')}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ToastIcon
