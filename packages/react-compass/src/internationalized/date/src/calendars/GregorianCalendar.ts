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
import {Mutable, mod} from '../utils'

const EPOCH = 1721426 // 001/01/03 Julian C.E.
export function gregorianToJulianDay(
  era: string,
  year: number,
  month: number,
  day: number,
): number {
  year = getExtendedYear(era, year)

  const y1 = year - 1
  let monthOffset = -2
  if (month <= 2) {
    monthOffset = 0
  } else if (isLeapYear(year)) {
    monthOffset = -1
  }

  return (
    EPOCH -
    1 +
    365 * y1 +
    Math.floor(y1 / 4) -
    Math.floor(y1 / 100) +
    Math.floor(y1 / 400) +
    Math.floor((367 * month - 362) / 12 + monthOffset + day)
  )
}

export function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

export function getExtendedYear(era: string, year: number): number {
  return era === 'BC' ? 1 - year : year
}

export function fromExtendedYear(year: number): [string, number] {
  let era = 'AD'
  if (year <= 0) {
    era = 'BC'
    year = 1 - year
  }

  return [era, year]
}

const daysInMonth = {
  standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
}

/**
 * The Gregorian calendar is the most commonly used calendar system in the world. It supports two eras: BC, and AD.
 * Years always contain 12 months, and 365 or 366 days depending on whether it is a leap year.
 */
export class GregorianCalendar implements Calendar {
  identifier = 'gregory'

  fromJulianDay(jd: number): CalendarDate {
    const jd0 = jd
    const depoch = jd0 - EPOCH
    const quadricent = Math.floor(depoch / 146097)
    const dqc = mod(depoch, 146097)
    const cent = Math.floor(dqc / 36524)
    const dcent = mod(dqc, 36524)
    const quad = Math.floor(dcent / 1461)
    const dquad = mod(dcent, 1461)
    const yindex = Math.floor(dquad / 365)

    const extendedYear =
      quadricent * 400 +
      cent * 100 +
      quad * 4 +
      yindex +
      (cent !== 4 && yindex !== 4 ? 1 : 0)
    const [era, year] = fromExtendedYear(extendedYear)
    const yearDay = jd0 - gregorianToJulianDay(era, year, 1, 1)
    let leapAdj = 2
    if (jd0 < gregorianToJulianDay(era, year, 3, 1)) {
      leapAdj = 0
    } else if (isLeapYear(year)) {
      leapAdj = 1
    }
    const month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367)
    const day = jd0 - gregorianToJulianDay(era, year, month, 1) + 1

    return new CalendarDate(era, year, month, day)
  }

  toJulianDay(date: AnyCalendarDate): number {
    return gregorianToJulianDay(date.era, date.year, date.month, date.day)
  }

  getDaysInMonth(date: AnyCalendarDate): number {
    return daysInMonth[isLeapYear(date.year) ? 'leapyear' : 'standard'][
      date.month - 1
    ] as number
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(_date: AnyCalendarDate): number {
    return 12
  }

  getDaysInYear(date: AnyCalendarDate): number {
    return isLeapYear(date.year) ? 366 : 365
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(date: AnyCalendarDate): number {
    return 9999
  }

  getEras() {
    return ['BC', 'AD']
  }

  isInverseEra(date: AnyCalendarDate): boolean {
    return date.era === 'BC'
  }

  balanceDate(date: Mutable<AnyCalendarDate>) {
    if (date.year <= 0) {
      date.era = date.era === 'BC' ? 'AD' : 'BC'
      date.year = 1 - date.year
    }
  }
}
