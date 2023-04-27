import React from 'react'
interface Props {
  children: React.ReactNode
}

export type DropdownHeaderProps = Props

const DropdownHeader: React.FC<DropdownHeaderProps> = (props) => {
  return <>{props.children}</>
}

export default DropdownHeader
