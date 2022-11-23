import React, {HTMLAttributes} from 'react'

export interface SidebarContextValue extends HTMLAttributes<HTMLElement> {
  isExpand?: boolean
}

export const SidebarContext = React.createContext<SidebarContextValue>({})
