import DropdownNew from './dropdown-new'
import DropdownFlag from './dropdown-new-flag'
import DropdownNewItem from './dropdown-new-item'

DropdownNew.Item = DropdownNewItem
DropdownNew.Flag = DropdownFlag

DropdownNew.Flag.displayName = 'DropdownNew.Flag'
DropdownNew.displayName = 'DropdownNew'

export type {DropdownProps} from './dropdown-new'
export type {DropdownFlagProps} from './dropdown-new-flag'

export default DropdownNew
