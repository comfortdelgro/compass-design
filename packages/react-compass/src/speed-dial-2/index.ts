import _SpeedDial2 from './speed-dial'
import {SpeedDialActions} from './speed-dial-actions'
import {SpeedDialButton} from './speed-dial-button'

export type {SpeedDial2Props} from './speed-dial'
export type {SpeedDialActionsProps} from './speed-dial-actions'
export type {SpeedDialButtonProps} from './speed-dial-button'

const SpeedDial2 = _SpeedDial2 as typeof _SpeedDial2 & {
  Actions: typeof SpeedDialActions
  Button: typeof SpeedDialButton
}

SpeedDial2.displayName = 'SpeedDial2'
SpeedDial2.Button = SpeedDialButton
SpeedDial2.Actions = SpeedDialActions

export default SpeedDial2
