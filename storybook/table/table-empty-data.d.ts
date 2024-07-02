import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface Props {
    colSpan: number;
    content?: React.ReactNode;
}
export type TableEmptyDataProps = Props & Omit<React.HTMLAttributes<HTMLTableCellElement>, keyof Props>;
declare const EmptyDataComponent: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLTableCellElement>, keyof Props> & React.RefAttributes<HTMLTableCellElement>>;
export default EmptyDataComponent;
