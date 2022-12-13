import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledErrorIcon} from './error.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ErrorIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ErrorIcon = React.forwardRef<HTMLDivElement, ErrorIconProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const errorIconRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledErrorIcon css={css} ref={errorIconRef} {...delegated}>
        {children}
      </StyledErrorIcon>
    )
  },
)

export default ErrorIcon
