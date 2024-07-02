import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export type RowsCountingProps = React.HTMLAttributes<HTMLDivElement>;
declare const RowsCounting: React.FC<{
    rowsPerPage: number;
    rowsOptions: number[];
    onRowsPerPageChange: (newValue: number) => void | undefined;
}>;
export default RowsCounting;
