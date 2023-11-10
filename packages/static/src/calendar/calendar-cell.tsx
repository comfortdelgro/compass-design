import {useFocusRing} from '@react-aria/focus'
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
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {useCalendarCell} from './hooks/useCalendarCell'
import styles from './styles/calendar-cell.module.css'
import {CalendarState, RangeCalendarState} from './types'

interface Props {
  css?: unknown
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

    const classNameCombine = () => {
      let className = `${styles.calendarCell} `
      if (isFocusVisible) className += `focused ${styles.focused} `
      if (isSelected && isRangeCalendar)
        className += `selected ${styles.selected} `
      else if (isSelected && !isRangeCalendar)
        className += `highlighted ${styles.highlighted} `
      if (isSelectionStart || isSelectionEnd)
        className += `highlighted ${styles.highlighted} `
      if (isUnavailable) className += `unavailable ${styles.unavailable} `
      if (isToday) className += `today ${styles.today} `
      return className
    }

    const maxValueClassFunc = () => {
      if (maxValue && date > maxValue) {
        isDisabled = true
      }
      return
    }
    maxValueClassFunc()

    const {focusProps, isFocusVisible} = useFocusRing()

    const cellWrapperRef = useRef(null)

    return (
      <>
        {isDisabled ? (
          <CssInjection css={css} childrenRef={cellWrapperRef}>
            <td
              ref={cellWrapperRef}
              {...cellProps}
              className={classNameCombine()}
              aria-selected={isSelected}
              aria-disabled={isDisabled}
            >
              <div
                ref={cellRef}
                hidden={isOutsideMonth}
                className={`calendar-cell-value  ${'disabled'} ${
                  isSelected ? 'selected' : ''
                } ${styles.calendarCellValue} ${styles.disabled}`}
              >
                {formattedDate}
              </div>
            </td>
          </CssInjection>
        ) : (
          <CssInjection css={css} childrenRef={cellWrapperRef}>
            <td
              ref={cellWrapperRef}
              {...cellProps}
              className={classNameCombine()}
            >
              <div
                aria-label={buttonProps['aria-label']}
                aria-disabled={buttonProps['aria-disabled']}
                aria-invalid={buttonProps['aria-invalid']}
                role={buttonProps['role']}
                ref={cellRef}
                hidden={isOutsideMonth}
                className={`calendar-cell-value  ${
                  isDisabled ? 'disabled' : ''
                } ${isSelected ? 'selected' : ''} ${styles.calendarCellValue} ${
                  isDisabled ? styles.disabled : ''
                }`}
                {...focusProps}
                {...buttonProps}
                tabIndex={buttonProps['tabIndex']}
              >
                {formattedDate}
              </div>
            </td>
          </CssInjection>
        )}
      </>
    )
  },
)

export default CalendarCell
