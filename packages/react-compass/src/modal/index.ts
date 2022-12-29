import Modal from './modal'
import ModalActions from './modal-actions'
import ModalCloseIcon from './modal-closeIcon'
import ModalDescription from './modal-description'
import ModalTitle from './modal-title'
import ModalTrigger from './modal-trigger'

export type {ModalProps} from './modal'
export type {ModalActionsProps} from './modal-actions'
export type {ModalCloseIconProps} from './modal-closeIcon'
export type {ModalDescriptionProps} from './modal-description'
export type {ModalTitleProps} from './modal-title'
export type {ModalTriggerProps} from './modal-trigger'

Modal.Trigger = ModalTrigger
Modal.Title = ModalTitle
Modal.Description = ModalDescription
Modal.Actions = ModalActions
Modal.CloseIcon = ModalCloseIcon

Modal.Trigger.displayName = 'Modal.Trigger'
Modal.Title.displayName = 'Modal.Title'
Modal.Description.displayName = 'Modal.Description'
Modal.Actions.displayName = 'Modal.Actions'
Modal.displayName = 'Modal'

export default Modal
