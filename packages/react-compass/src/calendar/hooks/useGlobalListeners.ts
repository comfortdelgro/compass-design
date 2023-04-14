import {useCallback, useEffect, useRef} from 'react'

interface GlobalListeners {
  addGlobalListener<K extends keyof DocumentEventMap>(
    el: EventTarget,
    type: K,
    listener: (this: Document, ev: DocumentEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void
  addGlobalListener(
    el: EventTarget,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void
  removeGlobalListener<K extends keyof DocumentEventMap>(
    el: EventTarget,
    type: K,
    listener: (this: Document, ev: DocumentEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void
  removeGlobalListener(
    el: EventTarget,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void
  removeAllGlobalListeners(): void
}

export function useGlobalListeners(): GlobalListeners {
  const globalListeners = useRef(new Map())
  const addGlobalListener = useCallback(
    (eventTarget, type, listener, options) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const fn = options?.once
        ? (...args: any) => {
            globalListeners.current.delete(listener)
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            listener(...args)
          }
        : listener
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      globalListeners.current.set(listener, {type, eventTarget, fn, options})
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      eventTarget.addEventListener(type, listener, options)
    },
    [],
  )
  const removeGlobalListener = useCallback(
    (eventTarget, type, listener, options) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const fn = globalListeners.current.get(listener)?.fn || listener
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      eventTarget.removeEventListener(type, fn, options)
      globalListeners.current.delete(listener)
    },
    [],
  )
  const removeAllGlobalListeners = useCallback(() => {
    globalListeners.current.forEach((value, key) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      removeGlobalListener(value.eventTarget, value.type, key, value.options)
    })
  }, [removeGlobalListener])

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return removeAllGlobalListeners
  }, [removeAllGlobalListeners])

  return {addGlobalListener, removeGlobalListener, removeAllGlobalListeners}
}
