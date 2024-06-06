import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
type Props = {
    css?: CSS;
};
export type CardImageProps = Props & Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>;
declare const CardImage: React.ForwardRefExoticComponent<Props & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "css"> & React.RefAttributes<HTMLImageElement>>;
export default CardImage;
