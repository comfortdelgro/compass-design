/* eslint-disable @typescript-eslint/no-explicit-any */
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
import {useMemo} from 'react'
import {
  CalendarDate,
  getLocalTimeZone,
  startOfWeek,
  today,
} from '../../internationalized/date'
import {useDateFormatter, useLocale} from '../../internationalized/i18n'
import {CalendarState, RangeCalendarState} from '../types'
import {hookData} from '../utils'
import {useLabels} from './useLabels'
import {useVisibleRangeDescription} from './useVisibleRangeDescription'

export interface AriaCalendarGridProps {
  startDate?: CalendarDate
  endDate?: CalendarDate
  weekdayStyle?: 'narrow' | 'short' | 'long'
}

export interface CalendarGridAria {
  gridProps: any
  headerProps: any
  weekDays: string[]
}

export function useCalendarGrid(
  props: AriaCalendarGridProps,
  state: CalendarState | RangeCalendarState,
): CalendarGridAria {
  const {startDate = state.visibleRange?.start} = props

  const {direction} = useLocale()

  const visibleRangeDescription = useVisibleRangeDescription(
    startDate as CalendarDate,
    state.timeZone ?? 'UTC',
  )

  const {ariaLabel, ariaLabelledBy} = hookData.get(state) ?? {
    ariaLabel: undefined,
    ariaLabelledBy: undefined,
  }

  const labelProps = useLabels({
    id: '',
    'aria-label': [ariaLabel, visibleRangeDescription]
      .filter(Boolean)
      .join(', '),
    'aria-labelledby': ariaLabelledBy,
  })

  const {locale} = useLocale()

  const dayFormatter = useDateFormatter({
    weekday: props.weekdayStyle ?? 'short',
    timeZone: state.timeZone,
  })

  const weekDays = useMemo(() => {
    const weekStart = startOfWeek(
      today(state.timeZone ?? getLocalTimeZone()),
      locale,
    )

    return [...new Array(7).keys()].map((index) => {
      const date = weekStart.add({days: index})
      const dateDay = date.toDate(state.timeZone ?? getLocalTimeZone())
      return dayFormatter.format(dateDay)
    })
  }, [locale])

  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        state.selectFocusedDate?.()
        break
      case 'PageUp':
        e.preventDefault()
        e.stopPropagation()
        state.focusPreviousSection?.(e.shiftKey)
        break
      case 'PageDown':
        e.preventDefault()
        e.stopPropagation()
        state.focusNextSection?.(e.shiftKey)
        break
      case 'End':
        e.preventDefault()
        e.stopPropagation()
        state.focusSectionEnd?.()
        break
      case 'Home':
        e.preventDefault()
        e.stopPropagation()
        state.focusSectionStart?.()
        break
      case 'ArrowLeft':
        e.preventDefault()
        e.stopPropagation()
        if (direction === 'rtl') {
          state.focusNextDay?.()
        } else {
          state.focusPreviousDay?.()
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        e.stopPropagation()
        state.focusPreviousRow?.()
        break
      case 'ArrowRight':
        e.preventDefault()
        e.stopPropagation()
        if (direction === 'rtl') {
          state.focusPreviousDay?.()
        } else {
          state.focusNextDay?.()
        }
        break
      case 'ArrowDown':
        e.preventDefault()
        e.stopPropagation()
        state.focusNextRow?.()
        break
      case 'Escape':
        // Cancel the selection.
        if ('setAnchorDate' in state) {
          e.preventDefault()
          state.setAnchorDate(null)
        }
        break
    }
  }

  return {
    gridProps: {
      ...labelProps,
      role: 'grid',
      'aria-readonly': state.isReadOnly || null,
      'aria-disabled': state.isDisabled || null,
      'aria-multiselectable': 'highlightedRange' in state || undefined,
      onKeyDown,
      onFocus: () => state.setFocused?.(true),
      onBlur: () => state.setFocused?.(false),
    },
    headerProps: {
      'aria-hidden': true,
    },
    weekDays,
  }
}
