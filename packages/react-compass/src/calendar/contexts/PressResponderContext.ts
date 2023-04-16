import {createContext, MutableRefObject} from 'react'
import {PressProps} from '../types/press.types'
import {FocusableElement} from '../types/scroll.types'

interface IPressResponderContext extends PressProps {
  register(): void
  ref?: MutableRefObject<FocusableElement>
}

export const PressResponderContext =
  createContext<IPressResponderContext | null>(null)
PressResponderContext.displayName = 'PressResponderContext'
