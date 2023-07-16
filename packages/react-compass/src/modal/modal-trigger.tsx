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
    const refOuter = useDOMRef<HTMLDivElement>(null)
    const refFirstFocusable = React.useRef<HTMLElement | null>(null)
    const refLastFocusable = React.useRef<HTMLElement | null>(null)
    const {child: ModalElement} = pickChild<typeof Modal>(children, Modal)

    const handleKeyDown = React.useCallback((e: KeyboardEvent) => {
      // if tab key is tapped on the last
      // focus on the first

      if (
        document.activeElement === refLastFocusable.current &&
        e.key === 'Tab' &&
        !e.shiftKey
      ) {
        e.preventDefault()
        refFirstFocusable.current?.focus()
      }
      if (
        document.activeElement === refFirstFocusable.current &&
        e.key === 'Tab' &&
        e.shiftKey
      ) {
        e.preventDefault()
        refLastFocusable.current?.focus()
      }

      if (e.key === 'Escape') {
        handleClose?.()
      }
    }, [])

    // Close the modal if clicked on outside of element
    const handleClickOutside = React.useCallback((event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef?.current?.contains(event.target as Node)
      ) {
        event.preventDefault()
        event.stopPropagation()
        handleClose?.()
      }
    }, [])

    React.useEffect(() => {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [modalRef])

    // Trap Focus inside the modal
    React.useEffect(() => {
      if (isOpen) {
        const focusableElements = Array.from<HTMLElement>(
          refOuter.current?.querySelectorAll(`
          button,
          a[href],
          input[type="button"],
          input[type="submit"],
          input[type="text"],
          textarea,
          select,
          input[type="checkbox"],
          input[type="radio"],
          [tabindex]:not([tabindex="-1"])
        `) ?? [],
        )

        refFirstFocusable.current = focusableElements[0] ?? null
        refLastFocusable.current =
          focusableElements[focusableElements.length - 1] ?? null

        if (refFirstFocusable.current) {
          refFirstFocusable.current.focus()
        }
      }
    }, [isOpen])

    return (
      <Portal open={isOpen}>
        <StyledModalWrapper css={css} ref={refOuter} {...delegated}>
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
