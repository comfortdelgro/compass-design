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
import { AnyCalendarDate, Calendar } from '../types';
import { Mutable } from '../utils';
/**
 * The Hebrew calendar is used in Israel and around the world by the Jewish faith.
 * Years include either 12 or 13 months depending on whether it is a leap year.
 * In leap years, an extra month is inserted at month 6.
 */
export declare class HebrewCalendar implements Calendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getMonthsInYear(date: AnyCalendarDate): number;
    getDaysInYear(date: AnyCalendarDate): number;
    getYearsInEra(): number;
    getEras(): string[];
    balanceYearMonth(date: Mutable<AnyCalendarDate>, previousDate: AnyCalendarDate): void;
}
