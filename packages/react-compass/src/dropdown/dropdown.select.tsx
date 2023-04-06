import React from 'react'
import Dropdown, {DropdownProps} from './dropdown'

const Select = React.forwardRef<HTMLButtonElement, DropdownProps>(
  (props, ref) => {
    return <Dropdown {...props} ref={ref} type='select' />
  },
)

export default Select
