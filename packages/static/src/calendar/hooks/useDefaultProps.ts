/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useMemo, useRef} from 'react'
import {DateFormatter, DateValue} from '../../internationalized/date'
import {useLocale} from '../../internationalized/i18n'
import {Granularity} from '../types'

export function useDefaultProps(
  v: DateValue,
  granularity?: Granularity,
): [Granularity, string] {
  const lastValue = useRef(v)
  if (v) {
    lastValue.current = v
  }

  v = lastValue.current

  const {locale} = useLocale()

  const defaultFormatter = useMemo(() => new DateFormatter(locale), [locale])
  const resolvedOptions = useMemo(
    () => defaultFormatter.resolvedOptions(),
    [defaultFormatter],
  )

  const defaultTimeZone =
    v && 'timeZone' in v ? v.timeZone : resolvedOptions.timeZone
  granularity = granularity || (v && 'minute' in v ? 'minute' : 'day')

  if (v && !(granularity in v)) {
    throw new Error(
      'Invalid granularity ' + granularity + ' for value ' + v.toString(),
    )
  }

  return [granularity, defaultTimeZone]
}
