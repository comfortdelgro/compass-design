import {NumberFormatOptions, NumberFormatter} from '../../../@internationalized/number'
import {useMemo} from 'react'

export function useNumberFormatter(
  options: NumberFormatOptions = {},
): Intl.NumberFormat {
  return useMemo(() => new NumberFormatter('en-US', options), [options])
}
