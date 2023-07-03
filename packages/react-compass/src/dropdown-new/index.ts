import DropdownNew from './dropdown-new'
import DropdownNewItem from './dropdown-new-item'
import DropdownCombobox from './dropdown-new.combobox'
import DropdownFlag from './dropdown-new.flag'
import DropdownHeader from './dropdown-new.header'
import DropdownSection from './dropdown-new.section'
import DropdownSelect from './dropdown-new.select'

DropdownNew.Item = DropdownNewItem
DropdownNew.Flag = DropdownFlag
DropdownNew.Select = DropdownSelect
DropdownNew.ComboBox = DropdownCombobox
DropdownNew.Section = DropdownSection
DropdownNew.Header = DropdownHeader

DropdownNew.Flag.displayName = 'DropdownNew.Flag'
DropdownNew.Select.displayName = 'DropdownNew.Select'
DropdownNew.ComboBox.displayName = 'DropdownNew.ComboBox'
DropdownNew.Section.displayName = 'DropdownNew.Section'
DropdownNew.Header.displayName = 'DropdownNew.Header'
DropdownNew.displayName = 'DropdownNew'

export type {DropdownProps} from './dropdown-new'
export type {DropdownItemProps} from './dropdown-new-item'
export type {DropdownFlagProps} from './dropdown-new.flag'
export type {DropdownHeaderProps} from './dropdown-new.header'
export type {DropdownSectionProps} from './dropdown-new.section'

export default DropdownNew
