/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import {useCallback, useRef} from 'react'
import {useLayoutEffect} from '../../quantity-toggle/utils/useLayoutEffect'

export function useEffectEvent<T extends Function>(fn: T): T {
  const ref = useRef<T | null>(null)
  useLayoutEffect(() => {
    ref.current = fn
  }, [fn])
  return useCallback((...args) => {
    const f = ref.current!
    return f(...args)
  }, []) as any
}
