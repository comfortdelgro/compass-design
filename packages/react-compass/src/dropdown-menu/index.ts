import DropdownMenu from './dropdown-menu'
import DropdownMenuItem from './dropdown-menu-item'
import DropdownMenuMenu from './dropdown-menu-menu'
import DropdownMenuSubmenu from './dropdown-menu-submenu'
import DropdownMenuToggle from './dropdown-menu-toggle'

export type {DropdownMenuProps} from './dropdown-menu'
export type {DropdownMenuItemProps} from './dropdown-menu-item'
export type {DropdownMenuMenuProps} from './dropdown-menu-menu'
export type {DropdownMenuSubmenuProps} from './dropdown-menu-submenu'
export type {DropdownMenuToggleProps} from './dropdown-menu-toggle'

DropdownMenu.Toggle = DropdownMenuToggle
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.Submenu = DropdownMenuSubmenu
DropdownMenu.Menu = DropdownMenuMenu

DropdownMenu.Toggle.displayName = 'DropdownMenu.Toggle'
DropdownMenu.Item.displayName = 'DropdownMenu.Item'
DropdownMenu.Submenu.displayName = 'DropdownMenu.Submenu'
DropdownMenu.Menu.displayName = 'DropdownMenu.Menu'

export default DropdownMenu
