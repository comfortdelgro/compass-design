import React from 'react'

export type AccordionContextType = {
  expand: boolean
  setExpand: () => void
  onExpandChange?:
    | ((e?: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined
}

const AccordionContext = React.createContext<
  Record<string, unknown> | AccordionContextType
>({})

export default AccordionContext
