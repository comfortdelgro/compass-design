import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/error.module.css'
import CssInjection from '../utils/objectToCss/CssInjection'

interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type ErrorIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ErrorIcon = React.forwardRef<HTMLDivElement, ErrorIconProps>(
  (props, ref) => {
    const { children, css = {}, className = '', ...htmlProps } = props
    const errorIconRef = useDOMRef<HTMLDivElement>(ref)

    const errorIconClasses = [
      `cdg-error-icon`,
      className,
      styles.errorIcon,
    ].filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={errorIconRef}>
        <div className={errorIconClasses} ref={errorIconRef} {...htmlProps}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ErrorIcon
