import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children: React.ReactNode;
    expand?: boolean;
    delay?: number;
    css?: CSS;
    className?: string;
    onExpandChange?: (expand: boolean) => void;
}
export type SidenavProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Sidenav: any;
export default Sidenav;
