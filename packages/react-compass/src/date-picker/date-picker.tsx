import {DateValue, parseDate} from '@internationalized/date'
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
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledDatePicker,
  StyledDatePickerFieldWrapper,
} from './date-picker.style'
interface Props
  extends StyledComponentProps,
    SpectrumDatePickerProps<DateValue> {
  children?: React.ReactNode
  label?: string
  isInvalid?: boolean
  shouldCloseOnSelect?: boolean
  onCancel?: (() => void) | undefined
  maxValue?: DateValue
}

export type DatePickerProps = Props

const DatePicker = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {css = {}, maxValue = parseDate('2999-03-10')} = props
  const state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: props.granularity
      ? true
      : props.shouldCloseOnSelect ?? false,
  })

  const calendarRef = useDOMRef(ref)

  const {groupProps, fieldProps, buttonProps, dialogProps, calendarProps} =
    useDatePicker(props, state, calendarRef)

  const extendedFieldProps = {
    necessityIndicator: props.necessityIndicator,
    ...fieldProps,
  }

  return (
    <StyledDatePicker css={css}>
      <DatePickerFieldWrapper
        ref={calendarRef}
        groupProps={groupProps}
        fieldProps={extendedFieldProps}
        buttonProps={buttonProps as unknown as ButtonProps}
        isInvalid={props.isInvalid}
        label={props.label}
      />
      <DatePickerCalendarWrapper
        maxValue={maxValue}
        state={state}
        onCancel={props.onCancel}
        calendarProps={calendarProps}
        calendarRef={calendarRef}
        dialogProps={dialogProps}
      />
    </StyledDatePicker>
  )
})

interface DatePickerFieldWrapperProps {
  groupProps: DOMAttributes
  fieldProps: AriaDatePickerProps<DateValue>
  buttonProps: ButtonProps
  label?: string | undefined
  isInvalid?: boolean | undefined
}

const DatePickerFieldWrapper = React.forwardRef<
  HTMLDivElement,
  DatePickerFieldWrapperProps
>((props, ref) => {
  const {groupProps, fieldProps, buttonProps, label, isInvalid} = props

  return (
    <StyledDatePickerFieldWrapper {...groupProps} ref={ref}>
      <DateField
        {...fieldProps}
        buttonProps={buttonProps}
        label={label}
        isInvalid={isInvalid}
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
  maxValue?: DateValue
}

const DatePickerCalendarWrapper = (props: DatePickerCalendarWrapperProps) => {
  const {
    state,
    calendarRef,
    dialogProps,
    calendarProps,
    onCancel,
    maxValue = parseDate('2999-03-10'),
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
          <Dialog {...dialogProps}>
            <Calendar
              state={state}
              hasFooter={true}
              onCancelCallback={onCancel}
              {...calendarProps}
              maxValue={maxValue}
            />
          </Dialog>
        </Popover>
      )}
    </>
  )
}

export default DatePicker
