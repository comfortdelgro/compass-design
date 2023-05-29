import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDialogDescription} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DialogDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props>

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  const dialogDescriptionRef = useDOMRef<HTMLParagraphElement>(ref)
  return (
    <StyledDialogDescription
      css={css}
      ref={dialogDescriptionRef}
      {...delegated}
    >
      {children}
    </StyledDialogDescription>
  )
})

export default DialogDescription
