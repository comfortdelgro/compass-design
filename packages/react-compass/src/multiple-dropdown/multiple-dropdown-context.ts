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
  isLoadingMore: boolean
  isPositioned: boolean
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
    index: number,
  ) => void
  selectedSectionIndexes: number[]
  setSelectedSectionIndexes: React.Dispatch<React.SetStateAction<number[]>>
  labelId: string
  onHeaderClick: () => void
}

export const MultipleDropdownContext =
  createContext<MultipleDropdownContextType>({
    isLoadingMore: false,
    isPositioned: false,
    open: false,
    searchValue: '',
    labelId: '',
    selectedItems: [],
    disabledKeys: [],
    selectedKeys: [],
    defaultSelectedKeys: [],
    selectedSectionIndexes: [],
    setSelectedSectionIndexes: () => {
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
    onHeaderClick: () => {
      //
    },
  })
