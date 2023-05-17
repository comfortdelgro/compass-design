import {
  CalendarDate,
  DateFormatter,
  isEqualDay,
  isSameDay,
  isToday,
} from '@internationalized/date'
import {useDateFormatter} from '@react-aria/i18n'
import {MouseEvent, PointerEvent, useMemo, useRef} from 'react'
import {
  AriaCalendarCellProps,
  CalendarCellAria,
  CalendarState,
  FocusableElement,
  RangeCalendarState,
} from '../types'
import {hookData} from '../utils'
import {useDescription} from './useDescription'
import {usePress} from './usePress'

export function useCalendarCell(
  props: AriaCalendarCellProps,
  state: CalendarState | RangeCalendarState,
): CalendarCellAria {
  let {date, isDisabled} = props
  const {errorMessageId, selectedDateDescription} = hookData.get(state) ?? {
    errorMessageId: undefined,
    selectedDateDescription: '',
  }

  const dateFormatter = useDateFormatter({
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    era: undefined,
    timeZone: state.timeZone,
  })
  let isSelected = state.isSelected(date)
  const isFocused = state.isCellFocused(date)
  isDisabled = isDisabled || state.isCellDisabled(date)
  const isUnavailable = state.isCellUnavailable(date)
  const isSelectable = !isDisabled && !isUnavailable
  const isInvalid =
    state.validationState === 'invalid' &&
    ('highlightedRange' in state
      ? !state.anchorDate &&
        state.highlightedRange &&
        date.compare(state.highlightedRange.start) >= 0 &&
        date.compare(state.highlightedRange.end) <= 0
      : state.value && isSameDay(state.value, date))

  if (isInvalid) {
    isSelected = true
  }

  const lastDate = useRef<CalendarDate>()
  if (lastDate.current && isEqualDay(date, lastDate.current)) {
    date = lastDate.current
  }
  lastDate.current = date

  const nativeDate = useMemo(
    () => date.toDate(state.timeZone),
    [date, state.timeZone],
  )

  const isDateToday = isToday(date, state.timeZone)
  const label = useMemo(() => {
    let label = ''

    if (
      'highlightedRange' in state &&
      state.value &&
      !state.anchorDate &&
      (isSameDay(date, state.value.start) || isSameDay(date, state.value.end))
    ) {
      label = selectedDateDescription + ', '
    }

    label += dateFormatter.format(nativeDate)
    if (isDateToday) {
      const todayDate = 'I dag, {date}'
      const todayDateSelected = 'I dag, {date} selected'

      label = isSelected
        ? todayDateSelected.replace('{date}', label)
        : todayDate.replace('{date}', label)
    } else if (isSelected) {
      const dateSelected = '{date} selected'
      label = dateSelected.replace('{date}', label)
    }

    if (state.minValue && isSameDay(date, state.minValue)) {
      label += ', ' + 'First available date'
    } else if (state.maxValue && isSameDay(date, state.maxValue)) {
      label += ', ' + 'Last available date'
    }

    return label
  }, [
    dateFormatter,
    nativeDate,
    isSelected,
    isDateToday,
    date,
    state,
    selectedDateDescription,
  ])

  let rangeSelectionPrompt = ''
  if ('anchorDate' in state && isFocused && !state.isReadOnly && isSelectable) {
    if (state.anchorDate) {
      rangeSelectionPrompt = 'Click to finish selecting date range'
    } else {
      rangeSelectionPrompt = 'Click to start selecting date range'
    }
  }

  const descriptionProps = useDescription(rangeSelectionPrompt)

  const isAnchorPressed = useRef(false)
  const isRangeBoundaryPressed = useRef(false)
  const touchDragTimerRef = useRef<unknown>()
  const {pressProps, isPressed} = usePress({
    shouldCancelOnPointerExit: 'anchorDate' in state && !!state.anchorDate,
    preventFocusOnPress: true,
    isDisabled: !isSelectable || state.isReadOnly,
    onPressStart(e) {
      if (state.isReadOnly) {
        state.setFocusedDate(date)
        return
      }

      if (
        'highlightedRange' in state &&
        !state.anchorDate &&
        (e.pointerType === 'mouse' || e.pointerType === 'touch')
      ) {
        if (state.highlightedRange && !isInvalid) {
          if (isSameDay(date, state.highlightedRange.start)) {
            state.setAnchorDate(state.highlightedRange.end)
            state.setFocusedDate(date)
            state.setDragging(true)
            isRangeBoundaryPressed.current = true
            return
          } else if (isSameDay(date, state.highlightedRange.end)) {
            state.setAnchorDate(state.highlightedRange.start)
            state.setFocusedDate(date)
            state.setDragging(true)
            isRangeBoundaryPressed.current = true
            return
          }
        }

        const startDragging = () => {
          state.setDragging(true)
          touchDragTimerRef.current = null

          state.selectDate(date)
          state.setFocusedDate(date)
          isAnchorPressed.current = true
        }

        // Start selection on mouse/touch down so users can drag to select a range.
        // On touch, delay dragging to determine if the user really meant to scroll.
        if (e.pointerType === 'touch') {
          touchDragTimerRef.current = setTimeout(startDragging, 200)
        } else {
          startDragging()
        }
      }
    },
    onPressEnd() {
      isRangeBoundaryPressed.current = false
      isAnchorPressed.current = false
      clearTimeout(touchDragTimerRef.current as number)
      touchDragTimerRef.current = null
    },
    onPress() {
      if (!('anchorDate' in state) && !state.isReadOnly) {
        state.selectDate(date)
        state.setFocusedDate(date)
      }
    },
    onPressUp(e) {
      if (state.isReadOnly) {
        return
      }

      // If the user tapped quickly, the date won't be selected yet and the
      // timer will still be in progress. In this case, select the date on touch up.
      // Timer is cleared in onPressEnd.
      if ('anchorDate' in state && touchDragTimerRef.current) {
        state.selectDate(date)
        state.setFocusedDate(date)
      }

      if ('anchorDate' in state) {
        if (isRangeBoundaryPressed.current) {
          // When clicking on the start or end date of an already selected range,
          // start a new selection on press up to also allow dragging the date to
          // change the existing range.
          state.setAnchorDate(date)
        } else if (state.anchorDate && !isAnchorPressed.current) {
          // When releasing a drag or pressing the end date of a range, select it.
          state.selectDate(date)
          state.setFocusedDate(date)
        } else if (e.pointerType === 'keyboard' && !state.anchorDate) {
          // For range selection, auto-advance the focused date by one if using keyboard.
          // This gives an indication that you're selecting a range rather than a single date.
          // For mouse, this is unnecessary because users will see the indication on hover. For screen readers,
          // there will be an announcement to "click to finish selecting range" (above).
          state.selectDate(date)
          let nextDay = date.add({days: 1})
          if (state.isInvalid(nextDay)) {
            nextDay = date.subtract({days: 1})
          }
          if (!state.isInvalid(nextDay)) {
            state.setFocusedDate(nextDay)
          }
        } else if (e.pointerType === 'virtual') {
          // For screen readers, just select the date on click.
          state.selectDate(date)
          state.setFocusedDate(date)
        }
      }
    },
  })

  let tabIndex = undefined
  if (!isDisabled) {
    tabIndex = isSameDay(date, state.focusedDate) ? 0 : -1
  }

  const cellDateFormatter: DateFormatter = useDateFormatter({
    day: 'numeric',
    timeZone: state.timeZone,
    calendar: date.calendar.identifier,
  })

  const formattedDate = useMemo(
    () =>
      cellDateFormatter
        .formatToParts(nativeDate)
        .find((part) => part.type === 'day')?.value,
    [cellDateFormatter, nativeDate],
  )

  return {
    cellProps: {
      role: 'gridcell',
      'aria-disabled': !isSelectable,
      'aria-selected': isSelected,
      'aria-invalid': isInvalid,
    },
    buttonProps: {
      ...pressProps,
      onFocus() {
        if (!isDisabled) {
          state.setFocusedDate(date)
        }
      },
      tabIndex,
      role: 'button',
      'aria-disabled': !isSelectable,
      'aria-label': label,
      'aria-invalid': isInvalid,
      'aria-describedby':
        [
          isInvalid ? errorMessageId : null,
          descriptionProps['aria-describedby'],
        ]
          .filter(Boolean)
          .join(' ') || undefined,
      onPointerEnter(e: PointerEvent<FocusableElement>) {
        // Highlight the date on hover or drag over a date when selecting a range.
        if (
          'highlightDate' in state &&
          (e.pointerType !== 'touch' || state.isDragging) &&
          isSelectable
        ) {
          state.highlightDate(date)
        }
      },
      onContextMenu(e: MouseEvent<FocusableElement>) {
        e.preventDefault()
      },
    },
    isPressed,
    isFocused,
    isSelected,
    isDisabled,
    isUnavailable,
    isOutsideVisibleRange:
      date.compare(state.visibleRange.start) < 0 ||
      date.compare(state.visibleRange.end) > 0,
    isInvalid,
    formattedDate,
  }
}
