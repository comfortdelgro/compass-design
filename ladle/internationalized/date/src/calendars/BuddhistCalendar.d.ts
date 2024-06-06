/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { CalendarDate } from '../CalendarDate';
import { AnyCalendarDate } from '../types';
import { GregorianCalendar } from './GregorianCalendar';
/**
 * The Buddhist calendar is the same as the Gregorian calendar, but counts years
 * starting from the birth of Buddha in 543 BC (Gregorian). It supports only one
 * era, identified as 'BE'.
 */
export declare class BuddhistCalendar extends GregorianCalendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getEras(): string[];
    getDaysInMonth(date: AnyCalendarDate): number;
    balanceDate(): void;
}
