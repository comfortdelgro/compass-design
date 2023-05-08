import {
  FocusEvent as ReactFocusEvent,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react'
import {SyntheticFocusEvent} from '../utils'

export function useSyntheticBlurEvent<Target = Element>(
  onBlur: (e: ReactFocusEvent<Target>) => void,
) {
  const stateRef = useRef({
    isFocused: false,
    onBlur,
    observer: null as unknown as MutationObserver | null,
  })
  stateRef.current.onBlur = onBlur

  useLayoutEffect(() => {
    const state = stateRef.current
    return () => {
      if (state.observer) {
        state.observer.disconnect()
        state.observer = null
      }
    }
  }, [])

  return useCallback((e: ReactFocusEvent<Target>) => {
    if (
      e.target instanceof HTMLButtonElement ||
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement ||
      e.target instanceof HTMLSelectElement
    ) {
      stateRef.current.isFocused = true

      const target = e.target
      const onBlurHandler = (e: FocusEvent) => {
        stateRef.current.isFocused = false

        if (target.disabled) {
          stateRef.current.onBlur?.(new SyntheticFocusEvent('blur', e))
        }

        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect()
          stateRef.current.observer = null
        }
      }
      target.addEventListener(
        'focusout',
        onBlurHandler as EventListenerOrEventListenerObject,
        {once: true},
      )

      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          stateRef.current.observer?.disconnect()
          target.dispatchEvent(new FocusEvent('blur'))
          target.dispatchEvent(new FocusEvent('focusout', {bubbles: true}))
        }
      })

      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: ['disabled'],
      })
    }
  }, [])
}
