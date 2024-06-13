import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
  onClose?: () => void
  css?: CSS
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
          {...delegated}
          ref={toastCloseIconRef}
          onClick={() => onClose?.()}
          className={classNames(
            styles.toastCloseIcon,
            className,
            'cdg-toast-close-icon',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ToastCloseIcon
