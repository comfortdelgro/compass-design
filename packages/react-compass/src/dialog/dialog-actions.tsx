import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDialogActionsContainer} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isMobile?: boolean
}

export type DialogActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>(
  (props, ref) => {
    const {children, css = {}, isMobile = false, ...delegated} = props
    const dialogActionRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledDialogActionsContainer
        css={css}
        ref={dialogActionRef}
        responsive={isMobile}
        {...delegated}
      >
        {children}
      </StyledDialogActionsContainer>
    )
  },
)

export default DialogActions
