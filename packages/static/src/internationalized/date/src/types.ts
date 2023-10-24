/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {CalendarDate} from './CalendarDate'
export interface DateFields {
  era?: string
  year?: number
  month?: number
  day?: number
}

export interface TimeFields {
  hour?: number
  minute?: number
  second?: number
  millisecond?: number
}

export type DateField = keyof DateFields
export type TimeField = keyof TimeFields
/**
 * The Calendar interface represents a calendar system, including information
 * about how days, months, years, and eras are organized, and methods to perform
 * arithmetic on dates.
 */
export interface Calendar {
  /** A string identifier for the calendar, as defined by Unicode CLDR. */
  identifier: string

  /** Creates a CalendarDate in this calendar from the given Julian day number. */
  fromJulianDay(jd: number): CalendarDate
  /** Converts a date in this calendar to a Julian day number. */
  toJulianDay(date: AnyCalendarDate): number

  /** Returns the number of days in the month of the given date. */
  getDaysInMonth(date: AnyCalendarDate): number
  /** Returns the number of months in the year of the given date. */
  getMonthsInYear(date: AnyCalendarDate): number
  /** Returns the number of years in the era of the given date. */
  getYearsInEra(date: AnyCalendarDate): number
  /** Returns a list of era identifiers for the calendar. */
  getEras(): string[]

  /**
   * Returns the minimum month number of the given date's year.
   * Normally, this is 1, but in some calendars such as the Japanese,
   * eras may begin in the middle of a year.
   */
  getMinimumMonthInYear?(date: AnyCalendarDate): number
  /**
   * Returns the minimum day number of the given date's month.
   * Normally, this is 1, but in some calendars such as the Japanese,
   * eras may begin in the middle of a month.
   */
  getMinimumDayInMonth?(date: AnyCalendarDate): number

  /** @private */
  balanceDate?(date: AnyCalendarDate): void
  /** @private */
  balanceYearMonth?(date: AnyCalendarDate, previousDate: AnyCalendarDate): void
  /** @private */
  constrainDate?(date: AnyCalendarDate): void
  /** @private */
  isInverseEra?(date: AnyCalendarDate): boolean
}
/** An interface that is compatible with any object with date fields. */
export interface AnyCalendarDate {
  readonly calendar: Calendar
  readonly era: string
  readonly year: number
  readonly month: number
  readonly day: number
  copy(): this
}

/** Represents an amount of time in calendar-specific units, for use when performing arithmetic. */
export interface DateDuration {
  /** The number of years to add or subtract. */
  years?: number
  /** The number of months to add or subtract. */
  months?: number
  /** The number of weeks to add or subtract. */
  weeks?: number
  /** The number of days to add or subtract. */
  days?: number
}
export interface CycleTimeOptions extends CycleOptions {
  /**
   * Whether to use 12 or 24 hour time. If 12 hour time is chosen, the resulting value
   * will remain in the same day period as the original value (e.g. if the value is AM,
   * the resulting value also be AM).
   * @default 24
   */
  hourCycle?: 12 | 24
}
export interface CycleOptions {
  /** Whether to round the field value to the nearest interval of the amount. */
  round?: boolean
}

/** Represents an amount of time, for use whe performing arithmetic. */
export interface TimeDuration {
  /** The number of hours to add or subtract. */
  hours?: number
  /** The number of minutes to add or subtract. */
  minutes?: number
  /** The number of seconds to add or subtract. */
  seconds?: number
  /** The number of milliseconds to add or subtract. */
  milliseconds?: number
}
/** Represents an amount of time with both date and time components, for use when performing arithmetic. */
export interface DateTimeDuration extends DateDuration, TimeDuration {}
export type Disambiguation = 'compatible' | 'earlier' | 'later' | 'reject'

/** An interface that is compatible with any object with both date and time fields. */
export interface AnyDateTime extends AnyCalendarDate, AnyTime {}

/** An interface that is compatible with any object with time fields. */
export interface AnyTime {
  readonly hour: number
  readonly minute: number
  readonly second: number
  readonly millisecond: number
  copy(): this
}
