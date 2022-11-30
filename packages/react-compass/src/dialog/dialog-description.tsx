import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledDialogDescription} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DialogDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogDescription = React.forwardRef<
  HTMLDivElement,
  DialogDescriptionProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledDialogDescription css={css} ref={ref} {...delegated}>
      {children}
    </StyledDialogDescription>
  )
})

export default DialogDescription
