import React, {forwardRef, HTMLAttributes, PropsWithChildren} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDrawerExpander} from './drawer.styles'

export type DrawerExpanderProps = PropsWithChildren<StyledComponentProps> &
  HTMLAttributes<HTMLDivElement>

const DrawerExpander = forwardRef<HTMLDivElement, DrawerExpanderProps>(
  ({children, css = {}, ...delegated}, ref) => {
    const drawerExpanderRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledDrawerExpander css={css} ref={drawerExpanderRef} {...delegated}>
        {children || <div className='expander-line'></div>}
      </StyledDrawerExpander>
    )
  },
)

export default DrawerExpander
