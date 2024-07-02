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
/**
 * The Islamic calendar, also known as the "Hijri" calendar, is used throughout much of the Arab world.
 * The civil variant uses simple arithmetic rules rather than astronomical calculations to approximate
 * the traditional calendar, which is based on sighting of the crescent moon. It uses Friday, July 16 622 CE (Julian) as the epoch.
 * Each year has 12 months, with either 354 or 355 days depending on whether it is a leap year.
 * Learn more about the available Islamic calendars [here](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types).
 */
export declare class IslamicCivilCalendar implements Calendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getMonthsInYear(): number;
    getDaysInYear(date: AnyCalendarDate): number;
    getYearsInEra(): number;
    getEras(): string[];
}
/**
 * The Islamic calendar, also known as the "Hijri" calendar, is used throughout much of the Arab world.
 * The tabular variant uses simple arithmetic rules rather than astronomical calculations to approximate
 * the traditional calendar, which is based on sighting of the crescent moon. It uses Thursday, July 15 622 CE (Julian) as the epoch.
 * Each year has 12 months, with either 354 or 355 days depending on whether it is a leap year.
 * Learn more about the available Islamic calendars [here](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types).
 */
export declare class IslamicTabularCalendar extends IslamicCivilCalendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
}
/**
 * The Islamic calendar, also known as the "Hijri" calendar, is used throughout much of the Arab world.
 * The Umalqura variant is primarily used in Saudi Arabia. It is a lunar calendar, based on astronomical
 * calculations that predict the sighting of a crescent moon. Month and year lengths vary between years
 * depending on these calculations.
 * Learn more about the available Islamic calendars [here](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types).
 */
export declare class IslamicUmalquraCalendar extends IslamicCivilCalendar {
    identifier: string;
    constructor();
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getDaysInYear(date: AnyCalendarDate): number;
}
