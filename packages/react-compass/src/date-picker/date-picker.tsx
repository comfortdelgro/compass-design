/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/unbound-method */
import {CSS} from '@stitches/react'
import React from 'react'
import {ButtonProps} from '../button'
import Calendar, {CalendarProps} from '../calendar/calendar'
import {DateField} from '../calendar/components'
import Dialog from '../calendar/components/dialog'
import Popover from '../calendar/components/popover'
import {useDatePicker} from '../calendar/hooks/useDatePicker'
import {useDatePickerState} from '../calendar/hooks/useDatePickerState'
import {
  AriaDatePickerProps,
  AriaDialogProps,
  DatePickerState,
  DOMAttributes,
  SpectrumDatePickerProps,
} from '../calendar/types'
import {DateValue, parseDate} from '../internationalized/date'
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
  ctaButtonRender?: React.ReactNode
}

export type DatePickerProps = Props

const DatePicker = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {css = {}, maxValue = parseDate('2999-03-10'), ctaButtonRender} = props
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

  const {groupProps, fieldProps, buttonProps, dialogProps, calendarProps} =
    useDatePicker(
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
  return (
    <StyledDatePicker css={css}>
      <DatePickerProvider>
        <DatePickerFieldWrapper
          ref={calendarRef}
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
        <DatePickerCalendarWrapper
          maxValue={maxValue}
          state={state}
          calendarProps={calendarProps}
          calendarRef={calendarRef}
          dialogProps={dialogProps}
          css={props.calendarCSS}
          ctaButtonRender={ctaButtonRender}
        />
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
    <StyledDatePickerFieldWrapper {...groupProps} ref={ref}>
      <DateField
        {...fieldProps}
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
  calendarRef: React.RefObject<HTMLDivElement>
  dialogProps: AriaDialogProps
  calendarProps: CalendarProps
  onCancel?: (() => void) | undefined
  maxValue?: DateValue | null | undefined
  ctaButtonRender?: React.ReactNode
  css?: CSS | undefined
}

const DatePickerCalendarWrapper = (props: DatePickerCalendarWrapperProps) => {
  const {
    state,
    calendarRef,
    dialogProps,
    calendarProps,
    maxValue = parseDate('2999-03-10'),
    ctaButtonRender,
    css = {},
  } = props

  return (
    <>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={calendarRef}
          offset={8}
          placement='bottom start'
        >
          <Dialog
            {...dialogProps}
            aria-describedby={dialogProps['aria-describedby'] ?? ''}
            aria-label={dialogProps['aria-label'] ?? ''}
            aria-labelledby={dialogProps['aria-labelledby'] ?? ''}
          >
            <Calendar
              state={state}
              hasFooter={true}
              {...calendarProps}
              maxValue={maxValue}
              css={css}
              ctaButtonRender={ctaButtonRender}
            />
          </Dialog>
        </Popover>
      )}
    </>
  )
}

export default DatePicker
