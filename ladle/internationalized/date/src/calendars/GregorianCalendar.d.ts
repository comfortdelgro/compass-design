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
export declare function gregorianToJulianDay(era: string, year: number, month: number, day: number): number;
export declare function isLeapYear(year: number): boolean;
export declare function getExtendedYear(era: string, year: number): number;
export declare function fromExtendedYear(year: number): [string, number];
/**
 * The Gregorian calendar is the most commonly used calendar system in the world. It supports two eras: BC, and AD.
 * Years always contain 12 months, and 365 or 366 days depending on whether it is a leap year.
 */
export declare class GregorianCalendar implements Calendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getMonthsInYear(_date: AnyCalendarDate): number;
    getDaysInYear(date: AnyCalendarDate): number;
    getYearsInEra(date: AnyCalendarDate): number;
    getEras(): string[];
    isInverseEra(date: AnyCalendarDate): boolean;
    balanceDate(date: Mutable<AnyCalendarDate>): void;
}
