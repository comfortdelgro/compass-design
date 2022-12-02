import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledToastIcon} from './toast.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ToastIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastIcon = React.forwardRef<HTMLDivElement, ToastIconProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const toastIconRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledToastIcon css={css} ref={toastIconRef} {...delegated}>
        {children}
      </StyledToastIcon>
    )
  },
)

export default ToastIcon
