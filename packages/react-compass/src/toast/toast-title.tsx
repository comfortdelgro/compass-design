import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledToastTitle} from './toast.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ToastTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const ToastTitle = React.forwardRef<HTMLHeadingElement, ToastTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const toastTitleRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledToastTitle css={css} ref={toastTitleRef} {...delegated}>
        {children}
      </StyledToastTitle>
    )
  },
)

export default ToastTitle
