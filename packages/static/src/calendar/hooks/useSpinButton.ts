/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable prefer-const */
import {useCallback, useEffect, useRef} from 'react'
import {SpinButtonProps, SpinbuttonAria} from '../types'
import {useGlobalListeners} from './useGlobalListeners'

export function useSpinButton(props: SpinButtonProps): SpinbuttonAria {
  const _async = useRef<number>()
  let {
    value,
    textValue,
    minValue,
    maxValue,
    isDisabled,
    isReadOnly,
    isRequired,
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

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => clearAsync()
  }, [])

  // @ts-ignore
  let onKeyDown = (e) => {
    // @ts-ignore
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || isReadOnly) {
      return
    }

    switch (e.key) {
      // fall through!
      case 'PageUp':
        if (onIncrementPage) {
          // @ts-ignore
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

  let isFocused = useRef(false)
  let onFocus = () => {
    isFocused.current = true
  }

  let onBlur = () => {
    isFocused.current = false
  }

  // Replace Unicode hyphen-minus (U+002D) with minus sign (U+2212).
  // This ensures that macOS VoiceOver announces it as "minus" even with other characters between the minus sign
  // and the number (e.g. currency symbol). Otherwise it announces nothing because it assumes the character is a hyphen.
  // In addition, replace the empty string with the word "Empty" so that iOS VoiceOver does not read "50%" for an empty field.
  textValue =
    textValue === ''
      ? 'Empty'
      : (textValue || `${value}`).replace('-', '\u2212')

  const onIncrementPressStart = useCallback(
    (initialStepDelay: number) => {
      clearAsync()
      // @ts-ignore
      propsRef.current.onIncrement()
      // Start spinning after initial delay
      _async.current = window.setTimeout(() => {
        // @ts-ignore
        if (isNaN(maxValue) || isNaN(value) || value < maxValue) {
          onIncrementPressStart(60)
        }
      }, initialStepDelay)
    },
    [onIncrement, maxValue, value],
  )

  const onDecrementPressStart = useCallback(
    (initialStepDelay: number) => {
      clearAsync()
      // @ts-ignore
      propsRef.current.onDecrement()
      _async.current = window.setTimeout(() => {
        // @ts-ignore
        if (isNaN(minValue) || isNaN(value) || value > minValue) {
          onDecrementPressStart(60)
        }
      }, initialStepDelay)
    },
    [onDecrement, minValue, value],
  )

  // @ts-ignore
  let cancelContextMenu = (e) => {
    e.preventDefault()
  }

  let {addGlobalListener, removeAllGlobalListeners} = useGlobalListeners()

  return {
    spinButtonProps: {
      role: 'spinbutton',
      // @ts-ignore
      'aria-valuenow': !isNaN(value) ? value : null,
      'aria-valuetext': textValue,
      'aria-valuemin': minValue,
      'aria-valuemax': maxValue,
      // @ts-ignore
      'aria-disabled': isDisabled || null,
      'aria-readonly': isReadOnly || null,
      'aria-required': isRequired || null,
      onKeyDown,
      onFocus,
      onBlur,
    },
    // @ts-ignore
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
    // @ts-ignore
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
