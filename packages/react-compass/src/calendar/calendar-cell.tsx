import {
  CalendarDate,
  getLocalTimeZone,
  isSameDay,
  isSameMonth,
  isToday as isTodayFunction,
} from '@internationalized/date'
import {useCalendarCell} from '@react-aria/calendar'
import {useFocusRing} from '@react-aria/focus'
import {mergeProps} from '@react-aria/utils'
import {CalendarState, RangeCalendarState} from '@react-stately/calendar'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledCalendarCell} from './calendar-cell.style'

interface Props extends StyledComponentProps {
  state: CalendarState | RangeCalendarState
  date: CalendarDate
  currentMonth: CalendarDate
}

const CalendarCell = React.forwardRef<HTMLTableCellElement, Props>(
  (props, ref) => {
    const {state, date, currentMonth, css = {}} = props

    const cellRef = useDOMRef(ref)

    const {cellProps, buttonProps, isSelected, isDisabled, formattedDate} =
      useCalendarCell({date}, state, cellRef)

    const isOutsideMonth = !isSameMonth(currentMonth, date)

    const isToday = isTodayFunction(date, getLocalTimeZone())

    const isRangeCalendar = 'highlightedRange' in state

    let isSelectionStart = false
    let isSelectionEnd = false

    if (isRangeCalendar) {
      isSelectionStart = state.highlightedRange
        ? isSameDay(date, state.highlightedRange.start)
        : isSelected
      isSelectionEnd = state.highlightedRange
        ? isSameDay(date, state.highlightedRange.end)
        : isSelected
    }

    const classNameCombine = () => {
      let className = ''
      if (isFocusVisible) className += 'focused '
      if (isSelected && isRangeCalendar) className += 'selected '
      else if (isSelected && !isRangeCalendar) className += 'highlighted '
      if (isSelectionStart || isSelectionEnd) className += 'highlighted '
      if (isToday) className += 'today '
      return className
    }

    const {focusProps, isFocusVisible} = useFocusRing()

    return (
      <StyledCalendarCell
        {...cellProps}
        {...mergeProps(buttonProps, focusProps)}
        css={css}
        className={classNameCombine()}
      >
        <div
          ref={cellRef}
          hidden={isOutsideMonth}
          className={`calendar-cell-value ${isDisabled ? 'disabled' : ''} ${
            isSelected ? 'selected' : ''
          }`}
        >
          {formattedDate}
        </div>
      </StyledCalendarCell>
    )
  },
)

export default CalendarCell
