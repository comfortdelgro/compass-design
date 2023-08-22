import {useEffect, useRef, useState} from 'react'

/**
 * Return debounced value based on another state
 */
export function useDebouncedValue<T = unknown>(
  value: T,
  /**
   * Debounce time (ms)
   * @default 200
   */
  wait: number,
  options: {
    /** Should this hook immediately update value with first value changes */
    leading?: boolean
    onStateChange?: ((value: T) => void) | undefined
  } = {
    leading: false,
  },
) {
  const [debouncedValue, setValue] = useState(value)
  const mountedRef = useRef(false)
  const timeoutRef = useRef<number | undefined>(undefined)
  const cooldownRef = useRef(false)

  const clearTimeout = () => {
    if (typeof window === 'undefined') {
      return
    }

    window.clearTimeout(timeoutRef.current)
  }

  useEffect(() => {
    if (!mountedRef.current) {
      return
    }

    clearTimeout()

    if (wait <= 0 || (!cooldownRef.current && options.leading)) {
      cooldownRef.current = true
      setValue(value)
      options.onStateChange?.(value)

      return
    }

    timeoutRef.current = window.setTimeout(() => {
      cooldownRef.current = false
      setValue(value)
      options.onStateChange?.(value)
    }, wait)
  }, [value, options.leading, wait])

  useEffect(() => {
    mountedRef.current = true

    return clearTimeout()
  }, [])

  return [debouncedValue, clearTimeout] as const
}
