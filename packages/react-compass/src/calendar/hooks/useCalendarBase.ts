/* eslint-disable react-hooks/rules-of-hooks */
/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import {useRef} from 'react'
import {
  AriaLabelingProps,
  CalendarAria,
  CalendarPropsBase,
  CalendarState,
  DOMProps,
  RangeCalendarState,
} from '../types'
import {filterDOMProps, hookData} from '../utils'
import {useLabels} from './useLabels'
import {useSlotId} from './useSlotId'
import {useVisibleRangeDescription} from './useVisibleRangeDescription'

export function useCalendarBase(
  props: CalendarPropsBase & DOMProps & AriaLabelingProps,
  state: CalendarState | RangeCalendarState,
): CalendarAria {
  const domProps = filterDOMProps(props)

  if (state.visibleRange == undefined) return {} as CalendarAria

  const title = useVisibleRangeDescription(
    state.visibleRange.start!,
    state.timeZone ?? 'UTC',
  )
  const visibleRangeDescription = useVisibleRangeDescription(
    state.visibleRange.start!,
    state.timeZone ?? 'UTC',
  )

  const errorMessageId = useSlotId([
    Boolean(props.errorMessage),
    props.validationState,
  ])

  // Pass the label to the child grid elements.
  hookData.set(state, {
    ariaLabel: props['aria-label'] ?? '',
    // @ts-ignore
    ariaLabelledBy: props['aria-labelledby'],
    errorMessageId,
    selectedDateDescription: '',
  })

  // If the next or previous buttons become disabled while they are focused, move focus to the calendar body.
  const nextFocused = useRef(false)
  const nextDisabled = props.isDisabled || state.isNextVisibleRangeInvalid?.()
  if (nextDisabled && nextFocused.current) {
    nextFocused.current = false
    state.setFocused?.(true)
  }

  const previousFocused = useRef(false)
  const previousDisabled =
    props.isDisabled || state.isPreviousVisibleRangeInvalid?.()
  if (previousDisabled && previousFocused.current) {
    previousFocused.current = false
    state.setFocused?.(true)
  }

  const labelProps = useLabels({
    id: props.id!,
    'aria-label': [props['aria-label'], visibleRangeDescription]
      .filter(Boolean)
      .join(', '),
    'aria-labelledby': props['aria-labelledby'],
  })

  return {
    calendarProps: {
      ...domProps,
      ...labelProps,
      ...{
        role: 'group',
        'aria-describedby': props['aria-describedby'] || undefined,
      },
    },
    nextButtonProps: {
      onPress: () => state.focusNextPage?.(),
      'aria-label': 'next',
      isDisabled: nextDisabled as boolean,
      onFocus: () => (nextFocused.current = true),
      onBlur: () => (nextFocused.current = false),
    },
    prevButtonProps: {
      onPress: () => state.focusPreviousPage?.(),
      'aria-label': 'previous',
      isDisabled: previousDisabled as boolean,
      onFocus: () => (previousFocused.current = true),
      onBlur: () => (previousFocused.current = false),
    },
    title,
  }
}
