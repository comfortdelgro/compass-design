import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    groupLabel?: React.ReactNode;
    avatar?: React.ReactNode;
    title?: string;
    description?: string;
    variant?: 'default' | 'dropdown';
    showIcon?: boolean;
}
export type InteractiveListProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const InteractiveList: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default InteractiveList;
