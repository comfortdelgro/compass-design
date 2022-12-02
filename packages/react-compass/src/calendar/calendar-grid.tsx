import {
  DateDuration,
  endOfMonth,
  getWeeksInMonth,
} from '@internationalized/date'
import {useCalendarGrid} from '@react-aria/calendar'
import {useLocale} from '@react-aria/i18n'
import {CalendarState, RangeCalendarState} from '@react-stately/calendar'
import CalendarCell from './calendar-cell'

interface Props {
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
  const {state, offset = DEFAULT_OFFSET} = props

  const {locale} = useLocale()
  const startDate = state.visibleRange.start.add(offset)
  const endDate = endOfMonth(startDate)

  const {gridProps, headerProps, weekDays} = useCalendarGrid(
    {
      startDate,
      endDate,
    },
    state,
  )

  const weeksInMonth = getWeeksInMonth(startDate, locale)

  return (
    <table {...gridProps} cellPadding='0' className='flex-1'>
      <thead {...headerProps} className='text-gray-600'>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
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
    </table>
  )
}

export default CalendarGrid
