import Divider from './divider'
import Sidenav from './sidenav'
import SidebarItem from './sidenav-item'
import SidenavMenu from './sidenav-menu'
export type {DividerProps} from './divider'
export type {SidenavProps} from './sidenav'
export {SidenavContext} from './sidenav-context'
export type {SidenavContextValue} from './sidenav-context'
export type {SidenavItemProps} from './sidenav-item'
export type {SidenavMenuProps} from './sidenav-menu'

Sidenav.Item = SidebarItem
Sidenav.Divider = Divider
Sidenav.Menu = SidenavMenu

Sidenav.Item.displayName = 'Sidenar.Item'
Sidenav.Divider.displayName = 'Sidenar.Divider'
Sidenav.Menu.displayName = 'Sidenar.Menu'
Sidenav.displayName = 'Sidenar'

export default Sidenav
