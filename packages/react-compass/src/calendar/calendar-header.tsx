import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {DateValue} from '@internationalized/date'
import {useDateFormatter} from '@react-aria/i18n'
import {VisuallyHidden} from '@react-aria/visually-hidden'
import {CalendarState, RangeCalendarState} from '@react-stately/calendar'
import React from 'react'
import Button, {ButtonProps} from '../button'
import Icon from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCalendarHeader} from './calendar-header.style'
import {DOMAttributes} from './types/calendar.types'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  variant?: 'default' | 'range'
  state: CalendarState | RangeCalendarState
  calendarProps: DOMAttributes
  prevButtonProps: ButtonProps
  nextButtonProps: ButtonProps
  maxValue?: DateValue
}

const CalendarHeader = (props: Props) => {
  const {
    state,
    variant = 'default',
    calendarProps,
    prevButtonProps,
    nextButtonProps,
    css = {},
  } = props

  const monthDateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    timeZone: state.timeZone,
  })

  return (
    <StyledCalendarHeader css={css}>
      {/* Add a screen reader only description of the entire visible range rather than
       * a separate heading above each month grid. This is placed first in the DOM order
       * so that it is the first thing a touch screen reader user encounters.
       * In addition, VoiceOver on iOS does not announce the aria-label of the grid
       * elements, so the aria-label of the Calendar is included here as well. */}
      <VisuallyHidden>
        <h2>{calendarProps['aria-label']}</h2>
      </VisuallyHidden>
      <div className='calendar-header-left-side'>
        <Button variant='ghost' {...prevButtonProps}>
          <Icon
            className='calendar-header-icon chevron-left'
            icon={faChevronLeft}
          />
        </Button>
        <h2
          // We have a visually hidden heading describing the entire visible range,
          // and the calendar itself describes the individual month
          // so we don't need to repeat that here for screen reader users.
          aria-hidden
        >
          {monthDateFormatter.format(
            state.visibleRange.start.toDate(state.timeZone),
          )}
        </h2>
        {variant === 'default' && (
          <Button variant='ghost' {...nextButtonProps}>
            <Icon
              className='calendar-header-icon chevron-right'
              icon={faChevronRight}
            />
          </Button>
        )}
      </div>
      {variant === 'range' && (
        <div className='calendar-header-right-side'>
          <h2 aria-hidden>
            {monthDateFormatter.format(
              state.visibleRange.start.add({months: 1}).toDate(state.timeZone),
            )}
          </h2>
          <Button variant='ghost' {...nextButtonProps}>
            <Icon
              className='calendar-header-icon chevron-right'
              icon={faChevronRight}
            />
          </Button>
        </div>
      )}
    </StyledCalendarHeader>
  )
}

export default CalendarHeader
