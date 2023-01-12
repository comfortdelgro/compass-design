import Upload from './upload'
import UploadDragAndDrop from './upload-drag-and-drop'

export type {UploadProps} from './upload'
export type {UploadDragAndDropProps} from './upload-drag-and-drop'

Upload.DragAndDrop = UploadDragAndDrop

Upload.DragAndDrop.displayName = 'Upload.DragAndDrop'

Upload.displayName = 'Upload'

export default Upload
