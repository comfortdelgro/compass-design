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
import {Mutable} from '../utils'
import {
  fromExtendedYear,
  getExtendedYear,
  GregorianCalendar,
} from './GregorianCalendar'

const TAIWAN_ERA_START = 1911

function gregorianYear(date: AnyCalendarDate) {
  return date.era === 'minguo'
    ? date.year + TAIWAN_ERA_START
    : 1 - date.year + TAIWAN_ERA_START
}

function gregorianToTaiwan(year: number): [string, number] {
  const y = year - TAIWAN_ERA_START
  if (y > 0) {
    return ['minguo', y]
  } else {
    return ['before_minguo', 1 - y]
  }
}

/**
 * The Taiwanese calendar is the same as the Gregorian calendar, but years
 * are numbered starting from 1912 (Gregorian). Two eras are supported:
 * 'before_minguo' and 'minguo'.
 */
export class TaiwanCalendar extends GregorianCalendar {
  override identifier = 'roc' // Republic of China

  override fromJulianDay(jd: number): CalendarDate {
    const date = super.fromJulianDay(jd)
    const extendedYear = getExtendedYear(date.era, date.year)
    const [era, year] = gregorianToTaiwan(extendedYear)
    return new CalendarDate(this, era, year, date.month, date.day)
  }

  override toJulianDay(date: AnyCalendarDate) {
    return super.toJulianDay(toGregorian(date))
  }

  override getEras() {
    return ['before_minguo', 'minguo']
  }

  override balanceDate(date: Mutable<AnyCalendarDate>) {
    const [era, year] = gregorianToTaiwan(gregorianYear(date))
    date.era = era
    date.year = year
  }

  override isInverseEra(date: AnyCalendarDate): boolean {
    return date.era === 'before_minguo'
  }

  override getDaysInMonth(date: AnyCalendarDate): number {
    return super.getDaysInMonth(toGregorian(date))
  }

  override getYearsInEra(date: AnyCalendarDate): number {
    return date.era === 'before_minguo' ? 9999 : 9999 - TAIWAN_ERA_START
  }
}

function toGregorian(date: AnyCalendarDate) {
  const [era, year] = fromExtendedYear(gregorianYear(date))
  return new CalendarDate(era, year, date.month, date.day)
}
