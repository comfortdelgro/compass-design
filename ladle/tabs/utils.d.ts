import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export type Orientation = 'horizontal' | 'vertical';
export type Icon = 'left' | 'right' | 'top' | 'none';
export type Variant = 'rounded' | 'simple' | 'h5';
export declare function useTab(children: React.ReactNode, defaulValue: React.Key | undefined, value: React.Key | undefined, disabledKeys: React.Key[]): {
    collection: React.DetailedReactHTMLElement<import("./item").Props, HTMLElement>[];
    currentKey: React.Key;
    setCurrentKey: React.Dispatch<React.SetStateAction<React.Key>>;
};
