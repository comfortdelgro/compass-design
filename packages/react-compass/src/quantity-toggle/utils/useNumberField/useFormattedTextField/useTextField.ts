/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {ChangeEvent, RefObject} from 'react'
import mergeProps from '../../mergeProps'
import {AriaTextFieldProps} from '../../types'
import useFocusable from '../../useFocusable'

export interface TextFieldAria {
  inputProps: AriaTextFieldProps
}

export function useTextField(
  props: AriaTextFieldProps,
  ref: RefObject<HTMLElement>,
): TextFieldAria {
  const {
    type = 'text',
    validationState,
    isDisabled = false,
    isRequired = false,
    isReadOnly = false,
    onChange = () => {
      //
    },
  } = props

  const {focusableProps} = useFocusable(props, ref)

  return {
    inputProps: mergeProps(props, {
      type: type,
      pattern: props.pattern,
      disabled: isDisabled,
      readOnly: isReadOnly,
      'aria-required': isRequired || undefined,
      'aria-invalid': validationState === 'invalid' || undefined,
      'aria-errormessage': props['aria-errormessage'],
      'aria-activedescendant': props['aria-activedescendant'],
      'aria-autocomplete': props['aria-autocomplete'],
      'aria-haspopup': props['aria-haspopup'],
      value: props.value,
      defaultValue: props.value ? undefined : props.defaultValue,
      onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
      autoComplete: props.autoComplete,
      maxLength: props.maxLength,
      minLength: props.minLength,
      name: props.name,
      placeholder: props.placeholder,
      inputMode: props.inputMode,

      // Clipboard events
      onCopy: props.onCopy,
      onCut: props.onCut,
      onPaste: props.onPaste,

      // Composition events
      onCompositionEnd: props.onCompositionEnd,
      onCompositionStart: props.onCompositionStart,
      onCompositionUpdate: props.onCompositionUpdate,

      // Selection events
      onSelect: props.onSelect,

      // Input events
      onBeforeInput: props.onBeforeInput,
      onInput: props.onInput,
      ...focusableProps,
    }),
  }
}
