import {createContext, ReactNode} from 'react'

export interface SelectedItemDropdown {
  value: string
  displayValue: ReactNode
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
  onSectionClick: (
    items: SelectedItemDropdown[],
    checking: boolean,
    id: number | string,
  ) => void
  selectedSectionIds: Array<string | number>
  setSelectedSectionIds: React.Dispatch<
    React.SetStateAction<Array<string | number>>
  >
  labelId: string
}

export const MultipleDropdownContext =
  createContext<MultipleDropdownContextType>({
    open: false,
    searchValue: '',
    labelId: '',
    selectedItems: [],
    disabledKeys: [],
    selectedKeys: [],
    defaultSelectedKeys: [],
    selectedSectionIds: [],
    setSelectedSectionIds: () => {
      //
    },
    setSelectedItems: () => {
      //
    },
    onItemClick: () => {
      //
    },
    onSectionClick: () => {
      //
    },
  })
