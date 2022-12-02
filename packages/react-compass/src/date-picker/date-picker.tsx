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
  shouldCloseOnSelect?: boolean
  onCancel?: (() => void) | undefined
}

const DatePicker = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: () => props.shouldCloseOnSelect ?? false,
  })

  const calendarRef = useDOMRef(ref)

  const {groupProps, fieldProps, buttonProps, dialogProps, calendarProps} =
    useDatePicker(props, state, calendarRef)

  return (
    <StyledDatePicker ref={calendarRef}>
      <DatePickerFieldWrapper
        groupProps={groupProps}
        fieldProps={fieldProps}
        buttonProps={buttonProps}
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
}

const DatePickerFieldWrapper = (props: DatePickerFieldWrapperProps) => {
  const {groupProps, fieldProps, buttonProps, label} = props

  return (
    <StyledDatePickerFieldWrapper {...groupProps}>
      <DateField {...fieldProps} buttonProps={buttonProps} label={label} />
    </StyledDatePickerFieldWrapper>
  )
}

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
