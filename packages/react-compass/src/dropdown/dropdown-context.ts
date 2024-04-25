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
  isPositioned: boolean
  open: boolean
  isLoadingMore: boolean
  searchValue: string
  disabledKeys?: string[] | number[]
  selectedItem: SelectedItemDropdown | null
  focusKey: string | number | null
  selectedKey?: string | number
  defaultSelectedKey?: string | number
  dropdownItemKeys?: DropdownItemKey[]
  labelId: string
  disabledAutofill?: boolean
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
  disabledAutofill: false,
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
