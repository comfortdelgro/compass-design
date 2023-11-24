import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import ErrorAction, {ErrorActionProps} from './error-action'
import ErrorDescription, {ErrorDescriptionProps} from './error-description'
import ErrorIcon from './error-icon'
import ErrorImage, {ErrorImageProps} from './error-image'
import ErrorTitle, {ErrorTitleProps} from './error-title'
import styles from './styles/error.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
  variant?: 'primary' | 'secondary'
  className?: string
}

export type ErrorProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Error = React.forwardRef<HTMLDivElement, ErrorProps>((props, ref) => {
  const {
    css = {},
    className = '',
    // children
    children,
    // VariantProps
    variant = 'primary',
    // HTMLDiv Props
    ...htmlProps
  } = props

  const errorRef = useDOMRef<HTMLDivElement>(ref)

  // Pick title child component
  const {child: ErrorTitleElement} = pickChild<typeof ErrorTitle>(
    children,
    ErrorTitle,
  )

  const ErrorTitleCloned = () => {
    if (React.isValidElement(ErrorTitleElement)) {
      return React.cloneElement(ErrorTitleElement, {
        variant: variant,
      } as ErrorTitleProps)
    }
  }

  // Pick description child component
  const {child: ErrorDescriptionElement} = pickChild<typeof ErrorDescription>(
    children,
    ErrorDescription,
  )

  const ErrorDescriptionCloned = () => {
    if (React.isValidElement(ErrorDescriptionElement)) {
      return React.cloneElement(ErrorDescriptionElement, {
        variant: variant,
      } as ErrorDescriptionProps)
    }
  }

  // Pick action child component
  const {child: ErrorActionsElement} = pickChild<typeof ErrorAction>(
    children,
    ErrorAction,
  )

  const ErrorActionCloned = () => {
    if (React.isValidElement(ErrorActionsElement)) {
      return React.cloneElement(ErrorActionsElement, {
        variant: variant,
      } as ErrorActionProps)
    }
  }

  // Pick icon child component
  const {child: ErrorIconElement} = pickChild<typeof ErrorIcon>(
    children,
    ErrorIcon,
  )

  // Pick Image child component
  const {child: ErrorImageElement} = pickChild<typeof ErrorImage>(
    children,
    ErrorImage,
  )
  const ErrorImageCloned = () => {
    if (React.isValidElement(ErrorImageElement)) {
      return React.cloneElement(ErrorImageElement, {
        variant: variant,
      } as ErrorImageProps)
    }
  }

  const errorContainerClasses = [
    `cdg-error-container`,
    className,
    variant && styles[`${variant}Variant`],
    styles.errorContainer,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={errorRef}>
      <div className={errorContainerClasses} ref={errorRef} {...htmlProps}>
        {variant === 'primary' && (
          <div className={`cdg-error-header ${styles.errorHeader}`}>
            {ErrorIconElement}
            {ErrorTitleCloned()}
          </div>
        )}

        {variant === 'secondary' && (
          <>
            {ErrorImageCloned()}
            {ErrorTitleCloned()}
          </>
        )}
        {ErrorDescriptionCloned()}
        {ErrorActionCloned()}
      </div>
    </CssInjection>
  )
})

export default Error as typeof Error & {
  Title: typeof ErrorTitle
  Description: typeof ErrorDescription
  Action: typeof ErrorAction
  Icon: typeof ErrorIcon
  Image: typeof ErrorImage
}
