import {
createCalendar,
DateValue,
getLocalTimeZone
} from '@internationalized/date'
import { useRangeCalendar } from '@react-aria/calendar'
import { useDateFormatter,useLocale } from '@react-aria/i18n'
import { useRangeCalendarState } from '@react-stately/calendar'
import { DateRangePickerState } from '@react-stately/datepicker'
import type { DateRange,SpectrumRangeCalendarProps } from '@react-types/calendar'
import React from 'react'
import Button,{ ButtonProps } from '../button'
import CalendarGrid from '../calendar/calendar-grid'
import CalendarHeader from '../calendar/calendar-header'
import { StyledComponentProps } from '../utils/stitches.types'
import { useDOMRef } from '../utils/use-dom-ref'
import { StyledRangeCalendar } from './range-calendar.style'

interface Props
  extends StyledComponentProps,
    SpectrumRangeCalendarProps<DateValue> {
  children?: React.ReactNode
  state?: DateRangePickerState
  hasFooter?: boolean
  onCancelCallback?: (() => void) | undefined
  onApplyCallback?: ((e?: DateRange) => void) | undefined
}

export type RangeCalendarProps = Props

const RangeCalendar = React.forwardRef<HTMLDivElement, RangeCalendarProps>(
  (props, ref) => {
    const {
      state: pickerState,
      hasFooter,
      css = {},
      onCancelCallback,
      onApplyCallback,
      ...delegated
    } = props

    const {locale} = useLocale()
    const state = useRangeCalendarState({
      ...delegated,
      visibleDuration: {months: 2},
      locale,
      createCalendar,
    })

    const rangeCalendarRef = useDOMRef(ref)

    const {calendarProps, prevButtonProps, nextButtonProps} = useRangeCalendar(
      delegated,
      state,
      rangeCalendarRef,
    )

    const formatter = useDateFormatter({})

    const handleCancelButtonClick = () => {
      onCancelCallback?.()
      pickerState?.close()
      return
    }

    const handleApplyButtonClick = () => {
      if (pickerState) onApplyCallback?.(pickerState.value)
      pickerState?.close()
      return
    }

    return (
      <StyledRangeCalendar ref={rangeCalendarRef} css={css}>
        <CalendarHeader
          state={state}
          variant='range'
          calendarProps={calendarProps}
          prevButtonProps={prevButtonProps as unknown as ButtonProps}
          nextButtonProps={nextButtonProps as unknown as ButtonProps}
        />
        <div className='calendar-body'>
          <CalendarGrid state={state} />
          <CalendarGrid state={state} offset={{months: 1}} />
        </div>
        {hasFooter && (
          <div className='calendar-footer'>
            <p className='preview-date'>
              {state.value &&
                formatter.formatRange(
                  state.value.start.toDate(getLocalTimeZone()),
                  state.value.end.toDate(getLocalTimeZone()),
                )}
            </p>
            <Button variant='ghost' onPress={handleCancelButtonClick}>
              Cancel
            </Button>
            <Button variant='primary' onPress={handleApplyButtonClick}>
              Apply
            </Button>
          </div>
        )}
      </StyledRangeCalendar>
    )
  },
)

export default RangeCalendar
