import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import ToastItem, {ToastItemProps} from './toast-item'
import {
  StyledToastContainer,
  ToastContainerVariantProps,
} from './toast-item.styles'

interface Props extends StyledComponentProps {
  toasts: ToastItemProps[]
  toastItemClassName?: string
}

export type ToastsContainerProps = Props &
  ToastContainerVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastsContainer = (props: ToastsContainerProps) => {
  const {
    // StyledComponentProps
    css = {},
    //Component props
    toasts,
    toastItemClassName,
    // HTMLDiv Props
    ...delegated
  } = props

  return (
    <StyledToastContainer css={css} {...delegated}>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          {...toast}
          toastItemClassName={`cdg-toast-item ${toastItemClassName || ''}`}
        />
      ))}
    </StyledToastContainer>
  )
}

export default ToastsContainer
