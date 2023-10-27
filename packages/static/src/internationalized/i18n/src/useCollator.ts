/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useLocale} from './context'

const cache = new Map<string, Intl.Collator>()

/**
 * Provides localized string collation for the current locale. Automatically updates when the locale changes,
 * and handles caching of the collator for performance.
 * @param options - Collator options.
 */
export function useCollator(options?: Intl.CollatorOptions): Intl.Collator {
  const {locale} = useLocale()

  const cacheKey =
    locale +
    (options
      ? Object.entries(options)
          .sort((a, b) => (a[0] < b[0] ? -1 : 1))
          .join()
      : '')
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey) as Intl.Collator
  }

  const formatter = new Intl.Collator(locale, options)
  cache.set(cacheKey, formatter)
  return formatter
}
