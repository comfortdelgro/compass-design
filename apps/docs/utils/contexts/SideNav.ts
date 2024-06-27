import {createContext} from 'react'
import {routes} from 'utils/constants/routes'
import {TSideNavItem} from 'utils/types'

const SidenavContext = createContext<TSideNavItem[]>(routes)

export default SidenavContext
