import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledModalActionsContainer} from './modal.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ModalActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalActions = React.forwardRef<HTMLDivElement, ModalActionsProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledModalActionsContainer css={css} ref={ref} {...delegated}>
        {children}
      </StyledModalActionsContainer>
    )
  },
)

export default ModalActions
