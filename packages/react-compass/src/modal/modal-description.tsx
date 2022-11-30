import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
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
  const modalDescriptionRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <StyledModalDescription css={css} ref={modalDescriptionRef} {...delegated}>
      {children}
    </StyledModalDescription>
  )
})

export default ModalDescription
