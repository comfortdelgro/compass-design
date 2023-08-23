import React, {forwardRef, HTMLAttributes, PropsWithChildren} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDrawerFooter} from './drawer.styles'

export type DrawerFooterProps = PropsWithChildren<StyledComponentProps> &
  HTMLAttributes<HTMLDivElement>

const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({children, css = {}, ...delegated}, ref) => {
    const drawerFooterRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledDrawerFooter css={css} ref={drawerFooterRef} {...delegated}>
        {children}
      </StyledDrawerFooter>
    )
  },
)

export default DrawerFooter
