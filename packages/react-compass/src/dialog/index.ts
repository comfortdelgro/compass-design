import Dialog from './dialog'
import DialogActions from './dialog-actions'
import DialogDescription from './dialog-description'
import DialogIcon from './dialog-icon'
import DialogTitle from './dialog-title'
import DialogTrigger from './dialog-trigger'

export type {DialogProps} from './dialog'
export type {DialogActionsProps} from './dialog-actions'
export type {DialogDescriptionProps} from './dialog-description'
export type {DialogIconProps} from './dialog-icon'
export type {DialogTitleProps} from './dialog-title'
export type {DialogTriggerProps} from './dialog-trigger'

Dialog.Trigger = DialogTrigger
Dialog.Title = DialogTitle
Dialog.Description = DialogDescription
Dialog.Actions = DialogActions
Dialog.Icon = DialogIcon

Dialog.Trigger.displayName = 'Dialog.Trigger'
Dialog.Title.displayName = 'Dialog.Title'
Dialog.Description.displayName = 'Dialog.Description'
Dialog.Actions.displayName = 'Dialog.Actions'
Dialog.Icon.displayName = 'Dialog.Icon'
Dialog.displayName = 'Dialog'

export default Dialog
