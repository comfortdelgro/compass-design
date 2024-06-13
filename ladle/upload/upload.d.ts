import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
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
declare const Upload: any;
export default Upload;
