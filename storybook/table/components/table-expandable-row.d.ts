import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
interface Props {
    css?: CSS;
    colSpan: number;
    isExpanded: boolean;
}
export type ExpandableRowProps = Props & Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props>;
declare const ExpandableRow: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props> & React.RefAttributes<HTMLTableRowElement>>;
export default ExpandableRow;
