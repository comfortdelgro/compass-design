import {CalendarDate} from '../internationalized/date'
import {MonthYearState} from './hooks/useMonthYearState'
import styles from './styles/calendar-month-year-grid.module.css'
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
    <div className={styles.calendarMonthYearGrid}>
      {Array.isArray(monthYearState?.renderedYears) &&
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

          // content classes
          const rootClasses = [
            styles.calendarMonthYearCell,
            isCurrentYear && styles.highlighted,
            isCurrentYear && 'highlighted',
            isDisabled && 'disabled',
            'cdg-calendar-year-cell',
          ]
            .filter(Boolean)
            .join(' ')

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
