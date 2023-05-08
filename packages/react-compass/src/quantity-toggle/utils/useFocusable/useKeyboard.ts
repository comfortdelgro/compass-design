import {DOMAttributes, KeyboardEvents} from '../types'
import {createEventHandler} from './createEventHandler'

export interface KeyboardProps extends KeyboardEvents {
  isDisabled?: boolean
}

export interface KeyboardResult {
  keyboardProps: DOMAttributes
}

export function useKeyboard(props: KeyboardProps): KeyboardResult {
  return {
    keyboardProps: props.isDisabled
      ? {}
      : {
          onKeyDown: createEventHandler(props.onKeyDown),
          onKeyUp: createEventHandler(props.onKeyUp),
        },
  }
}
