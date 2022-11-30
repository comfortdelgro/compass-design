import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import { useDOMRef } from '../utils/use-dom-ref'
import {StyledSidebarTitle} from './sidebar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SidebarTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarTitle = React.forwardRef<HTMLDivElement, SidebarTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    const renderTitle = () => {
      if (typeof children === 'string') {
        return <StyledSidebarTitle>{children}</StyledSidebarTitle>
      }
      return children
    }
    const sidebarTitleRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledSidebarTitle css={css} ref={sidebarTitleRef} {...delegated}>
        {renderTitle()}
      </StyledSidebarTitle>
    )
  },
)

export default SidebarTitle
