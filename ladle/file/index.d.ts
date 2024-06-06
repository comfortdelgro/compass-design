import FilePreview from './preview';
import FileState from './state';
export type { FilePreviewProps } from './preview';
export type { FileStateProps } from './state';
interface ComposableFile {
    State: typeof FileState;
    Preview: typeof FilePreview;
}
declare const File: ComposableFile;
export default File;
