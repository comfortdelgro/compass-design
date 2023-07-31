import {useRef} from 'react'

export function useId(initId?: string) {
  // Prevent recreate id each render time
  const id = useRef(
    initId ?? `cdg-element-${Math.random().toString(36).substring(2)}`,
  )
  return id.current
}
