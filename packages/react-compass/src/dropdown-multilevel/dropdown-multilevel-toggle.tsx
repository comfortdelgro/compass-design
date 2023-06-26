import React, {ReactNode} from 'react'

interface DropdownMultilevelToggleProps {
  children: ReactNode
}

export default function DropdownMultilevelToggle(
  props: DropdownMultilevelToggleProps,
) {
  const {children} = props

  return <div>{children}</div>
}
