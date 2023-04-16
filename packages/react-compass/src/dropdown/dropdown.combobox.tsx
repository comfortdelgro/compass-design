import React from 'react'
import Dropdown, {DropdownProps} from '.'
export interface DropdownComboBoxProps extends DropdownProps {
  // additional props for ComboBox
  additionalProp?: boolean // Add an optional property to avoid lint error
}
const ComboBox = React.forwardRef<HTMLDivElement, DropdownComboBoxProps>(
  (props, ref) => {
    return <Dropdown {...props} ref={ref} type='combobox' />
  },
)

export default ComboBox
