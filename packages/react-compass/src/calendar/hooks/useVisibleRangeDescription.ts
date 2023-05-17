import {CalendarDate} from '@internationalized/date'
import {useDateFormatter} from '@react-aria/i18n'
import {useMemo} from 'react'

export function useVisibleRangeDescription(
  startDate: CalendarDate,
  timeZone: string,
) {
  const monthFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    era: undefined,
    calendar: startDate.calendar.identifier,
    timeZone,
  })

  return useMemo(() => {
    return monthFormatter.format(startDate.toDate(timeZone))
  }, [startDate, monthFormatter, timeZone])
}
