import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledToastLabel} from './toast.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ToastLabelProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastLabel = React.forwardRef<HTMLDivElement, ToastLabelProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledToastLabel css={css} ref={ref} {...delegated}>
        {children}
      </StyledToastLabel>
    )
  },
)

export default ToastLabel