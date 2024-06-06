/**
 * This file contains code adapted from the Chakra UI project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { useEffect } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
/**
 * Sort an array of DOM nodes according to the HTML tree order
 * @see http://www.w3.org/TR/html5/infrastructure.html#tree-order
 */
export declare function sortNodes(nodes: Node[]): Node[];
export declare const isElement: (el: any) => el is HTMLElement;
export declare function getNextIndex(current: number, max: number, loop: boolean): number;
export declare function getPrevIndex(current: number, max: number, loop: boolean): number;
export declare const useSafeLayoutEffect: typeof useEffect;
export declare const cast: <T>(value: any) => T;
