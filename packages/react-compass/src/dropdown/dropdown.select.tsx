import React from 'react'
import Dropdown, {DropdownProps} from './dropdown'

const Select = React.forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  return <Dropdown {...props} ref={ref} type='select' />
})

export default Select
