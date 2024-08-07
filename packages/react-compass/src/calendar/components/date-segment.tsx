import React from 'react'
import {classNames} from '../../utils/string'
import {useDOMRef} from '../../utils/use-dom-ref'
import {useDateSegment} from '../hooks/useDateSegment'
import {DateFieldState, DateSegment as IDateSegment} from '../types'
import styles from './styles/date-segment.module.css'
// import {StyledDateSegment} from './date-segment.style'

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
      className={classNames(
        styles.dateSegment,
        segment.isPlaceholder ? 'placeholder' : styles.number,
        'cdg-calendar-segment',
      )}
    >
      {segment.text}
    </div>
  )
})

export default DateSegment
