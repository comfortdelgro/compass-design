import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DropdownItemKey } from './dropdown-context';
import { DropdownItemProps } from './dropdown-item';
/**
 * Get text in Element
 * @param elem React.ReactElement
 * @returns string
 */
export declare function textContent(elem: React.ReactElement<DropdownItemProps> | string): string;
/**
 * Get previous dropdown item
 * @param key current key
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export declare const getItemAbove: (key: string | number, children?: React.ReactNode, dropdownItemKeys?: DropdownItemKey[]) => React.ReactElement<DropdownItemProps, string | React.JSXElementConstructor<any>>;
/**
 * Get next dropdown item
 * @param key current key
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export declare const getItemBelow: (key: string | number, children?: React.ReactNode, dropdownItemKeys?: DropdownItemKey[]) => React.ReactElement<DropdownItemProps, string | React.JSXElementConstructor<any>>;
/**
 * Get first Dropdown.Item in children
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export declare const getFirstItem: (children?: React.ReactNode, dropdownItemKeys?: DropdownItemKey[]) => React.ReactElement<DropdownItemProps, string | React.JSXElementConstructor<any>>;
/**
 * Get last Dropdown.Item in children
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export declare const getLastItem: (children?: React.ReactNode, dropdownItemKeys?: DropdownItemKey[]) => React.ReactElement<DropdownItemProps, string | React.JSXElementConstructor<any>>;
/**
 * Get Dropdown.Item element in children by key
 * @param key current key
 * @param children All Dropdown.Item elements
 */
export declare const getItemByKey: (key: string | number, children?: React.ReactNode) => React.ReactElement<DropdownItemProps, string | React.JSXElementConstructor<any>>;
export declare const getDistanceBetweenElements: (a: HTMLDivElement, b: HTMLDivElement) => number;
export declare function getDefaultValue(defaultValue: string[] | number | undefined, value: string | number | undefined, disableDefault?: boolean): string[] | number | undefined;
export interface KeyboardDelegate {
    getKeyBelow?(key: string | number): string | number | null;
    getKeyAbove?(key: string | number): string | number | null;
    getFirstKey?(key?: string | number, global?: boolean): string | number | null;
    getLastKey?(key?: string | number, global?: boolean): string | number | null;
}
export declare class ListKeyboardDelegate implements KeyboardDelegate {
    private collection;
    private disabledKeys;
    constructor(collection: Array<React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>>, disabledKeys: Iterable<string | number>);
    getKeyIndex: (key: string | number) => number;
    private getKeyAfter;
    private getKeyBefore;
    getKeyBelow(key: string | number): string;
    getKeyAbove(key: string | number): string;
    getFirstKey(): string;
    getLastKey(): string;
}
