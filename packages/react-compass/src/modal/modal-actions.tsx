import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledModalActionsContainer} from './modal.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ModalActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalActions = React.forwardRef<HTMLDivElement, ModalActionsProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const modalActionRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledModalActionsContainer
        css={css}
        ref={modalActionRef}
        {...delegated}
      >
        {children}
      </StyledModalActionsContainer>
    )
  },
)

export default ModalActions
