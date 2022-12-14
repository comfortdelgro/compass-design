import {useDateSegment} from '@react-aria/datepicker'
import type {
  DateFieldState,
  DateSegment as IDateSegment,
} from '@react-stately/datepicker'
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledDateSegment} from './date-segment.style'

/**
 * DateSegment is the digit or the literal (example: "/") in the DateField
 */

interface Props {
  segment: IDateSegment
  state: DateFieldState
}

const DateSegment = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {segment, state} = props

  const dateSegmentRef = useDOMRef(ref)

  const {segmentProps} = useDateSegment(segment, state, dateSegmentRef)

  return (
    <StyledDateSegment
      {...segmentProps}
      ref={dateSegmentRef}
      className={`segment ${segment.isPlaceholder ? 'placeholder' : 'number'}`}
    >
      {segment.text}
    </StyledDateSegment>
  )
})

export default DateSegment
