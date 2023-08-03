import React from 'react'

export interface DropdownMenuContextType {
  open: boolean
  setOpen: (value: boolean) => void
  itemIds: string[]
  setItemIds: React.Dispatch<React.SetStateAction<string[]>>
  // Set of first level items in Menu
  refs?: React.MutableRefObject<Array<React.RefObject<HTMLLIElement>>>
  onClose?: (() => void) | undefined
  onOpenChange?: ((status: boolean) => void) | undefined
}

const DropdownMenuContext = React.createContext<DropdownMenuContextType>({
  open: false,
  itemIds: [],
  setOpen: () => {
    //
  },
  setItemIds: () => {
    //
  },
})

export default DropdownMenuContext
