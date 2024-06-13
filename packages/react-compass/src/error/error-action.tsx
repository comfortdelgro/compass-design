import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/error.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
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

    const rootClasses = classNames(
      styles.errorTitle,
      variant && styles[`${variant}VariantErrorAction`],
      className,
      `cdg-error-action`,
    )

    return (
      <CssInjection css={css} childrenRef={errorActionRef}>
        <div {...htmlProps} className={rootClasses} ref={errorActionRef}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ErrorAction
