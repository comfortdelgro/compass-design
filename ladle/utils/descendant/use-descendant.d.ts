/**
 * This file contains code adapted from the Chakra UI project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
/// <reference types="react" />
import { DescendantOptions, DescendantsManager } from './descendant';
export type ReactRef<T> = React.RefCallback<T> | React.MutableRefObject<T>;
export declare function assignRef<T = any>(ref: ReactRef<T> | null | undefined, value: T): void;
export declare function mergeRefs<T>(...refs: Array<ReactRef<T> | null | undefined>): (node: T | null) => void;
/**
 * @internal
 * React hook that initializes the DescendantsManager
 */
declare function useDescendants<T extends HTMLElement = HTMLElement, K extends Record<string, any> = object>(): DescendantsManager<T, K>;
export type UseDescendantsReturn = ReturnType<typeof useDescendants>;
export declare function createDescendantContext<T extends HTMLElement = HTMLElement, K extends Record<string, any> = object>(): readonly [import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').Provider<DescendantsManager<T, K>>, () => DescendantsManager<T, K>, () => DescendantsManager<T, K>, (options?: DescendantOptions<K>) => {
    descendants: DescendantsManager<HTMLElement, Record<string, any>>;
    index: number;
    enabledIndex: number;
    register: (node: T) => void;
}];
export {};
