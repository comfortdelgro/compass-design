import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledErrorTitle} from './error.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ErrorTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const ErrorTitle = React.forwardRef<HTMLHeadingElement, ErrorTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const errorTitleRef = useDOMRef<HTMLHeadingElement>(ref)
    return (
      <StyledErrorTitle css={css} ref={errorTitleRef} {...delegated}>
        {children}
      </StyledErrorTitle>
    )
  },
)

export default ErrorTitle
