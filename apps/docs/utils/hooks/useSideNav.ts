import {useContext} from 'react'
import SidenavContext from 'utils/contexts/SideNav'
import {TSideNavItem} from 'utils/types'

export const useSidenavContext = (): TSideNavItem[] =>
  useContext<TSideNavItem[]>(SidenavContext)

export default useSidenavContext
