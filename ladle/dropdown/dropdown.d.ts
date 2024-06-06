import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import DropdownItem from './dropdown-item';
import DropdownHeader from './dropdown.header';
import { CSS } from '../utils/objectToCss';
import DropdownComboBox from './dropdown.combobox';
import DropdownSection from './dropdown.section';
import DropdownSelect from './dropdown.select';
export interface Props {
    defaultOpen?: boolean;
    selectedKey?: string | number;
    defaultSelectedKey?: string | number;
    value?: string | number;
    defaultValue?: string | number;
    shouldDeselect?: boolean;
    allowsCustomValue?: boolean;
    type?: 'select' | 'combobox';
    prefix?: React.ReactNode;
    icon?: React.ReactNode;
    label?: React.ReactNode;
    isLoading?: boolean;
    autoFocus?: boolean;
    isErrored?: boolean;
    helperText?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    placeholder?: string;
    errorMessage?: string;
    numberOfRows?: number;
    disabledKeys?: string[] | number[];
    disabledValues?: string[] | number[];
    children?: React.ReactNode;
    description?: React.ReactNode;
    disableClearable?: boolean;
    noDataMessage?: string;
    isCloseOnSelect?: boolean;
    isLoadingMore?: boolean;
    popoverCSS?: React.CSSProperties;
    css?: CSS;
    inputRef?: React.RefObject<HTMLInputElement>;
    buttonRef?: React.RefObject<HTMLButtonElement>;
    disabledAutofill?: boolean;
    onBlur?: (event: React.FocusEvent) => void;
    onFocus?: () => void;
    onLoadMore?: () => void;
    onOpenChange?: (isOpen: boolean) => void;
    onSelectionChange?: (key: string | number) => void;
    onValueChange?: (key: string | number) => void;
    h5?: boolean;
    isFloatingPortal?: boolean;
}
export declare const Icon: () => JSX.Element;
export type DropdownProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    ComboBox: typeof DropdownComboBox;
    Select: typeof DropdownSelect;
    Item: typeof DropdownItem;
    Section: typeof DropdownSection;
    Header: typeof DropdownHeader;
};
export default _default;