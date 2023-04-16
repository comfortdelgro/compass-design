import DropdownComboBox from './dropdown.combobox'
import DropdownFlag from './dropdown.flag'
import DropdownSelect from './dropdown.select'
import DropdownItem from './item'
interface ComposableDropdown {
  ComboBox: typeof DropdownComboBox
  Flag: typeof DropdownFlag
  Select: typeof DropdownSelect
  Item: typeof DropdownItem
}

const Dropdown: ComposableDropdown = {
  Flag: DropdownFlag,
  ComboBox: DropdownComboBox,
  Select: DropdownSelect,
  Item: DropdownItem,
}

Dropdown.Item = DropdownItem

export default Dropdown
