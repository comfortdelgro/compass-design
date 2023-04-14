import {useEffect, useRef, useState} from 'react'
import {PointerType, PressHookProps, PressResult} from '../types/press.types'
import {FocusableElement} from '../types/scroll.types'
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
  currentTarget: EventTarget
  shiftKey: boolean
  ctrlKey: boolean
  metaKey: boolean
  altKey: boolean
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
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

  // const {addGlobalListener, removeAllGlobalListeners} = useGlobalListeners()

  // const pressProps = useMemo(() => {
  //   const state = ref.current
  //   const triggerPressStart = (
  //     originalEvent: EventBase,
  //     pointerType: PointerType,
  //   ) => {
  //     const {onPressStart, onPressChange, isDisabled} = propsRef.current
  //     if (isDisabled || state.didFirePressStart) {
  //       return
  //     }

  //     if (onPressStart) {
  //       onPressStart({
  //         type: 'pressstart',
  //         pointerType,
  //         target: originalEvent.currentTarget as Element,
  //         shiftKey: originalEvent.shiftKey,
  //         metaKey: originalEvent.metaKey,
  //         ctrlKey: originalEvent.ctrlKey,
  //         altKey: originalEvent.altKey,
  //       })
  //     }

  //     if (onPressChange) {
  //       onPressChange(true)
  //     }

  //     state.didFirePressStart = true
  //     setPressed(true)
  //   }

  //   const triggerPressEnd = (
  //     originalEvent: EventBase,
  //     pointerType: PointerType,
  //     wasPressed = true,
  //   ) => {
  //     const {onPressEnd, onPressChange, onPress, isDisabled} = propsRef.current
  //     if (!state.didFirePressStart) {
  //       return
  //     }

  //     state.ignoreClickAfterPress = true
  //     state.didFirePressStart = false

  //     if (onPressEnd) {
  //       onPressEnd({
  //         type: 'pressend',
  //         pointerType,
  //         target: originalEvent.currentTarget as Element,
  //         shiftKey: originalEvent.shiftKey,
  //         metaKey: originalEvent.metaKey,
  //         ctrlKey: originalEvent.ctrlKey,
  //         altKey: originalEvent.altKey,
  //       })
  //     }

  //     if (onPressChange) {
  //       onPressChange(false)
  //     }

  //     setPressed(false)

  //     if (onPress && wasPressed && !isDisabled) {
  //       onPress({
  //         type: 'press',
  //         pointerType,
  //         target: originalEvent.currentTarget as Element,
  //         shiftKey: originalEvent.shiftKey,
  //         metaKey: originalEvent.metaKey,
  //         ctrlKey: originalEvent.ctrlKey,
  //         altKey: originalEvent.altKey,
  //       })
  //     }
  //   }

  //   const triggerPressUp = (
  //     originalEvent: EventBase,
  //     pointerType: PointerType,
  //   ) => {
  //     const {onPressUp, isDisabled} = propsRef.current
  //     if (isDisabled) {
  //       return
  //     }

  //     if (onPressUp) {
  //       onPressUp({
  //         type: 'pressup',
  //         pointerType,
  //         target: originalEvent.currentTarget as Element,
  //         shiftKey: originalEvent.shiftKey,
  //         metaKey: originalEvent.metaKey,
  //         ctrlKey: originalEvent.ctrlKey,
  //         altKey: originalEvent.altKey,
  //       })
  //     }
  //   }

  //   const cancel = (e: EventBase) => {
  //     if (state.isPressed) {
  //       if (state.isOverTarget) {
  //         triggerPressEnd(
  //           createEvent(state.target, e),
  //           state.pointerType,
  //           false,
  //         )
  //       }
  //       state.isPressed = false
  //       state.isOverTarget = false
  //       state.activePointerId = null
  //       state.pointerType = null
  //       removeAllGlobalListeners()
  //       if (!allowTextSelectionOnPress) {
  //         restoreTextSelection(state.target)
  //       }
  //     }
  //   }

  //   const pressProps: DOMAttributes = {
  //     onKeyDown(e) {
  //       if (
  //         isValidKeyboardEvent(e.nativeEvent, e.currentTarget) &&
  //         e.currentTarget.contains(e.target as Element)
  //       ) {
  //         if (shouldPreventDefaultKeyboard(e.target as Element, e.key)) {
  //           e.preventDefault()
  //         }
  //         e.stopPropagation()

  //         // If the event is repeating, it may have started on a different element
  //         // after which focus moved to the current element. Ignore these events and
  //         // only handle the first key down event.
  //         if (!state.isPressed && !e.repeat) {
  //           state.target = e.currentTarget
  //           state.isPressed = true
  //           triggerPressStart(e, 'keyboard')

  //           // Focus may move before the key up event, so register the event on the document
  //           // instead of the same element where the key down event occurred.
  //           addGlobalListener(document, 'keyup', onKeyUp, false)
  //         }
  //       } else if (e.key === 'Enter' && isHTMLAnchorLink(e.currentTarget)) {
  //         // If the target is a link, we won't have handled this above because we want the default
  //         // browser behavior to open the link when pressing Enter. But we still need to prevent
  //         // default so that elements above do not also handle it (e.g. table row).
  //         e.stopPropagation()
  //       }
  //     },
  //     onKeyUp(e) {
  //       if (
  //         isValidKeyboardEvent(e.nativeEvent, e.currentTarget) &&
  //         !e.repeat &&
  //         e.currentTarget.contains(e.target as Element)
  //       ) {
  //         triggerPressUp(createEvent(state.target, e), 'keyboard')
  //       }
  //     },
  //     onClick(e) {
  //       if (e && !e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       if (e && e.button === 0) {
  //         e.stopPropagation()
  //         if (isDisabled) {
  //           e.preventDefault()
  //         }

  //         // If triggered from a screen reader or by using element.click(),
  //         // trigger as if it were a keyboard click.
  //         if (
  //           !state.ignoreClickAfterPress &&
  //           !state.ignoreEmulatedMouseEvents &&
  //           (state.pointerType === 'virtual' || isVirtualClick(e.nativeEvent))
  //         ) {
  //           // Ensure the element receives focus (VoiceOver on iOS does not do this)
  //           if (!isDisabled && !preventFocusOnPress) {
  //             focusWithoutScrolling(e.currentTarget)
  //           }

  //           triggerPressStart(e, 'virtual')
  //           triggerPressUp(e, 'virtual')
  //           triggerPressEnd(e, 'virtual')
  //         }

  //         state.ignoreEmulatedMouseEvents = false
  //         state.ignoreClickAfterPress = false
  //       }
  //     },
  //   }

  //   const onKeyUp = (e: KeyboardEvent) => {
  //     if (state.isPressed && isValidKeyboardEvent(e, state.target)) {
  //       if (shouldPreventDefaultKeyboard(e.target as Element, e.key)) {
  //         e.preventDefault()
  //       }
  //       e.stopPropagation()

  //       state.isPressed = false
  //       const target = e.target as Element
  //       triggerPressEnd(
  //         createEvent(state.target, e),
  //         'keyboard',
  //         state.target.contains(target),
  //       )
  //       removeAllGlobalListeners()

  //       // If the target is a link, trigger the click method to open the URL,
  //       // but defer triggering pressEnd until onClick event handler.
  //       if (
  //         state.target instanceof HTMLElement &&
  //         state.target.contains(target) &&
  //         (isHTMLAnchorLink(state.target) ||
  //           state.target.getAttribute('role') === 'link')
  //       ) {
  //         state.target.click()
  //       }
  //     }
  //   }

  //   if (typeof PointerEvent !== 'undefined') {
  //     pressProps.onPointerDown = (e) => {
  //       // Only handle left clicks, and ignore events that bubbled through portals.
  //       if (e.button !== 0 || !e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
  //       // Ignore and let the onClick handler take care of it instead.
  //       // https://bugs.webkit.org/show_bug.cgi?id=222627
  //       // https://bugs.webkit.org/show_bug.cgi?id=223202
  //       if (isVirtualPointerEvent(e.nativeEvent)) {
  //         state.pointerType = 'virtual'
  //         return
  //       }

  //       // Due to browser inconsistencies, especially on mobile browsers, we prevent
  //       // default on pointer down and handle focusing the pressable element ourselves.
  //       if (shouldPreventDefault(e.currentTarget as Element)) {
  //         e.preventDefault()
  //       }

  //       state.pointerType = e.pointerType

  //       e.stopPropagation()
  //       if (!state.isPressed) {
  //         state.isPressed = true
  //         state.isOverTarget = true
  //         state.activePointerId = e.pointerId
  //         state.target = e.currentTarget

  //         if (!isDisabled && !preventFocusOnPress) {
  //           focusWithoutScrolling(e.currentTarget)
  //         }

  //         if (!allowTextSelectionOnPress) {
  //           disableTextSelection(state.target)
  //         }

  //         triggerPressStart(e, state.pointerType)

  //         addGlobalListener(document, 'pointermove', onPointerMove, false)
  //         addGlobalListener(document, 'pointerup', onPointerUp, false)
  //         addGlobalListener(document, 'pointercancel', onPointerCancel, false)
  //       }
  //     }

  //     pressProps.onMouseDown = (e) => {
  //       if (!e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       if (e.button === 0) {
  //         // Chrome and Firefox on touch Windows devices require mouse down events
  //         // to be canceled in addition to pointer events, or an extra asynchronous
  //         // focus event will be fired.
  //         if (shouldPreventDefault(e.currentTarget as Element)) {
  //           e.preventDefault()
  //         }

  //         e.stopPropagation()
  //       }
  //     }

  //     pressProps.onPointerUp = (e) => {
  //       // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
  //       if (
  //         !e.currentTarget.contains(e.target as Element) ||
  //         state.pointerType === 'virtual'
  //       ) {
  //         return
  //       }

  //       // Only handle left clicks
  //       // Safari on iOS sometimes fires pointerup events, even
  //       // when the touch isn't over the target, so double check.
  //       if (e.button === 0 && isOverTarget(e, e.currentTarget)) {
  //         triggerPressUp(e, state.pointerType || e.pointerType)
  //       }
  //     }

  //     // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
  //     // Use pointer move events instead to implement our own hit testing.
  //     // See https://bugs.webkit.org/show_bug.cgi?id=199803
  //     const onPointerMove = (e: PointerEvent) => {
  //       if (e.pointerId !== state.activePointerId) {
  //         return
  //       }

  //       if (isOverTarget(e, state.target)) {
  //         if (!state.isOverTarget) {
  //           state.isOverTarget = true
  //           triggerPressStart(createEvent(state.target, e), state.pointerType)
  //         }
  //       } else if (state.isOverTarget) {
  //         state.isOverTarget = false
  //         triggerPressEnd(
  //           createEvent(state.target, e),
  //           state.pointerType,
  //           false,
  //         )
  //         if (propsRef.current.shouldCancelOnPointerExit) {
  //           cancel(e)
  //         }
  //       }
  //     }

  //     const onPointerUp = (e: PointerEvent) => {
  //       if (
  //         e.pointerId === state.activePointerId &&
  //         state.isPressed &&
  //         e.button === 0
  //       ) {
  //         if (isOverTarget(e, state.target)) {
  //           triggerPressEnd(createEvent(state.target, e), state.pointerType)
  //         } else if (state.isOverTarget) {
  //           triggerPressEnd(
  //             createEvent(state.target, e),
  //             state.pointerType,
  //             false,
  //           )
  //         }

  //         state.isPressed = false
  //         state.isOverTarget = false
  //         state.activePointerId = null
  //         state.pointerType = null
  //         removeAllGlobalListeners()
  //         if (!allowTextSelectionOnPress) {
  //           restoreTextSelection(state.target)
  //         }
  //       }
  //     }

  //     const onPointerCancel = (e: PointerEvent) => {
  //       cancel(e)
  //     }

  //     pressProps.onDragStart = (e) => {
  //       if (!e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
  //       cancel(e)
  //     }
  //   } else {
  //     pressProps.onMouseDown = (e) => {
  //       // Only handle left clicks
  //       if (e.button !== 0 || !e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       // Due to browser inconsistencies, especially on mobile browsers, we prevent
  //       // default on mouse down and handle focusing the pressable element ourselves.
  //       if (shouldPreventDefault(e.currentTarget)) {
  //         e.preventDefault()
  //       }

  //       e.stopPropagation()
  //       if (state.ignoreEmulatedMouseEvents) {
  //         return
  //       }

  //       state.isPressed = true
  //       state.isOverTarget = true
  //       state.target = e.currentTarget
  //       state.pointerType = isVirtualClick(e.nativeEvent) ? 'virtual' : 'mouse'

  //       if (!isDisabled && !preventFocusOnPress) {
  //         focusWithoutScrolling(e.currentTarget)
  //       }

  //       triggerPressStart(e, state.pointerType)

  //       addGlobalListener(document, 'mouseup', onMouseUp, false)
  //     }

  //     pressProps.onMouseEnter = (e) => {
  //       if (!e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       e.stopPropagation()
  //       if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
  //         state.isOverTarget = true
  //         triggerPressStart(e, state.pointerType)
  //       }
  //     }

  //     pressProps.onMouseLeave = (e) => {
  //       if (!e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       e.stopPropagation()
  //       if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
  //         state.isOverTarget = false
  //         triggerPressEnd(e, state.pointerType, false)
  //         if (propsRef.current.shouldCancelOnPointerExit) {
  //           cancel(e)
  //         }
  //       }
  //     }

  //     pressProps.onMouseUp = (e) => {
  //       if (!e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       if (!state.ignoreEmulatedMouseEvents && e.button === 0) {
  //         triggerPressUp(e, state.pointerType)
  //       }
  //     }

  //     const onMouseUp = (e: MouseEvent) => {
  //       // Only handle left clicks
  //       if (e.button !== 0) {
  //         return
  //       }

  //       state.isPressed = false
  //       removeAllGlobalListeners()

  //       if (state.ignoreEmulatedMouseEvents) {
  //         state.ignoreEmulatedMouseEvents = false
  //         return
  //       }

  //       if (isOverTarget(e, state.target)) {
  //         triggerPressEnd(createEvent(state.target, e), state.pointerType)
  //       } else if (state.isOverTarget) {
  //         triggerPressEnd(
  //           createEvent(state.target, e),
  //           state.pointerType,
  //           false,
  //         )
  //       }

  //       state.isOverTarget = false
  //     }

  //     pressProps.onTouchStart = (e) => {
  //       if (!e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       e.stopPropagation()
  //       const touch = getTouchFromEvent(e.nativeEvent)
  //       if (!touch) {
  //         return
  //       }
  //       state.activePointerId = touch.identifier
  //       state.ignoreEmulatedMouseEvents = true
  //       state.isOverTarget = true
  //       state.isPressed = true
  //       state.target = e.currentTarget
  //       state.pointerType = 'touch'

  //       // Due to browser inconsistencies, especially on mobile browsers, we prevent default
  //       // on the emulated mouse event and handle focusing the pressable element ourselves.
  //       if (!isDisabled && !preventFocusOnPress) {
  //         focusWithoutScrolling(e.currentTarget)
  //       }

  //       if (!allowTextSelectionOnPress) {
  //         disableTextSelection(state.target)
  //       }

  //       triggerPressStart(e, state.pointerType)

  //       addGlobalListener(window, 'scroll', onScroll, true)
  //     }

  //     pressProps.onTouchMove = (e) => {
  //       if (!e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       e.stopPropagation()
  //       if (!state.isPressed) {
  //         return
  //       }

  //       const touch = getTouchById(e.nativeEvent, state.activePointerId)
  //       if (touch && isOverTarget(touch, e.currentTarget)) {
  //         if (!state.isOverTarget) {
  //           state.isOverTarget = true
  //           triggerPressStart(e, state.pointerType)
  //         }
  //       } else if (state.isOverTarget) {
  //         state.isOverTarget = false
  //         triggerPressEnd(e, state.pointerType, false)
  //         if (propsRef.current.shouldCancelOnPointerExit) {
  //           cancel(e)
  //         }
  //       }
  //     }

  //     pressProps.onTouchEnd = (e) => {
  //       if (!e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       e.stopPropagation()
  //       if (!state.isPressed) {
  //         return
  //       }

  //       const touch = getTouchById(e.nativeEvent, state.activePointerId)
  //       if (touch && isOverTarget(touch, e.currentTarget)) {
  //         triggerPressUp(e, state.pointerType)
  //         triggerPressEnd(e, state.pointerType)
  //       } else if (state.isOverTarget) {
  //         triggerPressEnd(e, state.pointerType, false)
  //       }

  //       state.isPressed = false
  //       state.activePointerId = null
  //       state.isOverTarget = false
  //       state.ignoreEmulatedMouseEvents = true
  //       if (!allowTextSelectionOnPress) {
  //         restoreTextSelection(state.target)
  //       }
  //       removeAllGlobalListeners()
  //     }

  //     pressProps.onTouchCancel = (e) => {
  //       if (!e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       e.stopPropagation()
  //       if (state.isPressed) {
  //         cancel(e)
  //       }
  //     }

  //     const onScroll = (e: Event) => {
  //       if (state.isPressed && (e.target as Element).contains(state.target)) {
  //         cancel({
  //           currentTarget: state.target,
  //           shiftKey: false,
  //           ctrlKey: false,
  //           metaKey: false,
  //           altKey: false,
  //         })
  //       }
  //     }

  //     pressProps.onDragStart = (e) => {
  //       if (!e.currentTarget.contains(e.target as Element)) {
  //         return
  //       }

  //       cancel(e)
  //     }
  //   }

  //   return pressProps
  // }, [
  //   addGlobalListener,
  //   isDisabled,
  //   preventFocusOnPress,
  //   removeAllGlobalListeners,
  //   allowTextSelectionOnPress,
  // ])

  useEffect(() => {
    return () => {
      if (!allowTextSelectionOnPress) {
        restoreTextSelection(ref.current.target)
      }
    }
  }, [allowTextSelectionOnPress])

  return {
    isPressed: isPressedProp || isPressed,
    pressProps: {...domProps},
  }
}
