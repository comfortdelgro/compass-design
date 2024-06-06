import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    isRounded?: boolean;
    children?: React.ReactNode;
    variant?: 'item' | 'interactive' | 'h5';
}
export type ListImageProps = Props & Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>;
declare const ListImage: React.ForwardRefExoticComponent<Props & Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props> & React.RefAttributes<HTMLImageElement>>;
export default ListImage;
