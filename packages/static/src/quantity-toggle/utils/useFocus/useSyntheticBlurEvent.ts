/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import {FocusEvent as ReactFocusEvent, useCallback, useRef} from 'react'
import {useLayoutEffect} from '../useLayoutEffect'

export class SyntheticFocusEvent<Target = Element>
  implements ReactFocusEvent<Target>
{
  nativeEvent: FocusEvent
  target: EventTarget & Target
  currentTarget: EventTarget & Target
  relatedTarget: Element
  bubbles: boolean
  cancelable: boolean
  defaultPrevented: boolean
  eventPhase: number
  isTrusted: boolean
  timeStamp: number
  type: string

  constructor(type: string, nativeEvent: FocusEvent) {
    this.nativeEvent = nativeEvent
    this.target = nativeEvent.target as EventTarget & Target
    this.currentTarget = nativeEvent.currentTarget as EventTarget & Target
    this.relatedTarget = nativeEvent.relatedTarget as Element
    this.bubbles = nativeEvent.bubbles
    this.cancelable = nativeEvent.cancelable
    this.defaultPrevented = nativeEvent.defaultPrevented
    this.eventPhase = nativeEvent.eventPhase
    this.isTrusted = nativeEvent.isTrusted
    this.timeStamp = nativeEvent.timeStamp
    this.type = type
  }

  isDefaultPrevented(): boolean {
    return this.nativeEvent.defaultPrevented
  }

  preventDefault(): void {
    this.defaultPrevented = true
    this.nativeEvent.preventDefault()
  }

  stopPropagation(): void {
    this.nativeEvent.stopPropagation()
    this.isPropagationStopped = () => true
  }

  isPropagationStopped(): boolean {
    return false
  }

  persist() {
    //
  }
}

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
          // For backward compatibility, dispatch a (fake) React synthetic event.
          stateRef.current.onBlur(new SyntheticFocusEvent('blur', e))
        }

        // We no longer need the MutationObserver once the target is blurred.
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect()
          stateRef.current.observer = null
        }
      }

      target.addEventListener('focusout', onBlurHandler as any, {once: true})

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
