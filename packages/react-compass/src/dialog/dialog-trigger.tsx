import React from 'react'
import Portal from '../portal'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import Dialog from './dialog'
import {DialogVariantProps, StyledDialogWrapper} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isOpen?: boolean
  handleClose?: () => void
}

export type DialogTriggerProps = Props &
  DialogVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogTrigger = React.forwardRef<HTMLDivElement, DialogTriggerProps>(
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
      // variant props
      variant = 'confirmation',
      // HTMLDiv Props
      ...delegated
    } = props

    const {child: DialogElement} = pickChild<typeof Dialog>(children, Dialog)

    const dialogRef = useDOMRef<HTMLDivElement>(ref)
    const refOuter = useDOMRef<HTMLDivElement>(null)
    const refFirstFocusable = React.useRef<HTMLElement | null>(null)
    const refLastFocusable = React.useRef<HTMLElement | null>(null)

    // Close the modal if clicked on outside of element
    const handleClickOutside = React.useCallback((event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef?.current?.contains(event.target as Node)
      ) {
        event.preventDefault()
        event.stopPropagation()
        handleClose?.()
      }
    }, [])

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

    React.useEffect(() => {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [dialogRef])

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
        <StyledDialogWrapper css={css} ref={refOuter} {...delegated}>
          {DialogElement &&
            React.cloneElement(DialogElement as unknown as JSX.Element, {
              onClose: () => handleClose?.(),
              ref: dialogRef,
              variant: variant,
            })}
        </StyledDialogWrapper>
      </Portal>
    )
  },
)

export default DialogTrigger
