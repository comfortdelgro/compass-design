import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {createCalendar} from '@internationalized/date'
import {AriaDateFieldProps, useDateField} from '@react-aria/datepicker'
import {useLocale} from '@react-aria/i18n'
import {useDateFieldState} from '@react-stately/datepicker'
// import type {AriaButtonProps} from '@react-types/button'
import type {DateValue} from '@react-types/datepicker'
import React from 'react'
import Button, {ButtonProps} from '../../button'
import Icon from '../../icon'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledDateField} from './date-field.style'
import DateSegment from './date-segment'

interface Props extends AriaDateFieldProps<DateValue> {
  children?: React.ReactNode
  buttonProps: ButtonProps
  isInvalid?: boolean | undefined
  necessityIndicator?: 'icon' | 'label'
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

  const isDisabled = props.isDisabled ?? false

  const isReadOnly = props.isReadOnly ?? false

  const isInvalid = !!props.isInvalid || state.validationState === 'invalid'

  /**
   * Generate label depending on props
   * - isRequired AND icon => '*'
   * - isRequired AND label => '(required)'
   * - not isRequired AND label => '(optional)'
   * - not isRequired AND not label => ''
   */
  const generateLabeling = () => {
    const necessityIndicator = props.necessityIndicator ?? 'icon'
    if (props.isRequired && necessityIndicator === 'icon') {
      return '*'
    } else if (props.isRequired && necessityIndicator === 'label') {
      return '(required)'
    } else if (!props.isRequired && necessityIndicator === 'label') {
      return '(optional)'
    }
    return ''
  }

  return (
    <StyledDateField isDisabled={isDisabled} isInvalid={isInvalid}>
      <span {...labelProps} className='date-field-label'>
        {props.label} {generateLabeling()}
      </span>
      <div {...fieldProps} ref={dateFieldRef} className='date-field-input'>
        {state.segments.map((segment, i) => {
          // synchronize literal('/')'style with other segment
          if (segment.type === 'literal') {
            segment.isPlaceholder =
              state.segments[i - 1]?.isPlaceholder ?? false
          }
          return <DateSegment key={i} segment={segment} state={state} />
        })}
        <Button
          {...props.buttonProps}
          variant='ghost'
          isDisabled={isDisabled || isReadOnly}
          className='toggle-calendar-button'
        >
          <Icon className='toggle-calendar-icon' icon={faChevronDown} />
        </Button>
      </div>
    </StyledDateField>
  )
})

export default DateField
