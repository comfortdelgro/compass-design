import {Item} from '@react-stately/collections'
import DropdownComboBox from './dropdown.combobox'
import DropdownFlag from './dropdown.flag'
import DropdownSelect from './dropdown.select'
import DropdownItem from './item'

export type {DropdownProps} from './dropdown.combobox'

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
  Item: Item,
}

Dropdown.Item = DropdownItem

export default Dropdown
