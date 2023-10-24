/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {
  DragEvent,
  KeyboardEvent,
  MouseEvent,
  TouchEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  DOMAttributes,
  FocusableElement,
  PointerType,
  PressHookProps,
  PressResult,
} from '../types'
import {
  disableTextSelection,
  focusWithoutScrolling,
  isHTMLAnchorLink,
  isOverTarget,
  isValidInputKey,
  isValidKeyboardEvent,
  isVirtualClick,
  isVirtualPointerEvent,
  restoreTextSelection,
} from '../utils'
import {useGlobalListeners} from './useGlobalListeners'
import {usePressResponderContext} from './usePressResponderContext'

interface PressState {
  isPressed: boolean
  ignoreEmulatedMouseEvents: boolean
  ignoreClickAfterPress: boolean
  didFirePressStart: boolean
  activePointerId: any
  target: FocusableElement | null
  isOverTarget: boolean
  pointerType: PointerType
  userSelect?: string
}

interface EventBase {
  currentTarget: EventTarget | null
  shiftKey: boolean
  ctrlKey: boolean
  metaKey: boolean
  altKey: boolean
}

function createEvent(target: FocusableElement | null, e: EventBase): EventBase {
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
  }
}

function shouldPreventDefaultKeyboard(target: Element, key: string) {
  if (target instanceof HTMLInputElement) {
    return !isValidInputKey(target, key)
  }

  if (target instanceof HTMLButtonElement) {
    return target.type !== 'submit'
  }

  return true
}

function shouldPreventDefault(target: Element) {
  // We cannot prevent default if the target is a draggable element.
  return !(target instanceof HTMLElement) || !target.draggable
}

function getTouchFromEvent(event: TouchEvent): Touch | null {
  const {targetTouches} = event
  if (targetTouches.length > 0) {
    return targetTouches[0]! as Touch
  }
  return null
}

function getTouchById(
  event: TouchEvent,
  pointerId: null | number,
): null | Touch {
  const changedTouches = event.changedTouches
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i]
    if (touch?.identifier === pointerId) {
      return touch as Touch
    }
  }
  return null
}

export function usePress(props: PressHookProps): PressResult {
  const {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _,
    ...domProps
  } = usePressResponderContext(props)

  const propsRef = useRef<PressHookProps | unknown>(null)
  propsRef.current = {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    shouldCancelOnPointerExit,
  }

  const [isPressed, setPressed] = useState(false)
  const ref = useRef<PressState>({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: 'mouse',
  })

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {addGlobalListener, removeAllGlobalListeners} = useGlobalListeners()

  const pressProps = useMemo(() => {
    const state = ref.current
    const triggerPressStart = (
      originalEvent: EventBase,
      pointerType: PointerType,
    ) => {
      if (!propsRef.current) return
      const {onPressStart, onPressChange, isDisabled} =
        propsRef.current as PressHookProps
      if (isDisabled || state.didFirePressStart) {
        return
      }

      if (onPressStart) {
        onPressStart({
          type: 'pressstart',
          pointerType,
          target: originalEvent.currentTarget as Element,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey,
        })
      }

      if (onPressChange) {
        onPressChange(true)
      }

      state.didFirePressStart = true
      setPressed(true)
    }

    const triggerPressEnd = (
      originalEvent: EventBase,
      pointerType: PointerType | null,
      wasPressed = true,
    ) => {
      if (!propsRef.current) return
      if (!pointerType) return
      const {onPressEnd, onPressChange, onPress, isDisabled} =
        propsRef.current as PressHookProps
      if (!state.didFirePressStart) {
        return
      }

      state.ignoreClickAfterPress = true
      state.didFirePressStart = false

      if (onPress && wasPressed && !isDisabled) {
        onPress({
          type: 'press',
          pointerType,
          target: originalEvent.currentTarget as Element,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey,
        })
      }

      if (onPressEnd) {
        onPressEnd({
          type: 'pressend',
          pointerType,
          target: originalEvent.currentTarget as Element,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey,
        })
      }

      if (onPressChange) {
        onPressChange(false)
      }

      setPressed(false)
    }

    const triggerPressUp = (
      originalEvent: EventBase,
      pointerType: PointerType,
    ) => {
      if (!propsRef.current) return
      const {onPressUp, isDisabled} = propsRef.current as PressHookProps
      if (isDisabled) {
        return
      }

      if (onPressUp) {
        onPressUp({
          type: 'pressup',
          pointerType,
          target: originalEvent.currentTarget as Element,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey,
        })
      }
    }

    const cancel = (e: EventBase) => {
      if (state.isPressed) {
        if (state.isOverTarget) {
          triggerPressEnd(
            createEvent(state.target, e),
            state.pointerType,
            false,
          )
        }
        state.isPressed = false
        state.isOverTarget = false
        state.activePointerId = null
        state.pointerType = 'mouse'
        removeAllGlobalListeners()
        if (!allowTextSelectionOnPress) {
          restoreTextSelection(state.target)
        }
      }
    }

    const pressProps: DOMAttributes = {
      'aria-label': '',
      'aria-labelledby': undefined,
      onKeyDown(e: KeyboardEvent<FocusableElement>) {
        if (
          isValidKeyboardEvent(e.nativeEvent, e.currentTarget) &&
          e.currentTarget.contains(e.target as Element)
        ) {
          if (shouldPreventDefaultKeyboard(e.target as Element, e.key)) {
            e.preventDefault()
          }
          e.stopPropagation()
          // If the event is repeating, it may have started on a different element
          // after which focus moved to the current element. Ignore these events and
          // only handle the first key down event.
          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget
            state.isPressed = true
            triggerPressStart(e, 'keyboard')
            // Focus may move before the key up event, so register the event on the document
            // instead of the same element where the key down event occurred.
            addGlobalListener(document, 'keyup', onKeyUp, false)
          }
        } else if (e.key === 'Enter' && isHTMLAnchorLink(e.currentTarget)) {
          // If the target is a link, we won't have handled this above because we want the default
          // browser behavior to open the link when pressing Enter. But we still need to prevent
          // default so that elements above do not also handle it (e.g. table row).
          e.stopPropagation()
        }
      },
      onKeyUp(e: KeyboardEvent<FocusableElement>) {
        if (
          isValidKeyboardEvent(e.nativeEvent, e.currentTarget) &&
          e.currentTarget.contains(e.target as Element)
        ) {
          triggerPressUp(createEvent(state.target, e), 'keyboard')
        }
      },
      onClick(e: MouseEvent<FocusableElement>) {
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }
        if (e && e.button === 0) {
          e.stopPropagation()
          if (isDisabled) {
            e.preventDefault()
          }
          // If triggered from a screen reader or by using element.click(),
          // trigger as if it were a keyboard click.
          if (
            !state.ignoreClickAfterPress &&
            !state.ignoreEmulatedMouseEvents &&
            (state.pointerType === 'virtual' || isVirtualClick(e.nativeEvent))
          ) {
            // Ensure the element receives focus (VoiceOver on iOS does not do this)
            if (!isDisabled && !preventFocusOnPress) {
              focusWithoutScrolling(e.currentTarget as FocusableElement)
            }
            triggerPressStart(e, 'virtual')
            triggerPressUp(e, 'virtual')
            triggerPressEnd(e, 'virtual')
          }
          state.ignoreEmulatedMouseEvents = false
          state.ignoreClickAfterPress = false
        }
      },
    }

    const onKeyUp = (e: KeyboardEvent<FocusableElement>) => {
      if (state.isPressed && isValidKeyboardEvent(e, state.target)) {
        if (shouldPreventDefaultKeyboard(e.target as Element, e.key)) {
          e.preventDefault()
        }
        e.stopPropagation()

        state.isPressed = false
        const target = e.target as Element
        if (state.target)
          triggerPressEnd(
            createEvent(state.target, e),
            'keyboard',
            state.target.contains(target),
          )
        removeAllGlobalListeners()

        // If the target is a link, trigger the click method to open the URL,
        // but defer triggering pressEnd until onClick event handler.
        if (
          state.target instanceof HTMLElement &&
          state.target.contains(target) &&
          (isHTMLAnchorLink(state.target) ||
            state.target.getAttribute('role') === 'link')
        ) {
          state.target.click()
        }
      }
    }

    if (typeof PointerEvent !== 'undefined') {
      pressProps.onPointerDown = (e: React.PointerEvent<FocusableElement>) => {
        // Only handle left clicks, and ignore events that bubbled through portals.
        if (e.button !== 0 || !e.currentTarget.contains(e.target as Element)) {
          return
        }

        // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
        // Ignore and let the onClick handler take care of it instead.
        // https://bugs.webkit.org/show_bug.cgi?id=222627
        // https://bugs.webkit.org/show_bug.cgi?id=223202
        if (isVirtualPointerEvent(e.nativeEvent)) {
          state.pointerType = 'virtual'
          return
        }

        // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on pointer down and handle focusing the pressable element ourselves.
        if (shouldPreventDefault(e.currentTarget as Element)) {
          e.preventDefault()
        }

        state.pointerType = e.pointerType

        e.stopPropagation()
        if (!state.isPressed) {
          state.isPressed = true
          state.isOverTarget = true
          state.activePointerId = e.pointerId
          state.target = e.currentTarget

          if (!isDisabled && !preventFocusOnPress) {
            focusWithoutScrolling(e.currentTarget as FocusableElement)
          }

          if (!allowTextSelectionOnPress) {
            disableTextSelection(state.target as Element)
          }
          triggerPressStart(e, state.pointerType)

          addGlobalListener(document, 'pointermove', onPointerMove, false)
          addGlobalListener(document, 'pointerup', onPointerUp, false)
          addGlobalListener(document, 'pointercancel', onPointerCancel, false)
        }
      }

      pressProps.onMouseDown = (e: MouseEvent<FocusableElement>) => {
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        if (e.button === 0) {
          // Chrome and Firefox on touch Windows devices require mouse down events
          // to be canceled in addition to pointer events, or an extra asynchronous
          // focus event will be fired.
          if (shouldPreventDefault(e.currentTarget as Element)) {
            e.preventDefault()
          }

          e.stopPropagation()
        }
      }

      pressProps.onPointerUp = (e: React.PointerEvent<FocusableElement>) => {
        // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
        if (
          !e.currentTarget.contains(e.target as Element) ||
          state.pointerType === 'virtual'
        ) {
          return
        }

        // Only handle left clicks
        // Safari on iOS sometimes fires pointerup events, even
        // when the touch isn't over the target, so double check.
        if (e.button === 0 && isOverTarget(e, e.currentTarget as Element)) {
          triggerPressUp(e, state.pointerType || (e.pointerType as PointerType))
        }
      }

      // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
      // Use pointer move events instead to implement our own hit testing.
      // See https://bugs.webkit.org/show_bug.cgi?id=199803
      const onPointerMove = (e: React.PointerEvent<FocusableElement>) => {
        if (e.pointerId !== state.activePointerId) {
          return
        }

        if (isOverTarget(e, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true
            triggerPressStart(createEvent(state.target, e), state.pointerType)
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false
          triggerPressEnd(
            createEvent(state.target, e),
            state.pointerType,
            false,
          )
          if ((propsRef.current as PressHookProps).shouldCancelOnPointerExit) {
            cancel(e)
          }
        }
      }

      const onPointerUp = (e: React.PointerEvent<FocusableElement>) => {
        if (
          e.pointerId === state.activePointerId &&
          state.isPressed &&
          e.button === 0
        ) {
          if (isOverTarget(e, state.target)) {
            triggerPressEnd(createEvent(state.target, e), state.pointerType)
          } else if (state.isOverTarget) {
            triggerPressEnd(
              createEvent(state.target, e),
              state.pointerType,
              false,
            )
          }

          state.isPressed = false
          state.isOverTarget = false
          state.activePointerId = null
          state.pointerType = 'pen'
          removeAllGlobalListeners()
          if (!allowTextSelectionOnPress) {
            restoreTextSelection(state.target)
          }
        }
      }

      const onPointerCancel = (e: React.PointerEvent<FocusableElement>) => {
        cancel(e)
      }

      pressProps.onDragStart = (e: DragEvent<FocusableElement>) => {
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
        cancel(e)
      }
    } else {
      pressProps.onMouseDown = (e: MouseEvent<FocusableElement>) => {
        // Only handle left clicks
        if (e.button !== 0 || !e.currentTarget.contains(e.target as Element)) {
          return
        }

        // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on mouse down and handle focusing the pressable element ourselves.
        if (shouldPreventDefault(e.currentTarget)) {
          e.preventDefault()
        }

        e.stopPropagation()
        if (state.ignoreEmulatedMouseEvents) {
          return
        }

        state.isPressed = true
        state.isOverTarget = true
        state.target = e.currentTarget
        state.pointerType = isVirtualClick(e.nativeEvent) ? 'virtual' : 'mouse'

        if (!isDisabled && !preventFocusOnPress) {
          focusWithoutScrolling(e.currentTarget)
        }

        triggerPressStart(e, state.pointerType)
        addGlobalListener(document, 'mouseup', onMouseUp, false)
      }

      pressProps.onMouseEnter = (e: MouseEvent<FocusableElement>) => {
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        e.stopPropagation()
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true
          triggerPressStart(e, state.pointerType)
        }
      }

      pressProps.onMouseLeave = (e: MouseEvent<FocusableElement>) => {
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        e.stopPropagation()
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false
          triggerPressEnd(e, state.pointerType, false)
          if ((propsRef.current as PressHookProps).shouldCancelOnPointerExit) {
            cancel(e)
          }
        }
      }

      pressProps.onMouseUp = (e: MouseEvent<FocusableElement>) => {
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        if (!state.ignoreEmulatedMouseEvents && e.button === 0) {
          triggerPressUp(e, state.pointerType)
        }
      }

      const onMouseUp = (e: MouseEvent<FocusableElement>) => {
        // Only handle left clicks
        if (e.button !== 0) {
          return
        }

        state.isPressed = false
        removeAllGlobalListeners()

        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false
          return
        }
        if (isOverTarget(e, state.target)) {
          triggerPressEnd(createEvent(state.target, e), state.pointerType)
        } else if (state.isOverTarget) {
          triggerPressEnd(
            createEvent(state.target, e),
            state.pointerType,
            false,
          )
        }

        state.isOverTarget = false
      }

      pressProps.onTouchStart = (e: TouchEvent<FocusableElement>) => {
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        e.stopPropagation()
        const touch = getTouchFromEvent(e.nativeEvent as unknown as TouchEvent)
        if (!touch) {
          return
        }
        state.activePointerId = touch.identifier
        state.ignoreEmulatedMouseEvents = true
        state.isOverTarget = true
        state.isPressed = true
        state.target = e.currentTarget
        state.pointerType = 'touch'

        // Due to browser inconsistencies, especially on mobile browsers, we prevent default
        // on the emulated mouse event and handle focusing the pressable element ourselves.
        if (!isDisabled && !preventFocusOnPress) {
          focusWithoutScrolling(e.currentTarget)
        }

        if (!allowTextSelectionOnPress) {
          disableTextSelection(state.target)
        }

        triggerPressStart(e, state.pointerType)

        addGlobalListener(window, 'scroll', onScroll, true)
      }

      pressProps.onTouchMove = (e: TouchEvent<FocusableElement>) => {
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        e.stopPropagation()
        if (!state.isPressed) {
          return
        }
      }

      pressProps.onTouchEnd = (e: TouchEvent<FocusableElement>) => {
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }
        e.stopPropagation()
        if (!state.isPressed) {
          return
        }

        const touch = getTouchById(
          e.nativeEvent as unknown as TouchEvent,
          state.activePointerId as number,
        )
        if (
          touch &&
          isOverTarget(
            touch as unknown as MouseEvent<FocusableElement>,
            e.currentTarget,
          )
        ) {
          triggerPressUp(e, state.pointerType)
          triggerPressEnd(e, state.pointerType)
        } else if (state.isOverTarget) {
          triggerPressEnd(e, state.pointerType, false)
        }

        state.isPressed = false
        state.activePointerId = null
        state.isOverTarget = false
        state.ignoreEmulatedMouseEvents = true
        if (!allowTextSelectionOnPress) {
          restoreTextSelection(state.target)
        }
        removeAllGlobalListeners()
      }

      pressProps.onTouchCancel = (e: TouchEvent<FocusableElement>) => {
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        e.stopPropagation()
        if (state.isPressed) {
          cancel(e)
        }
      }

      const onScroll = (e: Event) => {
        if (state.isPressed && (e.target as Element).contains(state.target)) {
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false,
          })
        }
      }

      pressProps.onDragStart = (e: DragEvent<FocusableElement>) => {
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        cancel(e)
      }
    }

    return pressProps
  }, [
    addGlobalListener,
    isDisabled,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
  ])

  useEffect(() => {
    return () => {
      if (!allowTextSelectionOnPress) {
        restoreTextSelection(ref.current.target)
      }
    }
  }, [allowTextSelectionOnPress])

  return {
    isPressed: isPressedProp ?? isPressed,
    pressProps: {...domProps, ...pressProps},
  }
}
