import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/snackbar.module.css'

interface Props {
  children?: React.ReactNode
  onClose?: () => void
  css?: unknown
  className?: string
}

export type SnackbarSuffixIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SnackbarSuffixIcon = React.forwardRef<
  HTMLDivElement,
  SnackbarSuffixIconProps
>((props, ref) => {
  const {children, css = {}, className = '', onClose, ...htmlProps} = props
  const snackbarSuffixIconRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <CssInjection css={css} childrenRef={snackbarSuffixIconRef}>
      <div
        className={`cdg-snackbar-suffix-icon ${className} ${styles.snackbarSuffixIcon}`}
        ref={snackbarSuffixIconRef}
        {...htmlProps}
        onClick={(e) => {
          e.stopPropagation()
          onClose?.()
        }}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default SnackbarSuffixIcon
