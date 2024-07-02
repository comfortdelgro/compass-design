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
 * The Taiwanese calendar is the same as the Gregorian calendar, but years
 * are numbered starting from 1912 (Gregorian). Two eras are supported:
 * 'before_minguo' and 'minguo'.
 */
export declare class TaiwanCalendar extends GregorianCalendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getEras(): string[];
    balanceDate(date: Mutable<AnyCalendarDate>): void;
    isInverseEra(date: AnyCalendarDate): boolean;
    getDaysInMonth(date: AnyCalendarDate): number;
    getYearsInEra(date: AnyCalendarDate): number;
}
