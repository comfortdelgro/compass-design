import Divider from './divider'
import Sidebar from './sidebar'
import SidebarItem from './sidebar-item'
export type {DividerProps} from './divider'
export type {SidebarProps} from './sidebar'
export {SidebarContext} from './sidebar-context'
export type {SidebarContextValue} from './sidebar-context'
export type {SidebarItemProps} from './sidebar-item'

Sidebar.Item = SidebarItem
Sidebar.Divider = Divider

export default Sidebar
