import {
  faChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import {useDateFormatter} from '@react-aria/i18n'
import {VisuallyHidden} from '@react-aria/visually-hidden'
import {CalendarState, RangeCalendarState} from '@react-stately/calendar'
import type {AriaButtonProps} from '@react-types/button'
import type {DOMAttributes} from '@react-types/shared'
import React from 'react'
import Button from '../button'
import Icon from '../icon'

interface Props {
  children?: React.ReactNode
  state: CalendarState | RangeCalendarState
  calendarProps: DOMAttributes
  prevButtonProps: AriaButtonProps
  nextButtonProps: AriaButtonProps
}

const CalendarHeader = (props: Props) => {
  const {state, calendarProps, prevButtonProps, nextButtonProps} = props

  const monthDateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    timeZone: state.timeZone,
  })

  return (
    <div className='flex items-center py-4'>
      {/* Add a screen reader only description of the entire visible range rather than
       * a separate heading above each month grid. This is placed first in the DOM order
       * so that it is the first thing a touch screen reader user encounters.
       * In addition, VoiceOver on iOS does not announce the aria-label of the grid
       * elements, so the aria-label of the Calendar is included here as well. */}
      <VisuallyHidden>
        <h2>{calendarProps['aria-label']}</h2>
      </VisuallyHidden>
      <Button {...prevButtonProps}>
        <Icon icon={faChevronLeft} />
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
      <h2 aria-hidden>
        {monthDateFormatter.format(
          state.visibleRange.start.add({months: 1}).toDate(state.timeZone),
        )}
      </h2>
      <Button {...nextButtonProps}>
        <Icon icon={faCircleChevronRight} />
      </Button>
    </div>
  )
}

export default CalendarHeader
