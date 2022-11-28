import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledToastMessage} from './toast.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ToastMessageProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastMessage = React.forwardRef<HTMLDivElement, ToastMessageProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledToastMessage css={css} ref={ref} {...delegated}>
        {children}
      </StyledToastMessage>
    )
  },
)

export default ToastMessage