import _Error from './error'
import ErrorAction from './error-action'
import ErrorDescription from './error-description'
import ErrorIcon from './error-icon'
import ErrorImage from './error-image'
import ErrorTitle from './error-title'

export type {ErrorProps} from './error'
export type {ErrorActionProps} from './error-action'
export type {ErrorDescriptionProps} from './error-description'
export type {ErrorIconProps} from './error-icon'
export type {ErrorImageProps} from './error-image'
export type {ErrorTitleProps} from './error-title'

const Error = _Error as typeof _Error & {
  Title: typeof ErrorTitle
  Description: typeof ErrorDescription
  Action: typeof ErrorAction
  Icon: typeof ErrorIcon
  Image: typeof ErrorImage
}

Error.Action = ErrorAction
Error.Description = ErrorDescription
Error.Icon = ErrorIcon
Error.Image = ErrorImage
Error.Title = ErrorTitle

Error.Action.displayName = 'Error.Action'
Error.Description.displayName = 'Error.Description'
Error.Icon.displayName = 'Error.Icon'
Error.Image.displayName = 'Error.Image'
Error.Title.displayName = 'Error.Title'
Error.displayName = 'Error'

export default Error
