import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export interface Props {
    children?: React.ReactNode;
    hasCloseButton?: boolean;
    isErrored?: boolean;
    css?: CSS;
    className?: string;
    tabIndex?: number;
    onClose?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    onCloseClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
declare const Chip: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Chip;
