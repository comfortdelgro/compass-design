import {createContext} from 'react'
import {routes} from 'utils/constants/routes'
import {TSideNavItem} from 'utils/types/common'

const SidenavContext = createContext<TSideNavItem[]>(routes)

export default SidenavContext
