/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/unbound-method */
import {
  autoUpdate,
  flip,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
} from '@floating-ui/react'
import {DateValue, parseDate} from '@internationalized/date'
import {CSS} from '@stitches/react'
import React from 'react'
import {ButtonProps} from '../button'
import Calendar, {CalendarProps} from '../calendar/calendar'
import {DateField} from '../calendar/components'
import {useDatePicker} from '../calendar/hooks/useDatePicker'
import {useDatePickerState} from '../calendar/hooks/useDatePickerState'
import {
  AriaDatePickerProps,
  DatePickerState,
  DOMAttributes,
  SpectrumDatePickerProps,
} from '../calendar/types'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DatePickerProvider from './date-picker-context'
import {
  StyledDatePicker,
  StyledDatePickerFieldWrapper,
} from './date-picker.style'
interface Props
  extends StyledComponentProps,
    SpectrumDatePickerProps<DateValue> {
  children?: React.ReactNode
  label?: string | React.ReactNode
  isInvalid?: boolean
  isMobile?: boolean
  shouldCloseOnSelect?: boolean
  maxValue?: DateValue | null | undefined
  calendarCSS?: CSS
  helperText?: React.ReactNode
}

export type DatePickerProps = Props

const DatePicker = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {css = {}, maxValue = parseDate('2999-03-10')} = props
  const state = useDatePickerState({
    ...props,
    // mobile styles: prevent date field from user input, click on any place in date field will open calendar
    // to achieve that, i use isReadonly=true on datefield and isReadonly=false on calendar
    isReadOnly: props.isReadOnly ? true : props.isMobile ? true : false,
    shouldCloseOnSelect: props.granularity
      ? true
      : props.shouldCloseOnSelect ?? false,
  })

  const calendarRef = useDOMRef(ref)

  const {groupProps, fieldProps, buttonProps, calendarProps} = useDatePicker(
    {
      ...props,
      isReadOnly: props.isReadOnly ? true : props.isMobile ? true : false,
    },
    state,
    calendarRef,
  )

  const extendedFieldProps = {
    necessityIndicator: props.necessityIndicator,
    ...fieldProps,
  }

  // if in mobile, allow calendar to select date

  const checkIfCalendarInMobile = () => {
    if (props.isReadOnly) {
      return true
    }
    if (!props.isReadOnly && !props.isMobile) {
      return false
    }
    if (props.isMobile) {
      return false
    }
    return true
  }

  // @ts-ignore
  calendarProps.isReadOnly = checkIfCalendarInMobile()

  // ====================================== FLOATING ======================================
  const {refs, floatingStyles, context} = useFloating({
    open: state.isOpen,
    onOpenChange: state.setOpen,
    placement: 'bottom-start',
    middleware: [offset(8), flip()],
    whileElementsMounted: autoUpdate,
  })

  const dismiss = useDismiss(context)

  const {getReferenceProps, getFloatingProps} = useInteractions([dismiss])

  const mergedCalendarRef = useMergeRefs([calendarRef, refs.setReference])
  // ====================================== CONST ======================================

  return (
    <StyledDatePicker css={css}>
      <DatePickerProvider>
        <DatePickerFieldWrapper
          {...getReferenceProps}
          ref={mergedCalendarRef}
          groupProps={groupProps}
          fieldProps={extendedFieldProps}
          buttonProps={buttonProps as unknown as ButtonProps}
          isInvalid={props.isInvalid}
          isReadOnly={props.isReadOnly}
          isMobile={props.isMobile}
          label={props.label}
          errorMessage={props.errorMessage}
          helperText={props.helperText}
        />
        {state.isOpen && (
          <div
            className='Popover'
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              ...{
                zIndex: 60,
              },
            }}
            {...getFloatingProps}
          >
            <DatePickerCalendarWrapper
              maxValue={maxValue}
              state={state}
              calendarProps={calendarProps}
              css={props.calendarCSS}
            />
          </div>
        )}
      </DatePickerProvider>
    </StyledDatePicker>
  )
})

interface DatePickerFieldWrapperProps {
  groupProps: DOMAttributes
  fieldProps: AriaDatePickerProps<DateValue>
  buttonProps: ButtonProps
  label?: string | React.ReactNode | undefined
  isInvalid?: boolean | undefined
  isMobile?: boolean | undefined
  isReadOnly?: boolean | undefined
  errorMessage?: React.ReactNode
  helperText?: React.ReactNode
}

const DatePickerFieldWrapper = React.forwardRef<
  HTMLDivElement,
  DatePickerFieldWrapperProps
>((props, ref) => {
  const {
    groupProps,
    fieldProps,
    buttonProps,
    label,
    isInvalid,
    isMobile,
    isReadOnly = false,
    errorMessage,
    helperText,
  } = props

  return (
    <StyledDatePickerFieldWrapper {...groupProps}>
      <DateField
        {...fieldProps}
        ref={ref}
        aria-describedby={fieldProps['aria-describedby'] ?? ''}
        buttonProps={buttonProps}
        label={label}
        isInvalid={isInvalid}
        isMobile={isMobile}
        isReadOnly={isReadOnly}
        errorMessage={errorMessage}
        helperText={helperText}
      />
    </StyledDatePickerFieldWrapper>
  )
})

interface DatePickerCalendarWrapperProps {
  state: DatePickerState
  calendarProps: CalendarProps
  onCancel?: (() => void) | undefined
  maxValue?: DateValue | null | undefined
  css?: CSS | undefined
}

const DatePickerCalendarWrapper = (props: DatePickerCalendarWrapperProps) => {
  const {
    state,
    calendarProps,
    maxValue = parseDate('2999-03-10'),
    css = {},
  } = props

  return (
    <Calendar
      state={state}
      hasFooter={true}
      {...calendarProps}
      maxValue={maxValue}
      css={css}
    />
  )
}

export default DatePicker
