import React, {forwardRef, HTMLAttributes, PropsWithChildren} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDrawerHeader} from './drawer.styles'

export type DrawerHeaderProps = PropsWithChildren<StyledComponentProps> &
  HTMLAttributes<HTMLElement>

const DrawerHeader = forwardRef<HTMLElement, DrawerHeaderProps>(
  ({children, css = {}, ...delegated}, ref) => {
    const drawerHeaderRef = useDOMRef<HTMLElement>(ref)

    return (
      <StyledDrawerHeader css={css} ref={drawerHeaderRef} {...delegated}>
        {children}
      </StyledDrawerHeader>
    )
  },
)

export default DrawerHeader
