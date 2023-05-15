import {createCalendar} from '@internationalized/date'
import {useLocale} from '@react-aria/i18n'
// import type {AriaButtonProps} from '@react-types/button'
import React, {useRef} from 'react'
import {ButtonProps} from '../../button'
import {Icon} from '../../dropdown/utils'
import {useDOMRef} from '../../utils/use-dom-ref'
import {useDateField} from '../hooks/useDateField'
import {useDateFieldState} from '../hooks/useDateFieldState'
import {
  AriaLabelingProps,
  DateFieldBase,
  DateFieldProps,
  DateValue,
  DOMProps,
} from '../types'
import {
  StyledDateField,
  StyledExpandButton,
  StyledLabelNecessity,
  StyledTextFieldHelperText,
} from './date-field.style'
import DateSegment from './date-segment'

interface AriaDateFieldBaseProps<T extends DateValue>
  extends DateFieldBase<T>,
    AriaLabelingProps,
    DOMProps {}
export interface AriaDateFieldProps<T extends DateValue>
  extends DateFieldProps<T>,
    AriaDateFieldBaseProps<T> {}

interface Props extends AriaDateFieldProps<DateValue> {
  children?: React.ReactNode
  buttonProps: ButtonProps
  isInvalid?: boolean | undefined
  necessityIndicator?: 'icon' | 'label'
  isMobile?: boolean | undefined
  helperText?: React.ReactNode
}

const DateField = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {locale} = useLocale()
  const expandButtonRef = useRef<HTMLButtonElement>(null)
  const state = useDateFieldState({
    ...props,
    isReadOnly: props.isReadOnly ? true : props.isMobile ? true : false,
    locale,
    createCalendar,
  })

  const dateFieldRef = useDOMRef(ref)

  const {labelProps, fieldProps} = useDateField(
    {
      ...props,
      isReadOnly: props.isReadOnly ? true : props.isMobile ? true : false,
    },
    state,
    dateFieldRef,
  )

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
      return <StyledLabelNecessity isError>*</StyledLabelNecessity>
    } else if (props.isRequired && necessityIndicator === 'label') {
      return (
        <StyledLabelNecessity isError isText>
          (required)
        </StyledLabelNecessity>
      )
    } else if (!props.isRequired && necessityIndicator === 'label') {
      return <StyledLabelNecessity isText>(optional)</StyledLabelNecessity>
    }
    return ''
  }

  const {onPress, ...buttonProps} = props.buttonProps

  return (
    <div>
      <StyledDateField
        className='cdg-date-field'
        isDisabled={isDisabled}
        isInvalid={isInvalid}
      >
        <span {...labelProps} className='date-field-label'>
          {props.label} {generateLabeling()}
        </span>
        <div
          {...fieldProps}
          ref={dateFieldRef}
          className={`date-field-input ${
            isDisabled || isReadOnly ? '' : props.isMobile ? 'mobile' : ''
          }`}
          onClick={() => {
            if (isDisabled || isReadOnly) {
              return
            }

            props.isMobile && expandButtonRef.current?.click()
          }}
        >
          {state.segments.map((segment, i) => {
            // synchronize literal('/')'style with other segment
            if (segment.type === 'literal') {
              segment.isPlaceholder =
                state.segments[i - 1]?.isPlaceholder ?? false
            }
            return <DateSegment key={i} segment={segment} state={state} />
          })}

          <StyledExpandButton
            {...buttonProps}
            ref={expandButtonRef}
            onClick={(e) => {
              onPress?.(e)
            }}
            type='button'
            disabled={isDisabled || isReadOnly}
            className='toggle-calendar-button'
          >
            <Icon />
          </StyledExpandButton>
        </div>
      </StyledDateField>
      {props.isInvalid && props.errorMessage && (
        <StyledTextFieldHelperText className='cdg-date-field-error' error>
          {props.errorMessage}
        </StyledTextFieldHelperText>
      )}
      {props.helperText ? (
        <StyledTextFieldHelperText className='cdg-date-field-helper'>
          {props.helperText}
        </StyledTextFieldHelperText>
      ) : null}
    </div>
  )
})

export default DateField
