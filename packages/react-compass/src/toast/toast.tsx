import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import ToastActions from './toast-actions'
import ToastCloseIcon from './toast-closeIcon'
import ToastIcon from './toast-icon'
import ToastLabel from './toast-label'
import ToastMessage from './toast-message'
import ToastTitle from './toast-title'
import {
  StyledToast,
  StyledToastHeader,
  StyledToastHeaderLeft,
  StyledToastHeaderRight,
  ToastVariantProps,
} from './toast.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isOpen?: boolean
  handleClose?: () => void
  autoClose?: false | number
}

export type ToastProps = Props &
  ToastVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Toast = React.forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  const {
    children,
    // StyledComponentProps
    css = {},
    // VariantProps
    color = 'neutral',
    //Component props
    isOpen = false,
    handleClose,
    autoClose = false,
    // HTMLDiv Props
    ...delegated
  } = props

  const toastRef = useDOMRef<HTMLDivElement>(ref)
  const variantProps = {color} as ToastVariantProps

  // Pick child element from children props
  const {child: ToastActionsElement, rest: childrenWithoutActionsElement} =
    pickChild<typeof ToastActions>(children, ToastActions)

  const {child: ToastCloseIconElement, rest: childrenWithoutCloseIconElement} =
    pickChild<typeof ToastCloseIcon>(children, ToastCloseIcon)

  const {child: ToastIconElement, rest: childrenWithoutIconElement} = pickChild<
    typeof ToastIcon
  >(children, ToastIcon)

  const {child: ToastLabelElement, rest: childrenWithoutLabelElement} =
    pickChild<typeof ToastLabel>(children, ToastLabel)

  const {child: ToastMessagelement, rest: childrenWithoutMessageElement} =
    pickChild<typeof ToastMessage>(children, ToastMessage)

  const {child: ToastTitleElement, rest: childrenWithoutTitleElement} =
    pickChild<typeof ToastTitle>(children, ToastTitle)

  // Auto close
  React.useEffect(() => {
    if (autoClose && typeof autoClose == 'number' && isOpen == true) {
      setTimeout(() => handleClose?.(), autoClose)
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <StyledToast {...variantProps} css={css} ref={toastRef} {...delegated}>
          <StyledToastHeader>
            <StyledToastHeaderLeft>
              {ToastIconElement}
              {ToastTitleElement}
            </StyledToastHeaderLeft>
            <StyledToastHeaderRight>
              {ToastLabelElement}
              {ToastCloseIconElement &&
                React.cloneElement(
                  ToastCloseIconElement as unknown as JSX.Element,
                  {
                    onClose: () => handleClose?.(),
                  },
                )}
            </StyledToastHeaderRight>
          </StyledToastHeader>
          {ToastMessagelement}
          {ToastActionsElement}
        </StyledToast>
      )}
    </>
  )
})

export default Toast as typeof Toast & {
  Actions: typeof ToastActions
  CloseIcon: typeof ToastCloseIcon
  Icon: typeof ToastIcon
  Label: typeof ToastLabel
  Message: typeof ToastMessage
  Title: typeof ToastTitle
}
