import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export interface DropdownMenuContextType {
    open: boolean;
    setOpen: (value: boolean) => void;
    itemIds: string[];
    setItemIds: React.Dispatch<React.SetStateAction<string[]>>;
    refs?: React.MutableRefObject<Array<React.RefObject<HTMLLIElement>>>;
    onClose?: (() => void) | undefined;
    onOpenChange?: ((status: boolean) => void) | undefined;
}
declare const DropdownMenuContext: React.Context<DropdownMenuContextType>;
export default DropdownMenuContext;
