import React, {useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSidebar} from './sidebar.styles'
import {SidebarContext} from './sidebarContext'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  expand?: boolean
}

export type SidebarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const [expandOnHover, setExpandOnHover] = useState(false)
  const {children, expand = false, className, css = {}, ...delegated} = props

  const handleMouseOver = () => {
    if (!expand) return
    setExpandOnHover(true)
  }

  const handleMouseLeave = () => {
    if (!expand) return
    setExpandOnHover(false)
  }

  return (
    <StyledSidebar
      css={css}
      ref={ref}
      className={`${className} ${expandOnHover ? 'sidebar-expanded' : ''}`}
      size={expandOnHover ? 'full' : 'default'}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...delegated}
    >
      <SidebarContext.Provider value={{isExpand: expandOnHover}}>
        {children}
      </SidebarContext.Provider>
    </StyledSidebar>
  )
})

export default Sidebar
