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
import {Mutable} from '../utils'

const ETHIOPIC_EPOCH = 1723856
const COPTIC_EPOCH = 1824665

// The delta between Amete Alem 1 and Amete Mihret 1
// AA 5501 = AM 1
const AMETE_MIHRET_DELTA = 5500

function ceToJulianDay(
  epoch: number,
  year: number,
  month: number,
  day: number,
): number {
  return (
    epoch + // difference from Julian epoch to 1,1,1
    365 * year + // number of days from years
    Math.floor(year / 4) + // extra day of leap year
    30 * (month - 1) + // number of days from months (1 based)
    day -
    1 // number of days for present month (1 based)
  )
}

function julianDayToCE(epoch: number, jd: number): [number, number, number] {
  const year = Math.floor((4 * (jd - epoch)) / 1461)
  const month = 1 + Math.floor((jd - ceToJulianDay(epoch, year, 1, 1)) / 30)
  const day = jd + 1 - ceToJulianDay(epoch, year, month, 1)
  return [year, month, day]
}

function getLeapDay(year: number) {
  return Math.floor((year % 4) / 3)
}

function getDaysInMonth(year: number, month: number) {
  // The Ethiopian and Coptic calendars have 13 months, 12 of 30 days each and
  // an intercalary month at the end of the year of 5 or 6 days, depending whether
  // the year is a leap year or not. The Leap Year follows the same rules as the
  // Julian Calendar so that the extra month always has six days in the year before
  // a Julian Leap Year.
  if (month % 13 !== 0) {
    // not intercalary month
    return 30
  } else {
    // intercalary month 5 days + possible leap day
    return getLeapDay(year) + 5
  }
}

/**
 * The Ethiopic calendar system is the official calendar used in Ethiopia.
 * It includes 12 months of 30 days each, plus 5 or 6 intercalary days depending
 * on whether it is a leap year. Two eras are supported: 'AA' and 'AM'.
 */
export class EthiopicCalendar implements Calendar {
  identifier = 'ethiopic'

  fromJulianDay(jd: number): CalendarDate {
    // eslint-disable-next-line prefer-const
    let [year, month, day] = julianDayToCE(ETHIOPIC_EPOCH, jd)
    let era = 'AM'
    if (year <= 0) {
      era = 'AA'
      year += AMETE_MIHRET_DELTA
    }

    return new CalendarDate(this, era, year, month, day)
  }

  toJulianDay(date: AnyCalendarDate) {
    let year = date.year
    if (date.era === 'AA') {
      year -= AMETE_MIHRET_DELTA
    }

    return ceToJulianDay(ETHIOPIC_EPOCH, year, date.month, date.day)
  }

  getDaysInMonth(date: AnyCalendarDate): number {
    return getDaysInMonth(date.year, date.month)
  }

  getMonthsInYear(): number {
    return 13
  }

  getDaysInYear(date: AnyCalendarDate): number {
    return 365 + getLeapDay(date.year)
  }

  getYearsInEra(date: AnyCalendarDate): number {
    // 9999-12-31 gregorian is 9992-20-02 ethiopic.
    // Round down to 9991 for the last full year.
    // AA 9999-01-01 ethiopic is 4506-09-30 gregorian.
    return date.era === 'AA' ? 9999 : 9991
  }

  getEras() {
    return ['AA', 'AM']
  }
}

/**
 * The Ethiopic (Amete Alem) calendar is the same as the modern Ethiopic calendar,
 * except years were measured from a different epoch. Only one era is supported: 'AA'.
 */
export class EthiopicAmeteAlemCalendar extends EthiopicCalendar {
  override identifier = 'ethioaa' // also known as 'ethiopic-amete-alem' in ICU

  override fromJulianDay(jd: number): CalendarDate {
    // eslint-disable-next-line prefer-const
    let [year, month, day] = julianDayToCE(ETHIOPIC_EPOCH, jd)
    year += AMETE_MIHRET_DELTA
    return new CalendarDate(this, 'AA', year, month, day)
  }

  override getEras() {
    return ['AA']
  }

  override getYearsInEra(): number {
    // 9999-13-04 ethioaa is the maximum date, which is equivalent to 4506-09-29 gregorian.
    return 9999
  }
}

/**
 * The Coptic calendar is similar to the Ethiopic calendar.
 * It includes 12 months of 30 days each, plus 5 or 6 intercalary days depending
 * on whether it is a leap year. Two eras are supported: 'BCE' and 'CE'.
 */
export class CopticCalendar extends EthiopicCalendar {
  override identifier = 'coptic'

  override fromJulianDay(jd: number): CalendarDate {
    // eslint-disable-next-line prefer-const
    let [year, month, day] = julianDayToCE(COPTIC_EPOCH, jd)
    let era = 'CE'
    if (year <= 0) {
      era = 'BCE'
      year = 1 - year
    }

    return new CalendarDate(this, era, year, month, day)
  }

  override toJulianDay(date: AnyCalendarDate) {
    let year = date.year
    if (date.era === 'BCE') {
      year = 1 - year
    }

    return ceToJulianDay(COPTIC_EPOCH, year, date.month, date.day)
  }

  override getDaysInMonth(date: AnyCalendarDate): number {
    let year = date.year
    if (date.era === 'BCE') {
      year = 1 - year
    }

    return getDaysInMonth(year, date.month)
  }

  isInverseEra(date: AnyCalendarDate): boolean {
    return date.era === 'BCE'
  }

  balanceDate(date: Mutable<AnyCalendarDate>) {
    if (date.year <= 0) {
      date.era = date.era === 'BCE' ? 'CE' : 'BCE'
      date.year = 1 - date.year
    }
  }

  override getEras() {
    return ['BCE', 'CE']
  }

  override getYearsInEra(date: AnyCalendarDate): number {
    // 9999-12-30 gregorian is 9716-02-20 coptic.
    // Round down to 9715 for the last full year.
    // BCE 9999-01-01 coptic is BC 9716-06-15 gregorian.
    return date.era === 'BCE' ? 9999 : 9715
  }
}
