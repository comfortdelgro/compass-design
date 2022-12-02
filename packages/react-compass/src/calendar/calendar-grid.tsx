import {
  DateDuration,
  endOfMonth,
  getWeeksInMonth,
} from '@internationalized/date'
import {useCalendarGrid} from '@react-aria/calendar'
import {useLocale} from '@react-aria/i18n'
import {CalendarState, RangeCalendarState} from '@react-stately/calendar'
import {StyledComponentProps} from '../utils/stitches.types'
import CalendarCell from './calendar-cell'
import {StyledCalendarGrid} from './calendar-grid.style'

interface Props extends StyledComponentProps {
  state: CalendarState | RangeCalendarState
  offset?: DateDuration
}

const DEFAULT_OFFSET: DateDuration = {
  days: 0,
  months: 0,
  weeks: 0,
  years: 0,
}

const CalendarGrid = (props: Props) => {
  const {state, offset = DEFAULT_OFFSET, css = {}} = props

  const {locale} = useLocale()
  const startDate = state.visibleRange.start.add(offset)
  const endDate = endOfMonth(startDate)

  const {gridProps, headerProps} = useCalendarGrid(
    {
      startDate,
      endDate,
    },
    state,
  )

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

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
