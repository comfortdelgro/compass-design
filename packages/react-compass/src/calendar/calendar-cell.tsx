import React, {useRef} from 'react'
import {
  CalendarDate,
  DateValue,
  getLocalTimeZone,
  isSameDay,
  isSameMonth,
  isToday as isTodayFunction,
  parseDate,
} from '../internationalized/date'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {useCalendarCell} from './hooks/useCalendarCell'
import styles from './styles/calendar-cell.module.css'
import {CalendarState, RangeCalendarState} from './types'

interface Props {
  css?: CSS
  state: CalendarState | RangeCalendarState
  date: CalendarDate
  currentMonth: CalendarDate
  maxValue?: DateValue | null | undefined
}

const CalendarCell = React.forwardRef<HTMLTableCellElement, Props>(
  (props, ref) => {
    const {
      state,
      date,
      currentMonth,
      css = {},
      maxValue = parseDate('2099-02-17'),
    } = props

    const cellRef = useDOMRef(ref)

    const {cellProps, buttonProps, isSelected, isUnavailable, formattedDate} =
      useCalendarCell({date}, state, cellRef)

    let {isDisabled} = useCalendarCell({date}, state, cellRef)

    const isOutsideMonth = !isSameMonth(currentMonth, date)

    const isToday = isTodayFunction(date, getLocalTimeZone())

    const isRangeCalendar = 'highlightedRange' in state

    let isSelectionStart = false
    let isSelectionEnd = false

    if (isRangeCalendar) {
      isSelectionStart = state.highlightedRange
        ? isSameDay(date, state.highlightedRange.start!)
        : isSelected
      isSelectionEnd = state.highlightedRange
        ? isSameDay(date, state.highlightedRange.end!)
        : isSelected

      isDisabled = isDisabled ? isDisabled : date.month !== currentMonth.month
    }

    const maxValueClassFunc = () => {
      if (maxValue && date > maxValue) {
        isDisabled = true
      }
      return
    }
    maxValueClassFunc()

    const cellWrapperRef = useRef(null)

    const rootClasses = classNames(
      styles.calendarCell,
      isSelected && isRangeCalendar
        ? `selected ${styles.selected}`
        : isSelected && !isRangeCalendar
        ? `highlighted ${styles.highlighted}`
        : '',
      (isSelectionStart || isSelectionEnd) &&
        `highlighted ${styles.highlighted}`,
      isUnavailable && `unavailable ${styles.unavailable}`,
      isToday && `today ${styles.today}`,
      'cdg-calendar-cell',
    )

    const cellClasses = classNames(
      styles.calendarCellValue,
      isDisabled && 'disabled',
      isDisabled && styles.disabled,
      isSelected && 'selected',
      'cdg-calendar-cell-value',
    )

    return (
      <CssInjection css={css} childrenRef={cellWrapperRef}>
        <td {...cellProps} ref={cellWrapperRef} className={rootClasses}>
          <div
            {...buttonProps}
            ref={cellRef}
            className={cellClasses}
            hidden={isOutsideMonth}
            role={buttonProps['role']}
            tabIndex={buttonProps['tabIndex']}
            aria-label={buttonProps['aria-label']}
            aria-invalid={buttonProps['aria-invalid']}
            aria-disabled={buttonProps['aria-disabled']}
          >
            {formattedDate}
          </div>
        </td>
      </CssInjection>
    )
  },
)

export default CalendarCell
