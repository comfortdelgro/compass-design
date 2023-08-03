/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import {ButtonProps} from '../../button'
import {createCalendar} from '../../internationalized/date'
import {useLocale} from '../../internationalized/i18n'
import {useDOMRef} from '../../utils/use-dom-ref'
import {useDateField} from '../hooks/useDateField'
import {useDateFieldState} from '../hooks/useDateFieldState'
import {DateFieldState} from '../types'
import {
  StyledDateField,
  StyledExpandButton,
  StyledIcon,
  StyledLabelNecessity,
  StyledTextFieldHelperText,
} from './date-field.style'
import DateSegment from './date-segment'

interface Props {
  children?: React.ReactNode
  buttonProps: ButtonProps
  isInvalid?: boolean | undefined
  label?: string | React.ReactNode | undefined
  necessityIndicator?: 'icon' | 'label'
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isMobile?: boolean | undefined
  helperText?: React.ReactNode
  errorMessage?: React.ReactNode
}

const Icon = () => (
  <StyledIcon width='16' height='16' viewBox='0 0 16 16'>
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='currentColor'
    />
  </StyledIcon>
)

const DateField = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {locale} = useLocale()
  const expandButtonRef = useDOMRef<HTMLButtonElement>(null)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const state = useDateFieldState({
    ...props,
    isReadOnly: props.isReadOnly ? true : props.isMobile ? true : false,
    locale,
    createCalendar,
  })

  const dateFieldRef = useDOMRef(ref)

  const {labelProps, fieldProps} = useDateField(
    // @ts-ignore
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
        {typeof props.label === 'string' ? (
          <span {...labelProps} className='date-field-label'>
            {props.label} {generateLabeling()}
          </span>
        ) : (
          props.label
        )}
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
            return (
              <DateSegment
                key={i}
                segment={segment}
                state={state as unknown as DateFieldState}
              />
            )
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
