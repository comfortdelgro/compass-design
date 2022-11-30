import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledSidebarActions} from './sidebar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SidebarActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarActions = React.forwardRef<HTMLDivElement, SidebarActionsProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const sidebarActionsRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledSidebarActions css={css} ref={sidebarActionsRef} {...delegated}>
        {children}
      </StyledSidebarActions>
    )
  },
)

export default SidebarActions
