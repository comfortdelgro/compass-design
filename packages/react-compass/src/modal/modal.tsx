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
  onClick?: () => void
  onKeyDown?: (e: KeyboardEvent) => void
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
    onClick,
    onKeyDown,
    // VariantProps
    size = 'md',
    // AriaButtonProps
    ...delegated
  } = props

  const variantProps = {size} as ModalVariantProps
  const ModalRef = useDOMRef<HTMLDivElement>(ref)
  const FirstFocusableRef = React.useRef<HTMLElement | null>(null)
  const LastFocusableRef = React.useRef<HTMLElement | null>(null)

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
    e.preventDefault()
    onClick?.()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation()
    e.preventDefault()
    onKeyDown?.(e)

    if (
      document.activeElement === LastFocusableRef.current &&
      e.key === 'Tab' &&
      !e.shiftKey
    ) {
      e.preventDefault()
      FirstFocusableRef.current?.focus()
    }
    if (
      document.activeElement === FirstFocusableRef.current &&
      e.key === 'Tab' &&
      e.shiftKey
    ) {
      e.preventDefault()
      LastFocusableRef.current?.focus()
    }

    if (e.key === 'Escape') {
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

    FirstFocusableRef.current = focusableElements[0] ?? null
    LastFocusableRef.current =
      focusableElements[focusableElements.length - 1] ?? null

    if (FirstFocusableRef.current) {
      FirstFocusableRef.current.focus()
    }
  }, [ModalRef, FirstFocusableRef, LastFocusableRef])

  return (
    <StyledModal
      css={css}
      ref={ModalRef}
      {...delegated}
      {...variantProps}
      role='dialog'
      aria-modal={true}
      onClick={(e) => handleClick?.(e as unknown as MouseEvent)}
      onKeyDown={(e) => handleKeyDown?.(e as unknown as KeyboardEvent)}
    >
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
