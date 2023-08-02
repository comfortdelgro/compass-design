import Dropdown from './dropdown'
import DropdownItem from './dropdown-item'
import DropdownCombobox from './dropdown.combobox'
import DropdownHeader from './dropdown.header'
import DropdownSection from './dropdown.section'
import DropdownSelect from './dropdown.select'

Dropdown.Item = DropdownItem
Dropdown.Select = DropdownSelect
Dropdown.ComboBox = DropdownCombobox
Dropdown.Section = DropdownSection
Dropdown.Header = DropdownHeader

export type {DropdownProps} from './dropdown'
export type {DropdownItemProps} from './dropdown-item'
export type {DropdownComboBoxProps} from './dropdown.combobox'
export type {DropdownHeaderProps} from './dropdown.header'
export type {DropdownSectionProps} from './dropdown.section'
export type {DropdownSelectProps} from './dropdown.select'

export default Dropdown
