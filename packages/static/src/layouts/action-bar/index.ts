import ActionBar from './action-bar'
import ActionBarCenterGroup from './action-bar-center-group'
import ActionBarLeftGroup from './action-bar-left-group'
import ActionBarRightGroup from './action-bar-right-group'

export type {Props as ActionBarProps} from './action-bar'
export type {Props as ActionBarCenterGroupProps} from './action-bar-center-group'
export type {Props as ActionBarLeftGroupProps} from './action-bar-left-group'
export type {Props as ActionBarRightGroupProps} from './action-bar-right-group'

ActionBar.LeftGroup = ActionBarLeftGroup
ActionBar.RightGroup = ActionBarRightGroup
ActionBar.CenterGroup = ActionBarCenterGroup

ActionBar.displayName = 'ActionBar'

export default ActionBar
