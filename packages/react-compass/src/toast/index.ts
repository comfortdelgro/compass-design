import Toast from './toast'
import ToastActions from './toast-actions'
import ToastCloseIcon from './toast-closeIcon'
import ToastIcon from './toast-icon'
import ToastLabel from './toast-label'
import ToastMessage from './toast-message'
import ToastTitle from './toast-title'

export type {ToastProps} from './toast'
export type {ToastActionsProps} from './toast-actions'
export type {ToastCloseIconProps} from './toast-closeIcon'
export type {ToastIconProps} from './toast-icon'
export type {ToastLabelProps} from './toast-label'
export type {ToastMessageProps} from './toast-message'
export type {ToastTitleProps} from './toast-title'

Toast.Actions = ToastActions
Toast.CloseIcon = ToastCloseIcon
Toast.Message = ToastMessage
Toast.Icon = ToastIcon
Toast.Label = ToastLabel
Toast.Title = ToastTitle

Toast.Actions.displayName = 'Toast.Actions'
Toast.CloseIcon.displayName = 'Toast.CloseIcon'
Toast.Icon.displayName = 'Toast.Icon'
Toast.Label.displayName = 'Toast.Label'
Toast.Title.displayName = 'Toast.Title'
Toast.displayName = 'Toast'

export default Toast
