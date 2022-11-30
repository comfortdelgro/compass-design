import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledDialogTitle} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DialogTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogTitle = React.forwardRef<HTMLDivElement, DialogTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledDialogTitle css={css} ref={ref} {...delegated}>
        {children}
      </StyledDialogTitle>
    )
  },
)

export default DialogTitle
