import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledToolbar, StyledToolbarProps} from './Toolbar.styles'

export type ToolbarProps = StyledComponentProps &
  StyledToolbarProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof StyledComponentProps>
const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    children,
    // element
    ...delegates
  } = props
  const toolbarRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <StyledToolbar ref={toolbarRef} css={css} {...delegates}>
      {children}
    </StyledToolbar>
  )
})

export default Toolbar
