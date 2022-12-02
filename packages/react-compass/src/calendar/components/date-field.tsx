import {createCalendar} from '@internationalized/date'
import {AriaDateFieldProps, useDateField} from '@react-aria/datepicker'
import {useLocale} from '@react-aria/i18n'
import {useDateFieldState} from '@react-stately/datepicker'
import type {DateValue} from '@react-types/datepicker'
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import DateSegment from './date-segment'

interface Props extends AriaDateFieldProps<DateValue> {
  children?: React.ReactNode
}

const DateField = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {locale} = useLocale()
  console.log(locale)
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })

  const dateFieldRef = useDOMRef(ref)

  const {labelProps, fieldProps} = useDateField(props, state, dateFieldRef)

  return (
    <div className='wrapper'>
      <span {...labelProps}>{props.label}</span>
      <div {...fieldProps} ref={ref} className='field'>
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
        {state.validationState === 'invalid' && (
          <span aria-hidden='true'>🚫</span>
        )}
      </div>
    </div>
  )
})

export default DateField
