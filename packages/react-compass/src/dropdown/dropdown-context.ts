import {createContext, Key, ReactNode} from 'react'

export interface SelectedItemDropdown {
  value: string
  displayValue: ReactNode
  flagName?: string
}

export interface DropdownItemKey {
  value: Key
  visibility: boolean
}

export interface DropdownContextType {
  open: boolean
  searchValue: string
  disabledKeys?: Key[]
  selectedItem: SelectedItemDropdown | null
  focusKey?: Key
  selectedKey?: Key
  defaultSelectedKey?: Key
  dropdownItemKeys?: DropdownItemKey[]
  setDropdownItemKeys?: React.Dispatch<React.SetStateAction<DropdownItemKey[]>>
  setSelectedItem: React.Dispatch<
    React.SetStateAction<SelectedItemDropdown | null>
  >
  onItemClick: (item: SelectedItemDropdown) => void
}

export const DropdownContext = createContext<DropdownContextType>({
  open: false,
  searchValue: '',
  selectedItem: null,
  disabledKeys: [],
  selectedKey: '',
  defaultSelectedKey: '',
  setSelectedItem: () => {
    //
  },
  onItemClick: () => {
    //
  },
})