import React from 'react'
import Dropdown, {DropdownProps} from './dropdown'
export interface DropdownSelectProps extends DropdownProps {
  // additional props for ComboBox
  additionalProp?: boolean // Add an optional property to avoid lint error
}

const DropdownSelect = React.forwardRef<HTMLDivElement, DropdownSelectProps>(
  (selectProps, ref) => {
    return <Dropdown {...selectProps} ref={ref} type='select' />
  },
)

export default DropdownSelect
