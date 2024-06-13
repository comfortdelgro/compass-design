import _Dropdown from './dropdown'
import DropdownItem from './item'

const Dropdown = _Dropdown as typeof _Dropdown & {
  Item: typeof DropdownItem
}

Dropdown.Item = DropdownItem

export type {DropdownProps} from './dropdown'
export type {DropdownItemProps} from './item'

export default Dropdown
