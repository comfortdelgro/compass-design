import Dropdown from './dropdown'
import DropdownItem from './dropdown-item-container'
import DropdownCombobox from './dropdown.combobox'
import DropdownFlag from './dropdown.flag'
import DropdownHeader from './dropdown.header'
import DropdownSection from './dropdown.section'
import DropdownSelect from './dropdown.select'

Dropdown.Item = DropdownItem
Dropdown.Flag = DropdownFlag
Dropdown.Select = DropdownSelect
Dropdown.ComboBox = DropdownCombobox
Dropdown.Section = DropdownSection
Dropdown.Header = DropdownHeader

export type {DropdownProps} from './dropdown'
export type {DropdownItemProps} from './dropdown-item-container'
export type {DropdownComboBoxProps} from './dropdown.combobox'
export type {DropdownFlagProps} from './dropdown.flag'
export type {DropdownHeaderProps} from './dropdown.header'
export type {DropdownSectionProps} from './dropdown.section'
export type {DropdownSelectProps} from './dropdown.select'

export default Dropdown
