/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {RefObject, useEffect, useRef} from 'react'

export function useEvent<K extends keyof GlobalEventHandlersEventMap>(
  ref: RefObject<EventTarget>,
  event: K,
  handler: (this: Document, ev: GlobalEventHandlersEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
) {
  const handlerRef = useRef(handler)
  handlerRef.current = handler

  const isDisabled = handler == null

  useEffect(() => {
    if (isDisabled) {
      return
    }

    const element = ref.current
    const handler = (e: GlobalEventHandlersEventMap[K]) =>
      // @ts-ignore
      handlerRef.current.call(this, e)
    // @ts-ignore
    element.addEventListener(event, handler, options)
    return () => {
      // @ts-ignore
      element.removeEventListener(event, handler, options)
    }
  }, [ref, event, options, isDisabled])
}
