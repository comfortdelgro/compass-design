/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import {useState} from 'react'
import {
  DateFormatter,
  DateValue,
  toCalendarDate,
  toCalendarDateTime,
} from '../../internationalized/date'
import {
  DateRange,
  DateRangePickerState,
  DateRangePickerStateOptions,
  TimeRange,
  ValidationState,
} from '../types'
import {getFormatOptions, getPlaceholderTime, isInvalid} from '../utils'
import {useControlledState} from './useControlledState'
import {useDefaultProps} from './useDefaultProps'
import {useOverlayTriggerState} from './useOverlayTriggerState'

export function useDateRangePickerState<T extends DateValue = DateValue>(
  props: DateRangePickerStateOptions<T>,
): DateRangePickerState {
  const overlayState = useOverlayTriggerState(props)
  const [controlledValue, setControlledValue] = useControlledState(
    props.value,
    props.defaultValue || null,
    props.onChange,
  )
  // @ts-ignore
  let [placeholderValue, setPlaceholderValue] = useState(
    () => controlledValue || {start: null, end: null},
  )

  // Reset the placeholder if the value prop is set to null.
  if (
    controlledValue == null &&
    placeholderValue.start &&
    placeholderValue.end
  ) {
    placeholderValue = {start: null, end: null}
    setPlaceholderValue(placeholderValue)
  }

  const value = controlledValue || placeholderValue

  const setValue = (value: DateRange) => {
    // @ts-ignore
    setPlaceholderValue(value)
    if (value.start || value.end) {
      // @ts-ignore
      setControlledValue(value)
    } else {
      setControlledValue(null)
    }
  }

  const v = value.start || value.end || props.placeholderValue
  // @ts-ignore
  const [granularity] = useDefaultProps(v, props.granularity)
  const hasTime =
    granularity === 'hour' ||
    granularity === 'minute' ||
    granularity === 'second'
  const shouldCloseOnSelect = props.shouldCloseOnSelect ?? true

  let [dateRange, setSelectedDateRange] = useState<DateRange | null>(null)
  let [timeRange, setSelectedTimeRange] = useState<TimeRange | null>(null)

  if (value && value.start && value.end) {
    // @ts-ignore
    dateRange = value
    if ('hour' in value.start) {
      timeRange = value as TimeRange
    }
  }

  const commitValue = (dateRange: DateRange, timeRange: TimeRange) => {
    if (dateRange.end && dateRange.start && timeRange.end && timeRange.start) {
      setValue({
        start:
          'timeZone' in timeRange.start
            ? timeRange.start.set(toCalendarDate(dateRange.start))
            : toCalendarDateTime(dateRange.start, timeRange.start),
        end:
          'timeZone' in timeRange.end
            ? timeRange.end.set(toCalendarDate(dateRange.end))
            : toCalendarDateTime(dateRange.end, timeRange.end),
      })
      setSelectedDateRange(null)
      setSelectedTimeRange(null)
    }
  }

  // Intercept setValue to make sure the Time section is not changed by date selection in Calendar
  const setDateRange = (range: DateRange) => {
    let shouldClose =
      typeof shouldCloseOnSelect === 'function'
        ? shouldCloseOnSelect()
        : shouldCloseOnSelect

    if (hasTime) {
      if (
        shouldClose ||
        (range.start && range.end && timeRange?.start && timeRange.end)
      ) {
        commitValue(range, {
          start: timeRange?.start || getPlaceholderTime(props.placeholderValue),
          end: timeRange?.end || getPlaceholderTime(props.placeholderValue),
        })
      } else {
        setSelectedDateRange(range)
      }
    } else if (range.start || range.end) {
      setValue(range)
    } else {
      if (!range.start || !range.end) {
        // @ts-ignore
        setControlledValue({start: null, end: null})
        setSelectedDateRange(null)
      } else {
        setSelectedDateRange(range)
      }
    }

    if (shouldClose && range.start && range.end) {
      overlayState.setOpen(false)
    }
  }

  const setTimeRange = (range: TimeRange) => {
    if (dateRange?.start && dateRange.end && range.start && range.end) {
      commitValue(dateRange, range)
    } else {
      setSelectedTimeRange(range)
    }
  }

  // @ts-ignore
  const validationState: ValidationState =
    props.validationState ||
    (value != null &&
    // @ts-ignore
    (isInvalid(value.start, props.minValue, props.maxValue) ||
      // @ts-ignore
      isInvalid(value.end, props.minValue, props.maxValue) ||
      (value.end != null &&
        value.start != null &&
        value.end.compare(value.start) < 0) ||
      (value.start && props.isDateUnavailable?.(value.start)) ||
      (value.end && props.isDateUnavailable?.(value.end)))
      ? 'invalid'
      : null)

  return {
    // @ts-ignore
    value,
    setValue,
    // @ts-ignore
    dateRange,
    // @ts-ignore
    timeRange,
    granularity,
    hasTime,
    setDate(part, date) {
      // @ts-ignore
      setDateRange({...dateRange, [part]: date})
    },
    setTime(part, time) {
      // @ts-ignore
      setTimeRange({...timeRange, [part]: time})
    },
    setDateTime(part, dateTime) {
      // @ts-ignore
      setValue({...value, [part]: dateTime})
    },
    setDateRange,
    setTimeRange,
    ...overlayState,
    setOpen(isOpen) {
      if (
        !isOpen &&
        !(value.start && value.end) &&
        dateRange?.start &&
        dateRange.end &&
        hasTime
      ) {
        commitValue(dateRange, {
          start: timeRange?.start || getPlaceholderTime(props.placeholderValue),
          end: timeRange?.end || getPlaceholderTime(props.placeholderValue),
        })
      }

      overlayState.setOpen(isOpen)
    },
    validationState,
    // @ts-ignore
    formatValue(locale, fieldOptions) {
      if (!value || !value.start || !value.end) {
        return null
      }

      const startTimeZone =
        'timeZone' in value.start ? value.start.timeZone : undefined
      const startGranularity =
        props.granularity ||
        (value.start && 'minute' in value.start ? 'minute' : 'day')
      const endTimeZone =
        'timeZone' in value.end ? value.end.timeZone : undefined
      const endGranularity =
        props.granularity ||
        (value.end && 'minute' in value.end ? 'minute' : 'day')

      const startOptions = getFormatOptions(fieldOptions, {
        granularity: startGranularity,
        timeZone: startTimeZone ?? 'UTC',
        hideTimeZone: !!props.hideTimeZone,
        hourCycle: props.hourCycle ?? 24,
        showEra:
          (value.start.calendar.identifier === 'gregory' &&
            value.start.era === 'BC') ||
          (value.end.calendar.identifier === 'gregory' &&
            value.end.era === 'BC'),
      })

      const startDate = value.start.toDate(startTimeZone || 'UTC')
      const endDate = value.end.toDate(endTimeZone || 'UTC')

      const startFormatter = new DateFormatter(locale, startOptions)
      let endFormatter: Intl.DateTimeFormat
      if (
        startTimeZone === endTimeZone &&
        startGranularity === endGranularity &&
        value.start.compare(value.end) !== 0
      ) {
        try {
          const parts = startFormatter.formatRangeToParts(startDate, endDate)

          // Find the separator between the start and end date. This is determined
          // by finding the last shared literal before the end range.
          let separatorIndex = -1
          for (let i = 0; i < parts.length; i++) {
            const part = parts[i]
            // @ts-ignore
            if (part.source === 'shared' && part.type === 'literal') {
              separatorIndex = i
              // @ts-ignore
            } else if (part.source === 'endRange') {
              break
            }
          }

          // Now we can combine the parts into start and end strings.
          let start = ''
          let end = ''
          for (let i = 0; i < parts.length; i++) {
            // @ts-ignore
            if (i < separatorIndex) {
              // @ts-ignore
              start += parts[i].value
            } else if (i > separatorIndex) {
              // @ts-ignore
              end += parts[i].value
            }
          }

          return {start, end}
        } catch (e) {
          // ignore
        }
        // @ts-ignore
        endFormatter = startFormatter
      } else {
        const endOptions = getFormatOptions(fieldOptions, {
          granularity: endGranularity,
          timeZone: endTimeZone ?? 'UTC',
          hideTimeZone: !!props.hideTimeZone,
          hourCycle: props.hourCycle ?? 24,
        })
        // @ts-ignore
        endFormatter = new DateFormatter(locale, endOptions)
      }

      return {
        start: startFormatter.format(startDate),
        end: endFormatter.format(endDate),
      }
    },
  }
}
