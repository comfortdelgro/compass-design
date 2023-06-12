import {CalendarDate} from '@internationalized/date'
import React from 'react'
import {
  StyledCalendarMonthGrid,
  StyledCalendarMonthYearCell,
} from './calendar-month-year-grid.style'
import {MonthYearState} from './hooks/useMonthYearState'
import {CalendarState, DateValue, RangeCalendarState} from './types'

interface Props {
  state: CalendarState | RangeCalendarState
  maxValue?: DateValue | null | undefined
  monthYearState?: MonthYearState
}

const CalendarYearGrid = (props: Props) => {
  const {state, monthYearState, maxValue} = props

  const handleYearClick = (year: number) => {
    const focusedDate = state.focusedDate

    return () => {
      state.setFocusedDate?.(
        new CalendarDate(
          year,
          focusedDate?.month ?? new Date().getMonth() + 1,
          1,
        ),
      )
      monthYearState?.nextState()
    }
  }

  const currentDate = new Date()

  return (
    <StyledCalendarMonthGrid>
      {Array.isArray(monthYearState?.renderedYears) ? (
        monthYearState?.renderedYears.map((year) => {
          const isDisabled = (() => {
            if (maxValue) {
              return maxValue?.year < year
            }
            if (state.minValue) {
              return state.minValue?.year > year
            }
            return false
          })()

          const isCurrentYear = year === currentDate.getFullYear()

          return (
            <StyledCalendarMonthYearCell
              type='button'
              className={`calendar-year-cell ${isDisabled ? 'disabled' : ''} ${
                isCurrentYear ? 'highlighted' : ''
              }`}
              aria-label={year.toString()}
              onClick={handleYearClick(year)}
              disabled={isDisabled}
              key={year}
            >
              {year}
            </StyledCalendarMonthYearCell>
          )
        })
      ) : (
        <></>
      )}
    </StyledCalendarMonthGrid>
  )
}

export default CalendarYearGrid
