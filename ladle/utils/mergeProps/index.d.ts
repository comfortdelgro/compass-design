/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
type Props = Record<string, any>;
type PropsArg = Props | null | undefined;
type TupleTypes<T> = {
    [P in keyof T]: T[P];
} extends Record<number, infer V> ? NullToObject<V> : never;
type NullToObject<T> = T extends null | undefined ? {} : T;
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export default function mergeProps<T extends PropsArg[]>(...args: T): UnionToIntersection<TupleTypes<T>>;
export {};
