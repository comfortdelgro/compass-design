import {createContext} from 'react'

export interface DropdownContextType {
  onItemClick: (key: string) => void
  selectedKeys: string[]
  setSelectedKeys: React.Dispatch<React.SetStateAction<string[]>>
}

export const DropdownContext = createContext<DropdownContextType>({
  onItemClick: () => {
    //
  },
  selectedKeys: [],
  setSelectedKeys: () => {
    //
  },
})
