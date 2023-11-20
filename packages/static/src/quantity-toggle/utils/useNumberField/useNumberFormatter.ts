/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useMemo} from 'react'
import {NumberFormatter} from '../../../internationalized/number'

interface NumberFormatOptions extends Intl.NumberFormatOptions {
  /** Overrides default numbering system for the current locale. */
  numberingSystem?: string
}

export function useNumberFormatter(
  options: NumberFormatOptions = {},
): Intl.NumberFormat {
  return useMemo(() => new NumberFormatter('en-US', options), [options])
}
