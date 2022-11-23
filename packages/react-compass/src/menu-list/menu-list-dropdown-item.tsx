import React from 'react'
import Icon, {IconProp} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledMenuListDropdownItem} from './menu-list-dropdown-item.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  active?: boolean
  icon?: IconProp
  isNested?: boolean
}

export type MenuListDropdownItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MenuListDropdownItem = React.forwardRef<
  HTMLDivElement,
  MenuListDropdownItemProps
>((props, ref) => {
  const {children, active, isNested, icon, css = {}, ...delegated} = props

  return (
    <StyledMenuListDropdownItem
      className='menu-list-dropdown-item'
      active={active ? 'active' : 'default'}
      nested={isNested ? 'nested' : 'default'}
      ref={ref}
      css={css}
      {...delegated}
    >
      {icon && <Icon icon={icon} className='menu-list-dropdown-item-icon' />}
      {children}
    </StyledMenuListDropdownItem>
  )
})

export default MenuListDropdownItem
