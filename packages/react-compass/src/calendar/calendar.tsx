import * as InternationalizedDate from '@internationalized/date'
import {
  CalendarDate,
  createCalendar,
  DateValue,
  parseDate,
} from '@internationalized/date'
import {useCalendar} from '@react-aria/calendar'
import * as i18n from '@react-aria/i18n'
import {useLocale} from '@react-aria/i18n'
import {useCalendarState} from '@react-stately/calendar'
import {DatePickerState} from '@react-stately/datepicker'
import type {SpectrumCalendarProps} from '@react-types/calendar'
import React from 'react'
import Button from '../button'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import CalendarGrid from './calendar-grid'
import CalendarHeader from './calendar-header'
import {StyledCalendar} from './calendar.style'
interface Props extends StyledComponentProps, SpectrumCalendarProps<DateValue> {
  children?: React.ReactNode
  state?: DatePickerState
  hasFooter?: boolean
  onCancelCallback?: (() => void) | undefined
  maxValue?: CalendarDate
}

export type CalendarProps = Props & DateValue

const Calendar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    state: pickerState,
    onCancelCallback,
    hasFooter = false,
    css = {},
    maxValue = parseDate('2999-02-17'),
    ...delegated
  } = props

  const {locale} = useLocale()

  const calendarRef = useDOMRef(ref)

  const state = useCalendarState({
    ...delegated,
    visibleDuration: {months: 1},
    locale,
    createCalendar,
  })

  const {calendarProps, prevButtonProps, nextButtonProps} = useCalendar(
    delegated,
    state,
  )

  const handleCancelButtonClick = () => {
    onCancelCallback?.()
    pickerState?.close()
  }

  return (
    <StyledCalendar ref={calendarRef} css={css}>
      <CalendarHeader
        state={state}
        calendarProps={calendarProps}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
      />
      <CalendarGrid state={state} maxValue={maxValue} />
      {hasFooter && (
        <div className='calendar-footer'>
          <Button variant='ghost' onPress={handleCancelButtonClick}>
            Cancel
          </Button>
        </div>
      )}
    </StyledCalendar>
  )
})

export default Calendar as typeof Calendar & {
  InternationalizedDate: typeof InternationalizedDate
  I18N: typeof i18n
}

export type DateValue
