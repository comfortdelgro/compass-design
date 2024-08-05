import { CalendarDate } from '../internationalized/date'
import { classNames } from '../utils/string'
import { MONTH_YEAR_STATE, MonthYearState } from './hooks/useMonthYearState'
import styles from './styles/calendar-month-year-grid.module.css'
import { CalendarState, DateValue, RangeCalendarState } from './types'
import { isInvalid } from './utils'
interface Props {
  state: CalendarState | RangeCalendarState
  maxValue?: DateValue | null | undefined
  monthYearState?: MonthYearState
}

const CalendarMonthGrid = (props: Props) => {
  const { state, monthYearState, maxValue } = props

  const months = monthYearState?.months ?? []

  const handleMonthClick = (month: string) => {
    const focusedDate = state.focusedDate

    return () => {

      if (monthYearState.picker === 'month') {
        (state as CalendarState).setValue(new CalendarDate(
          focusedDate?.year ?? new Date().getFullYear(),
          months.indexOf(month) + 1,
          1,
        ))
      } else {
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
  }

  return (
    <div
      className={classNames(
        styles.calendarMonthYearGrid,
        'cdg-calendar-month-grid',
      )}
    >
      {months.map((month) => {
        const dayOfMonth = new CalendarDate(state.focusedDate?.year, months.indexOf(month) + 1, 1)
        const isDisabled = isInvalid(dayOfMonth, state.minValue, maxValue)
        const isHighlighted = state.focusedDate?.year === (state.value as CalendarDate)?.year && (state.value as CalendarDate)?.month === months.indexOf(month) + 1
        return (
          <button
            disabled={isDisabled}
            key={month}
            type='button'
            aria-label={month}
            aria-selected={isHighlighted}
            onClick={handleMonthClick(month)}
            className={classNames(
              styles.calendarMonthYearCell,
              isHighlighted ? styles.highlighted : undefined,
              'cdg-calendar-month-grid-cell',
            )}
          >
            {month}
          </button>
        )
      })}
    </div>
  )
}

export default CalendarMonthGrid
