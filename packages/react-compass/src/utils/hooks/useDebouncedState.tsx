import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'

export function useDebouncedState<T = unknown>(
  defaultValue: T,
  wait: number,
  options = {
    /** Immediately update value on first call */
    updateFirstChange: false,
  },
): Readonly<[T, Dispatch<SetStateAction<T>>]> {
  const [value, setValue] = useState(defaultValue)
  const timeoutRef = useRef<number>()
  const updateFirstChangeRef = useRef(true)

  const clearTimeout = () => window.clearTimeout(timeoutRef.current)

  useEffect(() => clearTimeout, [])

  const debouncedSetValue = useCallback<Dispatch<SetStateAction<T>>>(
    (newValue) => {
      clearTimeout()

      if (updateFirstChangeRef.current && options.updateFirstChange) {
        setValue(newValue)
      } else {
        timeoutRef.current = window.setTimeout(() => {
          updateFirstChangeRef.current = true
          setValue(newValue)
        }, wait)
      }

      updateFirstChangeRef.current = false
    },
    [options.updateFirstChange, wait],
  )

  return [value, debouncedSetValue]
}
