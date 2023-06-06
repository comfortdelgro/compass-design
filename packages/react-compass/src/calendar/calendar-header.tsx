import {DateValue} from '@internationalized/date'
import {useDateFormatter} from '@react-aria/i18n'
import {VisuallyHidden} from '@react-aria/visually-hidden'
import React from 'react'
import Button, {ButtonProps} from '../button'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCalendarHeader} from './calendar-header.style'
import {MonthYearState, MONTH_YEAR_STATE} from './hooks/useMonthYearState'
import {AriaLabelingProps, DOMProps} from './types'
import {
  CalendarState,
  DOMAttributes,
  RangeCalendarState,
} from './types/calendar.types'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  variant?: 'default' | 'range'
  state: CalendarState | RangeCalendarState
  calendarProps: DOMProps | AriaLabelingProps | DOMAttributes
  prevButtonProps: ButtonProps
  nextButtonProps: ButtonProps
  middleButtonProps?: MonthYearState
  maxValue?: DateValue
}

const CalendarHeader = (props: Props) => {
  const {
    state,
    variant = 'default',
    calendarProps,
    prevButtonProps: datePrevButtonProps,
    nextButtonProps: dateNextButtonProps,
    middleButtonProps,
    css = {},
  } = props

  const monthDateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    timeZone: state.timeZone,
  })

  const months = middleButtonProps?.months ?? null

  const renderMiddleButtonContent = (formatedDate: string) => {
    switch (middleButtonProps?.currentState) {
      case MONTH_YEAR_STATE.DATE:
        return formatedDate
      case MONTH_YEAR_STATE.MONTH:
        return months ? `${months[0]}-${months[months.length - 1]}` : 'Jan-Dec'
      case MONTH_YEAR_STATE.YEAR:
        return `${middleButtonProps.endStartYears.start}-${middleButtonProps.endStartYears.end}`
      default:
        return formatedDate
    }
  }

  let prevButtonProps = datePrevButtonProps
  let nextButtonProps = dateNextButtonProps

  if (variant === 'default' && middleButtonProps) {
    const {
      prevButtonProps: yearPrevButtonProps,
      nextButtonProps: yearNextButtonProps,
    } = middleButtonProps

    prevButtonProps =
      middleButtonProps.currentState === MONTH_YEAR_STATE.YEAR
        ? yearPrevButtonProps
        : middleButtonProps.currentState === MONTH_YEAR_STATE.DATE
        ? datePrevButtonProps
        : {isDisabled: true}

    nextButtonProps =
      middleButtonProps.currentState === MONTH_YEAR_STATE.YEAR
        ? yearNextButtonProps
        : middleButtonProps.currentState === MONTH_YEAR_STATE.DATE
        ? dateNextButtonProps
        : {isDisabled: true}
  }

  return (
    <StyledCalendarHeader css={css}>
      {/* Add a screen reader only description of the entire visible range rather than
       * a separate heading above each month grid. This is placed first in the DOM order
       * so that it is the first thing a touch screen reader user encounters.
       * In addition, VoiceOver on iOS does not announce the aria-label of the grid
       * elements, so the aria-label of the Calendar is included here as well. */}
      <VisuallyHidden>
        <h2>{(calendarProps as AriaLabelingProps)['aria-label']}</h2>
      </VisuallyHidden>
      <div className='calendar-header-left-side'>
        <Button variant='ghost' {...prevButtonProps}>
          <svg
            className='calendar-header-icon chevron-left'
            viewBox='0 0 320 512'
          >
            <path
              fill='currentColor'
              d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z'
            />
          </svg>
        </Button>
        {variant === 'default' ? (
          <button
            // We have a visually hidden heading describing the entire visible range,
            // and the calendar itself describes the individual month
            // so we don't need to repeat that here for screen reader users.
            className='calendar-header-middle'
            aria-hidden
            onClick={() => {
              if (variant === 'default' && middleButtonProps) {
                middleButtonProps.nextState()
              }
            }}
          >
            {renderMiddleButtonContent(
              monthDateFormatter.format(
                state?.visibleRange?.start.toDate(
                  state.timeZone ?? 'UTC',
                ) as Date,
              ),
            )}
          </button>
        ) : (
          <h2>
            {renderMiddleButtonContent(
              monthDateFormatter.format(
                state?.visibleRange?.start.toDate(
                  state.timeZone ?? 'UTC',
                ) as Date,
              ),
            )}
          </h2>
        )}
        {variant === 'default' && (
          <Button variant='ghost' {...nextButtonProps}>
            <svg
              className='calendar-header-icon chevron-right'
              viewBox='0 0 320 512'
            >
              <path
                fill='currentColor'
                d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
              />
            </svg>
          </Button>
        )}
      </div>
      {variant === 'range' && (
        <div className='calendar-header-right-side'>
          <h2>
            {renderMiddleButtonContent(
              monthDateFormatter.format(
                state?.visibleRange?.start
                  .add({months: 1})
                  .toDate(state.timeZone ?? 'UTC') as Date,
              ),
            )}
          </h2>
          <Button variant='ghost' {...nextButtonProps}>
            <svg
              className='calendar-header-icon chevron-right'
              viewBox='0 0 320 512'
            >
              <path
                fill='currentColor'
                d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
              />
            </svg>
          </Button>
        </div>
      )}
    </StyledCalendarHeader>
  )
}

export default CalendarHeader
