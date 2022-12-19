import React from 'react'
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

    React.useEffect(() => {
      /**
       * Close the sidebar if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (
          dialogRef.current &&
          !dialogRef?.current?.contains(event.target as Node)
        ) {
          event.preventDefault()
          handleClose?.()
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [dialogRef])

    return (
      <>
        {isOpen && (
          <StyledDialogWrapper css={css} {...delegated}>
            {DialogElement &&
              React.cloneElement(DialogElement as unknown as JSX.Element, {
                onClose: () => handleClose?.(),
                ref: dialogRef,
                variant: variant,
              })}
          </StyledDialogWrapper>
        )}
      </>
    )
  },
)

export default DialogTrigger
