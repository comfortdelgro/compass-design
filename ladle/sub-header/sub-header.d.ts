import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import SubHeaderBody from './sub-header-body';
import SubHeaderDescription from './sub-header-description';
import SubHeaderHeader from './sub-header-header';
import SubHeaderImage from './sub-header-image';
import SubHeaderTitle from './sub-header-title';
interface Props {
    children: React.ReactNode;
    variant?: 'default' | 'h5';
    css?: CSS;
    className?: string;
}
export type SubHeaderProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Title: typeof SubHeaderTitle;
    Header: typeof SubHeaderHeader;
    Description: typeof SubHeaderDescription;
    Image: typeof SubHeaderImage;
    Body: typeof SubHeaderBody;
};
export default _default;
