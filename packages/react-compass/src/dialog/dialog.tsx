import {useDialog} from '@react-aria/dialog'
import {FocusScope} from '@react-aria/focus'
import {useModal, useOverlay, usePreventScroll} from '@react-aria/overlays'
import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DialogActions from './dialog-actions'
import DialogDescription from './dialog-description'
import DialogIcon from './dialog-icon'
import DialogTitle from './dialog-title'
import DialogTrigger from './dialog-trigger'
import {DialogVariantProps, StyledDialog} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  title?: string
  confirmLabel?: string
  onClose?: () => void
  variant?: 'confirmation' | 'alert'
}

export type DialogProps = Props & DialogVariantProps

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
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
    // AriaDialogProps
    ...ariaSafeProps
  } = props

  const variantProps = {variant} as DialogVariantProps
  const dialogRef = useDOMRef<HTMLDivElement>(ref)

  // Hanlde interacting outside of the dialog and pressing the Escape key to close the modal.
  const {overlayProps} = useOverlay(ariaSafeProps, dialogRef)

  // Prevent scrolling while the modal is open, and hide content outside the modal from screen readers.
  usePreventScroll()
  useModal()

  // Get props for its dialog and its title
  const {dialogProps, titleProps} = useDialog(ariaSafeProps, dialogRef)

  // Pick title child component
  const {child: DialogTitleElement, rest: childrenWithoutTitleElement} =
    pickChild<typeof DialogTitle>(children, DialogTitle)

  // Pick description child component
  const {
    child: DialogDescriptionElement,
    rest: childrenWithoutDescriptionElement,
  } = pickChild<typeof DialogDescription>(children, DialogDescription)

  // Pick action child component
  const {child: DialogActionsElement, rest: childrenWithoutActionsElement} =
    pickChild<typeof DialogActions>(children, DialogActions)

  // Pick icon child component
  const {child: DialogIconElement, rest: childrenWithoutIconElement} =
    pickChild<typeof DialogIcon>(children, DialogIcon)

  return (
    <FocusScope contain restoreFocus autoFocus>
      <StyledDialog
        css={css}
        ref={dialogRef}
        {...variantProps}
        {...overlayProps}
        {...dialogProps}
      >
        {variant == 'alert' ? DialogIconElement : null}
        {DialogTitleElement}
        {DialogDescriptionElement}
        {DialogActionsElement}
      </StyledDialog>
    </FocusScope>
  )
})

export default Dialog as typeof Dialog & {
  Trigger: typeof DialogTrigger
  Title: typeof DialogTitle
  Description: typeof DialogDescription
  Actions: typeof DialogActions
  Icon: typeof DialogIcon
}
