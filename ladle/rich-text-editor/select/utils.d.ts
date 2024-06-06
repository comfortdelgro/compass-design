import React, { Key } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DropdownItemProps } from './item';
export declare const Icon: () => JSX.Element;
export declare const pickChilds: <T extends import("./item").Props>(children: React.ReactNode | undefined, targetType: React.ElementType) => React.DetailedReactHTMLElement<T, HTMLElement>[];
export declare function getDefaultValue(defaultValue: React.Key | undefined, value: React.Key | undefined, disableDefault?: boolean): React.Key | undefined;
export interface KeyboardDelegate {
    getKeyBelow?(key: Key): Key | null;
    getKeyAbove?(key: Key): Key | null;
    getFirstKey?(key?: Key, global?: boolean): Key | null;
    getLastKey?(key?: Key, global?: boolean): Key | null;
}
export declare class ListKeyboardDelegate implements KeyboardDelegate {
    private collection;
    private disabledKeys;
    constructor(collection: Array<React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>>, disabledKeys: Iterable<React.Key>);
    getKeyIndex: (key: Key) => number;
    private getKeyAfter;
    private getKeyBefore;
    getKeyBelow(key: Key): string;
    getKeyAbove(key: Key): string;
    getFirstKey(): string;
    getLastKey(): string;
}
