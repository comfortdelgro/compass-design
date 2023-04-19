/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {isEqualDay, isSameDay, isToday} from '@internationalized/date'
import {useDateFormatter} from '@react-aria/i18n'
import {RefObject, useMemo, useRef} from 'react'
import {CalendarState, RangeCalendarState} from '../types'
import {AriaCalendarCellProps, CalendarCellAria} from '../types/calendar.types'
import {hookData} from '../utils/common'
import {useDescription} from './useDescription'
import {usePress} from './usePress'

export function useCalendarCell(
  props: AriaCalendarCellProps,
  state: CalendarState | RangeCalendarState,
  ref: RefObject<HTMLElement>,
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

  // For performance, reuse the same date object as before if the new date prop is the same.
  // This allows subsequent useMemo results to be reused.
  const lastDate = useRef(null)
  if (lastDate.current && isEqualDay(date, lastDate.current)) {
    date = lastDate.current
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  lastDate.current = date

  const nativeDate = useMemo(
    () => date.toDate(state.timeZone),
    [date, state.timeZone],
  )

  // aria-label should be localize Day of week, Month, Day and Year without Time.
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

      // If date is today, set appropriate string depending on selected state:
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

  // When a cell is focused and this is a range calendar, add a prompt to help
  // screenreader users know that they are in a range selection mode.
  let rangeSelectionPrompt = ''
  if ('anchorDate' in state && isFocused && !state.isReadOnly && isSelectable) {
    // If selection has started add "click to finish selecting range"
    if (state.anchorDate) {
      rangeSelectionPrompt = 'Click to finish selecting date range'
      // Otherwise, add "click to start selecting range" prompt
    } else {
      rangeSelectionPrompt = 'Click to start selecting date range'
    }
  }

  const descriptionProps = useDescription(rangeSelectionPrompt)

  // const isAnchorPressed = useRef(false)
  // const isRangeBoundaryPressed = useRef(false)
  // const touchDragTimerRef = useRef(null)
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
            // @ts-ignore
            isRangeBoundaryPressed.current = true
            return
          } else if (isSameDay(date, state.highlightedRange.end)) {
            state.setAnchorDate(state.highlightedRange.start)
            state.setFocusedDate(date)
            state.setDragging(true)
            // @ts-ignore
            isRangeBoundaryPressed.current = true
            return
          }
        }

        const startDragging = () => {
          state.setDragging(true)
          // @ts-ignore
          touchDragTimerRef.current = null

          state.selectDate(date)
          state.setFocusedDate(date)
          // @ts-ignore
          isAnchorPressed.current = true
        }

        // Start selection on mouse/touch down so users can drag to select a range.
        // On touch, delay dragging to determine if the user really meant to scroll.
        if (e.pointerType === 'touch') {
          // @ts-ignore
          touchDragTimerRef.current = setTimeout(startDragging, 200)
        } else {
          startDragging()
        }
      }
    },
    onPressEnd() {
      // @ts-ignore
      isRangeBoundaryPressed.current = false
      // @ts-ignore
      isAnchorPressed.current = false
      // @ts-ignore
      clearTimeout(touchDragTimerRef.current)
      // @ts-ignore
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
      // @ts-ignore
      if ('anchorDate' in state && touchDragTimerRef.current) {
        state.selectDate(date)
        state.setFocusedDate(date)
      }

      if ('anchorDate' in state) {
        // @ts-ignore
        if (isRangeBoundaryPressed.current) {
          // When clicking on the start or end date of an already selected range,
          // start a new selection on press up to also allow dragging the date to
          // change the existing range.
          state.setAnchorDate(date)
          // @ts-ignore
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

  let tabIndex = null
  if (!isDisabled) {
    tabIndex = isSameDay(date, state.focusedDate) ? 0 : -1
  }

  // Focus the button in the DOM when the state updates.
  // useEffect(() => {
  //   if (isFocused && ref.current) {
  //     focusWithoutScrolling(ref.current)
  //     if (getInteractionModality() !== 'pointer') {
  //       scrollIntoViewport(ref.current, {
  //         containingElement: getScrollParent(ref.current),
  //       })
  //     }
  //   }
  // }, [isFocused, ref])

  const cellDateFormatter = useDateFormatter({
    day: 'numeric',
    timeZone: state.timeZone,
    calendar: date.calendar.identifier,
  })

  const formattedDate = useMemo(
    () =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      cellDateFormatter
        .formatToParts(nativeDate)
        .find((part) => part.type === 'day').value,
    [cellDateFormatter, nativeDate],
  )

  return {
    cellProps: {
      role: 'gridcell',
      'aria-disabled': !isSelectable || null,
      'aria-selected': isSelected || null,
      'aria-invalid': isInvalid || null,
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    buttonProps: {
      ...pressProps,
      onFocus() {
        if (!isDisabled) {
          state.setFocusedDate(date)
        }
      },
      // @ts-ignore
      tabIndex,
      role: 'button',
      'aria-disabled': !isSelectable || null,
      'aria-label': label,
      'aria-invalid': isInvalid || null,
      'aria-describedby':
        [
          isInvalid ? errorMessageId : null,
          descriptionProps['aria-describedby'],
        ]
          .filter(Boolean)
          .join(' ') || undefined,
      onPointerEnter(e: PointerEvent) {
        // Highlight the date on hover or drag over a date when selecting a range.
        if (
          'highlightDate' in state &&
          (e.pointerType !== 'touch' || state.isDragging) &&
          isSelectable
        ) {
          state.highlightDate(date)
        }
      },
      // onPointerDown(e: PointerEvent) {
      //   if (e.target && 'releasePointerCapture' in e.target) {
      //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //     // @ts-expect-error
      //     e.target.releasePointerCapture(e.pointerId)
      //   }
      // },
      onContextMenu(e: MouseEvent) {
        // Prevent context menu on long press.
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
