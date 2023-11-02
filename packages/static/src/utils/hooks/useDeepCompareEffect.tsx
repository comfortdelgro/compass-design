import isEqual from 'lodash/isEqual'
import {DependencyList, EffectCallback, useEffect, useMemo, useRef} from 'react'

/**
 * @param value the value to be memoized (such as an object array state)
 * @returns a memoized version of the value as long as it remains deeply equal
 */
function useDeepCompareMemoize<T>(value: T) {
  const ref = useRef<T>(value)
  const signalRef = useRef<number>(0)

  if (!isEqual(value, ref.current)) {
    ref.current = value
    signalRef.current += 1
  }

  return useMemo(() => ref.current, [signalRef.current])
}

export function useDeepCompareEffect(
  callback: EffectCallback,
  dependencies?: DependencyList | undefined,
) {
  useEffect(callback, useDeepCompareMemoize(dependencies))
}
