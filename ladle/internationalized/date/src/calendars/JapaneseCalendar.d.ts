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
import { Mutable } from '../utils';
import { GregorianCalendar } from './GregorianCalendar';
/**
 * The Japanese calendar is based on the Gregorian calendar, but with eras for the reign of each Japanese emperor.
 * Whenever a new emperor ascends to the throne, a new era begins and the year starts again from 1.
 * Note that eras before 1868 (Gregorian) are not currently supported by this implementation.
 */
export declare class JapaneseCalendar extends GregorianCalendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    balanceDate(date: Mutable<AnyCalendarDate>): void;
    constrainDate(date: Mutable<AnyCalendarDate>): void;
    getEras(): string[];
    getYearsInEra(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getMinimumMonthInYear(date: AnyCalendarDate): number;
    getMinimumDayInMonth(date: AnyCalendarDate): number;
}
