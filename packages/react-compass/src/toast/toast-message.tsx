import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledToastMessage} from './toast.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ToastMessageProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastMessage = React.forwardRef<HTMLDivElement, ToastMessageProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const toastMessageRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledToastMessage css={css} ref={toastMessageRef} {...delegated}>
        {children}
      </StyledToastMessage>
    )
  },
)

export default ToastMessage
