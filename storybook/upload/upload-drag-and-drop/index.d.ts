import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    getFile?: (selectedFiles: File[]) => void;
    accept?: string;
    fileSizeLimit?: number;
    multiple?: boolean;
    helperText?: React.ReactNode;
    isRequired?: boolean;
    label?: string;
    isDisabled?: boolean;
    onError?: (error: string) => void;
    customErrorMessages?: React.ReactNode;
    css?: CSS;
    variant?: 'area' | 'field';
}
export type UploadDragAndDropProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const UploadDragAndDrop: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default UploadDragAndDrop;
