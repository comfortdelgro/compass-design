/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useMemo} from 'react'
import {CalendarDate} from '../../internationalized/date'
import {useDateFormatter} from '../../internationalized/i18n'

export function useVisibleRangeDescription(
  startDate: CalendarDate,
  timeZone: string,
) {
  const monthFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    era: undefined,
    calendar: startDate.calendar.identifier,
    timeZone,
  })

  return useMemo(() => {
    return monthFormatter.format(startDate.toDate(timeZone))
  }, [startDate, monthFormatter, timeZone])
}
