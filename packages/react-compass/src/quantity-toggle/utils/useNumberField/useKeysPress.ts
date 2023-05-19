/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/unbound-method */

import {useEffect, useRef} from 'react'
import {
  DOMAttributes,
  InputBase,
  RangeInputBase,
  Validation,
  ValueBase,
} from '../types'

export interface KeysPressProps
  extends InputBase,
    Validation,
    ValueBase<number>,
    RangeInputBase<number> {
  textValue?: string
  onIncrement?: () => void
  onDecrement?: () => void
  onIncrementPage?: () => void
  onDecrementPage?: () => void
  onDecrementToMin?: () => void
  onIncrementToMax?: () => void
}

export function useKeysPress(props: KeysPressProps): DOMAttributes {
  const _async = useRef<number>()
  const {
    isReadOnly,
    onIncrement,
    onDecrement,
    onIncrementPage,
    onDecrementPage,
    onDecrementToMin,
    onIncrementToMax,
  } = props

  const propsRef = useRef(props)
  propsRef.current = props

  const clearAsync = () => clearTimeout(_async.current)

  useEffect(() => {
    return () => clearAsync()
  }, [])

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || isReadOnly) {
      return
    }

    switch (e.key) {
      case 'PageUp':
        if (onIncrementPage) {
          e.preventDefault()
          onIncrementPage()
        }
        break
      // fallthrough!
      case 'ArrowUp':
      case 'Up':
        if (onIncrement) {
          e.preventDefault()
          onIncrement()
        }
        break
      case 'PageDown':
        if (onDecrementPage) {
          e.preventDefault()
          onDecrementPage()
        }
        break
      // fallthrough
      case 'ArrowDown':
      case 'Down':
        if (onDecrement) {
          e.preventDefault()
          onDecrement()
        }
        break
      case 'Home':
        if (onDecrementToMin) {
          e.preventDefault()
          onDecrementToMin()
        }
        break
      case 'End':
        if (onIncrementToMax) {
          e.preventDefault()
          onIncrementToMax()
        }
        break
    }
  }

  const isFocused = useRef(false)

  const onFocus = () => {
    isFocused.current = true
  }

  const onBlur = () => {
    isFocused.current = false
  }

  return {
    onKeyDown,
    onFocus,
    onBlur,
  }
}
