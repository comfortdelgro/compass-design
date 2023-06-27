import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledMenuListDropdownItem} from './menu-list-dropdown-item.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isActive?: boolean
  icon?: React.ReactNode
  isNested?: boolean
  isDisabled?: boolean
}

export type MenuListDropdownItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MenuListDropdownItem = React.forwardRef<
  HTMLDivElement,
  MenuListDropdownItemProps
>((props, ref) => {
  const {
    // ComponentProps
    children,
    isActive,
    isNested,
    isDisabled,
    icon,
    className = '',
    // StyledComponentProps
    css = {},
    // HTML Div props
    ...delegated
  } = props

  return (
    <StyledMenuListDropdownItem
      className={`${className} menu-list-dropdown-item`}
      active={isActive ? 'active' : 'default'}
      nested={isNested ? 'nested' : 'default'}
      disabled={!!isDisabled}
      ref={ref}
      css={css}
      tabIndex={isDisabled ? 1 : 0}
      {...delegated}
    >
      {icon}
      {children}
    </StyledMenuListDropdownItem>
  )
})

export default MenuListDropdownItem