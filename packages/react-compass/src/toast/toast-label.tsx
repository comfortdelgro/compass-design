import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledToastLabel} from './toast.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ToastLabelProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastLabel = React.forwardRef<HTMLDivElement, ToastLabelProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const toastLabelRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledToastLabel css={css} ref={toastLabelRef} {...delegated}>
        {children}
      </StyledToastLabel>
    )
  },
)

export default ToastLabel
