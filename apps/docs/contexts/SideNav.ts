import {createContext, useContext} from 'react'
import {TSideNavItem} from 'types/common'
import {routes} from '../constants/routes'

const componentsNav = routes.find((item) => item.pathname === '/components')
if (componentsNav && componentsNav.children) {
  componentsNav.children.sort((a, b) => a.title.localeCompare(b.title))
}
const SidenavContext = createContext<TSideNavItem[]>(routes)

export const useSidenavContext = (): TSideNavItem[] =>
  useContext<TSideNavItem[]>(SidenavContext)

export default SidenavContext
