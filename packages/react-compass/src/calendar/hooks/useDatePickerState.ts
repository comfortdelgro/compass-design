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
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import {useEffect, useState} from 'react'
import {
  CalendarDate,
  DateFormatter,
  toCalendarDate,
  toCalendarDateTime,
} from '../../internationalized/date'
import {
  DatePickerState,
  DatePickerStateOptions,
  DateValue,
  TimeValue,
  ValidationState,
} from '../types'
import {getFormatOptions, getPlaceholderTime, isInvalid} from '../utils'
import {useControlledState} from './useControlledState'
import {useDefaultProps} from './useDefaultProps'
import {useOverlayTriggerState} from './useOverlayTriggerState'

export function useDatePickerState<T extends DateValue = DateValue>(
  props: DatePickerStateOptions<T>,
): DatePickerState {
  const overlayState = useOverlayTriggerState(props)
  const [value, setValue] = useControlledState(
    props.value,
    props.defaultValue,
    props.onChange,
  )

  const v = value || props.placeholderValue
  const [granularity, defaultTimeZone] = useDefaultProps(v, props.granularity)
  const dateValue =
    value != null ? value.toDate(defaultTimeZone ?? 'UTC') : null
  const hasTime =
    granularity === 'hour' ||
    granularity === 'minute' ||
    granularity === 'second'
  const shouldCloseOnSelect = props.shouldCloseOnSelect ?? true

  const [selectedDate, setSelectedDate] = useState<DateValue>()
  const [selectedTime, setSelectedTime] = useState<TimeValue>()

  useEffect(() => {
    if (value) {
      setSelectedDate(value)
      if ('hour' in value) {
        setSelectedTime(value)
      }
    }
  }, [value])

  if (v && !(granularity in v)) {
    throw new Error(
      'Invalid granularity ' + granularity + ' for value ' + v.toString(),
    )
  }

  const commitValue = (date: DateValue, time: TimeValue) => {
    // @ts-ignore
    setValue(
      // @ts-ignore
      'timeZone' in time
        ? time.set(toCalendarDate(date))
        : toCalendarDateTime(date, time),
    )
    setSelectedDate(undefined)
    setSelectedTime(undefined)
  }

  // Intercept setValue to make sure the Time section is not changed by date selection in Calendar
  const selectDate = (newValue: CalendarDate) => {
    const shouldClose =
      typeof shouldCloseOnSelect === 'function'
        ? shouldCloseOnSelect()
        : shouldCloseOnSelect
    if (hasTime) {
      if (selectedTime || shouldClose) {
        commitValue(
          newValue,
          selectedTime || getPlaceholderTime(props.placeholderValue),
        )
      } else {
        setSelectedDate(newValue)
      }
    } else {
      setValue(newValue as T)
    }

    if (shouldClose) {
      setTimeout(() => {
        overlayState.setOpen(false)
      }, 0)
    }
  }

  const selectTime = (newValue: TimeValue) => {
    if (selectedDate) {
      commitValue(selectedDate, newValue)
    } else {
      setSelectedTime(newValue)
    }
  }

  // @ts-ignore
  const validationState: ValidationState =
    props.validationState ||
    // @ts-ignore
    (isInvalid(value, props.minValue, props.maxValue) ? 'invalid' : null) ||
    (value && props.isDateUnavailable?.(value) ? 'invalid' : null)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  return {
    value,
    setValue,
    dateValue: selectedDate,
    timeValue: selectedTime,
    setDateValue: selectDate,
    setTimeValue: selectTime,
    granularity,
    hasTime,
    ...overlayState,
    setOpen(isOpen) {
      if (!isOpen && !value && selectedDate && hasTime) {
        commitValue(
          selectedDate,
          selectedTime || getPlaceholderTime(props.placeholderValue),
        )
      }

      overlayState.setOpen(isOpen)
    },
    validationState,
    formatValue(locale, fieldOptions) {
      if (!dateValue) {
        return ''
      }

      const formatOptions = getFormatOptions(fieldOptions, {
        granularity,
        timeZone: defaultTimeZone,
        hideTimeZone: !!props.hideTimeZone,
        hourCycle: props.hourCycle ?? 24,
        showEra: value.calendar.identifier === 'gregory' && value.era === 'BC',
      })

      const formatter = new DateFormatter(locale, formatOptions)
      return formatter.format(dateValue)
    },
  }
}
