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
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import {useMemo, useRef, useState} from 'react'
import {
  CalendarDate,
  DateValue,
  GregorianCalendar,
  isEqualDay,
  maxDate,
  minDate,
  toCalendar,
  toCalendarDate,
} from '../../internationalized/date'
import {RangeCalendarState, RangeValue} from '../types'
import {RangeCalendarStateOptions} from '../types/range-calendar.types'
import {
  alignCenter,
  constrainValue,
  isInvalid,
  nextUnavailableDate,
  previousAvailableDate,
} from '../utils'
import {useCalendarState} from './useCalendarState'
import {useControlledState} from './useControlledState'

export function useRangeCalendarState<T extends DateValue = DateValue>(
  props: RangeCalendarStateOptions<T>,
): RangeCalendarState {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    createCalendar,
    locale,
    visibleDuration = {months: 1},
    minValue,
    maxValue,
    shouldOnChangeTriggerOnSameDate,
    ...calendarProps
  } = props
  const [value, setValue] = useControlledState(
    valueProp,
    defaultValue || null,
    onChange,
  )

  const [anchorDate, setAnchorDateState] = useState<CalendarDate | null>(
    value?.start && !value.end ? (value?.start as CalendarDate) : null,
  )
  let alignment: 'center' | 'start' = 'center'
  if (value && value.start && value.end) {
    const start = alignCenter(
      toCalendarDate(value.start),
      visibleDuration,
      locale,
      minValue,
      maxValue,
    )
    const end = start.add(visibleDuration).subtract({days: 1})

    if (value.end.compare(end) > 0) {
      alignment = 'start'
    }
  }

  const availableRangeRef = useRef<RangeValue<DateValue>>(null)
  const [availableRange, setAvailableRange] = useState<RangeValue<DateValue>>()
  const min = useMemo(
    // @ts-ignore
    () => maxDate(minValue, availableRange?.start),
    [minValue, availableRange],
  )
  const max = useMemo(
    // @ts-ignore
    () => minDate(maxValue, availableRange?.end),
    [maxValue, availableRange],
  )

  const calendar = useCalendarState({
    ...calendarProps,
    // @ts-ignore
    value: value && value.start,
    createCalendar,
    locale,
    // @ts-ignore
    visibleDuration,
    minValue: min,
    maxValue: max,
    selectionAlignment: alignment,
  })

  // @ts-ignore
  const updateAvailableRange = (date) => {
    if (date && props.isDateUnavailable && !props.allowsNonContiguousRanges) {
      // @ts-ignore
      availableRangeRef.current = {
        // @ts-ignore
        start: nextUnavailableDate(date, calendar, -1),
        // @ts-ignore
        end: nextUnavailableDate(date, calendar, 1),
      }
      // @ts-ignore
      setAvailableRange(availableRangeRef.current)
    } else {
      // @ts-ignore
      availableRangeRef.current = null
      setAvailableRange(undefined)
    }
  }

  // If the visible range changes, we need to update the available range.
  const lastVisibleRange = useRef(calendar.visibleRange)
  if (
    !isEqualDay(
      calendar.visibleRange?.start as CalendarDate,
      lastVisibleRange.current?.start as CalendarDate,
    ) ||
    !isEqualDay(
      calendar.visibleRange?.end as CalendarDate,
      lastVisibleRange.current?.end as CalendarDate,
    )
  ) {
    updateAvailableRange(anchorDate)
    lastVisibleRange.current = calendar.visibleRange
  }

  const setAnchorDate = (date: CalendarDate) => {
    if (date) {
      // @ts-ignore
      setAnchorDateState(date)
      updateAvailableRange(date)
    } else {
      setAnchorDateState(null)
      updateAvailableRange(null)
    }
  }

  const highlightedRange = anchorDate
    ? makeRange(anchorDate, calendar.focusedDate as CalendarDate)
    : value && makeRange(value.start!, value.end!)
  const selectDate = (date: CalendarDate) => {
    if (props.isReadOnly) {
      return
    }

    date = constrainValue(date, min, max)
    // @ts-ignore
    date = previousAvailableDate(
      date,
      calendar.visibleRange?.start as CalendarDate,
      props.isDateUnavailable,
    )
    if (!date) {
      return
    }

    if (!anchorDate) {
      setAnchorDate(date)
      // @ts-ignore
      onChange?.({start: date, end: null as unknown as DateValue})
    } else {
      // reset anchor date if anchor date is greater than choosen date
      if (anchorDate.compare(date) > 0 || value?.end?.compare(date) === 0) {
        setAnchorDate(date)
        // @ts-ignore
        onChange?.({start: date, end: null as unknown as DateValue})
        //
      } else {
        const range = makeRange(anchorDate, date)
        setValue({
          // @ts-ignore
          start: convertValue(range.start, value?.start),
          // @ts-ignore
          end: convertValue(range.end, value?.end),
        })
        // @ts-ignore
        setAnchorDate(null)
      }
    }
  }

  const [isDragging, setDragging] = useState(false)

  const {isDateUnavailable} = props
  const isInvalidSelection = useMemo(() => {
    if (!value || anchorDate) {
      return false
    }

    if (
      isDateUnavailable &&
      (isDateUnavailable(value.start!) || isDateUnavailable(value.end!))
    ) {
      return true
    }

    return (
      // @ts-ignore
      isInvalid(value.start, minValue, maxValue) ||
      // @ts-ignore
      isInvalid(value.end, minValue, maxValue)
    )
  }, [isDateUnavailable, value, anchorDate, minValue, maxValue])

  const validationState =
    props.validationState || (isInvalidSelection ? 'invalid' : null)

  // @ts-ignore
  return {
    ...calendar,
    value,
    shouldOnChangeTriggerOnSameDate,
    setValue,
    anchorDate,
    setAnchorDate,
    highlightedRange,
    validationState,
    selectFocusedDate() {
      selectDate(calendar.focusedDate as CalendarDate)
    },
    selectDate,
    highlightDate(date) {
      if (anchorDate) {
        calendar.setFocusedDate?.(date)
      }
    },
    // @ts-ignore
    isSelected(date) {
      return (
        highlightedRange &&
        date.compare(highlightedRange.start!) >= 0 &&
        date.compare(highlightedRange.end!) <= 0 &&
        !calendar.isCellDisabled?.(date) &&
        !calendar.isCellUnavailable?.(date)
      )
    },
    isInvalid(date) {
      return (
        calendar.isInvalid?.(date) ||
        isInvalid(
          date,
          // @ts-ignore
          availableRangeRef.current?.start,
          availableRangeRef.current?.end,
        )
      )
    },
    isDragging,
    setDragging,
  }
}

function makeRange(start: DateValue, end: DateValue): RangeValue<CalendarDate> {
  if (!start || !end) {
    // @ts-ignore
    return null
  }

  if (end.compare(start) < 0) {
    ;[start, end] = [end, start]
  }

  return {start: toCalendarDate(start), end: toCalendarDate(end)}
}

function convertValue(newValue: CalendarDate, oldValue: DateValue) {
  newValue = toCalendar(newValue, oldValue?.calendar || new GregorianCalendar())

  if (oldValue && 'hour' in oldValue) {
    return oldValue.set(newValue)
  }

  return newValue
}
