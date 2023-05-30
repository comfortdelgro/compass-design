import * as InternationalizedDate from '@internationalized/date'
import {
  createCalendar,
  getLocalTimeZone,
  parseDate,
} from '@internationalized/date'
import {useDateFormatter, useLocale} from '@react-aria/i18n'
import React from 'react'
import Button, {ButtonProps} from '../button'
import CalendarGrid from '../calendar/calendar-grid'
import CalendarHeader from '../calendar/calendar-header'
import {useRangeCalendar} from '../calendar/hooks/useRangeCalendar'
import {useRangeCalendarState} from '../calendar/hooks/useRangeCalendarState'
import {DateRangePickerState, DateValue, RangeValue} from '../calendar/types'
import {useDatePickerContext} from '../date-picker/date-picker-context'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledRangeCalendar} from './range-calendar.style'

interface Props extends StyledComponentProps {
  value?: RangeValue<DateValue>
  children?: React.ReactNode
  state?: DateRangePickerState
  hasFooter?: boolean
  maxValue?: DateValue | null | undefined
  onChange?: (e: unknown) => void
  allowsNonContiguousRanges?: boolean
  isDateUnavailable?: (date: DateValue) => boolean
  isDisabled?: boolean
  isReadOnly?: boolean
}

export type RangeCalendarProps = Props

const RangeCalendar = React.forwardRef<HTMLDivElement, RangeCalendarProps>(
  (props, ref) => {
    const {
      state: pickerState,
      hasFooter,
      css = {},
      maxValue = parseDate('2999-02-17'),
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delegated,
      state,
      rangeCalendarRef,
    )

    const formatter = useDateFormatter({})

    const {setIsReset} = useDatePickerContext()

    const handleClearButtonClick = () => {
      props.onChange?.({
        start: null as unknown as DateValue,
        end: null as unknown as DateValue,
      })

      setIsReset?.(true)
    }

    const handleTodayButtonClick = () => {
      pickerState?.setDateRange({
        start: InternationalizedDate.today(
          InternationalizedDate.getLocalTimeZone(),
        ),
        end: InternationalizedDate.today(
          InternationalizedDate.getLocalTimeZone(),
        ),
      })

      state.setFocusedDate?.(
        InternationalizedDate.today(InternationalizedDate.getLocalTimeZone()),
      )
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
          <CalendarGrid state={state} maxValue={maxValue} />
          <CalendarGrid
            state={state}
            offset={{months: 1}}
            maxValue={maxValue}
          />
        </div>
        {hasFooter && (
          <div className='calendar-footer'>
            <Button variant='ghost' onPress={handleClearButtonClick}>
              Clear
            </Button>
            <div className='calendar-footer-right-side'>
              <p className='preview-date'>
                {state.value?.start &&
                  state.value?.end &&
                  formatter.formatRange(
                    state.value.start.toDate(getLocalTimeZone()),
                    state.value.end.toDate(getLocalTimeZone()),
                  )}
              </p>
              <Button variant='primary' onPress={handleTodayButtonClick}>
                Today
              </Button>
            </div>
          </div>
        )}
      </StyledRangeCalendar>
    )
  },
)

export default RangeCalendar
