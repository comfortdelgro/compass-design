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

export interface DropdownContextType {
  open: boolean
  searchValue: string
  disabledKeys?: Array<string | number>
  selectedKeys: SelectedItemDropdown[]
  focusKey?: string | number
  selectedKey?: string | number
  defaultSelectedKey?: string | number
  dropdownItemKeys?: DropdownItemKey[]
  setDropdownItemKeys?: React.Dispatch<React.SetStateAction<DropdownItemKey[]>>

  setSelectedKeys: React.Dispatch<React.SetStateAction<SelectedItemDropdown[]>>
  onItemClick: (item: SelectedItemDropdown) => void
}

export const DropdownContext = createContext<DropdownContextType>({
  open: false,
  searchValue: '',
  selectedKeys: [],
  disabledKeys: [],
  selectedKey: '',
  defaultSelectedKey: '',
  setSelectedKeys: () => {
    //
  },
  onItemClick: () => {
    //
  },
})
