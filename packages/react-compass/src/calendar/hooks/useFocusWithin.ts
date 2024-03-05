/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {useCallback, useRef} from 'react'
import {FocusWithinProps, FocusWithinResult} from './../types'
import {useSyntheticBlurEvent} from './useSyntheticBlurEvent'

export function useFocusWithin(props: FocusWithinProps): FocusWithinResult {
  const {isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange} = props
  const state = useRef({
    isFocusWithin: false,
  })

  const onBlur = useCallback(
    (e: FocusEvent) => {
      if (
        state.current.isFocusWithin &&
        !(e.currentTarget as Element).contains(e.relatedTarget as Element)
      ) {
        state.current.isFocusWithin = false

        if (onBlurWithin) {
          onBlurWithin(e)
        }

        if (onFocusWithinChange) {
          onFocusWithinChange(false)
        }
      }
    },
    [onBlurWithin, onFocusWithinChange, state],
  )
  // @ts-ignore
  const onSyntheticFocus = useSyntheticBlurEvent(onBlur)
  const onFocus = useCallback(
    (e: FocusEvent) => {
      // Double check that document.activeElement actually matches e.target in case a previously chained
      // focus handler already moved focus somewhere else.
      if (!state.current.isFocusWithin && document.activeElement === e.target) {
        if (onFocusWithin) {
          onFocusWithin(e)
        }

        if (onFocusWithinChange) {
          onFocusWithinChange(true)
        }

        state.current.isFocusWithin = true
        // @ts-ignore
        onSyntheticFocus(e)
      }
    },
    [onFocusWithin, onFocusWithinChange, onSyntheticFocus],
  )

  if (isDisabled) {
    return {
      focusWithinProps: {
        onFocus: null,
        // @ts-ignore
        onBlur: null,
      },
    }
  }

  return {
    focusWithinProps: {
      // @ts-ignore
      onFocus,
      onBlur,
    },
  }
}
