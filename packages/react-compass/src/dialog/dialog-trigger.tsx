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
  id?: string
}

export type DialogTriggerProps = Props &
  DialogVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogTrigger = React.forwardRef<HTMLDivElement, DialogTriggerProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // children
      children,
      // ComponentProps
      isOpen = false,
      handleClose,
      id,
      // VariantProps
      variant = 'confirmation',
      // HTMLDiv Props
      ...delegated
    } = props

    const {child: DialogElement} = pickChild<typeof Dialog>(children, Dialog)

    const dialogRef = useDOMRef<HTMLDivElement>(ref)
    const dialogWrapperRef = useDOMRef<HTMLDivElement>(null)

    const handleClickBackdrop = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      handleClose?.()
    }

    return (
      <Portal open={isOpen}>
        <StyledDialogWrapper
          css={css}
          ref={dialogWrapperRef}
          onClick={(e) => handleClickBackdrop?.(e as unknown as MouseEvent)}
          className='cdg-dialog-wrapper'
          {...delegated}
        >
          {DialogElement &&
            React.cloneElement(DialogElement as unknown as JSX.Element, {
              ref: dialogRef,
              variant: variant,
              triggerId: id,
              handleClose: () => handleClose?.(),
            })}
        </StyledDialogWrapper>
      </Portal>
    )
  },
)

export default DialogTrigger
