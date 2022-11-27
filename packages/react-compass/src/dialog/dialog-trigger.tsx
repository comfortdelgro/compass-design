import {OverlayContainer, OverlayProvider} from '@react-aria/overlays'

import React, {MouseEvent} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import Dialog from './dialog'
import {StyledDialogWrapper} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  label?: string
  isOpen?: boolean
  handleClose?: () => void
  variant?: 'confirmation' | 'alert'
}

export type DialogTriggerProps = Props &
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
      label = '',
      isOpen = false,
      handleClose,
      variant = 'confirmation',
      // AriaButtonProps
      ...ariaSafeProps
    } = props

    const dialogWrapperRef = useDOMRef<HTMLDivElement>(ref)
    const {child: DialogElement, rest: childrenWithoutDialogElement} =
      pickChild<typeof Dialog>(children, Dialog)

    const dialogRef = React.useRef<HTMLInputElement>(null)
    React.useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        event.preventDefault()
        if (
          dialogRef.current &&
          !dialogRef?.current?.contains(event.target as Node)
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
    }, [dialogRef])

    return (
      <OverlayProvider>
        {isOpen && (
          <OverlayContainer>
            <StyledDialogWrapper>
              {React.cloneElement(DialogElement as unknown as JSX.Element, {
                onClose: () => handleClose?.(),
                ref: dialogRef,
                variant: variant,
              })}
            </StyledDialogWrapper>
          </OverlayContainer>
        )}
      </OverlayProvider>
    )
  },
)

export default DialogTrigger
