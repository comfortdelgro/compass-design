import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/snackbar.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
  className?: string
}

export type SnackbarPrefixIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SnackbarPrefixIcon = React.forwardRef<
  HTMLDivElement,
  SnackbarPrefixIconProps
>((props, ref) => {
  const {children, css = {}, className = '', ...htmlProps} = props
  const snackbarIconRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <CssInjection css={css} childrenRef={snackbarIconRef}>
      <div
        className={`cdg-snackbar-prefix-icon ${className} ${styles.snackbarIcon}`}
        ref={snackbarIconRef}
        {...htmlProps}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default SnackbarPrefixIcon
