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
import {AnyCalendarDate} from '../types'
import {
  fromExtendedYear,
  getExtendedYear,
  GregorianCalendar,
} from './GregorianCalendar'

const BUDDHIST_ERA_START = -543

/**
 * The Buddhist calendar is the same as the Gregorian calendar, but counts years
 * starting from the birth of Buddha in 543 BC (Gregorian). It supports only one
 * era, identified as 'BE'.
 */
export class BuddhistCalendar extends GregorianCalendar {
  override identifier = 'buddhist'

  override fromJulianDay(jd: number): CalendarDate {
    const gregorianDate = super.fromJulianDay(jd)
    const year = getExtendedYear(gregorianDate.era, gregorianDate.year)
    return new CalendarDate(
      this,
      year - BUDDHIST_ERA_START,
      gregorianDate.month,
      gregorianDate.day,
    )
  }

  override toJulianDay(date: AnyCalendarDate) {
    return super.toJulianDay(toGregorian(date))
  }

  override getEras() {
    return ['BE']
  }

  override getDaysInMonth(date: AnyCalendarDate): number {
    return super.getDaysInMonth(toGregorian(date))
  }

  override balanceDate() {}
}

function toGregorian(date: AnyCalendarDate) {
  const [era, year] = fromExtendedYear(date.year + BUDDHIST_ERA_START)
  return new CalendarDate(era, year, date.month, date.day)
}
