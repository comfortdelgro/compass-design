import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import ModalActions from './modal-actions'
import ModalCloseIcon from './modal-closeIcon'
import ModalDescription from './modal-description'
import ModalTitle from './modal-title'
import ModalTrigger from './modal-trigger'
import {ModalVariantProps, StyledModal, StyledModalHeader} from './modal.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  handleClose?: () => void
  size?: 'sm' | 'md' | 'lg'
}

export type ModalProps = Props &
  ModalVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // children
    children,
    // ComponentProps
    handleClose,
    // VariantProps
    size = 'md',
    // AriaButtonProps
    ...delegated
  } = props

  const variantProps = {size} as ModalVariantProps
  const ModalRef = useDOMRef<HTMLDivElement>(ref)

  // Pick title child component
  const {child: ModalTitleElement} = pickChild<typeof ModalTitle>(
    children,
    ModalTitle,
  )

  // Pick description child component
  const {child: ModalDescriptionElement} = pickChild<typeof ModalDescription>(
    children,
    ModalDescription,
  )

  // Pick action child component
  const {child: ModalActionsElement} = pickChild<typeof ModalActions>(
    children,
    ModalActions,
  )

  // Pick modal close icon
  const {child: CloseIconElement} = pickChild<typeof ModalCloseIcon>(
    children,
    ModalCloseIcon,
  )

  return (
    <StyledModal css={css} ref={ModalRef} {...delegated} {...variantProps}>
      <StyledModalHeader>
        {ModalTitleElement}
        {CloseIconElement &&
          React.cloneElement(CloseIconElement as unknown as JSX.Element, {
            onClose: () => handleClose?.(),
          })}
      </StyledModalHeader>

      {ModalDescriptionElement}
      {ModalActionsElement}
    </StyledModal>
  )
})

export default Modal as typeof Modal & {
  Trigger: typeof ModalTrigger
  Title: typeof ModalTitle
  Description: typeof ModalDescription
  Actions: typeof ModalActions
  CloseIcon: typeof ModalCloseIcon
}
