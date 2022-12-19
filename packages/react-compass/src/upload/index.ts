import Upload from './upload'
import UploadButton from './upload-button'
import UploadIcon from './upload-icon'
import UploadPlaceholder from './upload-placeholder'

export type {UploadProps} from './upload'
export type {UploadButtonProps} from './upload-button'
export type {UploadIconProps} from './upload-icon'
export type {UploadPlaceholderProps} from './upload-placeholder'

Upload.Button = UploadButton
Upload.Placeholder = UploadPlaceholder
Upload.Icon = UploadIcon

Upload.Button.displayName = 'Upload.Button'
Upload.Placeholder.displayName = 'Upload.Placeholder'
Upload.Icon.displayName = 'Upload.Icon'
Upload.displayName = 'Upload'

export default Upload
