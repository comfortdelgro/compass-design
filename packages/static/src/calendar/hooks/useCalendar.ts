/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import {useRef} from 'react'
import {CalendarDate} from '../../internationalized/date'
import {CalendarProps} from '../calendar'
import {
  AriaLabelingProps,
  CalendarAria,
  CalendarState,
  DOMProps,
  RangeCalendarState,
} from '../types'
import {filterDOMProps, hookData} from '../utils'
import {useLabels} from './useLabels'
import {useVisibleRangeDescription} from './useVisibleRangeDescription'

export function useCalendar(
  props: CalendarProps & DOMProps & AriaLabelingProps,
  state: CalendarState | RangeCalendarState,
): CalendarAria {
  const domProps = filterDOMProps(props)

  const title = useVisibleRangeDescription(
    state.visibleRange?.start as CalendarDate,
    state.timeZone ?? 'UTC',
  )
  const visibleRangeDescription = useVisibleRangeDescription(
    state.visibleRange?.end as CalendarDate,
    state.timeZone ?? 'UTC',
  )

  // Pass the label to the child grid elements.
  hookData.set(state, {
    ariaLabel: props['aria-label'] ?? '',
    ariaLabelledBy: props['aria-labelledby'] ?? '',
    errorMessageId: '',
    selectedDateDescription: '',
  })

  // If the next or previous buttons become disabled while they are focused, move focus to the calendar body.
  const nextFocused = useRef(false)
  const nextDisabled = props.isDisabled || state?.isNextVisibleRangeInvalid?.()
  if (nextDisabled && nextFocused.current) {
    nextFocused.current = false
    state?.setFocused?.(true)
  }

  const previousFocused = useRef(false)
  const previousDisabled =
    props.isDisabled || state.isPreviousVisibleRangeInvalid?.()
  if (previousDisabled && previousFocused.current) {
    previousFocused.current = false
    state.setFocused?.(true)
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const labelProps = useLabels({
    id: props.id as string,
    'aria-label': [props['aria-label'], visibleRangeDescription]
      .filter(Boolean)
      .join(', '),
    'aria-labelledby': props['aria-labelledby'],
  })

  return {
    title,
    calendarProps: {
      ...domProps,
      ...labelProps,
      role: 'group',
      'aria-describedby': props['aria-describedby'] || undefined,
    },
    nextButtonProps: {
      onPress: () => state.focusNextPage?.(),
      'aria-label': 'Next',
      isDisabled: nextDisabled as boolean,
      onFocus: () => (nextFocused.current = true),
      onBlur: () => (nextFocused.current = false),
    },
    prevButtonProps: {
      onPress: () => state.focusPreviousPage?.(),
      'aria-label': 'Previous',
      isDisabled: previousDisabled as boolean,
      onFocus: () => (previousFocused.current = true),
      onBlur: () => (previousFocused.current = false),
    },
  }
}
