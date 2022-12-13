import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DialogActions from './dialog-actions'
import DialogDescription from './dialog-description'
import DialogIcon from './dialog-icon'
import DialogTitle from './dialog-title'
import DialogTrigger from './dialog-trigger'
import {DialogVariantProps, StyledDialog} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  onClose?: () => void
  variant?: 'confirmation' | 'alert'
}

export type DialogProps = Props & DialogVariantProps

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // children
    children,
    // ComponentProps
    onClose,
    // VariantProps
    variant = 'confirmation',
    // html element props
    ...delegated
  } = props

  const variantProps = {variant} as DialogVariantProps
  const dialogRef = useDOMRef<HTMLDivElement>(ref)

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

  return (
    <StyledDialog css={css} ref={dialogRef} {...variantProps} {...delegated}>
      {variant == 'alert' ? DialogIconElement : null}
      {DialogTitleElement}
      {DialogDescriptionElement}
      {DialogActionsElement}
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
