import React from 'react'
import Dropdown, {DropdownProps} from './dropdown'
const DropdownSelect = React.forwardRef<HTMLDivElement, DropdownProps>(
  (selectProps, ref) => {
    return <Dropdown {...selectProps} ref={ref} type='select' />
  },
)

export default DropdownSelect
