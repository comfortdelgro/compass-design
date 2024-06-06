import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    children: React.ReactNode;
}
export type PageHeaderTitleProps = Props & Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>;
declare const PageHeaderTitle: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default PageHeaderTitle;
