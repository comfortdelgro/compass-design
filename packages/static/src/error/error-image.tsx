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

export type ErrorImageProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ErrorImage = React.forwardRef<HTMLDivElement, ErrorImageProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      variant = 'primary',
      className = '',
      ...htmlProps
    } = props
    const errorImageRef = useDOMRef<HTMLDivElement>(ref)

    const errorImageClasses = [
      `cdg-error-image`,
      className,
      variant && styles[`${variant}VariantErrorImage`],
      styles.errorImage,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={errorImageRef}>
        <div className={errorImageClasses} ref={errorImageRef} {...htmlProps}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ErrorImage
