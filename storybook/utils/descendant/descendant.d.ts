/**
 * This file contains code adapted from the Chakra UI project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
export type DescendantOptions<T = object> = T & {
    /**
     * If `true`, the item will be registered in all nodes map
     * but omitted from enabled nodes map
     */
    disabled?: boolean;
    /**
     * The id of the item
     */
    id?: string;
};
export type Descendant<T, K> = DescendantOptions<K> & {
    /**
     * DOM element of the item
     */
    node: T;
    /**
     * index of item in all nodes map and enabled nodes map
     */
    index: number;
};
/**
 * @internal
 *
 * Class to manage descendants and their relative indices in the DOM.
 * It uses `node.compareDocumentPosition(...)` under the hood
 */
export declare class DescendantsManager<T extends HTMLElement, K extends Record<string, any> = object> {
    private descendants;
    register: (nodeOrOptions: T | null | DescendantOptions<K>) => void | ((node: T | null) => void);
    unregister: (node: T) => void;
    destroy: () => void;
    private assignIndex;
    count: () => number;
    enabledCount: () => number;
    values: () => Descendant<T, K>[];
    enabledValues: () => Descendant<T, K>[];
    item: (index: number) => Descendant<T, K>;
    enabledItem: (index: number) => Descendant<T, K>;
    first: () => Descendant<T, K>;
    firstEnabled: () => Descendant<T, K>;
    last: () => Descendant<T, K>;
    lastEnabled: () => Descendant<T, K>;
    indexOf: (node: T | null) => number;
    enabledIndexOf: (node: T | null) => number;
    next: (index: number, loop?: boolean) => Descendant<T, K>;
    nextEnabled: (index: number, loop?: boolean) => Descendant<T, K>;
    prev: (index: number, loop?: boolean) => Descendant<T, K>;
    prevEnabled: (index: number, loop?: boolean) => Descendant<T, K>;
    private registerNode;
}
