import {createContext, MutableRefObject} from 'react'
import {PressProps} from '../types'

export interface IPressResponderContext extends PressProps {
  register(): void
  ref?: MutableRefObject<unknown>
}

export const PressResponderContext =
  createContext<IPressResponderContext | null>(null)
PressResponderContext.displayName = 'PressResponderContext'
