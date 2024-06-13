import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    css?: CSS;
}
export type DashboardSidecardProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const DashboardSidecard: any;
export default DashboardSidecard;
