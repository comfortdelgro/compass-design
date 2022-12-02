import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {createCalendar} from '@internationalized/date'
import {AriaDateFieldProps, useDateField} from '@react-aria/datepicker'
import {useLocale} from '@react-aria/i18n'
import {useDateFieldState} from '@react-stately/datepicker'
import type {AriaButtonProps} from '@react-types/button'
import type {DateValue} from '@react-types/datepicker'
import React from 'react'
import Button from '../../button'
import Icon from '../../icon'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledDateField} from './date-field.style'
import DateSegment from './date-segment'

interface Props extends AriaDateFieldProps<DateValue> {
  children?: React.ReactNode
  buttonProps: AriaButtonProps
}

const DateField = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {locale} = useLocale()
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })

  const dateFieldRef = useDOMRef(ref)

  const {labelProps, fieldProps} = useDateField(props, state, dateFieldRef)

  return (
    <StyledDateField>
      <span {...labelProps} className='date-field-label'>
        {props.label}
      </span>
      <div {...fieldProps} ref={ref} className='date-field-input'>
        {state.segments.map((segment, i) => {
          // synchronize literal('/')'style with other segment
          if (segment.isPlaceholder === undefined) {
            segment.isPlaceholder =
              state.segments[i - 1]?.isPlaceholder ?? false
          }
          return <DateSegment key={i} segment={segment} state={state} />
        })}
        <Button
          {...props.buttonProps}
          variant='ghost'
          className='toggle-calendar-button'
        >
          <Icon icon={faChevronDown} />
        </Button>
        {state.validationState === 'invalid' && (
          <span aria-hidden='true'>🚫</span>
        )}
      </div>
    </StyledDateField>
  )
})

export default DateField
