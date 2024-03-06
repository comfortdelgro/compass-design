/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useCallback, useMemo} from 'react'
import {useCollator} from './useCollator'

export interface Filter {
  /** Returns whether a string starts with a given substring. */
  startsWith(string: string, substring: string): boolean
  /** Returns whether a string ends with a given substring. */
  endsWith(string: string, substring: string): boolean
  /** Returns whether a string contains a given substring. */
  contains(string: string, substring: string): boolean
}

/**
 * Provides localized string search functionality that is useful for filtering or matching items
 * in a list. Options can be provided to adjust the sensitivity to case, diacritics, and other parameters.
 */
export function useFilter(options?: Intl.CollatorOptions): Filter {
  const collator = useCollator({
    usage: 'search',
    ...options,
  })

  // TODO(later): these methods don't currently support the ignorePunctuation option.
  const startsWith = useCallback(
    (string, substring) => {
      if (substring.length === 0) {
        return true
      }

      // Normalize both strings so we can slice safely
      // TODO: take into account the ignorePunctuation option as well...
      string = string.normalize('NFC')
      substring = substring.normalize('NFC')
      return (
        collator.compare(string.slice(0, substring.length), substring) === 0
      )
    },
    [collator],
  )

  const endsWith = useCallback(
    (string, substring) => {
      if (substring.length === 0) {
        return true
      }

      string = string.normalize('NFC')
      substring = substring.normalize('NFC')
      return collator.compare(string.slice(-substring.length), substring) === 0
    },
    [collator],
  )

  const contains = useCallback(
    (string, substring) => {
      if (substring.length === 0) {
        return true
      }

      string = string.normalize('NFC')
      substring = substring.normalize('NFC')

      let scan = 0
      const sliceLen = substring.length
      for (; scan + sliceLen <= string.length; scan++) {
        const slice = string.slice(scan, scan + sliceLen)
        if (collator.compare(substring, slice) === 0) {
          return true
        }
      }

      return false
    },
    [collator],
  )

  return useMemo(
    () => ({
      startsWith,
      endsWith,
      contains,
    }),
    [startsWith, endsWith, contains],
  )
}
