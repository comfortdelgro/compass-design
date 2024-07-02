import { ReactNode } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export interface SelectedItemDropdown {
    value: string;
    displayValue: ReactNode;
}
export interface DropdownItemKey {
    value: string | number;
    visibility: boolean;
}
export interface MultipleDropdownContextType {
    isLoadingMore: boolean;
    isPositioned: boolean;
    open: boolean;
    searchValue: string;
    disabledKeys?: Array<string | number>;
    selectedItems: SelectedItemDropdown[];
    focusKey?: string | number;
    selectedKeys?: Array<string | number>;
    defaultSelectedKeys?: Array<string | number>;
    dropdownItemKeys?: DropdownItemKey[];
    setDropdownItemKeys?: React.Dispatch<React.SetStateAction<DropdownItemKey[]>>;
    setSelectedItems: React.Dispatch<React.SetStateAction<SelectedItemDropdown[]>>;
    onItemClick: (item: SelectedItemDropdown) => void;
    onSectionClick: (items: SelectedItemDropdown[], checking: boolean, id: number | string, index: number) => void;
    selectedSectionIndexes: number[];
    setSelectedSectionIndexes: React.Dispatch<React.SetStateAction<number[]>>;
    labelId: string;
    onHeaderClick: () => void;
}
export declare const MultipleDropdownContext: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').Context<MultipleDropdownContextType>;
