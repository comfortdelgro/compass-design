import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {SidebarContext} from './sidebar-context'
import {StyledSidebarItem} from './sidebar-item.styles'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  isActive?: boolean
}

export type SidebarItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
  (props, ref) => {
    const {
      // ComponentProps
      children,
      isActive,
      className = '',
      // StyledComponentProps
      css = {},
      // HTML Div props
      ...delegated
    } = props

    const {isExpand} = useContext(SidebarContext)

    const [icon, title] = React.Children.toArray(children)

    return (
      <StyledSidebarItem
        ref={ref}
        css={css}
        className={`${className} ${isActive ? 'sidebar-item-active' : ''}`}
        active={isActive ? 'active' : 'default'}
        {...delegated}
      >
        {icon}
        {isExpand && <div className='sidebar-item-title'>{title}</div>}
      </StyledSidebarItem>
    )
  },
)

export default SidebarItem
