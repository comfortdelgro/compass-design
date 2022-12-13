import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledErrorAction} from './error.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ErrorActionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ErrorAction = React.forwardRef<HTMLDivElement, ErrorActionProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const errorActionRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledErrorAction css={css} ref={errorActionRef} {...delegated}>
        {children}
      </StyledErrorAction>
    )
  },
)

export default ErrorAction
