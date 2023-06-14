/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {CalendarDate, CalendarDateTime} from './CalendarDate'

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

export function mod(amount: number, numerator: number): number {
  return amount - numerator * Math.floor(amount / numerator)
}

export function copy(date: CalendarDate): Mutable<CalendarDate> {
  if (date.era) {
    return new CalendarDate(
      date.calendar,
      date.era,
      date.year,
      date.month,
      date.day,
    )
  } else {
    return new CalendarDate(date.calendar, date.year, date.month, date.day)
  }
}

export function copyDateTime(
  date: CalendarDateTime,
): Mutable<CalendarDateTime> {
  if (date.era) {
    return new CalendarDateTime(
      date.calendar,
      date.era,
      date.year,
      date.month,
      date.day,
      date.hour,
      date.minute,
      date.second,
      date.millisecond,
    )
  } else {
    return new CalendarDateTime(
      date.calendar,
      date.year,
      date.month,
      date.day,
      date.hour,
      date.minute,
      date.second,
    )
  }
}
