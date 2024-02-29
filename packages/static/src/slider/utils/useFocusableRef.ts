import {RefObject, useImperativeHandle, useRef} from 'react'
import {
  DOMRefValue,
  FocusableElement,
  FocusableRef,
  FocusableRefValue,
} from './types'

export function createDOMRef<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
): DOMRefValue<T> {
  return {
    UNSAFE_getDOMNode() {
      return ref.current as T
    },
  }
}

export function createFocusableRef<T extends HTMLElement = HTMLElement>(
  domRef: RefObject<T>,
  focusableRef: RefObject<FocusableElement> = domRef,
): FocusableRefValue<T> {
  return {
    ...createDOMRef(domRef),
    focus() {
      if (focusableRef.current) {
        focusableRef.current.focus()
      }
    },
  }
}

export function useFocusableRef<T extends HTMLElement = HTMLElement>(
  ref: FocusableRef<T>,
  focusableRef?: RefObject<FocusableElement>,
): RefObject<T> {
  const domRef = useRef<T>(null)
  useImperativeHandle(ref, () => createFocusableRef(domRef, focusableRef))
  return domRef
}
