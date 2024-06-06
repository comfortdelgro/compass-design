import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    title?: string;
    isDisabled?: boolean;
    description?: string;
    avatar?: React.ReactNode;
    variant?: 'item' | 'interactive' | 'h5';
}
export type ListCardDetailProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const ListCardDetail: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default ListCardDetail;
