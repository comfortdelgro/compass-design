import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSidebarContent} from './sidebar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SidebarContentProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledSidebarContent css={css} ref={ref} {...delegated}>
        {children}
      </StyledSidebarContent>
    )
  },
)

export default SidebarContent
