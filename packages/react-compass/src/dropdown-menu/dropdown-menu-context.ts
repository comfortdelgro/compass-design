import React from 'react'

export interface DropdownMenuContextType {
  open: boolean
  setOpen: (value: boolean) => void
  itemIds: string[]
  setItemIds: React.Dispatch<React.SetStateAction<string[]>>
  refs?: React.MutableRefObject<Array<React.RefObject<HTMLLIElement>>>
  onClose?: () => void
  onOpenChange?: (status: boolean) => void
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
