/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {NumberFormatOptions, NumberFormatter} from '@internationalized/number'
import {useMemo} from 'react'

export function useNumberFormatter(
  options: NumberFormatOptions = {},
): Intl.NumberFormat {
  return useMemo(() => new NumberFormatter('en-US', options), [options])
}
