import Error from './error'
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

Error.Action = ErrorAction
Error.Description = ErrorDescription
Error.Icon = ErrorIcon
Error.Image = ErrorImage
Error.Title = ErrorTitle

export default Error
