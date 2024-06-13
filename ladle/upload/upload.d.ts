import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import UploadDragAndDrop from './upload-drag-and-drop';
interface Props {
    children?: React.ReactNode;
    isDisabled?: boolean;
    getFile?: (selectedFiles: File[]) => void;
    accept?: string;
    fileSizeLimit?: number;
    multiple?: boolean;
    placeholder?: string;
    helperText?: React.ReactNode;
    isRequired?: boolean;
    label?: string;
    onError?: (error: string) => void;
    customErrorMessages?: React.ReactNode;
    css?: CSS;
}
export type UploadProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    DragAndDrop: typeof UploadDragAndDrop;
};
export default _default;
