import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/snackbar.module.css'
import CssInjection from '../utils/objectToCss/CssInjection'

interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type SnackbarTextProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const SnackbarText = React.forwardRef<HTMLHeadingElement, SnackbarTextProps>(
  (props, ref) => {
    const { children, css = {}, className = '', ...htmlProps } = props
    const SnackbarTextRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={SnackbarTextRef}>
        <div className={`cdg-snackbar-text ${className} ${styles.snackbarText}`} ref={SnackbarTextRef} {...htmlProps}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default SnackbarText
