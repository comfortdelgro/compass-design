/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { DOMAttributes, InputBase, RangeInputBase, Validation, ValueBase } from '../types';
export interface KeysPressProps extends InputBase, Validation, ValueBase<number>, RangeInputBase<number> {
    textValue?: string;
    onIncrement?: () => void;
    onDecrement?: () => void;
    onIncrementPage?: () => void;
    onDecrementPage?: () => void;
    onDecrementToMin?: () => void;
    onIncrementToMax?: () => void;
}
export declare function useKeysPress(props: KeysPressProps): DOMAttributes;
