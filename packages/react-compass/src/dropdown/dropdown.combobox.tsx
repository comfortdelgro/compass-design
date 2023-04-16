import React from 'react'
import Dropdown, {DropdownProps} from './dropdown'

const ComboBox = React.forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    return <Dropdown {...props} ref={ref} type='combobox' />
  },
)

export default ComboBox
