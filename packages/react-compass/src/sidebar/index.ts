import Sidebar from './sidebar'
import SidebarActions from './sidebar-actions'
import SidebarContent from './sidebar-content'
import SidebarTitle from './sidebar-title'

export type {SidebarProps} from './sidebar'
export type {SidebarActionsProps} from './sidebar-actions'
export type {SidebarContentProps} from './sidebar-content'
export type {SidebarTitleProps} from './sidebar-title'

Sidebar.Actions = SidebarActions
Sidebar.Content = SidebarContent
Sidebar.Title = SidebarTitle

Sidebar.Actions.displayName = 'Sidebar.Actions'
Sidebar.Content.displayName = 'Sidebar.Content'
Sidebar.Title.displayName = 'Sidebar.Title'
Sidebar.displayName = 'Sidebar'

export default Sidebar
