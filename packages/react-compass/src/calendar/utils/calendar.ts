/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import {
  CalendarDate,
  DateDuration,
  DateValue,
  maxDate,
  minDate,
  startOfMonth,
  startOfWeek,
  startOfYear,
  Time,
  toCalendarDate,
} from '@internationalized/date'
import {DateFormatterOptions} from '@react-aria/i18n'
import {FieldOptions} from '@react-stately/datepicker'
import {MouseEvent} from 'react'
import {DEFAULT_FIELD_OPTIONS} from '../constants/field.constant'
import {CalendarState, FocusableElement, TimeValue} from '../types'
import {EventPoint, Rect} from '../types/common.types'

export const alignCenter = (
  focusedDate: CalendarDate,
  visibleDuration: DateDuration,
  locale: string,
  minValue?: DateValue,
  maxValue?: DateValue,
) => {
  const halfDuration = {months: 0}

  const aligned = alignStart(focusedDate, visibleDuration, locale).subtract(
    halfDuration,
  )
  return constrainStart(
    focusedDate,
    aligned,
    visibleDuration,
    locale,
    minValue,
    maxValue,
  )
}

export function alignStart(
  focusedDate: CalendarDate,
  visibleDuration: DateDuration,
  locale: string,
  minValue?: DateValue,
  maxValue?: DateValue,
) {
  // align to the start of the largest unit
  let aligned = focusedDate
  if (visibleDuration.years) {
    aligned = startOfYear(focusedDate)
  } else if (visibleDuration.months) {
    aligned = startOfMonth(focusedDate)
  } else if (visibleDuration.weeks) {
    aligned = startOfWeek(focusedDate, locale)
  }

  return constrainStart(
    focusedDate,
    aligned,
    visibleDuration,
    locale,
    minValue,
    maxValue,
  )
}

export function constrainStart(
  focusedDate: CalendarDate,
  aligned: CalendarDate,
  visibleDuration: DateDuration,
  locale: string,
  minValue?: DateValue,
  maxValue?: DateValue,
) {
  if (minValue && focusedDate.compare(minValue) >= 0) {
    aligned = maxDate(
      aligned,
      alignStart(toCalendarDate(minValue), visibleDuration, locale),
    )
  }

  if (maxValue && focusedDate.compare(maxValue) <= 0) {
    aligned = minDate(
      aligned,
      alignEnd(toCalendarDate(maxValue), visibleDuration, locale),
    )
  }

  return aligned
}

export function alignEnd(
  focusedDate: CalendarDate,
  duration: DateDuration,
  locale: string,
  minValue?: DateValue,
  maxValue?: DateValue,
) {
  const d: DateDuration = {...duration}
  if (d.days) {
    d.days--
  } else if (d.weeks) {
    d.weeks--
  } else if (d.months) {
    d.months--
  } else if (d.years) {
    d.years--
  }

  const aligned = alignStart(focusedDate, duration, locale).subtract(d)
  return constrainStart(
    focusedDate,
    aligned,
    duration,
    locale,
    minValue,
    maxValue,
  )
}

export function constrainValue(
  date: CalendarDate,
  minValue?: DateValue,
  maxValue?: DateValue,
) {
  if (minValue) {
    date = maxDate(date, toCalendarDate(minValue))
  }

  if (maxValue) {
    date = minDate(date, toCalendarDate(maxValue))
  }

  return date
}

export function previousAvailableDate(
  date: CalendarDate,
  minValue: DateValue,
  isDateUnavailable?: (date: CalendarDate) => boolean,
) {
  if (!isDateUnavailable) {
    return date
  }

  while (date.compare(minValue) >= 0 && isDateUnavailable(date)) {
    date = date.subtract({days: 1})
  }

  if (date.compare(minValue) >= 0) {
    return date
  }
}

function getPointClientRect(point: EventPoint): Rect {
  const offsetX = point.width / 2 || point.radiusX || 0
  const offsetY = point.height / 2 || point.radiusY || 0

  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX,
  }
}

function areRectanglesOverlapping(a: Rect, b: Rect) {
  // check if they cannot overlap on x axis
  if (a.left > b.right || b.left > a.right) {
    return false
  }
  // check if they cannot overlap on y axis
  if (a.top > b.bottom || b.top > a.bottom) {
    return false
  }
  return true
}

export function isOverTarget(
  point: EventPoint | MouseEvent<FocusableElement>,
  target: Element | null,
) {
  if (!target) return
  const rect = target.getBoundingClientRect()
  const pointRect = getPointClientRect(point as EventPoint)
  return areRectanglesOverlapping(rect, pointRect)
}

export function getPlaceholderTime(placeholderValue?: DateValue): TimeValue {
  if (placeholderValue && 'hour' in placeholderValue) {
    return placeholderValue
  }

  return new Time()
}

export function getFormatOptions(
  fieldOptions: FieldOptions,
  options: DateFormatterOptions,
): Intl.DateTimeFormatOptions {
  fieldOptions = {...DEFAULT_FIELD_OPTIONS, ...fieldOptions}
  // @ts-ignore
  const granularity = options.granularity || 'minute'
  const keys = Object.keys(fieldOptions)
  // @ts-ignore
  let startIdx = keys.indexOf(options.maxGranularity ?? 'year')
  if (startIdx < 0) {
    startIdx = 0
  }

  let endIdx = keys.indexOf(granularity)
  if (endIdx < 0) {
    endIdx = 2
  }

  if (startIdx > endIdx) {
    throw new Error('maxGranularity must be greater than granularity')
  }

  const opts: Intl.DateTimeFormatOptions = keys
    .slice(startIdx, endIdx + 1)
    .reduce((opts, key) => {
      // @ts-ignore
      opts[key] = fieldOptions[key]
      return opts
    }, {})

  if (options.hourCycle != null) {
    // @ts-ignore
    opts.hour12 = options.hourCycle === 12
  }

  opts.timeZone = options.timeZone || 'UTC'

  const hasTime =
    granularity === 'hour' ||
    granularity === 'minute' ||
    granularity === 'second'
  // @ts-ignore
  if (hasTime && options.timeZone && !options.hideTimeZone) {
    opts.timeZoneName = 'short'
  }
  // @ts-ignore
  if (options.showEra && startIdx === 0) {
    opts.era = 'short'
  }

  return opts
}

export function nextUnavailableDate(
  anchorDate: CalendarDate,
  state: CalendarState,
  dir: number,
) {
  let nextDate = anchorDate.add({days: dir})
  while (
    (dir < 0
      ? nextDate.compare(state.visibleRange.start) >= 0
      : nextDate.compare(state.visibleRange.end) <= 0) &&
    !state.isCellUnavailable(nextDate)
  ) {
    nextDate = nextDate.add({days: dir})
  }

  if (state.isCellUnavailable(nextDate)) {
    return nextDate.add({days: -dir})
  }

  return null
}
