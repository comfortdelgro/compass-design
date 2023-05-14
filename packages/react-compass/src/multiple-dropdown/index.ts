import DropdownHeader from '../dropdown/header'
import DropdownItem from '../dropdown/item'
import DropdownSection from '../dropdown/section'
import MultipleDropdown from './multiple-dropdown'

export type {DropdownItemProps as MultipleDropdownItemProps} from './item'
export type {MultipleDropdownProps} from './multiple-dropdown'

MultipleDropdown.Item = DropdownItem
MultipleDropdown.Header = DropdownHeader
MultipleDropdown.Section = DropdownSection

MultipleDropdown.displayName = 'MultipleDropdown'

export default MultipleDropdown
