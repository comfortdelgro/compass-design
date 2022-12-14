/* eslint-disable @typescript-eslint/unbound-method */
import {DateValue} from '@internationalized/date'
import {AriaDatePickerProps, useDatePicker} from '@react-aria/datepicker'
import {AriaDialogProps} from '@react-aria/dialog'
import {DatePickerState, useDatePickerState} from '@react-stately/datepicker'
import type {AriaButtonProps} from '@react-types/button'
import type {CalendarProps} from '@react-types/calendar'
import type {SpectrumDatePickerProps} from '@react-types/datepicker'
import type {DOMAttributes} from '@react-types/shared'
import React from 'react'
import Calendar from '../calendar/calendar'
import {DateField} from '../calendar/components'
import Dialog from '../calendar/components/dialog'
import Popover from '../calendar/components/popover'
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
}

export type DatePickerProps = Props

const DatePicker = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {css = {}} = props
  const state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: () => props.shouldCloseOnSelect ?? false,
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
        buttonProps={buttonProps}
        isInvalid={props.isInvalid}
        label={props.label}
      />
      <DatePickerCalendarWrapper
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
  buttonProps: AriaButtonProps
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
  calendarProps: CalendarProps<DateValue>
  onCancel?: (() => void) | undefined
}

const DatePickerCalendarWrapper = (props: DatePickerCalendarWrapperProps) => {
  const {state, calendarRef, dialogProps, calendarProps, onCancel} = props

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
            />
          </Dialog>
        </Popover>
      )}
    </>
  )
}

export default DatePicker
