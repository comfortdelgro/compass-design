import React, {useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {MenuListContext} from './menu-list-context'
import MenuListDropdownHeader from './menu-list-dropdown-header'
import MenuListDropdownItem from './menu-list-dropdown-item'
import {StyledMenuListDropdown} from './menu-list-dropdown.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isOpen?: boolean
  defaultOpen?: boolean
  onMenuListChange?: (isOpen: boolean) => void
}

export type MenuListDropdownProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MenuListDropdown = React.forwardRef<
  HTMLDivElement,
  MenuListDropdownProps
>((props, ref) => {
  const {
    children,
    isOpen: isOpenProp,
    onMenuListChange,
    defaultOpen = true,
    css = {},
    ...delegated
  } = props

  const [isOpen, setOpen] = useState(isOpenProp ?? defaultOpen)

  const [title, ...body] = React.Children.toArray(children)

  const isControlled = isOpenProp !== undefined

  const toggleOpen = () => {
    if (isControlled && onMenuListChange) {
      onMenuListChange(!isOpen)
    }
    setOpen((prev) => !prev)
  }

  return (
    <StyledMenuListDropdown
      className='menu-list-dropdown'
      ref={ref}
      css={css}
      {...delegated}
    >
      <MenuListContext.Provider
        value={{isOpen: isControlled ? isOpenProp : isOpen, toggleOpen}}
      >
        {title}
        {(isControlled ? isOpenProp : isOpen) && body}
      </MenuListContext.Provider>
    </StyledMenuListDropdown>
  )
})

export default MenuListDropdown as typeof MenuListDropdown & {
  Header: typeof MenuListDropdownHeader
  Item: typeof MenuListDropdownItem
}
