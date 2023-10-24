import React, {HTMLAttributes} from 'react'

export interface SidenavContextValue extends HTMLAttributes<HTMLElement> {
  isExpand?: boolean
}

export const SidenavContext = React.createContext<SidenavContextValue>({})
