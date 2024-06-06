/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { CalendarDate } from '../../internationalized/date';
import { CalendarState, RangeCalendarState } from '../types';
export interface AriaCalendarGridProps {
    startDate?: CalendarDate;
    endDate?: CalendarDate;
    weekdayStyle?: 'narrow' | 'short' | 'long';
}
export interface CalendarGridAria {
    gridProps: any;
    headerProps: any;
    weekDays: string[];
}
export declare function useCalendarGrid(props: AriaCalendarGridProps, state: CalendarState | RangeCalendarState): CalendarGridAria;
