import DropdownItem from '../dropdown/item'
import MultipleDropdown from './multiple-dropdown'

export type {MultipleDropdownItemProps} from './item'
export type {MultipleDropdownProps} from './multiple-dropdown'

MultipleDropdown.Item = DropdownItem

MultipleDropdown.displayName = 'MultipleDropdown'

export default MultipleDropdown
