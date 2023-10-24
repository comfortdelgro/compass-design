/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {RefObject, useEffect, useRef} from 'react'
import mergeProps from '../../mergeProps'
import {AriaTextFieldProps} from '../../types'
import {useTextField} from './useTextField'

interface FormattedTextFieldState {
  validate: (val: string) => boolean
  setInputValue: (val: string) => void
}

function supportsNativeBeforeInputEvent() {
  return (
    typeof window !== 'undefined' &&
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === 'function'
  )
}

export default function useFormattedTextField(
  props: AriaTextFieldProps,
  state: FormattedTextFieldState,
  inputRef: RefObject<HTMLInputElement> | any,
) {
  const stateRef = useRef(state)
  stateRef.current = state

  useEffect(() => {
    if (!supportsNativeBeforeInputEvent()) {
      return
    }

    const input: any = inputRef.current

    const onBeforeInput = (e: InputEvent) => {
      const state = stateRef.current
      let nextValue!: string
      switch (e.inputType) {
        case 'historyUndo':
        case 'historyRedo':
          return
        case 'deleteContent':
        case 'deleteByCut':
        case 'deleteByDrag':
          nextValue =
            input.value.slice(0, input.selectionStart) +
            input.value.slice(input.selectionEnd)
          break
        case 'deleteContentForward':
          nextValue =
            input.selectionEnd === input.selectionStart
              ? input.value.slice(0, input.selectionStart) +
                input.value.slice(input.selectionEnd + 1)
              : input.value.slice(0, input.selectionStart) +
                input.value.slice(input.selectionEnd)
          break
        case 'deleteContentBackward':
          nextValue =
            input.selectionEnd === input.selectionStart
              ? input.value.slice(0, input.selectionStart - 1) +
                input.value.slice(input.selectionStart)
              : input.value.slice(0, input.selectionStart) +
                input.value.slice(input.selectionEnd)
          break
        case 'deleteSoftLineBackward':
        case 'deleteHardLineBackward':
          nextValue = input.value.slice(input.selectionStart)
          break
        default:
          if (e.data != null) {
            nextValue =
              input.value.slice(0, input.selectionStart) +
              e.data +
              input.value.slice(input.selectionEnd)
          }
          break
      }

      if (nextValue == null || !state.validate(nextValue)) {
        e.preventDefault()
      }
    }

    input.addEventListener('beforeinput', onBeforeInput, false)
    return () => {
      input.removeEventListener('beforeinput', onBeforeInput, false)
    }
  }, [inputRef, stateRef])

  const onBeforeInput = !supportsNativeBeforeInputEvent()
    ? (e: any) => {
        const nextValue =
          e.target.value.slice(0, e.target.selectionStart) +
          e.data +
          e.target.value.slice(e.target.selectionEnd)

        if (!state.validate(nextValue)) {
          e.preventDefault()
        }
      }
    : null

  const {inputProps: textFieldProps} = useTextField(props, inputRef)

  const compositionStartState = useRef<any>(null)

  return {
    ...mergeProps(textFieldProps, {
      onBeforeInput,
      onCompositionStart() {
        const {value, selectionStart, selectionEnd} = inputRef.current
        compositionStartState.current = {value, selectionStart, selectionEnd}
      },
      onCompositionEnd() {
        if (!state.validate(inputRef.current.value)) {
          const {value, selectionStart, selectionEnd} =
            compositionStartState.current
          inputRef.current.value = value
          inputRef.current.setSelectionRange(selectionStart, selectionEnd)
          state.setInputValue(value)
        }
      },
    }),
  }
}
