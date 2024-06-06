/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { CalendarProps } from '../calendar';
import { AriaLabelingProps, CalendarAria, CalendarState, DOMProps, RangeCalendarState } from '../types';
export declare function useCalendar(props: CalendarProps & DOMProps & AriaLabelingProps, state: CalendarState | RangeCalendarState): CalendarAria;
