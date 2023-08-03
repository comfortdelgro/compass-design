import ActionBar from './ActionBar'
import {ActionBarCenterGroup} from './ActionBarCenterGroup'
import {ActionBarLeftGroup} from './ActionBarLeftGroup'
import {ActionBarRightGroup} from './ActionBarRightGroup'

export type {ActionBarProps} from './ActionBar'
export type {ActionBarCenterGroupProps} from './ActionBarCenterGroup'
export type {ActionBarLeftGroupProps} from './ActionBarLeftGroup'
export type {ActionBarRightGroupProps} from './ActionBarRightGroup'

ActionBar.LeftGroup = ActionBarLeftGroup
ActionBar.RightGroup = ActionBarRightGroup
ActionBar.CenterGroup = ActionBarCenterGroup
ActionBar.displayName = 'ActionBar'

export default ActionBar
