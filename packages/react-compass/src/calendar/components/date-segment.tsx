import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import {useDateSegment} from '../hooks/useDateSegment'
import {DateFieldState, DateSegment as IDateSegment} from '../types'
import {StyledDateSegment} from './date-segment.style'

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
