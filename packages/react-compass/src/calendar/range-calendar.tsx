import {createCalendar, DateValue} from '@internationalized/date'
import {useRangeCalendar} from '@react-aria/calendar'
import {useLocale} from '@react-aria/i18n'
import {useRangeCalendarState} from '@react-stately/calendar'
import type {SpectrumRangeCalendarProps} from '@react-types/calendar'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import CalendarGrid from './calendar-grid'
import CalendarHeader from './calendar-header'
interface Props
  extends StyledComponentProps,
    SpectrumRangeCalendarProps<DateValue> {
  children?: React.ReactNode
}

const RangeCalendar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {locale} = useLocale()
  const state = useRangeCalendarState({
    ...props,
    visibleDuration: {months: 2},
    locale,
    createCalendar,
  })

  const rangeCalendarRef = useDOMRef(ref)

  const {calendarProps, prevButtonProps, nextButtonProps} = useRangeCalendar(
    props,
    state,
    rangeCalendarRef,
  )

  return (
    <div ref={rangeCalendarRef}>
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

export default RangeCalendar
