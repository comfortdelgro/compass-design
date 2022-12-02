import {useDateSegment} from '@react-aria/datepicker'
import type {
  DateFieldState,
  DateSegment as IDateSegment,
} from '@react-stately/datepicker'
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'

interface Props {
  segment: IDateSegment
  state: DateFieldState
}

const DateSegment = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {segment, state} = props

  const dateSegmentRef = useDOMRef(ref)

  const {segmentProps} = useDateSegment(segment, state, dateSegmentRef)

  return (
    <div
      {...segmentProps}
      ref={dateSegmentRef}
      className={`segment ${segment.isPlaceholder ? 'placeholder' : ''}`}
    >
      {segment.text}
    </div>
  )
})

export default DateSegment
