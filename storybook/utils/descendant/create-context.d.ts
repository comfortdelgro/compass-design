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
export interface CreateContextOptions<T> {
    strict?: boolean;
    hookName?: string;
    providerName?: string;
    errorMessage?: string;
    name?: string;
    defaultValue?: T;
}
export type CreateContextReturn<T> = [
    React.Provider<T>,
    () => T,
    React.Context<T>
];
export declare function createContext<T>(options?: CreateContextOptions<T>): CreateContextReturn<T>;
