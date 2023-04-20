import {createContext, MutableRefObject} from 'react'
import {FocusableElement, PressProps} from '../types'

interface IPressResponderContext extends PressProps {
  register(): void
  ref?: MutableRefObject<FocusableElement>
}

export const PressResponderContext =
  createContext<IPressResponderContext | null>(null)
PressResponderContext.displayName = 'PressResponderContext'
