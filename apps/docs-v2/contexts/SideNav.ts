import {createContext, useContext} from 'react'
import {routes} from '../constants/routes'
import {TPage} from '../types/common'

const SidenavContext = createContext<TPage[]>(routes)

export const useSidenavContext = (): TPage[] =>
  useContext<TPage[]>(SidenavContext)

export default SidenavContext
