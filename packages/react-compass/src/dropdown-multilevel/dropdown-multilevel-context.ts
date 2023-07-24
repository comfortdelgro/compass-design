import React from 'react'

export interface DropdownMultilevelContextType {
  open: boolean
  setOpen: (value: boolean) => void
  itemIds: string[]
  setItemIds: React.Dispatch<React.SetStateAction<string[]>>
  refs?: React.MutableRefObject<Array<React.RefObject<HTMLLIElement>>>
}

const DropdownMultilevelContext =
  React.createContext<DropdownMultilevelContextType>({
    open: false,
    itemIds: [],
    setOpen: () => {
      //
    },
    setItemIds: () => {
      //
    },
  })

export default DropdownMultilevelContext
