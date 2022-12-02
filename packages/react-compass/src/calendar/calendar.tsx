import {createCalendar, DateValue} from '@internationalized/date'
import {useCalendar} from '@react-aria/calendar'
import {useLocale} from '@react-aria/i18n'
import {useCalendarState} from '@react-stately/calendar'
import type {SpectrumCalendarProps} from '@react-types/calendar'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import CalendarGrid from './calendar-grid'
import CalendarHeader from './calendar-header'
interface Props extends StyledComponentProps, SpectrumCalendarProps<DateValue> {
  children?: React.ReactNode
}

const Calendar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {locale} = useLocale()
  const state = useCalendarState({
    ...props,
    visibleDuration: {months: 2},
    locale,
    createCalendar,
  })
  const {calendarProps, prevButtonProps, nextButtonProps} = useCalendar(
    props,
    state,
  )
  return (
    <div ref={ref}>
      <CalendarHeader
        state={state}
        calendarProps={calendarProps}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
      />
      <div>
        <CalendarGrid state={state} />
        <CalendarGrid state={state} offset={{months: 1}} />
      </div>
    </div>
  )
})

export default Calendar
