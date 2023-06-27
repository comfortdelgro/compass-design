import {ReferenceType} from '@floating-ui/react'
import React from 'react'

export interface DropdownMultilevelContextType {
  open: boolean
  setOpen: (value: boolean) => void
  setReference: (node: ReferenceType | null) => void
  getReferenceProps: (
    userProps?: React.HTMLProps<Element> | undefined,
  ) => Record<string, unknown>
}

const DropdownMultilevelContext = React.createContext<
  Record<string, unknown> | DropdownMultilevelContextType
>({})

export default DropdownMultilevelContext
