import React, {HTMLAttributes} from 'react'

export interface MenuListContextValue extends HTMLAttributes<HTMLElement> {
  isOpen?: boolean
  toggleOpen?: () => void
}

export const MenuListContext = React.createContext<MenuListContextValue>({})
