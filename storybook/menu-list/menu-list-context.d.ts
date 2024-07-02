import React, { HTMLAttributes } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export interface MenuListContextValue extends HTMLAttributes<HTMLElement> {
    isOpen?: boolean;
    toggleOpen?: () => void;
}
export declare const MenuListContext: React.Context<MenuListContextValue>;
