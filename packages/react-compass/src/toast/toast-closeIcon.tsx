import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledToastCloseIcon} from './toast.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  onClose?: () => void
}

export type ToastCloseIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastCloseIcon = React.forwardRef<HTMLDivElement, ToastCloseIconProps>(
  (props, ref) => {
    const {children, css = {}, onClose, ...delegated} = props

    return (
      <StyledToastCloseIcon
        css={css}
        ref={ref}
        {...delegated}
        onClick={() => onClose?.()}
      >
        {children}
      </StyledToastCloseIcon>
    )
  },
)

export default ToastCloseIcon
