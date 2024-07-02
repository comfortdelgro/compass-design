import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DropdownItemKey } from './multiple-dropdown-context';
import { MultipleDropdownItemProps } from './multiple-dropdown-item';
/**
 * Get text in Element
 * @param elem React.ReactElement
 * @returns string
 */
export declare function textContent(elem: React.ReactElement<MultipleDropdownItemProps> | string): string;
/**
 * Get previous dropdown item
 * @param key current key
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export declare const getItemAbove: (key: string | number, children?: React.ReactNode, dropdownItemKeys?: DropdownItemKey[]) => React.ReactElement<import("./multiple-dropdown-item").StyledMultipleDropdownItemProps, string | React.JSXElementConstructor<any>>;
/**
 * Get next dropdown item
 * @param key current key
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export declare const getItemBelow: (key: string | number, children?: React.ReactNode, dropdownItemKeys?: DropdownItemKey[]) => React.ReactElement<import("./multiple-dropdown-item").StyledMultipleDropdownItemProps, string | React.JSXElementConstructor<any>>;
/**
 * Get first Dropdown.Item in children
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export declare const getFirstItem: (children?: React.ReactNode, dropdownItemKeys?: DropdownItemKey[]) => React.ReactElement<import("./multiple-dropdown-item").StyledMultipleDropdownItemProps, string | React.JSXElementConstructor<any>>;
/**
 * Get last Dropdown.Item in children
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export declare const getLastItem: (children?: React.ReactNode, dropdownItemKeys?: DropdownItemKey[]) => React.ReactElement<import("./multiple-dropdown-item").StyledMultipleDropdownItemProps, string | React.JSXElementConstructor<any>>;
/**
 * Get Dropdown.Item element in children by key
 * @param key current key
 * @param children All Dropdown.Item elements
 */
export declare const getItemByKey: (key: string | number, children?: React.ReactNode) => React.ReactElement<import("./multiple-dropdown-item").StyledMultipleDropdownItemProps, string | React.JSXElementConstructor<any>>;
export declare const getDistanceBetweenElements: (a: HTMLDivElement, b: HTMLDivElement) => number;
