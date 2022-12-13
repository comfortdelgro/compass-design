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

export default Upload
