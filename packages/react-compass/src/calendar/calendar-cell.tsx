import {CalendarDate, isSameMonth} from '@internationalized/date'
import {useCalendarCell} from '@react-aria/calendar'
import {useFocusRing} from '@react-aria/focus'
import {mergeProps} from '@react-aria/utils'
import {CalendarState, RangeCalendarState} from '@react-stately/calendar'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props {
  state: CalendarState | RangeCalendarState
  date: CalendarDate
  currentMonth: CalendarDate
}

const CalendarCell = React.forwardRef<HTMLTableCellElement, Props>(
  (props, ref) => {
    const {state, date, currentMonth} = props

    const cellRef = useDOMRef(ref)

    const {cellProps, buttonProps, isSelected, isDisabled, formattedDate} =
      useCalendarCell({date}, state, cellRef)

    const isOutsideMonth = !isSameMonth(currentMonth, date)

    const {focusProps, isFocusVisible} = useFocusRing()

    return (
      <td {...cellProps} className={isFocusVisible ? 'focused' : ''}>
        <div
          ref={cellRef}
          {...mergeProps(buttonProps, focusProps)}
          hidden={isOutsideMonth}
          className={`${isSelected ? 'selected' : ''} ${
            isDisabled ? 'disabled' : ''
          }`}
          style={{opacity: `${isSelected ? '0.5' : '1'}`}}
        >
          <div>{formattedDate}</div>
        </div>
      </td>
    )
  },
)

export default CalendarCell
