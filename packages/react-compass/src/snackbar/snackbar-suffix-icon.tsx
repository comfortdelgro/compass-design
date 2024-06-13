import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/snackbar.module.css'

interface Props {
  children?: React.ReactNode
  onClose?: () => void
  css?: CSS
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
        {...htmlProps}
        className={classNames(
          styles.snackbarSuffixIcon,
          className,
          'cdg-snackbar-suffix-icon',
        )}
        ref={snackbarSuffixIconRef}
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
