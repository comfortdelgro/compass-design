/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {RefObject, useEffect, useRef} from 'react'

export function useEvent<K extends keyof GlobalEventHandlersEventMap>(
  ref: RefObject<EventTarget>,
  event: K,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
