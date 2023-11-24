/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {CalendarDate} from '../CalendarDate'
import {AnyCalendarDate, Calendar} from '../types'
import {mod} from '../utils'

const PERSIAN_EPOCH = 1948321 // 622/03/19 Julian C.E.

function isLeapYear(year: number): boolean {
  const y0 = year > 0 ? year - 474 : year - 473
  const y1 = mod(y0, 2820) + 474

  return mod((y1 + 38) * 31, 128) < 31
}

function persianToJulianDay(year: number, month: number, day: number): number {
  const y0 = year > 0 ? year - 474 : year - 473
  const y1 = mod(y0, 2820) + 474
  const offset = month <= 7 ? 31 * (month - 1) : 30 * (month - 1) + 6

  return (
    PERSIAN_EPOCH -
    1 +
    1029983 * Math.floor(y0 / 2820) +
    365 * (y1 - 1) +
    Math.floor((31 * y1 - 5) / 128) +
    offset +
    day
  )
}

/**
 * The Persian calendar is the main calendar used in Iran and Afghanistan. It has 12 months
 * in each year, the first 6 of which have 31 days, and the next 5 have 30 days. The 12th month
 * has either 29 or 30 days depending on whether it is a leap year. The Persian year starts
 * around the March equinox.
 */
export class PersianCalendar implements Calendar {
  identifier = 'persian'

  fromJulianDay(jd: number): CalendarDate {
    const d0 = jd - persianToJulianDay(475, 1, 1)
    const n2820 = Math.floor(d0 / 1029983)
    const d1 = mod(d0, 1029983)
    const y2820 = d1 === 1029982 ? 2820 : Math.floor((128 * d1 + 46878) / 46751)
    let year = 474 + 2820 * n2820 + y2820
    if (year <= 0) {
      year--
    }

    const yDay = jd - persianToJulianDay(year, 1, 1) + 1
    const month =
      yDay <= 186 ? Math.ceil(yDay / 31) : Math.ceil((yDay - 6) / 31)
    const day = jd - persianToJulianDay(year, month, 1) + 1

    return new CalendarDate(this, year, month, day)
  }

  toJulianDay(date: AnyCalendarDate): number {
    return persianToJulianDay(date.year, date.month, date.day)
  }

  getMonthsInYear(): number {
    return 12
  }

  getDaysInMonth(date: AnyCalendarDate): number {
    if (date.month <= 6) {
      return 31
    }

    if (date.month <= 11) {
      return 30
    }

    return isLeapYear(date.year) ? 30 : 29
  }

  getEras() {
    return ['AP']
  }

  getYearsInEra(): number {
    // 9378-10-10 persian is 9999-12-31 gregorian.
    // Round down to 9377 to set the maximum full year.
    return 9377
  }
}
