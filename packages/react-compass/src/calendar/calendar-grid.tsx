import React, {useRef} from 'react'
import {
  CalendarDate,
  DateValue,
  endOfMonth,
  getWeeksInMonth,
  parseDate,
} from '../internationalized/date'
import {useLocale} from '../internationalized/i18n'
import {CSS, CssInjection} from '../utils/objectToCss'
import CalendarCell from './calendar-cell'
import {useCalendarGrid} from './hooks/useCalendarGrid'
import styles from './styles/calendar-grid.module.css'
import {CalendarState, DateDuration, RangeCalendarState} from './types'

interface Props {
  css?: CSS
  children?: React.ReactNode
  state: CalendarState | RangeCalendarState
  offset?: DateDuration
  maxValue?: DateValue | null | undefined
}

const DEFAULT_OFFSET: DateDuration = {
  days: 0,
  months: 0,
  weeks: 0,
  years: 0,
}

const CalendarGrid = (props: Props) => {
  const {
    state,
    offset = DEFAULT_OFFSET,
    css = {},
    maxValue = parseDate('2999-02-17'),
  } = props
  const tableRef = useRef(null)
  const {locale} = useLocale()
  const startDate = state?.visibleRange?.start?.add(offset) as CalendarDate
  const endDate = endOfMonth(startDate)

  const {gridProps, headerProps, weekDays} = useCalendarGrid(
    {
      startDate,
      endDate,
    },
    state,
  )

  const weeksInMonth = getWeeksInMonth(startDate, locale)

  const isFiveWeeks = [...new Array(weeksInMonth).keys()].length === 5

  return (
    <CssInjection css={css} childrenRef={tableRef}>
      <table
        {...gridProps}
        ref={tableRef}
        cellPadding='0'
        className={`${styles.calendarGrid} cdg-calendar-grid`}
      >
        <thead {...headerProps}>
          <tr>
            {weekDays.map((day, index) => (
              <th
                key={index}
                className={`${styles.calendarWeekday} cdg-calendar-weekday`}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
            <tr key={weekIndex}>
              {state
                .getDatesInWeek?.(weekIndex, startDate)
                .map((date, i) =>
                  date ? (
                    <CalendarCell
                      key={i}
                      state={state}
                      date={date}
                      currentMonth={startDate}
                      maxValue={maxValue}
                    />
                  ) : (
                    <td key={i} />
                  ),
                )}
            </tr>
          ))}
          {isFiveWeeks && (
            <tr
              aria-hidden
              className={`${styles.rowPlaceholder} cdg-calendar-week-sixth-placeholder`}
            />
          )}
        </tbody>
      </table>
    </CssInjection>
  )
}

export default CalendarGrid
