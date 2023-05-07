/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
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
    observer: null as unknown as MutationObserver,
  })
  stateRef.current.onBlur = onBlur

  // Clean up MutationObserver on unmount. See below.
  // eslint-disable-next-line arrow-body-style
  useLayoutEffect(() => {
    const state = stateRef.current
    return () => {
      if (state.observer) {
        state.observer.disconnect()
        // @ts-ignore
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
          // For backward compatibility, dispatch a (fake) React synthetic event.
          stateRef.current.onBlur?.(new SyntheticFocusEvent('blur', e))
        }

        // We no longer need the MutationObserver once the target is blurred.
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect()
          // @ts-ignore
          stateRef.current.observer = null
        }
      }
      // @ts-ignore
      target.addEventListener('focusout', onBlurHandler, {once: true})

      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          stateRef.current.observer.disconnect()
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
