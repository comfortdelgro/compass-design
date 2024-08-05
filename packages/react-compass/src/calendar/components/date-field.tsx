import React from 'react'
import { ButtonProps } from '../../button'
import { createCalendar } from '../../internationalized/date'
import { useLocale } from '../../internationalized/i18n'
import { classNames } from '../../utils/string'
import { useDOMRef } from '../../utils/use-dom-ref'
import { useDateField } from '../hooks/useDateField'
import { useDateFieldState } from '../hooks/useDateFieldState'
import { DateFieldState, SegmentType } from '../types'
import DateSegment from './date-segment'
import styles from './styles/date-field.module.css'
import { Picker } from '../../date-picker/date-picker'

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
  picker?: Picker
}

const Icon = () => (
  <svg
    className={classNames(
      styles.calendarToggleIcon,
      'cdg-calendar-toogle-icon',
    )}
    width='16'
    height='16'
    viewBox='0 0 16 16'
  >
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='currentColor'
    />
  </svg>
)

const DateField = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { locale } = useLocale()
  const expandButtonRef = useDOMRef<HTMLButtonElement>(null)
  const state = useDateFieldState({
    ...props,
    isReadOnly: props.isReadOnly ? true : props.isMobile ? true : false,
    locale,
    createCalendar,
  })

  const dateFieldRef = useDOMRef(ref)

  const { labelProps, fieldProps } = useDateField(
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
      return (
        <span className={classNames(styles.error, 'cdg-date-field-asterisk')}>
          *
        </span>
      )
    } else if (props.isRequired && necessityIndicator === 'label') {
      return (
        <span
          className={classNames(
            styles.error,
            styles.text,
            'cdg-date-field-required',
          )}
        >
          (required)
        </span>
      )
    } else if (!props.isRequired && necessityIndicator === 'label') {
      return (
        <span className={classNames(styles.text, 'cdg-date-field-label')}>
          (optional)
        </span>
      )
    }
    return ''
  }

  const { onPress, ...buttonProps } = props.buttonProps

  const shouldRenderSegment = (type: SegmentType, prevType: SegmentType, picker?: Picker) => {
    if (picker === 'month') {
      if (type === 'literal' && prevType !== 'day') {
        return true
      }
      return type === 'month' || type === 'year'
    }

    if (picker === 'year') {
      if (type === 'literal' && prevType !== 'day' && prevType !== 'month') {
        return true
      }
      return type === 'year'
    }

    return true
  }

  const rootClasses = classNames(
    styles.dateField,
    isDisabled && styles.disabled,
    isInvalid && styles.invalid,
    'cdg-date-field',
  )

  const inputClasses = classNames(
    styles.dateFieldInput,
    isDisabled || isReadOnly ? '' : props.isMobile ? styles.mobile : '',
    'cdg-date-field-input',
  )

  return (
    <div>
      <div className={rootClasses}>
        {typeof props.label === 'string' ? (
          <span
            {...labelProps}
            className={classNames(
              styles.dateFieldLabel,
              'cdg-date-field-label',
            )}
          >
            {props.label} {generateLabeling()}
          </span>
        ) : (
          props.label
        )}
        <div
          {...fieldProps}
          ref={dateFieldRef}
          className={inputClasses}
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

            return shouldRenderSegment(segment.type, state.segments[i - 1]?.type, props.picker) ? (
              <DateSegment
                key={i}
                segment={segment}
                state={state as unknown as DateFieldState}
              />
            ) : <></>
          })}

          <button
            {...buttonProps}
            ref={expandButtonRef}
            onClick={(e) => {
              onPress?.(e)
            }}
            type='button'
            disabled={isDisabled || isReadOnly}
            className={classNames(
              styles.expandButton,
              'cdg-date-field-expand-button',
            )}
          >
            <Icon />
          </button>
        </div>
      </div>
      {props.isInvalid && props.errorMessage && (
        <div
          className={classNames(
            styles.textFieldHelperText,
            styles.helperTextError,
            'cdg-date-field-error',
          )}
        >
          {props.errorMessage}
        </div>
      )}
      {props.helperText ? (
        <div
          className={classNames(
            styles.textFieldHelperText,
            'cdg-date-field-helper',
          )}
        >
          {props.helperText}
        </div>
      ) : null}
    </div>
  )
})

export default DateField
