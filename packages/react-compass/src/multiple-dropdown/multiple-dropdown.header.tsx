import React from 'react'
interface Props {
  children: React.ReactNode
}

export type MultipleDropdownHeaderProps = Props

const MultipleDropdownHeader: React.FC<MultipleDropdownHeaderProps> = (
  props,
) => {
  return <>{props.children}</>
}

export default MultipleDropdownHeader
