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
import {focusManagerSymbol, roleSymbol} from '../constants/focus.constant'
import {
  AriaDateRangePickerProps,
  DateRangePickerAria,
  DateRangePickerState,
} from '../types'
import {createFocusManager, filterDOMProps} from '../utils'
import {useDatePickerGroup} from './useDatePickerGroup'
import {useDescription} from './useDescription'
import {useField} from './useField'
import {useFocusWithin} from './useFocusWithin'
import {useId} from './useId'

export function useDateRangePicker<T extends DateValue>(
  props: AriaDateRangePickerProps<T>,
  state: DateRangePickerState,
  ref: RefObject<Element>,
): DateRangePickerAria {
  const {labelProps, fieldProps, descriptionProps, errorMessageProps} =
    useField({
      ...props,
      labelElementType: 'span',
    })

  const labelledBy = fieldProps['aria-labelledby'] || fieldProps.id

  const {locale} = useLocale()
  const range = state.formatValue(locale, {month: 'long'})
  const description = range
    ? `selectedRangeDescription ${range.start} ${range.end}`
    : ''
  const descProps = useDescription(description)

  const startFieldProps = {
    'aria-label': 'startDate',
    'aria-labelledby': labelledBy,
  }

  const endFieldProps = {
    'aria-label': 'endDate',
    'aria-labelledby': labelledBy,
  }

  const buttonId = useId()
  const dialogId = useId()

  const groupProps = useDatePickerGroup(state, ref)

  const ariaDescribedBy =
    [descProps['aria-describedby'], fieldProps['aria-describedby']]
      .filter(Boolean)
      .join(' ') || undefined
  const focusManager = useMemo(
    () =>
      createFocusManager(ref, {
        // Exclude the button from the focus manager.
        accept: (element) => element.id !== buttonId,
      }),
    [ref, buttonId],
  )

  const commonFieldProps = {
    [focusManagerSymbol]: focusManager,
    [roleSymbol]: 'presentation',
    'aria-describedby': ariaDescribedBy,
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
  }

  const domProps = filterDOMProps(props)

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
    // @ts-ignore
    startFieldProps: {
      ...startFieldProps,
      ...commonFieldProps,
      value: state.value?.start,
      onChange: (start) => state.setDateTime('start', start),
      autoFocus: props.autoFocus,
    },
    // @ts-ignore
    endFieldProps: {
      ...endFieldProps,
      ...commonFieldProps,
      value: state.value?.end,
      onChange: (end) => state.setDateTime('end', end),
    },
    descriptionProps,
    errorMessageProps,
    calendarProps: {
      autoFocus: true,
      value: state.dateRange,
      // @ts-ignore
      onChange: state.setDateRange,
      minValue: props.minValue,
      maxValue: props.maxValue,
      isDisabled: props.isDisabled,
      isReadOnly: props.isReadOnly,
      isDateUnavailable: props.isDateUnavailable,
      allowsNonContiguousRanges: props.allowsNonContiguousRanges,
      defaultFocusedValue: state.dateRange ? undefined : props.placeholderValue,
      validationState: state.validationState,
      errorMessage: props.errorMessage,
    },
  }
}
