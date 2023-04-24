import {RefObject} from 'react'
import {DOMAttributes} from './calendar.types'

export interface PressHookProps extends PressProps {
  ref?: RefObject<Element>
}

export interface PressProps extends PressEvents {
  isPressed?: boolean
  isDisabled?: boolean
  preventFocusOnPress?: boolean
  shouldCancelOnPointerExit: boolean
  allowTextSelectionOnPress?: boolean
}

export interface PressEvents {
  onPress?: (e: PressEvent) => void
  onPressStart?: (e: PressEvent) => void
  onPressEnd?: (e: PressEvent) => void
  onPressChange?: (isPressed: boolean) => void
  onPressUp?: (e: PressEvent) => void
}

export interface PressEvent {
  type: 'pressstart' | 'pressend' | 'pressup' | 'press'
  pointerType: PointerType
  target: Element
  shiftKey: boolean
  ctrlKey: boolean
  metaKey: boolean
  altKey: boolean
}

export type PointerType = 'mouse' | 'pen' | 'touch' | 'keyboard' | 'virtual'

export interface PressResult {
  isPressed: boolean
  pressProps: DOMAttributes
}
