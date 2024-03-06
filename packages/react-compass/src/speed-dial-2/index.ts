import SpeedDial2 from './speed-dial'
import {SpeedDialActions} from './speed-dial-actions'
import {SpeedDialButton} from './speed-dial-button'

export type {SpeedDial2Props} from './speed-dial'
export type {SpeedDialActionsProps} from './speed-dial-actions'
export type {SpeedDialButtonProps} from './speed-dial-button'

SpeedDial2.displayName = 'SpeedDial2'
SpeedDial2.Button = SpeedDialButton
SpeedDial2.Actions = SpeedDialActions

export default SpeedDial2
