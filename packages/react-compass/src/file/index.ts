import FilePreview from './preview'
import FileState from './state'

export type {FilePreviewProps} from './preview'
export type {FileStateProps} from './state'

// Aliases
interface ComposableFile {
  State: typeof FileState
  Preview: typeof FilePreview
}
const File: ComposableFile = {
  State: FileState,
  Preview: FilePreview,
}

File.State.displayName = 'File.State'
File.Preview.displayName = 'File.Preview'

export default File
