import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    className?: string;
}
export type SubHeaderImageProps = Props & Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>;
declare const SubHeaderImage: React.ForwardRefExoticComponent<Props & Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props> & React.RefAttributes<HTMLImageElement>>;
export default SubHeaderImage;