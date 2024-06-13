import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
interface Props {
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    placeholder?: string;
    numberOfRows?: number;
    type?: 'heading' | 'color' | 'alignment';
    disabledKeys?: React.Key[];
    children?: React.ReactNode;
    description?: React.ReactNode;
    onBlur?: () => void;
    onFocus?: () => void;
    onLoadMore?: () => void;
    onOpenChange?: (isOpen: boolean) => void;
    selectedKey?: React.Key;
    defaultSelectedKey?: React.Key;
    shouldDeselect?: boolean;
    onSelectionChange?: (key: React.Key) => void;
    css?: CSS;
}
export type DropdownProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Select: any;
export default Select;
