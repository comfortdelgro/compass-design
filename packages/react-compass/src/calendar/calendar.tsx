import * as InternationalizedDate from '@internationalized/date'
import {createCalendar, DateValue, parseDate} from '@internationalized/date'
import React, {useCallback} from 'react'
import Button from '../button'
import {useDatePickerContext} from '../date-picker/date-picker-context'
import * as i18n from '../internationalized/i18n'
import {useLocale} from '../internationalized/i18n'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import CalendarGrid from './calendar-grid'
import CalendarHeader from './calendar-header'
import CalendarMonthGrid from './calendar-month-grid'
import CalendarYearGrid from './calendar-year-grid'
import {StyledCalendar} from './calendar.style'
import {useCalendar} from './hooks/useCalendar'
import {useCalendarState} from './hooks/useCalendarState'
import {MONTH_YEAR_STATE, useMonthYearCalendar} from './hooks/useMonthYearState'
import {DatePickerState, ValueBase} from './types'
interface Props extends StyledComponentProps, ValueBase<DateValue> {
  children?: React.ReactNode
  state?: DatePickerState
  hasFooter?: boolean
  maxValue?: DateValue | null | undefined
  minValue?: DateValue | null | undefined
  isDisabled?: boolean
  ctaButtonRender?: React.ReactNode
  isDateUnavailable?: (date: DateValue) => boolean
}

export type CalendarProps = Props & DateValue

const Calendar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    state: pickerState,
    hasFooter = false,
    css = {},
    maxValue = parseDate('2999-02-17'),
    isDisabled = false,
    ctaButtonRender,
    ...delegated
  } = props

  const {locale} = useLocale()

  const calendarRef = useDOMRef(ref)

  const state = useCalendarState({
    locale: locale,
    isDisabled,
    createCalendar,
    ...delegated,
    value: props.state ? props.state?.value : (props.value as DateValue),
  })

  const monthYearState = useMonthYearCalendar({state, maxValue})

  const {calendarProps, prevButtonProps, nextButtonProps} = useCalendar(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    {isDisabled, ...delegated},
    state,
  )

  const {setIsReset} = useDatePickerContext()

  const handleClearButtonClick = () => {
    if (!setIsReset) {
      props.onChange?.(null as unknown as DateValue)
    }
    setIsReset?.(true)
  }

  const handleTodayButtonClick = () => {
    const today = InternationalizedDate.today(
      InternationalizedDate.getLocalTimeZone(),
    )
    if (pickerState) {
      pickerState?.setDateValue(today)
    } else {
      state.selectDate?.(today)
    }
    state.setFocusedDate?.(today)
  }

  const renderBody = () => {
    switch (monthYearState.currentState) {
      case MONTH_YEAR_STATE.DATE:
        return <CalendarGrid state={state} maxValue={maxValue} />
      case MONTH_YEAR_STATE.MONTH:
        return (
          <CalendarMonthGrid
            state={state}
            monthYearState={monthYearState}
            maxValue={maxValue}
          />
        )
      case MONTH_YEAR_STATE.YEAR:
        return (
          <CalendarYearGrid
            state={state}
            monthYearState={monthYearState}
            maxValue={maxValue}
          />
        )
      default:
        return <CalendarGrid state={state} maxValue={maxValue} />
    }
  }

  const renderCTAButton = useCallback(() => {
    if (ctaButtonRender) {
      return ctaButtonRender
    } else {
      return (
        <Button
          className='cdg-calendar-today-btn'
          onPress={() => {
            monthYearState.setMonthYearState(MONTH_YEAR_STATE.DATE)
            handleTodayButtonClick()
          }}
        >
          Today
        </Button>
      )
    }
  }, [ctaButtonRender])

  return (
    <>
      <StyledCalendar ref={calendarRef} css={css}>
        <CalendarHeader
          state={state}
          calendarProps={calendarProps}
          prevButtonProps={prevButtonProps}
          nextButtonProps={nextButtonProps}
          middleButtonProps={monthYearState}
        />
        {renderBody()}
        {hasFooter && (
          <div className='calendar-footer'>
            <Button
              className='cdg-calendar-clear-btn'
              variant='ghost'
              onPress={() => {
                monthYearState.setMonthYearState(MONTH_YEAR_STATE.DATE)
                handleClearButtonClick()
              }}
            >
              Clear
            </Button>
            {renderCTAButton()}
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
