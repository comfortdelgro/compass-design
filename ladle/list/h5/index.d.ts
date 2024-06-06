import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
interface Props {
    css?: CSS;
    isDisabled?: boolean;
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
declare const ListH5: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default ListH5;
