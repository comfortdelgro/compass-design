import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledDialogIconContainer} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DialogIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogIcon = React.forwardRef<HTMLDivElement, DialogIconProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    console.log('icon children', children)
    return (
      <StyledDialogIconContainer css={css} ref={ref} {...delegated}>
        {children}
      </StyledDialogIconContainer>
    )
  },
)

export default DialogIcon
