import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children: React.ReactNode;
    css?: CSS;
    className?: string;
}
export type SubHeaderBodyProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const SubHeaderBody: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default SubHeaderBody;
