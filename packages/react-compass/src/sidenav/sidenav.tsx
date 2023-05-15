import React, {useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import Divider from './divider'
import {SidenavContext} from './sidenav-context'
import SidenavItem from './sidenav-item'
import {StyledSidenav} from './sidenav.styles'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  expand?: boolean
}

export type SidenavProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Sidenav = React.forwardRef<HTMLDivElement, SidenavProps>((props, ref) => {
  const [expandOnHover, setExpandOnHover] = useState(false)
  const {
    // ComponentProps
    children,
    expand = false,
    className = '',
    // StyledComponentProps
    css = {},
    // HTML Div props
    ...delegated
  } = props

  // if component is controlled -> return
  // if hover -> set expandOnHover state = true
  const handleMouseOver = () => {
    if (expand) return
    setExpandOnHover(true)
  }

  // if component is controlled -> return
  // if hover -> set expandOnHover state = false
  const handleMouseLeave = () => {
    if (expand) return
    setExpandOnHover(false)
  }

  // if expand prop is false -> always open the sidenav
  // else, expand when hover
  const isExpand = !expand ? expandOnHover : true

  return (
    <StyledSidenav
      css={css}
      ref={ref}
      className={`${className} ${expandOnHover ? 'sidenav-expanded' : ''}`}
      size={isExpand ? 'full' : 'default'}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...delegated}
    >
      <SidenavContext.Provider value={{isExpand: isExpand}}>
        {children}
      </SidenavContext.Provider>
    </StyledSidenav>
  )
})

export default Sidenav as typeof Sidenav & {
  Item: typeof SidenavItem
  Divider: typeof Divider
}
