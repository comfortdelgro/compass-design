import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSidebarActions} from './sidebar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SidebarActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarActions = React.forwardRef<HTMLDivElement, SidebarActionsProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledSidebarActions css={css} ref={ref} {...delegated}>
        {children}
      </StyledSidebarActions>
    )
  },
)

export default SidebarActions
