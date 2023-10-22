/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {CalendarDate, Time, ZonedDateTime} from './CalendarDate'
import {GregorianCalendar} from './calendars/GregorianCalendar'
import {toCalendar} from './conversion'
import {AnyDateTime} from './types'
import {Mutable} from './utils'

const DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/
export function timeToString(time: Time): string {
  return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(
    2,
    '0',
  )}:${String(time.second).padStart(2, '0')}${
    time.millisecond ? String(time.millisecond / 1000).slice(1) : ''
  }`
}

export function dateToString(date: CalendarDate): string {
  const gregorianDate = toCalendar(date, new GregorianCalendar())
  return `${String(gregorianDate.year).padStart(4, '0')}-${String(
    gregorianDate.month,
  ).padStart(2, '0')}-${String(gregorianDate.day).padStart(2, '0')}`
}

export function dateTimeToString(date: AnyDateTime): string {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return `${dateToString(date)}T${timeToString(date)}`
}

function offsetToString(offset: number) {
  const sign = Math.sign(offset) < 0 ? '-' : '+'
  offset = Math.abs(offset)
  const offsetHours = Math.floor(offset / (60 * 60 * 1000))
  const offsetMinutes = (offset % (60 * 60 * 1000)) / (60 * 1000)
  return `${sign}${String(offsetHours).padStart(2, '0')}:${String(
    offsetMinutes,
  ).padStart(2, '0')}`
}

export function zonedDateTimeToString(date: ZonedDateTime): string {
  return `${dateTimeToString(date)}${offsetToString(date.offset)}[${
    date.timeZone
  }]`
}

/** Parses an ISO 8601 date string, with no time components. */
export function parseDate(value: string): CalendarDate {
  const m = value.match(DATE_RE)
  if (!m) {
    throw new Error('Invalid ISO 8601 date string: ' + value)
  }

  const date: Mutable<CalendarDate> = new CalendarDate(
    parseNumber(m[1] as string, 0, 9999),
    parseNumber(m[2] as string, 1, 12),
    1,
  )

  date.day = parseNumber(m[3] as string, 0, date.calendar.getDaysInMonth(date))
  return date as CalendarDate
}

function parseNumber(value: string, min: number, max: number) {
  const val = Number(value)
  if (val < min || val > max) {
    throw new RangeError(`Value out of range: ${min} <= ${val} <= ${max}`)
  }

  return val
}
