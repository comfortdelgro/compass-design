/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {BuddhistCalendar} from './calendars/BuddhistCalendar'
import {
  CopticCalendar,
  EthiopicAmeteAlemCalendar,
  EthiopicCalendar,
} from './calendars/EthiopicCalendar'
import {GregorianCalendar} from './calendars/GregorianCalendar'
import {HebrewCalendar} from './calendars/HebrewCalendar'
import {IndianCalendar} from './calendars/IndianCalendar'
import {
  IslamicCivilCalendar,
  IslamicTabularCalendar,
  IslamicUmalquraCalendar,
} from './calendars/IslamicCalendar'
import {JapaneseCalendar} from './calendars/JapaneseCalendar'
import {PersianCalendar} from './calendars/PersianCalendar'
import {TaiwanCalendar} from './calendars/TaiwanCalendar'
import {Calendar} from './types'

/** Creates a `Calendar` instance from a Unicode calendar identifier string. */
export function createCalendar(name: string): Calendar {
  switch (name) {
    case 'buddhist':
      return new BuddhistCalendar()
    case 'ethiopic':
      return new EthiopicCalendar()
    case 'ethioaa':
      return new EthiopicAmeteAlemCalendar()
    case 'coptic':
      return new CopticCalendar()
    case 'hebrew':
      return new HebrewCalendar()
    case 'indian':
      return new IndianCalendar()
    case 'islamic-civil':
      return new IslamicCivilCalendar()
    case 'islamic-tbla':
      return new IslamicTabularCalendar()
    case 'islamic-umalqura':
      return new IslamicUmalquraCalendar()
    case 'japanese':
      return new JapaneseCalendar()
    case 'persian':
      return new PersianCalendar()
    case 'roc':
      return new TaiwanCalendar()
    case 'gregory':
    default:
      return new GregorianCalendar()
  }
}
