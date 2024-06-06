import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    searchValue?: string;
    isLoading?: boolean;
    children?: React.ReactNode;
    noDataMessage?: string;
    css?: CSS;
    onLoadMore?: () => void;
}
export type DropdownItemListProps = Props;
declare const MultipleDropdownList: React.FC<DropdownItemListProps>;
export default MultipleDropdownList;
