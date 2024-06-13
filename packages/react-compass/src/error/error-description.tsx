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

export type ErrorDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props>

const ErrorDescription = React.forwardRef<
  HTMLParagraphElement,
  ErrorDescriptionProps
>((props, ref) => {
  const {
    children,
    css = {},
    variant = 'primary',
    className = '',
    ...htmlProps
  } = props
  const errorDescriptionRef = useDOMRef<HTMLParagraphElement>(ref)

  const rootClasses = classNames(
    styles.errorDescription,
    variant && styles[`${variant}VariantErrorDescription`],
    className,
    `cdg-error-description`,
  )

  return (
    <CssInjection css={css} childrenRef={errorDescriptionRef}>
      <p {...htmlProps} className={rootClasses} ref={errorDescriptionRef}>
        {children}
      </p>
    </CssInjection>
  )
})

export default ErrorDescription
