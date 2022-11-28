import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
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

    return (
      <StyledSidebarTitle css={css} ref={ref} {...delegated}>
        {renderTitle()}
      </StyledSidebarTitle>
    )
  },
)

export default SidebarTitle
