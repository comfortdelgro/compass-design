import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledToastActionsContainer} from './toast.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ToastActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastActions = React.forwardRef<HTMLDivElement, ToastActionsProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledToastActionsContainer css={css} ref={ref} {...delegated}>
        {children}
      </StyledToastActionsContainer>
    )
  },
)

export default ToastActions