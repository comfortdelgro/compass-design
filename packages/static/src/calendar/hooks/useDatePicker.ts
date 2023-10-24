/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {RefObject, useMemo} from 'react'
import {DateValue} from '../../internationalized/date'
import {useLocale} from '../../internationalized/i18n'
import {roleSymbol} from '../constants/focus.constant'
import {AriaDatePickerProps, DatePickerAria, DatePickerState} from '../types'
import {createFocusManager, filterDOMProps} from '../utils'
import {useDatePickerGroup} from './useDatePickerGroup'
import {useDescription} from './useDescription'
import {useField} from './useField'
import {useFocusWithin} from './useFocusWithin'
import {useId} from './useId'

export function useDatePicker<T extends DateValue>(
  props: AriaDatePickerProps<T>,
  state: DatePickerState,
  ref: RefObject<Element>,
): DatePickerAria {
  const buttonId = useId()
  const dialogId = useId()
  const fieldId = useId()

  const {labelProps, fieldProps, descriptionProps, errorMessageProps} =
    useField({
      ...props,
      labelElementType: 'span',
    })

  const groupProps = useDatePickerGroup(state, ref)

  const labelledBy = fieldProps['aria-labelledby'] || fieldProps.id

  const {locale} = useLocale()
  const date = state.formatValue(locale, {month: 'long'})
  const description = date ? `selectedDateDescription ${date}` : ''
  const descProps = useDescription(description)
  const ariaDescribedBy =
    [descProps['aria-describedby'], fieldProps['aria-describedby']]
      .filter(Boolean)
      .join(' ') || undefined
  const domProps = filterDOMProps(props)
  const focusManager = useMemo(() => createFocusManager(ref), [ref])

  const {focusWithinProps} = useFocusWithin({
    ...props,
    isDisabled: state.isOpen,
    // @ts-ignore
    onBlurWithin: props.onBlur,
    // @ts-ignore
    onFocusWithin: props.onFocus,
    onFocusWithinChange: props.onFocusChange,
  })

  return {
    // @ts-ignore
    groupProps: {
      ...domProps,
      ...groupProps,
      ...fieldProps,
      ...descProps,
      ...focusWithinProps,
      ...{
        role: 'group',
        'aria-disabled': props.isDisabled || null,
        'aria-labelledby': labelledBy,
        'aria-describedby': ariaDescribedBy,
        onKeyDown(e: KeyboardEvent) {
          if (state.isOpen) {
            return
          }

          if (props.onKeyDown) {
            props.onKeyDown(e)
          }
        },
        onKeyUp(e: KeyboardEvent) {
          if (state.isOpen) {
            return
          }

          if (props.onKeyUp) {
            props.onKeyUp(e)
          }
        },
      },
    },
    // @ts-ignore
    labelProps: {
      ...labelProps,
      onClick: () => {
        focusManager.focusFirst()
      },
    },
    // @ts-ignore
    fieldProps: {
      ...fieldProps,
      id: fieldId,
      [roleSymbol]: 'presentation',
      'aria-describedby': ariaDescribedBy,
      value: state.value,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      onChange: state.setValue,
      minValue: props.minValue,
      maxValue: props.maxValue,
      placeholderValue: props.placeholderValue,
      hideTimeZone: props.hideTimeZone,
      hourCycle: props.hourCycle,
      granularity: props.granularity,
      isDisabled: props.isDisabled,
      isReadOnly: props.isReadOnly,
      isRequired: props.isRequired,
      validationState: state.validationState,
      autoFocus: props.autoFocus,
    },
    // @ts-ignore
    descriptionProps,
    // @ts-ignore
    errorMessageProps,
    // @ts-ignore
    buttonProps: {
      ...descProps,
      id: buttonId,
      'aria-haspopup': 'dialog',
      'aria-label': 'calendar',
      'aria-labelledby': `${labelledBy} ${buttonId}`,
      'aria-describedby': ariaDescribedBy,
      'aria-expanded': state.isOpen || undefined,
      onPress: () => state.setOpen(true),
    },
    // @ts-ignore
    dialogProps: {
      id: dialogId,
      'aria-labelledby': `${labelledBy} ${buttonId}`,
    },
    calendarProps: {
      // @ts-ignore
      autoFocus: true,
      value: state.dateValue,
      // @ts-ignore
      onChange: state.setDateValue,
      minValue: props.minValue,
      maxValue: props.maxValue,
      // @ts-ignore
      isDisabled: props.isDisabled,
      isReadOnly: props.isReadOnly,
      isDateUnavailable: props.isDateUnavailable,
      defaultFocusedValue: state.dateValue ? undefined : props.placeholderValue,
      validationState: state.validationState,
      errorMessage: props.errorMessage,
    },
  }
}
