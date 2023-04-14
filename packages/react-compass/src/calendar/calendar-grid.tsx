import {
  DateDuration,
  DateValue,
  endOfMonth,
  getWeeksInMonth,
  parseDate,
} from '@internationalized/date'
import {useLocale} from '@react-aria/i18n'
import {CalendarState, RangeCalendarState} from '@react-stately/calendar'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import CalendarCell from './calendar-cell'
import {StyledCalendarGrid} from './calendar-grid.style'
import {useCalendarGrid2} from './hooks/useCalendarGrid'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  state: CalendarState | RangeCalendarState
  offset?: DateDuration
  maxValue?: DateValue
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

  const {locale} = useLocale()
  const startDate = state.visibleRange.start.add(offset)
  const endDate = endOfMonth(startDate)

  // eslint-disable-next-line
  const {gridProps, headerProps, weekDays} = useCalendarGrid2(
    {
      startDate,
      endDate,
    },
    state,
  )

  const weeksInMonth = getWeeksInMonth(startDate, locale)

  return (
    <StyledCalendarGrid {...gridProps} css={css} cellPadding='0'>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index} className='calendar-weekday'>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex, startDate)
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
      </tbody>
    </StyledCalendarGrid>
  )
}

export default CalendarGrid
