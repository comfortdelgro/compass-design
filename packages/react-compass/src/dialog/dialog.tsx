import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DialogActions from './dialog-actions'
import DialogDescription from './dialog-description'
import DialogIcon from './dialog-icon'
import DialogTitle from './dialog-title'
import DialogTrigger from './dialog-trigger'
import {
  DialogVariantProps,
  StyledDialog,
  StyledDialogContent,
} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  variant?: 'confirmation' | 'alert'
  onClick?: () => void
  onKeyDown?: (e: KeyboardEvent) => void
  triggerId?: string
  handleClose?: () => void
}

export type DialogProps = Props &
  DialogVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // children
    children,
    // ComponentProps
    handleClose,
    onClick,
    onKeyDown,
    triggerId,
    // VariantProps
    variant = 'confirmation',
    // html element props
    ...delegated
  } = props

  const variantProps = {variant} as DialogVariantProps
  const DialogRef = useDOMRef<HTMLDivElement>(ref)
  const FirstFocusableRef = React.useRef<HTMLElement | null>(null) // This is the Modal Content
  const SecondFocusableRef = React.useRef<HTMLElement | null>(null) // This is the Modal Close Icon
  const LastFocusableRef = React.useRef<HTMLElement | null>(null)

  // Pick title child component
  const {child: DialogTitleElement} = pickChild<typeof DialogTitle>(
    children,
    DialogTitle,
  )

  // Pick description child component
  const {child: DialogDescriptionElement} = pickChild<typeof DialogDescription>(
    children,
    DialogDescription,
  )

  // Pick action child component
  const {child: DialogActionsElement} = pickChild<typeof DialogActions>(
    children,
    DialogActions,
  )

  // Pick icon child component
  const {child: DialogIconElement} = pickChild<typeof DialogIcon>(
    children,
    DialogIcon,
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
  }

  // Focus on the first focusable element and identify the last focusable element
  React.useEffect(() => {
    const focusableElements = Array.from<HTMLElement>(
      DialogRef.current?.querySelectorAll(`
          button,
          a[href],
          input,
          textarea,
          select,
          [tabindex]:not([tabindex="-1"])
        `) ?? [],
    )
    const dialogArray = Array.from<HTMLElement>(
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
    const dialogIndex = dialogArray.findIndex(
      (modal) => modal === DialogRef.current,
    )

    // transfer focus to previous modal when current modal unmounts if there is one
    return () => {
      if (
        dialogArray.length > 1 &&
        dialogIndex > 0 &&
        dialogArray[dialogIndex - 1]
      ) {
        dialogArray[dialogIndex - 1]?.focus()
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
  }, [DialogRef, FirstFocusableRef, LastFocusableRef])

  return (
    <StyledDialog
      css={css}
      ref={DialogRef}
      tabIndex={0}
      role='dialog'
      aria-modal={true}
      onClick={(e) => handleClick?.(e as unknown as MouseEvent)}
      onKeyDown={(e) => handleKeyDown?.(e as unknown as KeyboardEvent)}
      {...variantProps}
      {...delegated}
      className='cdg-dialog-container'
    >
      <StyledDialogContent tabIndex={0} className='cdg-dialog-content'>
        {variant == 'alert' ? DialogIconElement : null}
        {DialogTitleElement}
        {DialogDescriptionElement}
        {DialogActionsElement}
      </StyledDialogContent>
    </StyledDialog>
  )
})

export default Dialog as typeof Dialog & {
  Trigger: typeof DialogTrigger
  Title: typeof DialogTitle
  Description: typeof DialogDescription
  Actions: typeof DialogActions
  Icon: typeof DialogIcon
}
