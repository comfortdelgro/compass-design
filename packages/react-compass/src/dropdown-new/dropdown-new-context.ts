import {createContext, ReactNode} from 'react'

export interface SelectedItemDropdown {
  value: string
  displayValue: ReactNode
  flagName?: string
}

export interface DropdownContextType {
  open: boolean
  searchValue: string
  disabledKeys?: Array<string | number>
  selectedKeys: SelectedItemDropdown[]
  focusKey?: string | number
  selectedKey?: string | number
  defaultSelectedKey?: string | number
  dropdownItems?: Array<string | number>
  setDropdownItems?: React.Dispatch<
    React.SetStateAction<Array<string | number>>
  >
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
