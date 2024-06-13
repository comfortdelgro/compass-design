import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/error.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
  className?: string
}

export type ErrorIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ErrorIcon = React.forwardRef<HTMLDivElement, ErrorIconProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...htmlProps} = props
    const errorIconRef = useDOMRef<HTMLDivElement>(ref)

    const rootClasses = classNames(
      styles.errorIcon,
      className,
      `cdg-error-icon`,
    )

    return (
      <CssInjection css={css} childrenRef={errorIconRef}>
        <div {...htmlProps} className={rootClasses} ref={errorIconRef}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ErrorIcon
