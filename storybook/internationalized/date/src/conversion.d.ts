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
import { AnyCalendarDate, AnyDateTime, AnyTime, Calendar, DateFields, Disambiguation, TimeFields } from './types';
export declare function epochFromDate(date: AnyDateTime): number;
export declare function getTimeZoneOffset(ms: number, timeZone: string): number;
export declare function possibleAbsolutes(date: CalendarDateTime, timeZone: string): number[];
export declare function toAbsolute(date: CalendarDate | CalendarDateTime, timeZone: string, disambiguation?: Disambiguation): number;
export declare function toDate(dateTime: CalendarDate | CalendarDateTime, timeZone: string, disambiguation?: Disambiguation): Date;
export declare function fromAbsolute(ms: number, timeZone: string): ZonedDateTime;
export declare function fromDate(date: Date, timeZone: string): ZonedDateTime;
export declare function fromDateToLocal(date: Date): ZonedDateTime;
/** Converts a value with date components such as a `CalendarDateTime` or `ZonedDateTime` into a `CalendarDate`. */
export declare function toCalendarDate(dateTime: AnyCalendarDate): CalendarDate;
export declare function toDateFields(date: AnyCalendarDate): DateFields;
export declare function toTimeFields(date: AnyTime): TimeFields;
/**
 * Converts a date value to a `CalendarDateTime`. An optional `Time` value can be passed to set the time
 * of the resulting value, otherwise it will default to midnight.
 */
export declare function toCalendarDateTime(date: CalendarDate | CalendarDateTime | ZonedDateTime, time?: AnyTime): CalendarDateTime;
/** Extracts the time components from a value containing a date and time. */
export declare function toTime(dateTime: CalendarDateTime | ZonedDateTime): Time;
/** Converts a date from one calendar system to another. */
export declare function toCalendar<T extends AnyCalendarDate>(date: T, calendar: Calendar): T;
/**
 * Converts a date value to a `ZonedDateTime` in the provided time zone. The `disambiguation` option can be set
 * to control how values that fall on daylight saving time changes are interpreted.
 */
export declare function toZoned(date: CalendarDate | CalendarDateTime | ZonedDateTime, timeZone: string, disambiguation?: Disambiguation): ZonedDateTime;
export declare function zonedToDate(date: ZonedDateTime): Date;
/** Converts a `ZonedDateTime` from one time zone to another. */
export declare function toTimeZone(date: ZonedDateTime, timeZone: string): ZonedDateTime;
/** Converts the given `ZonedDateTime` into the user's local time zone. */
export declare function toLocalTimeZone(date: ZonedDateTime): ZonedDateTime;
