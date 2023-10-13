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
import {GregorianCalendar} from './GregorianCalendar'

const ERA_START_DATES: [number, number, number][] = [
  [1868, 9, 8],
  [1912, 7, 30],
  [1926, 12, 25],
  [1989, 1, 8],
  [2019, 5, 1],
]
const ERA_END_DATES: [number, number, number][] = [
  [1912, 7, 29],
  [1926, 12, 24],
  [1989, 1, 7],
  [2019, 4, 30],
]
const ERA_ADDENDS: number[] = [1867, 1911, 1925, 1988, 2018]
const ERA_NAMES: string[] = ['meiji', 'taisho', 'showa', 'heisei', 'reiwa']

function findEraFromGregorianDate(date: AnyCalendarDate) {
  const idx = ERA_START_DATES.findIndex(([year, month, day]) => {
    if (date.year < year) {
      return true
    }

    if (date.year === year && date.month < month) {
      return true
    }

    if (date.year === year && date.month === month && date.day < day) {
      return true
    }

    return false
  })

  if (idx === -1) {
    return ERA_START_DATES.length - 1
  }

  if (idx === 0) {
    return 0
  }

  return idx - 1
}

function toGregorian(date: AnyCalendarDate) {
  const eraAddend = ERA_ADDENDS[ERA_NAMES.indexOf(date.era)]
  if (!eraAddend) {
    throw new Error('Unknown era: ' + date.era)
  }

  return new CalendarDate(date.year + eraAddend, date.month, date.day)
}

/**
 * The Japanese calendar is based on the Gregorian calendar, but with eras for the reign of each Japanese emperor.
 * Whenever a new emperor ascends to the throne, a new era begins and the year starts again from 1.
 * Note that eras before 1868 (Gregorian) are not currently supported by this implementation.
 */
export class JapaneseCalendar extends GregorianCalendar {
  override identifier = 'japanese'

  override fromJulianDay(jd: number): CalendarDate {
    const date = super.fromJulianDay(jd)
    const era = findEraFromGregorianDate(date)

    return new CalendarDate(
      this,
      ERA_NAMES[era] as string,
      date.year - (ERA_ADDENDS[era] as number),
      date.month,
      date.day,
    )
  }

  override toJulianDay(date: AnyCalendarDate) {
    return super.toJulianDay(toGregorian(date))
  }

  override balanceDate(date: Mutable<AnyCalendarDate>) {
    const gregorianDate = toGregorian(date)
    const era = findEraFromGregorianDate(gregorianDate)

    if (ERA_NAMES[era] !== date.era) {
      date.era = ERA_NAMES[era] as string
      date.year = gregorianDate.year - (ERA_ADDENDS[era] as number)
    }

    // Constrain in case we went before the first supported era.
    this.constrainDate(date)
  }

  constrainDate(date: Mutable<AnyCalendarDate>) {
    const idx = ERA_NAMES.indexOf(date.era)
    const end = ERA_END_DATES[idx]
    if (end != null) {
      const [endYear, endMonth, endDay] = end

      // Constrain the year to the maximum possible value in the era.
      // Then constrain the month and day fields within that.
      const maxYear = endYear - (ERA_ADDENDS[idx] as number)
      date.year = Math.max(1, Math.min(maxYear, date.year))
      if (date.year === maxYear) {
        date.month = Math.min(endMonth, date.month)

        if (date.month === endMonth) {
          date.day = Math.min(endDay, date.day)
        }
      }
    }

    if (date.year === 1 && idx >= 0) {
      const [, startMonth, startDay] = ERA_START_DATES[idx] as [
        number,
        number,
        number,
      ]
      date.month = Math.max(startMonth, date.month)

      if (date.month === startMonth) {
        date.day = Math.max(startDay, date.day)
      }
    }
  }

  override getEras() {
    return ERA_NAMES
  }

  override getYearsInEra(date: AnyCalendarDate): number {
    // Get the number of years in the era, taking into account the date's month and day fields.
    const era = ERA_NAMES.indexOf(date.era)
    const cur = ERA_START_DATES[era]
    const next = ERA_START_DATES[era + 1]
    if (next == null) {
      // 9999 gregorian is the maximum year allowed.
      return 9999 - (cur?.[0] as number) + 1
    }

    let years = next[0] - (cur?.[0] as number)

    if (
      date.month < next[1] ||
      (date.month === next[1] && date.day < next[2])
    ) {
      years++
    }

    return years
  }

  override getDaysInMonth(date: AnyCalendarDate): number {
    return super.getDaysInMonth(toGregorian(date))
  }

  getMinimumMonthInYear(date: AnyCalendarDate): number {
    const start = getMinimums(date)
    return start ? start[1] : 1
  }

  getMinimumDayInMonth(date: AnyCalendarDate): number {
    const start = getMinimums(date)
    return start && date.month === start[1] ? start[2] : 1
  }
}

function getMinimums(date: AnyCalendarDate) {
  if (date.year === 1) {
    const idx = ERA_NAMES.indexOf(date.era)
    return ERA_START_DATES[idx]
  }
  return
}
