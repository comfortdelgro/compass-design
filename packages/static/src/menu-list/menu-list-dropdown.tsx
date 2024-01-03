import React, {useState} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {MenuListContext} from './menu-list-context'
import MenuListDropdownHeader from './menu-list-dropdown-header'
import MenuListDropdownItem from './menu-list-dropdown-item'
import styles from './styles/menu-list-dropdown.module.css'

interface Props {
  css?: unknown
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

// eslint-disable-next-line react-refresh/only-export-components
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

  const rootClasses = [
    styles.menuListDropdown,
    className,
    'cdg-menu-list-dropdown',
  ]
    .filter(Boolean)
    .join(' ')

  const bodyClasses = [
    styles.menuListDropdownBody,
    styles[bodyOpenState],
    'cdg-menu-list-dropdown-body',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={ref}>
      <div className={rootClasses} ref={ref} {...delegated}>
        <MenuListContext.Provider value={{isOpen: isOpen, toggleOpen}}>
          {title}
          <div className={bodyClasses}>{body}</div>
        </MenuListContext.Provider>
      </div>
    </CssInjection>
  )
})

export default MenuListDropdown as typeof MenuListDropdown & {
  Header: typeof MenuListDropdownHeader
  Item: typeof MenuListDropdownItem
}
