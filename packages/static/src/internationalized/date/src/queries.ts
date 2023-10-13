/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {CalendarDate, CalendarDateTime, ZonedDateTime} from './CalendarDate'
import {fromAbsolute, toCalendar, toCalendarDate} from './conversion'
import {AnyCalendarDate, AnyTime} from './types'
import {weekStartData} from './weekStartData'

let localTimeZone: string | null = null
export type DateValue = CalendarDate | CalendarDateTime | ZonedDateTime

const WEEKEND_DATA = {
  AF: [4, 5],
  AE: [5, 6],
  BH: [5, 6],
  DZ: [5, 6],
  EG: [5, 6],
  IL: [5, 6],
  IQ: [5, 6],
  IR: [5, 5],
  JO: [5, 6],
  KW: [5, 6],
  LY: [5, 6],
  OM: [5, 6],
  QA: [5, 6],
  SA: [5, 6],
  SD: [5, 6],
  SY: [5, 6],
  YE: [5, 6],
}

/** Returns the time zone identifier for the current user. */
export function getLocalTimeZone(): string {
  // TODO: invalidate this somehow?
  if (localTimeZone === null) {
    localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone
  }

  return localTimeZone
}

/** Returns whether the given date is on a weekend in the given locale. */
export function isWeekend(date: DateValue, locale: string): boolean {
  const julian = date.calendar.toJulianDay(date)

  // If julian is negative, then julian % 7 will be negative, so we adjust
  // accordingly.  Julian day 0 is Monday.
  let dayOfWeek = Math.ceil(julian + 1) % 7
  if (dayOfWeek < 0) {
    dayOfWeek += 7
  }

  const region = getRegion(locale) as keyof typeof WEEKEND_DATA
  // Use Intl.Locale for this once weekInfo is supported.
  // https://github.com/tc39/proposal-intl-locale-info
  const [start, end] = WEEKEND_DATA[region] || [6, 0]
  return dayOfWeek === start || dayOfWeek === end
}
const cachedRegions = new Map<string, string>()

function getRegion(locale: string) {
  // If the Intl.Locale API is available, use it to get the region for the locale.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (Intl.Locale) {
    // Constructing an Intl.Locale is expensive, so cache the result.
    let region = cachedRegions.get(locale) as string
    if (!region) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      region = new Intl.Locale(locale).maximize().region
      cachedRegions.set(locale, region)
    }
    return region
  }

  // If not, just try splitting the string.
  // If the second part of the locale string is 'u',
  // then this is a unicode extension, so ignore it.
  // Otherwise, it should be the region.
  const part = locale.split('-')[1]
  return part === 'u' ? null : part
}
function timeToMs(a: AnyTime): number {
  return (
    a.hour * 60 * 60 * 1000 +
    a.minute * 60 * 1000 +
    a.second * 1000 +
    a.millisecond
  )
}
export function compareDate(a: AnyCalendarDate, b: AnyCalendarDate): number {
  return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b)
}

export function compareTime(a: AnyTime, b: AnyTime): number {
  return timeToMs(a) - timeToMs(b)
}

/** Returns the current time in the given time zone. */
export function now(timeZone: string): ZonedDateTime {
  return fromAbsolute(Date.now(), timeZone)
}

/** Returns today's date in the given time zone. */
export function today(timeZone: string): CalendarDate {
  return toCalendarDate(now(timeZone))
}

/** Returns whether the given dates occur on the same day, regardless of the time or calendar system. */
export function isSameDay(a: DateValue, b: DateValue): boolean {
  b = toCalendar(b, a.calendar)
  return (
    a.era === b.era &&
    a.year === b.year &&
    a.month === b.month &&
    a.day === b.day
  )
}
/** Returns whether the given dates occur in the same month, using the calendar system of the first date. */
export function isSameMonth(a: DateValue, b: DateValue): boolean {
  b = toCalendar(b, a.calendar)
  // In the Japanese calendar, months can span multiple eras/years, so only compare the first of the month.
  a = startOfMonth(a)
  b = startOfMonth(b)
  return a.era === b.era && a.year === b.year && a.month === b.month
}
/** Returns the first date of the month for the given date. */
export function startOfMonth(date: ZonedDateTime): ZonedDateTime
export function startOfMonth(date: CalendarDateTime): CalendarDateTime
export function startOfMonth(date: CalendarDate): CalendarDate
export function startOfMonth(date: DateValue): DateValue
export function startOfMonth(date: DateValue): DateValue {
  // Use `subtract` instead of `set` so we don't get constrained in an era.
  return date.subtract({days: date.day - 1})
}

/** Returns the last date of the month for the given date. */
export function endOfMonth(date: ZonedDateTime): ZonedDateTime
export function endOfMonth(date: CalendarDateTime): CalendarDateTime
export function endOfMonth(date: CalendarDate): CalendarDate
export function endOfMonth(date: DateValue): DateValue
export function endOfMonth(date: DateValue): DateValue {
  return date.add({days: date.calendar.getDaysInMonth(date) - date.day})
}

/** Returns the first day of the year for the given date. */
export function startOfYear(date: ZonedDateTime): ZonedDateTime
export function startOfYear(date: CalendarDateTime): CalendarDateTime
export function startOfYear(date: CalendarDate): CalendarDate
export function startOfYear(date: DateValue): DateValue
export function startOfYear(date: DateValue): DateValue {
  return startOfMonth(date.subtract({months: date.month - 1}))
}

/** Returns whether the date is today in the given time zone. */
export function isToday(date: DateValue, timeZone: string): boolean {
  return isSameDay(date, today(timeZone))
}

/** Returns the number of weeks in the given month and locale. */
export function getWeeksInMonth(date: DateValue, locale: string): number {
  const days = date.calendar.getDaysInMonth(date)
  return Math.ceil((getDayOfWeek(startOfMonth(date), locale) + days) / 7)
}

/**
 * Returns the day of week for the given date and locale. Days are numbered from zero to six,
 * where zero is the first day of the week in the given locale. For example, in the United States,
 * the first day of the week is Sunday, but in France it is Monday.
 */
export function getDayOfWeek(date: DateValue, locale: string): number {
  const julian = date.calendar.toJulianDay(date)

  // If julian is negative, then julian % 7 will be negative, so we adjust
  // accordingly.  Julian day 0 is Monday.
  let dayOfWeek = Math.ceil(julian + 1 - getWeekStart(locale)) % 7
  if (dayOfWeek < 0) {
    dayOfWeek += 7
  }

  return dayOfWeek
}

function getWeekStart(locale: string) {
  // TODO: use Intl.Locale for this once browsers support the weekInfo property
  // https://github.com/tc39/proposal-intl-locale-info
  const region = getRegion(locale) as keyof typeof weekStartData
  return weekStartData[region] || 0
}
/** Returns whether the given dates occur on the same day, and are of the same calendar system. */
export function isEqualDay(a: DateValue, b: DateValue): boolean {
  return (
    a.calendar.identifier === b.calendar.identifier &&
    a.era === b.era &&
    a.year === b.year &&
    a.month === b.month &&
    a.day === b.day
  )
}

/** Returns the first date of the week for the given date and locale. */
export function startOfWeek(date: ZonedDateTime, locale: string): ZonedDateTime
export function startOfWeek(
  date: CalendarDateTime,
  locale: string,
): CalendarDateTime
export function startOfWeek(date: CalendarDate, locale: string): CalendarDate
export function startOfWeek(date: DateValue, locale: string): DateValue
export function startOfWeek(date: DateValue, locale: string): DateValue {
  const dayOfWeek = getDayOfWeek(date, locale)
  return date.subtract({days: dayOfWeek})
}

export function getMinimumMonthInYear(date: AnyCalendarDate) {
  if (date.calendar.getMinimumMonthInYear) {
    return date.calendar.getMinimumMonthInYear(date)
  }

  return 1
}

export function getMinimumDayInMonth(date: AnyCalendarDate) {
  if (date.calendar.getMinimumDayInMonth) {
    return date.calendar.getMinimumDayInMonth(date)
  }

  return 1
}

/** Returns the lesser of the two provider dates. */
export function minDate<A extends DateValue, B extends DateValue>(
  a: A,
  b: B,
): A | B {
  if (a && b) {
    return a.compare(b) <= 0 ? a : b
  }

  return a || b
}

/** Returns the greater of the two provider dates. */
export function maxDate<A extends DateValue, B extends DateValue>(
  a: A,
  b: B,
): A | B {
  if (a && b) {
    return a.compare(b) >= 0 ? a : b
  }

  return a || b
}

/** Returns the last date of the week for the given date and locale. */
export function endOfWeek(date: ZonedDateTime, locale: string): ZonedDateTime
export function endOfWeek(
  date: CalendarDateTime,
  locale: string,
): CalendarDateTime
export function endOfWeek(date: CalendarDate, locale: string): CalendarDate
export function endOfWeek(date: DateValue, locale: string): DateValue {
  return startOfWeek(date, locale).add({days: 6})
}

/** Returns the last day of the year for the given date. */
export function endOfYear(date: ZonedDateTime): ZonedDateTime
export function endOfYear(date: CalendarDateTime): CalendarDateTime
export function endOfYear(date: CalendarDate): CalendarDate
export function endOfYear(date: DateValue): DateValue
export function endOfYear(date: DateValue): DateValue {
  return endOfMonth(
    date.add({months: date.calendar.getMonthsInYear(date) - date.month}),
  )
}
