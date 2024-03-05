/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {MouseEvent} from 'react'
import {
  Calendar,
  CalendarDate,
  DateValue,
  getMinimumDayInMonth,
  getMinimumMonthInYear,
  maxDate,
  minDate,
  now,
  startOfMonth,
  startOfWeek,
  startOfYear,
  Time,
  toCalendar,
  toCalendarDate,
  toCalendarDateTime,
} from '../../internationalized/date'
import {DEFAULT_FIELD_OPTIONS} from '../constants/field.constant'
import {
  CalendarState,
  DateDuration,
  FieldOptions,
  FocusableElement,
  TimeValue,
} from '../types'
import {EventPoint, FormatterOptions, Rect} from '../types/common.types'
import {convertValue} from './common'

export const alignCenter = (
  focusedDate: CalendarDate,
  visibleDuration: DateDuration,
  locale: string,
  minValue?: DateValue | null | undefined,
  maxValue?: DateValue | undefined | null,
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
  minValue?: DateValue | null | undefined,
  maxValue?: DateValue | null | undefined,
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
  minValue?: DateValue | null | undefined,
  maxValue?: DateValue | null | undefined,
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
  minValue?: DateValue | null | undefined,
  maxValue?: DateValue | null | undefined,
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
  minValue: DateValue | null | undefined,
  isDateUnavailable?: (date: CalendarDate) => boolean,
) {
  if (!minValue) {
    return null
  }
  if (!isDateUnavailable) {
    return date
  }

  while (date.compare(minValue) >= 0 && isDateUnavailable(date)) {
    date = date.subtract({days: 1})
  }

  if (date.compare(minValue) >= 0) {
    return date
  }

  return null
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
  options: FormatterOptions,
): Intl.DateTimeFormatOptions {
  fieldOptions = {...DEFAULT_FIELD_OPTIONS, ...fieldOptions}
  const granularity = options.granularity || 'minute'
  const keys = Object.keys(fieldOptions)
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
      opts[key] = fieldOptions[key]
      return opts
    }, {})

  if (options.hourCycle != null) {
    opts.hour12 = options.hourCycle === 12
  }

  opts.timeZone = options.timeZone || 'UTC'

  const hasTime =
    granularity === 'hour' ||
    granularity === 'minute' ||
    granularity === 'second'
  if (hasTime && options.timeZone && !options.hideTimeZone) {
    opts.timeZoneName = 'short'
  }
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
  if (!state.visibleRange) {
    // handle or throw an error when visibleRange is not defined
    throw new Error('visibleRange is not defined on state')
  }

  let nextDate = anchorDate.add({days: dir})
  while (
    (dir < 0
      ? nextDate.compare(state.visibleRange.start!) >= 0
      : nextDate.compare(state.visibleRange.end!) <= 0) &&
    !state.isCellUnavailable?.(nextDate)
  ) {
    nextDate = nextDate.add({days: dir})
  }

  if (state.isCellUnavailable?.(nextDate)) {
    return nextDate.add({days: -dir})
  }

  return null
}

export function createPlaceholderDate(
  placeholderValue: DateValue | undefined,
  granularity: string,
  calendar: Calendar,
  timeZone: string,
) {
  if (placeholderValue) {
    return convertValue(placeholderValue, calendar)
  }

  const date = toCalendar(
    now(timeZone).set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    }),
    calendar,
  )

  if (
    granularity === 'year' ||
    granularity === 'month' ||
    granularity === 'day'
  ) {
    return toCalendarDate(date)
  }

  if (!timeZone) {
    return toCalendarDateTime(date)
  }

  return date
}

export function getPlaceholder(field: string, value: string) {
  const data = {year: 'yyyy', month: 'mm', day: 'dd'}
  if (field === 'era' || field === 'dayPeriod') {
    return value
  }

  if (field === 'year' || field === 'month' || field === 'day') {
    return data[field]
  }

  return '––'
}

export function getSegmentLimits(
  date: DateValue,
  type: string,
  options: Intl.ResolvedDateTimeFormatOptions,
) {
  switch (type) {
    case 'era': {
      const eras = date.calendar.getEras()
      return {
        value: eras.indexOf(date.era),
        minValue: 0,
        maxValue: eras.length - 1,
      }
    }
    case 'year':
      return {
        value: date.year,
        minValue: 1,
        maxValue: date.calendar.getYearsInEra(date),
      }
    case 'month':
      return {
        value: date.month,
        minValue: getMinimumMonthInYear(date),
        maxValue: date.calendar.getMonthsInYear(date),
      }
    case 'day':
      return {
        value: date.day,
        minValue: getMinimumDayInMonth(date),
        maxValue: date.calendar.getDaysInMonth(date),
      }
  }

  if ('hour' in date) {
    switch (type) {
      case 'dayPeriod':
        return {
          value: date.hour >= 12 ? 12 : 0,
          minValue: 0,
          maxValue: 12,
        }
      case 'hour':
        if (options.hour12) {
          const isPM = date.hour >= 12
          return {
            value: date.hour,
            minValue: isPM ? 12 : 0,
            maxValue: isPM ? 23 : 11,
          }
        }

        return {
          value: date.hour,
          minValue: 0,
          maxValue: 23,
        }
      case 'minute':
        return {
          value: date.minute,
          minValue: 0,
          maxValue: 59,
        }
      case 'second':
        return {
          value: date.second,
          minValue: 0,
          maxValue: 59,
        }
    }
  }

  return {}
}

export function addSegment(
  value: DateValue,
  part: string,
  amount: number,
  options: Intl.ResolvedDateTimeFormatOptions,
) {
  switch (part) {
    case 'era':
    case 'year':
    case 'month':
    case 'day':
      return value.cycle(part, amount, {round: part === 'year'})
  }

  if ('hour' in value) {
    switch (part) {
      case 'dayPeriod': {
        const hours = value.hour
        const isPM = hours >= 12
        return value.set({hour: isPM ? hours - 12 : hours + 12})
      }
      case 'hour':
      case 'minute':
      case 'second':
        return value.cycle(part, amount, {
          round: part !== 'hour',
          hourCycle: options.hour12 ? 12 : 24,
        })
    }
  }
  return null
}
