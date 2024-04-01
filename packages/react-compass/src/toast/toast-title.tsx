import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
}

export type ToastTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const ToastTitle = React.forwardRef<HTMLHeadingElement, ToastTitleProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...delegated} = props
    const toastTitleRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={toastTitleRef}>
        <div
          ref={toastTitleRef}
          className={`${className} ${styles.toastTitle}`}
          {...delegated}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ToastTitle
