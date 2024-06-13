/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useCallback, useEffect, useRef} from 'react'
import {SpinButtonProps, SpinbuttonAria} from '../types'
import {useGlobalListeners} from './useGlobalListeners'

export function useSpinButton(props: SpinButtonProps): SpinbuttonAria {
  const _async = useRef<number>()
  const {
    value,
    minValue,
    maxValue,
    isReadOnly,
    onIncrement,
    onIncrementPage,
    onDecrement,
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

  const onKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || isReadOnly) {
      return
    }

    switch (e.key) {
      // fall through!
      case 'PageUp':
        if (onIncrementPage) {
          e.preventDefault()
          onIncrementPage()
          break
        }
        break
      // fall through!
      case 'ArrowUp':
      case 'Up':
        if (onIncrement) {
          e.preventDefault()
          onIncrement()
        }
        break
      // fall through!
      case 'PageDown':
        if (onDecrementPage) {
          e.preventDefault()
          onDecrementPage()
          break
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

    return null
  }

  const isFocused = useRef(false)
  const onFocus = () => {
    isFocused.current = true
  }

  const onBlur = () => {
    isFocused.current = false
  }

  // Replace Unicode hyphen-minus (U+002D) with minus sign (U+2212).
  // This ensures that macOS VoiceOver announces it as "minus" even with other characters between the minus sign
  // and the number (e.g. currency symbol). Otherwise it announces nothing because it assumes the character is a hyphen.
  // In addition, replace the empty string with the word "Empty" so that iOS VoiceOver does not read "50%" for an empty field.
  

  const onIncrementPressStart = useCallback(
    (initialStepDelay: number) => {
      clearAsync()

      propsRef.current.onIncrement()
      // Start spinning after initial delay
      _async.current = window.setTimeout(() => {
        if (isNaN(maxValue) || isNaN(value) || value < maxValue) {
          onIncrementPressStart(60)
        }
      }, initialStepDelay)
    },
    [maxValue, value],
  )

  const onDecrementPressStart = useCallback(
    (initialStepDelay: number) => {
      clearAsync()

      propsRef.current.onDecrement()
      _async.current = window.setTimeout(() => {
        if (isNaN(minValue) || isNaN(value) || value > minValue) {
          onDecrementPressStart(60)
        }
      }, initialStepDelay)
    },
    [minValue, value],
  )

  const cancelContextMenu = (e) => {
    e.preventDefault()
  }

  const {addGlobalListener, removeAllGlobalListeners} = useGlobalListeners()

  return {
    spinButtonProps: {
      onKeyDown,
      onFocus,
      onBlur,
    },

    incrementButtonProps: {
      onPressStart: () => {
        onIncrementPressStart(400)
        addGlobalListener(window, 'contextmenu', cancelContextMenu)
      },
      onPressEnd: () => {
        clearAsync()
        removeAllGlobalListeners()
      },
      onFocus,
      onBlur,
    },

    decrementButtonProps: {
      onPressStart: () => {
        onDecrementPressStart(400)
        addGlobalListener(window, 'contextmenu', cancelContextMenu)
      },
      onPressEnd: () => {
        clearAsync()
        removeAllGlobalListeners()
      },
      onFocus,
      onBlur,
    },
  }
}
