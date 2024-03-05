import {RefObject, useEffect, useRef} from 'react'
import {useEffectEvent} from './useEffectEvent'

export function useFormReset<T>(
  ref: RefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  initialValue: T,
  onReset: (value: T) => void,
) {
  const resetValue = useRef(initialValue)
  const handleReset = useEffectEvent(() => {
    if (onReset) {
      onReset(resetValue.current)
    }
  })

  useEffect(() => {
    const form = ref?.current?.form
    form?.addEventListener('reset', handleReset)
    return () => {
      form?.removeEventListener('reset', handleReset)
    }
  }, [ref, handleReset])
}
