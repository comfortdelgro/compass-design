/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { CalendarDate, Time, ZonedDateTime } from './CalendarDate';
import { AnyDateTime } from './types';
export declare function timeToString(time: Time): string;
export declare function dateToString(date: CalendarDate): string;
export declare function dateTimeToString(date: AnyDateTime): string;
export declare function zonedDateTimeToString(date: ZonedDateTime): string;
/** Parses an ISO 8601 date string, with no time components. */
export declare function parseDate(value: string): CalendarDate;
