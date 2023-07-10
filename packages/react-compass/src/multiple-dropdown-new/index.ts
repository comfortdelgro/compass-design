import MultipleDropdown from './multiple-dropdown-new'
import MultipleDropdownNewItem from './multiple-dropdown-new-item'
import MultipleDropdownHeader from './multiple-dropdown-new.header'
import MultipleDropdownSection from './multiple-dropdown-new.section'

MultipleDropdown.Item = MultipleDropdownNewItem
MultipleDropdown.Header = MultipleDropdownHeader
MultipleDropdown.Section = MultipleDropdownSection

MultipleDropdown.displayName = 'MultipleDropdown'

export type {MultipleDropdownProps} from './multiple-dropdown-new'
export type {MultipleDropdownItemProps} from './multiple-dropdown-new-item'

export default MultipleDropdown
