import * as InternationalizedDate from '@internationalized/date'
import {createCalendar, DateValue, parseDate} from '@internationalized/date'
import * as i18n from '@react-aria/i18n'
import {useLocale} from '@react-aria/i18n'
import React from 'react'
import Button from '../button'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import CalendarGrid from './calendar-grid'
import CalendarHeader from './calendar-header'
import {StyledCalendar} from './calendar.style'
import {useCalendar} from './hooks/useCalendar'
import {useCalendarState} from './hooks/useCalendarState'
import {DatePickerState} from './types'
interface Props extends StyledComponentProps {
  children?: React.ReactNode
  state?: DatePickerState
  hasFooter?: boolean
  onCancelCallback?: (() => void) | undefined
  maxValue?: DateValue
  isDisabled?: boolean
}

export type CalendarProps = Props & DateValue

const Calendar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    state: pickerState,
    onCancelCallback,
    hasFooter = false,
    css = {},
    maxValue = parseDate('2999-02-17'),
    isDisabled = false,
    ...delegated
  } = props

  const {locale} = useLocale()

  const calendarRef = useDOMRef(ref)

  const state = useCalendarState({
    locale: locale,
    isDisabled,
    createCalendar,
    ...delegated,
  })

  const {calendarProps, prevButtonProps, nextButtonProps} = useCalendar(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    {isDisabled, ...delegated},
    state,
  )

  const handleCancelButtonClick = () => {
    onCancelCallback?.()
    pickerState?.close()
  }

  return (
    <>
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
    </>
  )
})

export default Calendar as typeof Calendar & {
  InternationalizedDate: typeof InternationalizedDate
  I18N: typeof i18n
}
