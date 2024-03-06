import {RefObject, useEffect} from 'react'

export function useEvent<K extends keyof GlobalEventHandlersEventMap>(
  ref: RefObject<EventTarget>,
  event: K,
  handler: EventListenerOrEventListenerObject | null,
  options?: boolean | AddEventListenerOptions,
) {
  useEffect(() => {
    const element = ref.current
    if (element && handler !== null) {
      element.addEventListener(event, handler, options)
    }
    return () => {
      if (element && handler !== null) {
        element.removeEventListener(event, handler, options)
      }
    }
  }, [ref, event, options, handler])
}
