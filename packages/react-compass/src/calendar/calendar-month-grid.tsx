import {CalendarDate} from '@internationalized/date'
import React from 'react'
import {
  StyledCalendarMonthGrid,
  StyledCalendarMonthYearCell,
} from './calendar-month-year-grid.style'
import {MONTH_YEAR_STATE, useMonthYearCalendar} from './hooks/useMonthYearState'
import {CalendarState, DateValue, RangeCalendarState} from './types'

interface Props {
  state: CalendarState | RangeCalendarState
  maxValue?: DateValue | null | undefined
  monthYearState?: ReturnType<typeof useMonthYearCalendar>
}

const CalendarMonthGrid = (props: Props) => {
  const {state, monthYearState} = props

  const months = monthYearState?.months ?? []

  const handleMonthClick = (month: string) => {
    const focusedDate = state.focusedDate

    return () => {
      state.setFocusedDate?.(
        new CalendarDate(
          focusedDate?.year ?? new Date().getFullYear(),
          months.indexOf(month) + 1,
          1,
        ),
      )
      monthYearState?.setMonthYearState(MONTH_YEAR_STATE.DATE)
    }
  }

  return (
    <StyledCalendarMonthGrid>
      {months.map((month) => {
        return (
          <StyledCalendarMonthYearCell
            type='button'
            aria-label={month}
            onClick={handleMonthClick(month)}
            key={month}
          >
            {month}
          </StyledCalendarMonthYearCell>
        )
      })}
    </StyledCalendarMonthGrid>
  )
}

export default CalendarMonthGrid
