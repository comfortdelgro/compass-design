/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { MutableRefObject, RefObject } from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface ContextValue<T> {
    ref?: MutableRefObject<T>;
}
export declare function useSyncRef<T>(context: ContextValue<T>, ref: RefObject<T>): void;
export {};
