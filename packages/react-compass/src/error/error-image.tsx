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

    const rootClasses = classNames(
      styles.errorImage,
      variant && styles[`${variant}VariantErrorImage`],
      className,
      `cdg-error-image`,
    )

    return (
      <CssInjection css={css} childrenRef={errorImageRef}>
        <div {...htmlProps} className={rootClasses} ref={errorImageRef}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ErrorImage
