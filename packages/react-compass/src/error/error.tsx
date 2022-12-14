import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import ErrorAction from './error-action'
import ErrorDescription from './error-description'
import ErrorIcon from './error-icon'
import ErrorImage from './error-image'
import ErrorTitle from './error-title'
import {
  ErrorVariantProps,
  StyledErrorContainer,
  StyledErrorHeader,
} from './error.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  onClose?: () => void
}

export type ErrorProps = Props &
  ErrorVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Error = React.forwardRef<HTMLDivElement, ErrorProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // children
    children,
    // ComponentProps
    onClose,
    // VariantProps
    variant = 'primary',
    // HTMLDiv Props
    ...delegated
  } = props

  const variantProps = {variant} as ErrorVariantProps
  const errorRef = useDOMRef<HTMLDivElement>(ref)

  // Pick title child component
  const {child: ErrorTitleElement} = pickChild<typeof ErrorTitle>(
    children,
    ErrorTitle,
  )

  // Pick description child component
  const {child: ErrorDescriptionElement} = pickChild<typeof ErrorDescription>(
    children,
    ErrorDescription,
  )

  // Pick action child component
  const {child: ErrorActionsElement} = pickChild<typeof ErrorAction>(
    children,
    ErrorAction,
  )

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

  return (
    <StyledErrorContainer
      variant={variant}
      css={css}
      ref={errorRef}
      {...variantProps}
      {...delegated}
    >
      {variant == 'primary' && (
        <StyledErrorHeader>
          {ErrorIconElement}
          {ErrorTitleElement}
        </StyledErrorHeader>
      )}

      {variant == 'secondary' && (
        <>
          {ErrorImageElement}
          {ErrorTitleElement}
        </>
      )}
      {ErrorDescriptionElement}
      {ErrorActionsElement}
    </StyledErrorContainer>
  )
})

export default Error as typeof Error & {
  Title: typeof ErrorTitle
  Description: typeof ErrorDescription
  Action: typeof ErrorAction
  Icon: typeof ErrorIcon
  Image: typeof ErrorImage
}
