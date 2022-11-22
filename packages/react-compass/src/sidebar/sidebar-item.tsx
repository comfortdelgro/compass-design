import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSidebarItem} from './sidebar-item.styles'
import {SidebarContext} from './sidebarContext'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  active?: boolean
}

export type SidebarItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
  (props, ref) => {
    const {children, active, css = {}, className, ...delegated} = props

    const {isExpand} = useContext(SidebarContext)

    const [icon, title] = React.Children.toArray(children)

    return (
      <StyledSidebarItem
        ref={ref}
        css={css}
        className={`${className} ${active ? 'sidebar-item-active' : ''}`}
        active={active ? 'active' : 'default'}
        {...delegated}
      >
        {icon}
        {isExpand && <div className='sidebar-item-title'>{title}</div>}
      </StyledSidebarItem>
    )
  },
)

export default SidebarItem
