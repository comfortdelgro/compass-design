import Dropdown from './dropdown'
import ComboBox from './dropdown.combobox'
import DropdownFlag from './dropdown.flag'
import Select from './dropdown.select'
import DropdownItem from './item'

Dropdown.Item = DropdownItem
Dropdown.ComboBox = ComboBox
Dropdown.Flag = DropdownFlag
Dropdown.Select = Select

export type {DropdownProps} from './dropdown'
export type {DropdownComboBoxProps} from './dropdown.combobox'
export type {DropdownFlagProps} from './dropdown.flag'
export type {DropdownSelectProps} from './dropdown.select'
export type {DropdownItemProps} from './item'

export default Dropdown
