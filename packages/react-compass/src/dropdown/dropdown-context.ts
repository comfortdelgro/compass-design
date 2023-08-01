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
  isPositioned: boolean
  open: boolean
  isLoadingMore: boolean
  searchValue: string
  disabledKeys?: Key[]
  selectedItem: SelectedItemDropdown | null
  focusKey: Key | null
  selectedKey?: Key
  defaultSelectedKey?: Key
  dropdownItemKeys?: DropdownItemKey[]
  labelId: string
  setDropdownItemKeys?: React.Dispatch<React.SetStateAction<DropdownItemKey[]>>
  setSelectedItem: React.Dispatch<
    React.SetStateAction<SelectedItemDropdown | null>
  >
  onItemClick: (item: SelectedItemDropdown) => void
  onHeaderClick: () => void
}

export const DropdownContext = createContext<DropdownContextType>({
  isLoadingMore: false,
  focusKey: null,
  isPositioned: false,
  labelId: '',
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
  onHeaderClick: () => {
    //
  },
})
