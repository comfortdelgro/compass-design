import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import ModalActions from './modal-actions'
import ModalCloseIcon from './modal-closeIcon'
import ModalDescription from './modal-description'
import ModalTitle from './modal-title'
import ModalTrigger from './modal-trigger'
import {
  ModalVariantProps,
  StyledModal,
  StyledModalContent,
  StyledModalHeader,
} from './modal.styles'

interface Props extends StyledComponentProps {
  h5?: boolean
  children?: React.ReactNode
  handleClose?: () => void
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  onKeyDown?: (e: KeyboardEvent) => void
  triggerId?: string
}

export type ModalProps = Props &
  ModalVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    h5 = false,
    // StyledComponentProps
    css = {},
    // children
    children,
    // ComponentProps
    handleClose,
    onClick,
    onKeyDown,
    // VariantProps
    size = 'md',
    triggerId,
    // AriaButtonProps
    ...delegated
  } = props

  const variantProps = {size} as ModalVariantProps
  const ModalRef = useDOMRef<HTMLDivElement>(ref)
  const FirstFocusableRef = React.useRef<HTMLElement | null>(null) // This is the Modal Content
  const SecondFocusableRef = React.useRef<HTMLElement | null>(null) // This is the Modal Close Icon
  const LastFocusableRef = React.useRef<HTMLElement | null>(null)
  const CloseIconRef = React.useRef<HTMLButtonElement | null>(null)

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

  // Handle click on the modal
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation()
    onClick?.()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation()
    onKeyDown?.(e)

    // Close modal on escape key
    if (e.key === 'Escape') {
      handleClose?.()
    }

    // Focus on the second focusable element when tabbing from the last focusable element
    if (
      document.activeElement === LastFocusableRef.current &&
      e.key === 'Tab' &&
      !e.shiftKey
    ) {
      e.preventDefault()
      SecondFocusableRef.current?.focus()
    }

    // Focus on the last focusable element when tabbing from the first focusable element
    if (
      document.activeElement === FirstFocusableRef.current &&
      e.key === 'Tab' &&
      e.shiftKey
    ) {
      e.preventDefault()
      LastFocusableRef.current?.focus()
    }

    // If the modal is open and the focus is on the close icon, close the modal on enter key
    if (document.activeElement === CloseIconRef.current && e.key === 'Enter') {
      e.preventDefault()
      handleClose?.()
    }
  }

  // Focus on the first focusable element and identify the last focusable element
  React.useEffect(() => {
    const focusableElements = Array.from<HTMLElement>(
      ModalRef.current?.querySelectorAll(`
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
    const modalArray = Array.from<HTMLElement>(
      document?.querySelectorAll('[role="dialog"]') ?? [],
    )

    FirstFocusableRef.current = focusableElements[0] ?? null

    SecondFocusableRef.current = focusableElements[1] ?? null
    LastFocusableRef.current =
      focusableElements[focusableElements.length - 1] ?? null

    if (FirstFocusableRef.current) {
      FirstFocusableRef.current.focus()
    }

    // Find the index of the current modal in the array of modals
    const modalIndex = modalArray.findIndex(
      (modal) => modal === ModalRef.current,
    )

    // transfer focus to previous modal when current modal unmounts if there is one
    return () => {
      if (
        modalArray.length > 1 &&
        modalIndex > 0 &&
        modalArray[modalIndex - 1]
      ) {
        modalArray[modalIndex - 1]?.focus()
      } else {
        // otherwise focus on the trigger element
        const triggerElement = document?.querySelector<HTMLElement>(
          `[data-target= ${triggerId}]`,
        )

        if (triggerElement) {
          triggerElement.focus()
        }
      }
    }
  }, [ModalRef, FirstFocusableRef, LastFocusableRef])

  return (
    <StyledModal
      css={css}
      ref={ModalRef}
      tabIndex={0}
      role='dialog'
      aria-modal={true}
      h5={h5}
      onClick={(e) => handleClick?.(e as unknown as MouseEvent)}
      onKeyDown={(e) => handleKeyDown?.(e as unknown as KeyboardEvent)}
      className='cdg-modal-container'
      {...delegated}
      {...variantProps}
    >
      <StyledModalContent tabIndex={0} className='cdg-modal-content'>
        <StyledModalHeader h5={h5}>
          {ModalTitleElement}
          {CloseIconElement &&
            React.cloneElement(CloseIconElement as unknown as JSX.Element, {
              onClose: () => handleClose?.(),
              ref: CloseIconRef,
            })}
        </StyledModalHeader>

        {ModalDescriptionElement}
        {ModalActionsElement}
      </StyledModalContent>
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
