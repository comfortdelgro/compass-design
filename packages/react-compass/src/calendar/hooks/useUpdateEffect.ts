import {useEffect, useRef} from 'react'

type EffectCallback = () => void

export function useUpdateEffect(effect: EffectCallback, dependencies: any[]) {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      effect()
    }
  }, dependencies)
}
