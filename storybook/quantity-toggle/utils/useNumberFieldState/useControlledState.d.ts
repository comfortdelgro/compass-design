/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
export declare function useControlledState<T>(value: T | undefined, defaultValue: T | undefined, onChange: ((value: T, ...args: any[]) => void) | undefined): [T, (value: T, ...args: any[]) => void];
