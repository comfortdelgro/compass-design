import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    fileName: string;
    imageIcon?: React.ReactNode;
    onIconPress?: () => void;
    isLoading?: boolean;
    icon?: React.ReactNode;
}
export type FileStateProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const FileState: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default FileState;
