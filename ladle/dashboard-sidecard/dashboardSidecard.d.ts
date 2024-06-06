import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import DashboardSidecardContent from './dashboardSidecardContent';
import DashboardSidecardHeader from './dashboardSidecardHeader';
interface Props {
    children?: React.ReactNode;
    css?: CSS;
}
export type DashboardSidecardProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Header: typeof DashboardSidecardHeader;
    Content: typeof DashboardSidecardContent;
};
export default _default;
