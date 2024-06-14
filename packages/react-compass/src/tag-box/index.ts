import TagBox from './tag-box'
import TagBoxAction from './tag-box-action'

export type {TagBoxProps} from './tag-box'
export type {TagBoxActionProps} from './tag-box-action'

TagBox.Action = TagBoxAction

TagBox.displayName = 'TagBox'
TagBox.Action.displayName = 'TagBox.Action'

export default TagBox
