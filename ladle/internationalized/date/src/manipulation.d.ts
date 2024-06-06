/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { CalendarDate, CalendarDateTime, Time, ZonedDateTime } from './CalendarDate';
import { AnyCalendarDate, AnyTime, CycleOptions, CycleTimeOptions, DateDuration, DateField, DateFields, DateTimeDuration, Disambiguation, TimeDuration, TimeField, TimeFields } from './types';
import { Mutable } from './utils';
export declare function add(date: CalendarDateTime, duration: DateTimeDuration): CalendarDateTime;
export declare function add(date: CalendarDate, duration: DateDuration): CalendarDate;
export declare function add(date: CalendarDate | CalendarDateTime, duration: DateTimeDuration): CalendarDate | CalendarDateTime;
export declare function constrain(date: Mutable<AnyCalendarDate>): void;
export declare function invertDuration(duration: DateTimeDuration): DateTimeDuration;
export declare function subtract(date: CalendarDateTime, duration: DateTimeDuration): CalendarDateTime;
export declare function subtract(date: CalendarDate, duration: DateDuration): CalendarDate;
export declare function set(date: CalendarDateTime, fields: DateFields): CalendarDateTime;
export declare function set(date: CalendarDate, fields: DateFields): CalendarDate;
export declare function setTime(value: CalendarDateTime, fields: TimeFields): CalendarDateTime;
export declare function setTime(value: Time, fields: TimeFields): Time;
export declare function constrainTime(time: Mutable<AnyTime>): void;
export declare function addTime(time: Time, duration: TimeDuration): Time;
export declare function subtractTime(time: Time, duration: TimeDuration): Time;
export declare function cycleDate(value: CalendarDateTime, field: DateField, amount: number, options?: CycleOptions): CalendarDateTime;
export declare function cycleDate(value: CalendarDate, field: DateField, amount: number, options?: CycleOptions): CalendarDate;
export declare function cycleTime(value: CalendarDateTime, field: TimeField, amount: number, options?: CycleTimeOptions): CalendarDateTime;
export declare function cycleTime(value: Time, field: TimeField, amount: number, options?: CycleTimeOptions): Time;
export declare function addZoned(dateTime: ZonedDateTime, duration: DateTimeDuration): ZonedDateTime;
export declare function subtractZoned(dateTime: ZonedDateTime, duration: DateTimeDuration): ZonedDateTime;
export declare function cycleZoned(dateTime: ZonedDateTime, field: DateField | TimeField, amount: number, options?: CycleTimeOptions): ZonedDateTime;
export declare function setZoned(dateTime: ZonedDateTime, fields: DateFields & TimeFields, disambiguation?: Disambiguation): ZonedDateTime;
