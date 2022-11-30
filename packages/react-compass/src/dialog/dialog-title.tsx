import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDialogTitle} from './dialog.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DialogTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const dialogTitleRef = useDOMRef<HTMLHeadingElement>(ref)
    return (
      <StyledDialogTitle css={css} ref={dialogTitleRef} {...delegated}>
        {children}
      </StyledDialogTitle>
    )
  },
)

export default DialogTitle
