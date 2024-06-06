/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { CalendarDate, CalendarDateTime } from './CalendarDate';
export type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
export declare function mod(amount: number, numerator: number): number;
export declare function copy(date: CalendarDate): Mutable<CalendarDate>;
export declare function copyDateTime(date: CalendarDateTime): Mutable<CalendarDateTime>;
