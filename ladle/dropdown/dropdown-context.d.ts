import { ReactNode } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export interface SelectedItemDropdown {
    value: string;
    displayValue: ReactNode;
    flagName?: string;
}
export interface DropdownItemKey {
    value: string | number;
    visibility: boolean;
}
export interface DropdownContextType {
    isPositioned: boolean;
    open: boolean;
    isLoadingMore: boolean;
    searchValue: string;
    disabledKeys?: string[] | number[];
    selectedItem: SelectedItemDropdown | null;
    focusKey: string | number | null;
    selectedKey?: string | number;
    defaultSelectedKey?: string | number;
    dropdownItemKeys?: DropdownItemKey[];
    labelId: string;
    disabledAutofill?: boolean;
    setDropdownItemKeys?: React.Dispatch<React.SetStateAction<DropdownItemKey[]>>;
    setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItemDropdown | null>>;
    onItemClick: (item: SelectedItemDropdown) => void;
    onHeaderClick: () => void;
}
export declare const DropdownContext: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').Context<DropdownContextType>;
