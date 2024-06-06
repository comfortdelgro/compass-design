import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    options?: string[];
    onSelect?: (selectedValue: string) => unknown;
    onSearch?: (value: string) => unknown;
    searchedValue?: string;
    notFoundContent?: string;
    debounce?: number;
    css?: CSS;
    onLoadMore?: () => unknown;
    isLoadingMore?: boolean;
}
export type AutoCompleteProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const AutoComplete: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default AutoComplete;
