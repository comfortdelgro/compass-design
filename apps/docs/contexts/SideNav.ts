import {createContext, useContext} from 'react'
import {TSideNavItem} from 'types/common'
import {routes} from '../constants/routes'

const SidenavContext = createContext<TSideNavItem[]>(routes)

export const useSidenavContext = (): TSideNavItem[] =>
  useContext<TSideNavItem[]>(SidenavContext)

export default SidenavContext
