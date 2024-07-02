import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils';
interface Props {
    css?: CSS;
}
export type BannerLeftProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const BannerLeft: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, "css"> & React.RefAttributes<HTMLDivElement>>;
export default BannerLeft;
