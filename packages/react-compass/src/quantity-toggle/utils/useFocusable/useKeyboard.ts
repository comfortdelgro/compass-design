/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

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
