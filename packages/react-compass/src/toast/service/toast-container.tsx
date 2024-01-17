import React from 'react'
import Portal from '../../portal'
import {StyledComponentProps} from '../../utils/stitches.types'
import {Anchor} from './toast-context'
import ToastItem from './toast-item'
import {
  StyledToastContainer,
  ToastContainerVariantProps,
} from './toast-item.styles'
import {ToastItemType} from './types'

interface Props extends StyledComponentProps {
  toasts: ToastItemType[]
  toastItemClassName?: string
  anchorOrigin: Anchor
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
    anchorOrigin,
    // HTMLDiv Props
    className,
    ...delegated
  } = props

  return (
    <Portal open={toasts.length > 0}>
      <StyledToastContainer
        css={css}
        {...delegated}
        vertical={anchorOrigin.vertical}
        horizontal={anchorOrigin.horizontal}
        centerCenter={
          anchorOrigin.vertical === 'center' &&
          anchorOrigin.horizontal === 'center'
        }
        className={`${toasts.length > 0 ? '' : 'cdg-toast-container-hidden'} ${
          className ?? ''
        }`}
      >
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            {...toast}
            vertical={anchorOrigin.vertical}
            horizontal={anchorOrigin.horizontal}
            toastItemClassName={`cdg-toast-item ${toastItemClassName || ''}`}
          />
        ))}
      </StyledToastContainer>
    </Portal>
  )
}

export default ToastsContainer
