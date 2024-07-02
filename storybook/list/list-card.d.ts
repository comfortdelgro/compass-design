import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import ListCardDetail from './list-card-detail';
interface Props {
    css?: CSS;
    title?: string;
    isDisabled?: boolean;
    description?: string;
    badge?: React.ReactNode;
    showActionButton?: boolean;
}
export type ListCardProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Detail: typeof ListCardDetail;
};
export default _default;
