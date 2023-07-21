import React from 'react'

export interface DropdownMultilevelContextType {
  open: boolean
  setOpen: (value: boolean) => void
}

const DropdownMultilevelContext = React.createContext<
  Record<string, unknown> | DropdownMultilevelContextType
>({})

export default DropdownMultilevelContext
