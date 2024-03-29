import ComposableTagBox from './tag-box'
import TagBoxAction from './tag-box-action'

export type {TagBoxProps} from './tag-box'
export type {TagBoxActionProps} from './tag-box-action'

ComposableTagBox.Action = TagBoxAction

ComposableTagBox.displayName = 'TagBox'
ComposableTagBox.Action.displayName = 'TagBox.Action'

export default ComposableTagBox
