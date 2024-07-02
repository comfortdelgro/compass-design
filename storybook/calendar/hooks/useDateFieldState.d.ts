/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { Calendar, DateFormatter } from '../../internationalized/date';
import { DatePickerProps, DateSegment, DateValue, FieldOptions, Granularity, SegmentType, ValidationState } from '../types';
export interface DateFieldState {
    value: DateValue;
    dateValue: Date;
    calendar: Calendar;
    setValue(value: DateValue): void;
    segments: DateSegment[];
    dateFormatter: DateFormatter;
    validationState: ValidationState;
    granularity: Granularity;
    maxGranularity: 'year' | 'month' | Granularity;
    isDisabled: boolean;
    isReadOnly: boolean;
    isRequired: boolean;
    increment(type: SegmentType): void;
    decrement(type: SegmentType): void;
    incrementPage(type: SegmentType): void;
    decrementPage(type: SegmentType): void;
    setSegment(type: 'era', value: string): void;
    setSegment(type: SegmentType, value: number): void;
    confirmPlaceholder(): void;
    clearSegment(type: SegmentType): void;
    formatValue(fieldOptions: FieldOptions): string;
}
export interface DateFieldStateOptions<T extends DateValue = DateValue> extends DatePickerProps<T> {
    maxGranularity?: 'year' | 'month' | Granularity;
    locale: string;
    createCalendar: (name: string) => Calendar;
}
export declare function useDateFieldState<T extends DateValue = DateValue>(props: DateFieldStateOptions<T>): DateFieldState;
