import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledToastActionsContainer} from './toast.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ToastActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastActions = React.forwardRef<HTMLDivElement, ToastActionsProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const toastActionsRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledToastActionsContainer
        css={css}
        ref={toastActionsRef}
        {...delegated}
      >
        {children}
      </StyledToastActionsContainer>
    )
  },
)

export default ToastActions
