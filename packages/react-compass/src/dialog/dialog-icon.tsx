import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDialogIconContainer} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DialogIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogIcon = React.forwardRef<HTMLDivElement, DialogIconProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const dialogIconRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledDialogIconContainer css={css} ref={dialogIconRef} {...delegated}>
        {children}
      </StyledDialogIconContainer>
    )
  },
)

export default DialogIcon
