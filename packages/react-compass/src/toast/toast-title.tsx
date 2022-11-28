import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledToastTitle} from './toast.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ToastTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastTitle = React.forwardRef<HTMLDivElement, ToastTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledToastTitle css={css} ref={ref} {...delegated}>
        {children}
      </StyledToastTitle>
    )
  },
)

export default ToastTitle