import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/error.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
  className?: string
  variant?: 'primary' | 'secondary'
}

export type ErrorTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const ErrorTitle = React.forwardRef<HTMLHeadingElement, ErrorTitleProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      variant = 'primary',
      className = '',
      ...htmlProps
    } = props
    const errorTitleRef = useDOMRef<HTMLHeadingElement>(ref)

    const errorTitleClasses = [
      `cdg-error-title`,
      className,
      variant && styles[`${variant}VariantErrorTitle`],
      styles.errorTitle,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={errorTitleRef}>
        <h3 className={errorTitleClasses} ref={errorTitleRef} {...htmlProps}>
          {children}
        </h3>
      </CssInjection>
    )
  },
)

export default ErrorTitle
