import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    searchValue?: string;
    isLoading?: boolean;
    children?: React.ReactNode;
    noDataMessage?: string;
    onLoadMore?: () => void;
    css?: CSS;
}
export type DropdownItemListProps = Props;
declare const DropdownList: React.FC<DropdownItemListProps>;
export default DropdownList;
