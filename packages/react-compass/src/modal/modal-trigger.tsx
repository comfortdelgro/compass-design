import {OverlayContainer, OverlayProvider} from '@react-aria/overlays'

import React, {MouseEvent} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import Modal from './modal'
import {StyledModalWrapper} from './modal.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  label?: string
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
      label = '',
      isOpen = false,
      handleClose,
      size = 'md',
      // AriaButtonProps
      ...ariaSafeProps
    } = props

    const modalWrapperRef = useDOMRef<HTMLDivElement>(ref)
    const {child: ModalElement, rest: childrenWithoutModalElement} = pickChild<
      typeof Modal
    >(children, Modal)

    const modalRef = React.useRef<HTMLInputElement>(null)
    React.useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        event.preventDefault()
        if (
          modalRef.current &&
          !modalRef?.current?.contains(event.target as Node)
        ) {
          handleClose?.()
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', (event) => {
        handleClickOutside(event as unknown as MouseEvent)
      })
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', (event) => {
          handleClickOutside(event as unknown as MouseEvent)
        })
      }
    }, [modalRef])

    return (
      <OverlayProvider>
        {isOpen && (
          <OverlayContainer>
            <StyledModalWrapper>
              {React.cloneElement(ModalElement as unknown as JSX.Element, {
                onClose: () => handleClose?.(),
                ref: modalRef,
                size: size,
              })}
            </StyledModalWrapper>
          </OverlayContainer>
        )}
      </OverlayProvider>
    )
  },
)

export default ModalTrigger
