/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { Calendar } from '../../internationalized/date';
import { CalendarState, DateValue, RangeCalendarState, ValidationState, ValueBase } from '../types';
interface VisibleDuration {
    months: number;
}
interface CalendarStateProps extends ValueBase<DateValue> {
    locale: string;
    createCalendar: (name: string) => Calendar;
    visibleDuration?: VisibleDuration;
    minValue?: DateValue | null | undefined;
    maxValue?: DateValue | null | undefined;
    focusedValue?: DateValue;
    defaultFocusedValue?: DateValue;
    autoFocus?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isDateUnavailable?: (date: DateValue) => boolean;
    validationState?: ValidationState;
    onChange?: (date: DateValue) => void;
}
export declare const useCalendarState: (props: CalendarStateProps) => CalendarState | RangeCalendarState;
export {};
