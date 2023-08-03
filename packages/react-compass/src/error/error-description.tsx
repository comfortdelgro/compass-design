import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledErrorDescription} from './error.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ErrorDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props>

const ErrorDescription = React.forwardRef<
  HTMLParagraphElement,
  ErrorDescriptionProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  const errorDescriptionRef = useDOMRef<HTMLParagraphElement>(ref)
  return (
    <StyledErrorDescription css={css} ref={errorDescriptionRef} {...delegated}>
      {children}
    </StyledErrorDescription>
  )
})

export default ErrorDescription
