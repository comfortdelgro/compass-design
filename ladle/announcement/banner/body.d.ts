import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils';
interface Props {
    css?: CSS;
    align?: 'left' | 'center' | 'right';
}
export type BannerBodyProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const BannerBody: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default BannerBody;
