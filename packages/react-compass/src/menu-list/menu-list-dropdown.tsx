import React, {useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {MenuListContext} from './menu-list-context'
import MenuListDropdownHeader from './menu-list-dropdown-header'
import MenuListDropdownItem from './menu-list-dropdown-item'
import {
  StyledMenuListDropdown,
  StyledMenuListDropdownBody,
} from './menu-list-dropdown.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isOpen?: boolean
  defaultOpen?: boolean
  onMenuListChange?: (isOpen: boolean) => void
}

export type MenuListDropdownProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

enum EBodyOpenState {
  OPEN = 'open',
  CLOSE = 'close',
}

const MenuListDropdown = React.forwardRef<
  HTMLDivElement,
  MenuListDropdownProps
>((props, ref) => {
  const {
    // ComponentProps
    children,
    isOpen: isOpenProp,
    onMenuListChange,
    defaultOpen = true,
    className = '',
    // StyledComponentProps
    css = {},
    // HTML Div props
    ...delegated
  } = props

  const [isOpenState, setOpenState] = useState(isOpenProp ?? defaultOpen)

  const [title, ...body] = React.Children.toArray(children)

  // whether the state is controlled or not
  const isControlled = isOpenProp !== undefined

  const isOpen = isControlled ? isOpenProp : isOpenState

  const toggleOpen = () => {
    if (isControlled && onMenuListChange) {
      onMenuListChange(!isOpenState)
    }
    setOpenState((prev) => !prev)
  }

  const bodyOpenState = isOpen ? EBodyOpenState.OPEN : EBodyOpenState.CLOSE

  return (
    <StyledMenuListDropdown
      className={`${className} menu-list-dropdown`}
      ref={ref}
      css={css}
      {...delegated}
    >
      <MenuListContext.Provider value={{isOpen: isOpen, toggleOpen}}>
        {title}
        <StyledMenuListDropdownBody openState={bodyOpenState}>
          {body}
        </StyledMenuListDropdownBody>
      </MenuListContext.Provider>
    </StyledMenuListDropdown>
  )
})

export default MenuListDropdown as typeof MenuListDropdown & {
  Header: typeof MenuListDropdownHeader
  Item: typeof MenuListDropdownItem
}
