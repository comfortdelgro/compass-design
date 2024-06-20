import {useContext} from 'react'
import SidenavContext from 'utils/contexts/SideNav'
import {TSideNavItem} from 'utils/types/common'

export const useSidenavContext = (): TSideNavItem[] =>
  useContext<TSideNavItem[]>(SidenavContext)

export default useSidenavContext
