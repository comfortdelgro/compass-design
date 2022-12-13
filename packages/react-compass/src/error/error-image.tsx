import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledErrorImage} from './error.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ErrorImageProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ErrorImage = React.forwardRef<HTMLDivElement, ErrorImageProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const errorImageRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledErrorImage css={css} ref={errorImageRef} {...delegated}>
        {children}
      </StyledErrorImage>
    )
  },
)

export default ErrorImage
