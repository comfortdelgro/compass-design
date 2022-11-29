import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import { useDOMRef } from '../utils/use-dom-ref'
import {StyledSidebarContent} from './sidebar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SidebarContentProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const sidebarContentRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledSidebarContent css={css} ref={sidebarContentRef} {...delegated}>
        {children}
      </StyledSidebarContent>
    )
  },
)

export default SidebarContent
