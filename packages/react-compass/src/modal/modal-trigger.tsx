import React from 'react'
import Portal from '../portal'
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
      ...delegated
    } = props

    const modalRef = useDOMRef<HTMLDivElement>(ref)
    const modalWrapperRef = useDOMRef<HTMLDivElement>(null)
    const {child: ModalElement} = pickChild<typeof Modal>(children, Modal)

    const handleClickBackdrop = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      handleClose?.()
    }

    return (
      <Portal open={isOpen}>
        <StyledModalWrapper
          css={css}
          ref={modalWrapperRef}
          onClick={(e) => handleClickBackdrop?.(e as unknown as MouseEvent)}
          {...delegated}
        >
          {ModalElement &&
            React.cloneElement(ModalElement as unknown as JSX.Element, {
              onClose: () => handleClose?.(),
              ref: modalRef,
              size: size,
              handleClose: () => handleClose?.(),
            })}
        </StyledModalWrapper>
      </Portal>
    )
  },
)

export default ModalTrigger
