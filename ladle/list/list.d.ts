import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import ListImage from './list-image';
interface Props {
    css?: CSS;
    variant?: 'item' | 'interactive' | 'h5';
    isDisabled?: boolean;
    size?: 'sm' | 'md';
    leftInfo?: React.ReactNode;
    title?: string;
    description?: string;
    descriptionIcon?: React.ReactNode;
    rightInfo?: {
        text?: string;
        description?: string;
        icon?: React.ReactNode;
    };
    rightContent?: React.ReactNode;
}
export type ListProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Image: typeof ListImage;
};
export default _default;
