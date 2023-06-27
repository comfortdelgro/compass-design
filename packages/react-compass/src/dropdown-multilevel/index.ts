import DropdownMultilevel from './dropdown-multilevel'
import DropdownMultilevelItem from './dropdown-multilevel-item'
import DropdownMultilevelMenu from './dropdown-multilevel-menu'
import DropdownMultilevelSubmenu from './dropdown-multilevel-submenu'
import DropdownMultilevelToggle from './dropdown-multilevel-toggle'

export type {DropdownMultilevelProps} from './dropdown-multilevel'

DropdownMultilevel.Toggle = DropdownMultilevelToggle
DropdownMultilevel.Item = DropdownMultilevelItem
DropdownMultilevel.Submenu = DropdownMultilevelSubmenu
DropdownMultilevel.Menu = DropdownMultilevelMenu

DropdownMultilevel.Toggle.displayName = 'DropdownMultilevel.Toggle'
DropdownMultilevel.Item.displayName = 'DropdownMultilevel.Item'
DropdownMultilevel.Submenu.displayName = 'DropdownMultilevel.Submenu'
DropdownMultilevel.Menu.displayName = 'DropdownMultilevel.Menu'

export default DropdownMultilevel
