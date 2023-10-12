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
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import {RefObject, useEffect, useMemo, useRef} from 'react'
import {DateValue} from '../../internationalized/date'
import {focusManagerSymbol, roleSymbol} from '../constants/focus.constant'
import {
  AriaDateFieldOptions,
  DOMAttributes,
  DateFieldAria,
  DateFieldState,
} from '../types'
import {createFocusManager, filterDOMProps, hookData} from '../utils'
import {useDatePickerGroup} from './useDatePickerGroup'
import {useDescription} from './useDescription'
import {useField} from './useField'
import {useFocusWithin} from './useFocusWithin'

export function useDateField<T extends DateValue>(
  props: AriaDateFieldOptions<T>,
  state: DateFieldState,
  ref: RefObject<Element>,
): DateFieldAria {
  const {labelProps, fieldProps, descriptionProps, errorMessageProps} =
    useField({
      ...props,
      labelElementType: 'span',
    })

  const {focusWithinProps} = useFocusWithin({
    ...props,
    onBlurWithin: (e: FocusEvent) => {
      state.confirmPlaceholder()

      if (props.onBlur) {
        // @ts-ignore
        props.onBlur(e)
      }
    },
    // @ts-ignore
    onFocusWithin: props.onFocus,
    onFocusWithinChange: props.onFocusChange,
  })

  const message =
    state.maxGranularity === 'hour'
      ? 'selectedTimeDescription'
      : 'selectedDateDescription'
  const description = state.value ? message : ''
  const descProps = useDescription(description)

  // If within a date picker or date range picker, the date field will have role="presentation" and an aria-describedby
  // will be passed in that references the value (e.g. entire range). Otherwise, add the field's value description.
  const describedBy =
    // @ts-ignore
    props[roleSymbol] === 'presentation'
      ? fieldProps['aria-describedby']
      : [descProps['aria-describedby'], fieldProps['aria-describedby']]
          .filter(Boolean)
          .join(' ') || undefined
  // @ts-ignore
  const propsFocusManager = props[focusManagerSymbol]
  const focusManager = useMemo(
    // @ts-ignore
    () => propsFocusManager || createFocusManager(ref),
    [propsFocusManager, ref],
  )
  const groupProps = useDatePickerGroup(
    state,
    ref,
    // @ts-ignore
    props[roleSymbol] === 'presentation',
  )
  // @ts-ignore
  hookData.set(state, {
    ariaLabel: '',
    ariaLabelledBy:
      [props['aria-labelledby'], labelProps.id].filter(Boolean).join(' ') || '',
    //ariaDescribedBy: describedBy,
    focusManager,
  })

  const autoFocusRef = useRef(props.autoFocus)

  let fieldDOMProps: DOMAttributes
  // @ts-ignore
  if (props[roleSymbol] === 'presentation') {
    // @ts-ignore
    fieldDOMProps = {
      role: 'presentation',
    }
  } else {
    // @ts-ignore
    fieldDOMProps = {
      ...fieldProps,
      ...{
        role: 'group',
        'aria-disabled': props.isDisabled || undefined,
        'aria-describedby': describedBy,
      },
    }
  }

  useEffect(() => {
    if (autoFocusRef.current) {
      // @ts-ignore
      focusManager.focusFirst()
    }
    autoFocusRef.current = false
  }, [focusManager])

  const domProps = filterDOMProps(props)
  return {
    // @ts-ignore
    labelProps: {
      ...labelProps,
      onClick: () => {
        focusManager.focusFirst()
      },
    },
    // @ts-ignore
    fieldProps: {
      ...domProps,
      ...fieldDOMProps,
      ...groupProps,
      ...focusWithinProps,
      ...{
        onKeyDown(e: KeyboardEvent) {
          if (props.onKeyDown) {
            props.onKeyDown(e)
          }
        },
        onKeyUp(e: KeyboardEvent) {
          if (props.onKeyUp) {
            props.onKeyUp(e)
          }
        },
      },
    },
    descriptionProps,
    errorMessageProps,
  }
}
