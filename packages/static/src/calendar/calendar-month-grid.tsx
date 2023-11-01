import {CalendarDate} from '../internationalized/date'
import {MONTH_YEAR_STATE, useMonthYearCalendar} from './hooks/useMonthYearState'
import styles from './styles/calendar-month-year-grid.module.css'
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
    <div className={styles.calendarMonthYearGrid}>
      {months.map((month) => {
        return (
          <button
            className={styles.calendarMonthYearCell}
            type='button'
            aria-label={month}
            onClick={handleMonthClick(month)}
            key={month}
          >
            {month}
          </button>
        )
      })}
    </div>
  )
}

export default CalendarMonthGrid
