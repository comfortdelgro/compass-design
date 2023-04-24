import {
  CalendarDate,
  DateDuration,
  DateValue,
  maxDate,
  minDate,
  startOfMonth,
  startOfWeek,
  startOfYear,
  toCalendarDate,
} from '@internationalized/date'
import {MouseEvent} from 'react'
import {FocusableElement} from '../types'
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
