import {Item} from '@react-stately/collections'
import DropdownComboBox from './dropdown.combobox'
import DropdownSelect from './dropdown.select'
import DropdownItem from './item'

export type {DropdownProps} from './dropdown.combobox'

interface ComposableDropdown {
  ComboBox: typeof DropdownComboBox
  Select: typeof DropdownSelect
  Item: typeof DropdownItem
}

const Dropdown: ComposableDropdown = {
  ComboBox: DropdownComboBox,
  Select: DropdownSelect,
  Item: Item,
}

Dropdown.Item = Item

export default Dropdown
