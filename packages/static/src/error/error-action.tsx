import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/error.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
  variant?: 'primary' | 'secondary'
}

export type ErrorActionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ErrorAction = React.forwardRef<HTMLDivElement, ErrorActionProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      variant = 'primary',
      className = '',
      ...htmlProps
    } = props
    const errorActionRef = useDOMRef<HTMLDivElement>(ref)

    const errorActionClasses = [
      `cdg-error-action`,
      className,
      variant && styles[`${variant}VariantErrorAction`],
      styles.errorTitle,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={errorActionRef}>
        <div className={errorActionClasses} ref={errorActionRef} {...htmlProps}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ErrorAction
