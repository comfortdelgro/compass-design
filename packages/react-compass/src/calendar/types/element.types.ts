import {ElementType, JSXElementConstructor, ReactNode} from 'react'
import {FocusableProps} from './common.types'
import {PressEvents} from './event.types'
import {AriaLabelingProps, DOMProps} from './label.types'

export interface AriaButtonElementTypeProps<T extends ElementType = 'button'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  elementType?: T | JSXElementConstructor<any>
}

export interface LinkButtonProps<T extends ElementType = 'button'>
  extends AriaButtonElementTypeProps<T> {
  href?: string
  target?: string
  rel?: string
}

export interface FocusableDOMProps extends DOMProps {
  excludeFromTabOrder?: boolean
}

export interface AriaBaseButtonProps
  extends FocusableDOMProps,
    AriaLabelingProps {
  'aria-expanded'?: boolean | 'true' | 'false'
  'aria-haspopup'?:
    | boolean
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog'
    | 'true'
    | 'false'
  'aria-controls'?: string
  'aria-pressed'?: boolean | 'true' | 'false' | 'mixed'
  type?: 'button' | 'submit' | 'reset'
}

export interface ButtonProps extends PressEvents, FocusableProps {
  isDisabled?: boolean
  children?: ReactNode
}

export type Modality = 'keyboard' | 'pointer' | 'virtual'
