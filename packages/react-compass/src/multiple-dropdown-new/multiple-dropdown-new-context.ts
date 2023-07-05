import {createContext, ReactNode} from 'react'

export interface SelectedItemDropdown {
  value: string
  displayValue: ReactNode
  flagName?: string
}

export interface DropdownItemKey {
  value: string | number
  visibility: boolean
}

export interface MultipleDropdownContextType {
  open: boolean
  searchValue: string
  disabledKeys?: Array<string | number>
  selectedItems: SelectedItemDropdown[]
  focusKey?: string | number
  selectedKeys?: Array<string | number>
  defaultSelectedKeys?: Array<string | number>
  dropdownItemKeys?: DropdownItemKey[]
  setDropdownItemKeys?: React.Dispatch<React.SetStateAction<DropdownItemKey[]>>
  setSelectedItems: React.Dispatch<React.SetStateAction<SelectedItemDropdown[]>>
  onItemClick: (item: SelectedItemDropdown) => void
}

export const MultipleDropdownContext =
  createContext<MultipleDropdownContextType>({
    open: false,
    searchValue: '',
    selectedItems: [],
    disabledKeys: [],
    selectedKeys: [],
    defaultSelectedKeys: [],
    setSelectedItems: () => {
      //
    },
    onItemClick: () => {
      //
    },
  })
