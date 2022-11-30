import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledDialogActionsContainer} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DialogActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledDialogActionsContainer css={css} ref={ref} {...delegated}>
        {children}
      </StyledDialogActionsContainer>
    )
  },
)

export default DialogActions
