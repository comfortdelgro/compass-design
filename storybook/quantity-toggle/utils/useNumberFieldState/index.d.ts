/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { NumberFieldProps } from '../types';
export interface NumberFieldState {
    minValue: number;
    maxValue: number;
    inputValue: string;
    numberValue: number;
    canIncrement: boolean;
    canDecrement: boolean;
    commit(): void;
    increment(): void;
    decrement(): void;
    decrementToMin(): void;
    incrementToMax(): void;
    setInputValue(val: string): void;
    validate(value: string): boolean;
}
export interface NumberFieldStateOptions extends NumberFieldProps {
    locale?: string;
}
export default function useNumberFieldState(props: NumberFieldStateOptions): NumberFieldState;
