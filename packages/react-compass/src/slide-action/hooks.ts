import {useEffect, useRef} from 'react'

/** This hook works the same way as `useEffect` but it's not trigger on first render */
export const useLazyEffect: typeof useEffect = (effect, deps) => {
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) {
      effect()
      return
    }
    mounted.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
