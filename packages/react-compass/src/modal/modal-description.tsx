import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledModalDescription} from './modal.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ModalDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalDescription = React.forwardRef<
  HTMLDivElement,
  ModalDescriptionProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledModalDescription css={css} ref={ref} {...delegated}>
      {children}
    </StyledModalDescription>
  )
})

export default ModalDescription
