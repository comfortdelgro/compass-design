import {useDialog} from '@react-aria/dialog'
import {FocusScope} from '@react-aria/focus'
import {useModal, useOverlay, usePreventScroll} from '@react-aria/overlays'
import React from 'react'
import Button from '../button'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DialogVariantProps,
  StyledDialog,
  StyledDialogActionsContainer,
  StyledDialogDescription,
  StyledDialogTitle,
} from './dialog.styles'
import DialogTrigger from './dialogTrigger'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  title?: string
  confirmLabel?: string
  onClose?: () => void
}

export type DialogProps = Props & DialogVariantProps
// export type DialogProps = Props &
//   DialogVariantProps &
//   Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  // let {overlayProps} = useOverlay()
  const {
    // StyledComponentProps
    css = {},
    // children
    children,
    // ComponentProps
    title = '',
    confirmLabel = '',
    onClose,
    // VariantProps
    variant = 'confirmation',
    // AriaButtonProps
    ...ariaSafeProps
  } = props

  const variantProps = {variant} as DialogVariantProps
  const dialogRef = useDOMRef<HTMLDivElement>(React.useRef(null))

  // Hanlde interacting outside of the dialog and pressing the Escape key to close the modal.
  const {overlayProps} = useOverlay(ariaSafeProps, dialogRef)

  // Prevent scrolling while the modal is open, and hide content outside the modal from screen readers.
  usePreventScroll()
  useModal()

  // Get props for its dialog and its title
  const {dialogProps, titleProps} = useDialog(ariaSafeProps, dialogRef)

  return (
    <FocusScope contain restoreFocus autoFocus>
      <StyledDialog
        css={css}
        ref={dialogRef}
        {...variantProps}
        {...overlayProps}
        {...dialogProps}
      >
        <StyledDialogTitle {...titleProps}>{title}</StyledDialogTitle>
        <StyledDialogDescription>{children}</StyledDialogDescription>
        <StyledDialogActionsContainer>
          <Button onPress={() => onClose?.()}>Cancel</Button>
          <Button onPress={() => onClose?.()}>{confirmLabel}</Button>
        </StyledDialogActionsContainer>
      </StyledDialog>
    </FocusScope>
  )
})

export default Dialog as typeof Dialog & {
  Trigger: typeof DialogTrigger
}
