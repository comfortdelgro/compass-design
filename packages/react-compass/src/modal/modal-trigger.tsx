import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import Modal from './modal'
import {StyledModalWrapper} from './modal.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isOpen?: boolean
  handleClose?: () => void
  size?: 'sm' | 'md' | 'lg'
}

export type ModalTriggerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalTrigger = React.forwardRef<HTMLDivElement, ModalTriggerProps>(
  (props, ref) => {
    // let {overlayProps} = useOverlay()
    const {
      // StyledComponentProps
      css = {},
      // children
      children,
      // ComponentProps
      isOpen = false,
      handleClose,
      size = 'md',
    } = props

    const modalRef = useDOMRef<HTMLDivElement>(ref)
    const {child: ModalElement} = pickChild<typeof Modal>(children, Modal)

    return (
      <>
        {isOpen && (
          <StyledModalWrapper css={css} onClick={handleClose}>
            {ModalElement &&
              React.cloneElement(ModalElement as unknown as JSX.Element, {
                onClose: () => handleClose?.(),
                ref: modalRef,
                size: size,
              })}
          </StyledModalWrapper>
        )}
      </>
    )
  },
)

export default ModalTrigger
