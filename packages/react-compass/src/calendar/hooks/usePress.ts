/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {useEffect, useMemo, useRef, useState} from 'react'
import {DOMAttributes} from '../types/calendar.types'
import {PointerType, PressHookProps, PressResult} from '../types/press.types'
import {FocusableElement} from '../types/scroll.types'
import {isVirtualPointerEvent} from '../utils/event'
import {focusWithoutScrolling, isVirtualClick} from '../utils/focus'
import {disableTextSelection, restoreTextSelection} from '../utils/text'
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
  pointerType: PointerType | null
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

function isValidInputKey(target: HTMLInputElement, key: string) {
  // Only space should toggle checkboxes and radios, not enter.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return target.type === 'checkbox' || target.type === 'radio'
    ? key === ' '
    : // @ts-ignore
      nonTextInputTypes.has(target.type)
}

function getTouchById(
  event: TouchEvent,
  pointerId: null | number,
): null | Touch {
  const changedTouches = event.changedTouches
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i]
    //
    //
    if (touch.identifier === pointerId) {
      //
      //
      return touch
    }
  }
  return null
}

function isHTMLAnchorLink(target: Element): boolean {
  return target.tagName === 'A' && target.hasAttribute('href')
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

function isValidKeyboardEvent(
  event: KeyboardEvent,
  currentTarget: Element,
): boolean {
  const {key, code} = event
  const element = currentTarget as HTMLElement
  const role = element.getAttribute('role')
  // Accessibility for keyboards. Space and Enter only.
  // "Spacebar" is for IE 11
  return (
    (key === 'Enter' ||
      key === ' ' ||
      key === 'Spacebar' ||
      code === 'Space') &&
    !(
      (element instanceof HTMLInputElement && !isValidInputKey(element, key)) ||
      element instanceof HTMLTextAreaElement ||
      element.isContentEditable
    ) &&
    // A link with a valid href should be handled natively,
    // unless it also has role='button' and was triggered using Space.
    (!isHTMLAnchorLink(element) || (role === 'button' && key !== 'Enter')) &&
    // An element with role='link' should only trigger with Enter key
    !(role === 'link' && key !== 'Enter')
  )
}

function getTouchFromEvent(event: TouchEvent): Touch | null {
  const {targetTouches} = event
  if (targetTouches.length > 0) {
    // @ts-ignore
    return targetTouches[0]
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
    ref: _,
    ...domProps
  } = usePressResponderContext(props)

  const propsRef = useRef<PressHookProps>(null)
  // @ts-ignore
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
    pointerType: null,
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
      const {onPressStart, onPressChange, isDisabled} = propsRef.current
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
      const {onPressEnd, onPressChange, onPress, isDisabled} = propsRef.current
      if (!state.didFirePressStart) {
        return
      }

      state.ignoreClickAfterPress = true
      state.didFirePressStart = false

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
    }

    const triggerPressUp = (
      originalEvent: EventBase,
      pointerType: PointerType,
    ) => {
      if (!propsRef.current) return
      const {onPressUp, isDisabled} = propsRef.current
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
        state.pointerType = null
        removeAllGlobalListeners()
        if (!allowTextSelectionOnPress) {
          restoreTextSelection(state.target)
        }
      }
    }

    const pressProps: DOMAttributes = {
      onKeyDown(e: KeyboardEvent) {
        if (
          // @ts-ignore
          isValidKeyboardEvent(e.nativeEvent, e.currentTarget) &&
          // @ts-ignore
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
            // @ts-ignore
            state.target = e.currentTarget
            state.isPressed = true
            triggerPressStart(e, 'keyboard')
            // Focus may move before the key up event, so register the event on the document
            // instead of the same element where the key down event occurred.
            addGlobalListener(document, 'keyup', onKeyUp, false)
          }
          // @ts-ignore
        } else if (e.key === 'Enter' && isHTMLAnchorLink(e.currentTarget)) {
          // If the target is a link, we won't have handled this above because we want the default
          // browser behavior to open the link when pressing Enter. But we still need to prevent
          // default so that elements above do not also handle it (e.g. table row).
          e.stopPropagation()
        }
      },
      onKeyUp(e: PointerEvent) {
        if (
          // @ts-ignore
          isValidKeyboardEvent(e.nativeEvent, e.currentTarget) &&
          // @ts-ignore
          !e.repeat &&
          // @ts-ignore
          e.currentTarget.contains(e.target as Element)
        ) {
          triggerPressUp(createEvent(state.target, e), 'keyboard')
        }
      },
      onClick(e: MouseEvent) {
        // @ts-ignore
        if (e && !e.currentTarget.contains(e.target as Element)) {
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
            // @ts-ignore
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

    const onKeyUp = (e: KeyboardEvent) => {
      // @ts-ignore
      if (state.isPressed && isValidKeyboardEvent(e, state.target)) {
        if (shouldPreventDefaultKeyboard(e.target as Element, e.key)) {
          e.preventDefault()
        }
        e.stopPropagation()

        state.isPressed = false
        const target = e.target as Element
        triggerPressEnd(
          createEvent(state.target, e),
          'keyboard',
          // @ts-ignore
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
      pressProps.onPointerDown = (e: PointerEvent) => {
        // Only handle left clicks, and ignore events that bubbled through portals.
        // @ts-ignore
        if (e.button !== 0 || !e.currentTarget.contains(e.target as Element)) {
          return
        }

        // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
        // Ignore and let the onClick handler take care of it instead.
        // https://bugs.webkit.org/show_bug.cgi?id=222627
        // https://bugs.webkit.org/show_bug.cgi?id=223202
        // @ts-ignore
        if (isVirtualPointerEvent(e.nativeEvent)) {
          state.pointerType = 'virtual'
          return
        }

        // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on pointer down and handle focusing the pressable element ourselves.
        if (shouldPreventDefault(e.currentTarget as Element)) {
          e.preventDefault()
        }

        /// @ts-ignore
        state.pointerType = e.pointerType

        e.stopPropagation()
        if (!state.isPressed) {
          state.isPressed = true
          state.isOverTarget = true
          state.activePointerId = e.pointerId
          // @ts-ignore
          state.target = e.currentTarget

          if (!isDisabled && !preventFocusOnPress) {
            focusWithoutScrolling(e.currentTarget as FocusableElement)
          }

          if (!allowTextSelectionOnPress) {
            disableTextSelection(state.target as Element)
          }
          // @ts-ignore
          triggerPressStart(e, state.pointerType)

          addGlobalListener(document, 'pointermove', onPointerMove, false)
          addGlobalListener(document, 'pointerup', onPointerUp, false)
          addGlobalListener(document, 'pointercancel', onPointerCancel, false)
        }
      }

      pressProps.onMouseDown = (e: MouseEvent) => {
        // @ts-ignore
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

      pressProps.onPointerUp = (e: PointerEvent) => {
        // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
        if (
          // @ts-ignore
          !e.currentTarget.contains(e.target as Element) ||
          state.pointerType === 'virtual'
        ) {
          return
        }

        // Only handle left clicks
        // Safari on iOS sometimes fires pointerup events, even
        // when the touch isn't over the target, so double check.
        // if (e.button === 0 && isOverTarget(e, e.currentTarget)) {
        //   triggerPressUp(e, state.pointerType || e.pointerType)
        // }
      }

      // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
      // Use pointer move events instead to implement our own hit testing.
      // See https://bugs.webkit.org/show_bug.cgi?id=199803
      const onPointerMove = (e: PointerEvent) => {
        if (e.pointerId !== state.activePointerId) {
          return
        }

        // if (isOverTarget(e, state.target)) {
        //   if (!state.isOverTarget) {
        //     state.isOverTarget = true
        //     triggerPressStart(createEvent(state.target, e), state.pointerType)
        //   }
        // } else if (state.isOverTarget) {
        //   state.isOverTarget = false
        //   triggerPressEnd(
        //     createEvent(state.target, e),
        //     state.pointerType,
        //     false,
        //   )
        //   if (propsRef.current.shouldCancelOnPointerExit) {
        //     cancel(e)
        //   }
        // }
      }

      const onPointerUp = (e: PointerEvent) => {
        if (
          e.pointerId === state.activePointerId &&
          state.isPressed &&
          e.button === 0
        ) {
          // if (isOverTarget(e, state.target)) {
          //   triggerPressEnd(createEvent(state.target, e), state.pointerType)
          // } else if (state.isOverTarget) {
          //   triggerPressEnd(
          //     createEvent(state.target, e),
          //     state.pointerType,
          //     false,
          //   )
          // }

          state.isPressed = false
          state.isOverTarget = false
          state.activePointerId = null
          state.pointerType = null
          removeAllGlobalListeners()
          if (!allowTextSelectionOnPress) {
            restoreTextSelection(state.target)
          }
        }
      }

      const onPointerCancel = (e: PointerEvent) => {
        cancel(e)
      }

      pressProps.onDragStart = (e: DragEvent) => {
        // @ts-ignore
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
        cancel(e)
      }
    } else {
      pressProps.onMouseDown = (e: MouseEvent) => {
        // Only handle left clicks
        // @ts-ignore
        if (e.button !== 0 || !e.currentTarget.contains(e.target as Element)) {
          return
        }

        // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on mouse down and handle focusing the pressable element ourselves.
        // @ts-ignore
        if (shouldPreventDefault(e.currentTarget)) {
          e.preventDefault()
        }

        e.stopPropagation()
        if (state.ignoreEmulatedMouseEvents) {
          return
        }

        state.isPressed = true
        state.isOverTarget = true
        // @ts-ignore
        state.target = e.currentTarget
        // @ts-ignore
        state.pointerType = isVirtualClick(e.nativeEvent) ? 'virtual' : 'mouse'

        if (!isDisabled && !preventFocusOnPress) {
          // @ts-ignore
          focusWithoutScrolling(e.currentTarget)
        }

        triggerPressStart(e, state.pointerType)

        addGlobalListener(document, 'mouseup', onMouseUp, false)
      }

      pressProps.onMouseEnter = (e: MouseEvent) => {
        // @ts-ignore
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        e.stopPropagation()
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true
          // @ts-ignore
          triggerPressStart(e, state.pointerType)
        }
      }

      pressProps.onMouseLeave = (e: MouseEvent) => {
        // @ts-ignore
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        e.stopPropagation()
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false
          triggerPressEnd(e, state.pointerType, false)
          // @ts-ignore
          if (propsRef.current.shouldCancelOnPointerExit) {
            cancel(e)
          }
        }
      }

      pressProps.onMouseUp = (e: MouseEvent) => {
        // @ts-ignore
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        if (!state.ignoreEmulatedMouseEvents && e.button === 0) {
          // @ts-ignore
          triggerPressUp(e, state.pointerType)
        }
      }

      const onMouseUp = (e: MouseEvent) => {
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

        // if (isOverTarget(e, state.target)) {
        //   triggerPressEnd(createEvent(state.target, e), state.pointerType)
        // } else if (state.isOverTarget) {
        //   triggerPressEnd(
        //     createEvent(state.target, e),
        //     state.pointerType,
        //     false,
        //   )
        // }

        state.isOverTarget = false
      }

      pressProps.onTouchStart = (e: TouchEvent) => {
        // @ts-ignore
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        e.stopPropagation()
        // @ts-ignore
        const touch = getTouchFromEvent(e.nativeEvent)
        if (!touch) {
          return
        }
        state.activePointerId = touch.identifier
        state.ignoreEmulatedMouseEvents = true
        state.isOverTarget = true
        state.isPressed = true
        // @ts-ignore
        state.target = e.currentTarget
        state.pointerType = 'touch'

        // Due to browser inconsistencies, especially on mobile browsers, we prevent default
        // on the emulated mouse event and handle focusing the pressable element ourselves.
        if (!isDisabled && !preventFocusOnPress) {
          // @ts-ignore
          focusWithoutScrolling(e.currentTarget)
        }

        if (!allowTextSelectionOnPress) {
          // @ts-ignore
          disableTextSelection(state.target)
        }

        triggerPressStart(e, state.pointerType)

        addGlobalListener(window, 'scroll', onScroll, true)
      }

      pressProps.onTouchMove = (e: TouchEvent) => {
        // @ts-ignore
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        e.stopPropagation()
        if (!state.isPressed) {
          return
        }

        // const touch = getTouchById(e.nativeEvent, state.activePointerId)
        // if (touch && isOverTarget(touch, e.currentTarget)) {
        //   if (!state.isOverTarget) {
        //     state.isOverTarget = true
        //     triggerPressStart(e, state.pointerType)
        //   }
        // } else if (state.isOverTarget) {
        //   state.isOverTarget = false
        //   triggerPressEnd(e, state.pointerType, false)
        //   if (propsRef.current.shouldCancelOnPointerExit) {
        //     cancel(e)
        //   }
        // }
      }

      pressProps.onTouchEnd = (e: TouchEvent) => {
        // @ts-ignore
        if (!e.currentTarget.contains(e.target as Element)) {
          return
        }

        e.stopPropagation()
        if (!state.isPressed) {
          return
        }

        // const touch = getTouchById(e.nativeEvent, state.activePointerId)
        // if (touch && isOverTarget(touch, e.currentTarget)) {
        //   triggerPressUp(e, state.pointerType)
        //   triggerPressEnd(e, state.pointerType)
        // } else if (state.isOverTarget) {
        //   triggerPressEnd(e, state.pointerType, false)
        // }

        state.isPressed = false
        state.activePointerId = null
        state.isOverTarget = false
        state.ignoreEmulatedMouseEvents = true
        if (!allowTextSelectionOnPress) {
          restoreTextSelection(state.target)
        }
        removeAllGlobalListeners()
      }

      pressProps.onTouchCancel = (e: TouchEvent) => {
        // @ts-ignore
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

      pressProps.onDragStart = (e: DragEvent) => {
        // @ts-ignore
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
    isPressed: isPressedProp || isPressed,
    pressProps: {...domProps, ...pressProps},
  }
}
