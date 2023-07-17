/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useMemo, useRef} from 'react'
import {DateFormatter} from '../../date'
import {useLocale} from './context'

export interface DateFormatterOptions extends Intl.DateTimeFormatOptions {
  calendar?: string
}

/**
 * Provides localized date formatting for the current locale. Automatically updates when the locale changes,
 * and handles caching of the date formatter for performance.
 * @param options - Formatting options.
 */
export function useDateFormatter(
  options?: DateFormatterOptions,
): DateFormatter {
  // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
  let lastOptions = useRef(null)
  if (options && lastOptions.current && isEqual(options, lastOptions.current)) {
    options = lastOptions.current as DateFormatterOptions
  }
  // @ts-ignore
  lastOptions.current = options

  let {locale} = useLocale()
  return useMemo(() => new DateFormatter(locale, options), [locale, options])
}

function isEqual(a: DateFormatterOptions, b: DateFormatterOptions) {
  if (a === b) {
    return true
  }

  let aKeys = Object.keys(a)
  let bKeys = Object.keys(b)
  if (aKeys.length !== bKeys.length) {
    return false
  }

  for (let key of aKeys) {
    // @ts-ignore
    if (b[key] !== a[key]) {
      return false
    }
  }

  return true
}
