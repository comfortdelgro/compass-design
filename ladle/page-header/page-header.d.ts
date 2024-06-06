import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import PageHeaderDescription from './page-header-description';
import PageHeaderHeader from './page-header-header';
import PageHeaderSubtitle from './page-header-subtitle';
import PageHeaderTitle from './page-header-title';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
    color?: 'white' | 'blue';
}
export type PageHeaderProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Title: typeof PageHeaderTitle;
    Subtitle: typeof PageHeaderSubtitle;
    Header: typeof PageHeaderHeader;
    Description: typeof PageHeaderDescription;
};
export default _default;
