import React, {useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import Divider from './divider'
import {SidebarContext} from './sidebar-context'
import SidebarItem from './sidebar-item'
import {StyledSidebar} from './sidebar.styles'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  expand?: boolean
}

export type SidebarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const [expandOnHover, setExpandOnHover] = useState(false)
  const {
    children,
    expand = false,
    className = '',
    css = {},
    ...delegated
  } = props

  const handleMouseOver = () => {
    if (expand) return
    setExpandOnHover(true)
  }

  const handleMouseLeave = () => {
    if (expand) return
    setExpandOnHover(false)
  }

  // if expand prop is false -> always open the sidebar
  // else, expand when hover
  const isExpand = !expand ? expandOnHover : true

  return (
    <StyledSidebar
      css={css}
      ref={ref}
      className={`${className} ${expandOnHover ? 'sidebar-expanded' : ''}`}
      size={isExpand ? 'full' : 'default'}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...delegated}
    >
      <SidebarContext.Provider value={{isExpand: isExpand}}>
        {children}
      </SidebarContext.Provider>
    </StyledSidebar>
  )
})

export default Sidebar as typeof Sidebar & {
  Item: typeof SidebarItem
  Divider: typeof Divider
}
