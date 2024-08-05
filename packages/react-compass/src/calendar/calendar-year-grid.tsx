import { CalendarDate } from '../internationalized/date'
import { classNames } from '../utils/string'
import { MonthYearState } from './hooks/useMonthYearState'
import styles from './styles/calendar-month-year-grid.module.css'
import { CalendarState, DateValue, RangeCalendarState } from './types'

interface Props {
  state: CalendarState | RangeCalendarState
  maxValue?: DateValue | null | undefined
  monthYearState?: MonthYearState
}

const CalendarYearGrid = (props: Props) => {
  const { state, monthYearState, maxValue } = props

  const handleYearClick = (year: number) => {
    const focusedDate = state.focusedDate

    return () => {
      const value = new CalendarDate(
        year,
        focusedDate?.month ?? new Date().getMonth() + 1,
        1,
      );
      if (monthYearState.picker === 'year') {
        (state as CalendarState).setValue(value)
        state.setFocusedDate?.(value)
      } else {
        state.setFocusedDate?.(value)
        monthYearState?.nextState()
      }
    }
  }

  return (
    <div
      className={classNames(
        styles.calendarMonthYearGrid,
        'cdg-calendar-year-grid',
      )}
    >
      {Array.isArray(monthYearState?.renderedYears) &&
        monthYearState?.renderedYears.map((year) => {
          const isDisabled = (() => {
            if (maxValue && state.minValue) {
              return maxValue?.year < year || state.minValue?.year > year
            }
            if (maxValue) {
              return maxValue?.year < year
            }
            if (state.minValue) {
              return state.minValue?.year > year
            }
            return false
          })()

          const isCurrentYear = year === (state.focusedDate as CalendarDate)?.year

          // content classes
          const rootClasses = classNames(
            styles.calendarMonthYearCell,
            isCurrentYear && styles.highlighted,
            isCurrentYear && 'highlighted',
            isDisabled && 'disabled',
            'cdg-calendar-year-cell',
          )

          return (
            <button
              key={year}
              type='button'
              disabled={isDisabled}
              className={rootClasses}
              aria-label={year.toString()}
              onClick={handleYearClick(year)}
            >
              {year}
            </button>
          )
        })}
    </div>
  )
}

export default CalendarYearGrid
