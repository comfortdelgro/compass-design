import { Cell, ColumnMeta, RowData } from '@tanstack/react-table';
import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
interface CellProps {
    getValue: () => unknown;
    cell: Cell<unknown, unknown>;
    row: number;
    column: string;
    css?: CSS;
}
export interface CellMetaProps<TData extends RowData, TValue> extends ColumnMeta<TData, TValue> {
    editable?: boolean;
    template?: React.ReactNode;
    updateData?: (index: number, id: string, value: unknown) => void;
    revertData?: (rowIndex: number) => void;
}
export type EditableCellProps = CellProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof CellProps>;
export declare const EditableCellContextProvider: ({ children, value, }: {
    value: EditableCellContextType;
    children: React.ReactNode;
}) => JSX.Element, useEditableCellContext: () => EditableCellContextType;
export type EditableCellContextType = {
    finishTemplateEditing: (data: unknown) => void;
    cancelTemplateEditing: () => void;
    initialValue: unknown;
    cell: Cell<unknown, unknown>;
    row: number;
    column: string;
};
export declare const EditableCell: React.FC<EditableCellProps>;
export {};
