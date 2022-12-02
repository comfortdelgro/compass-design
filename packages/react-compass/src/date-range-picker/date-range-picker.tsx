/* eslint-disable @typescript-eslint/unbound-method */
import {DateValue} from '@internationalized/date'
import {useDateRangePicker} from '@react-aria/datepicker'
import {AriaDialogProps} from '@react-aria/dialog'
import {
  DateRangePickerState,
  useDateRangePickerState,
} from '@react-stately/datepicker'
import type {AriaButtonProps} from '@react-types/button'
import type {DateRange, RangeCalendarProps} from '@react-types/calendar'
import type {
  AriaDatePickerProps,
  SpectrumDateRangePickerProps,
} from '@react-types/datepicker'
import type {DOMAttributes} from '@react-types/shared'
import React from 'react'
import {DateField} from '../calendar/components'
import Dialog from '../calendar/components/dialog'
import Popover from '../calendar/components/popover'
import RangeCalendar from '../range-calendar/range-calendar'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledDateRangeInputsWrapper,
  StyledRangeDatepicker,
} from './date-range-picker.style'

interface Props
  extends StyledComponentProps,
    SpectrumDateRangePickerProps<DateValue> {
  children?: React.ReactNode
  label?: string
  startDateLabel?: string
  endDateLabel?: string
  shouldCloseOnSelect?: boolean
  onApply?: (e?: DateRange) => void
  onCancel?: () => void
}

const DateRangepicker = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {
      startDateLabel,
      endDateLabel,
      shouldCloseOnSelect = false,
      onApply,
      onCancel,
      ...delegated
    } = props

    const state = useDateRangePickerState({
      ...delegated,
      shouldCloseOnSelect: () => shouldCloseOnSelect,
    })

    const calendarRef = useDOMRef(ref)

    const {
      labelProps,
      groupProps,
      startFieldProps,
      endFieldProps,
      buttonProps,
      dialogProps,
      calendarProps,
    } = useDateRangePicker(delegated, state, calendarRef)

    return (
      <StyledRangeDatepicker ref={calendarRef}>
        <DateRangeInputsWrapper
          state={state}
          label={props.label}
          labelProps={labelProps}
          groupProps={groupProps}
          startFieldProps={startFieldProps}
          endFieldProps={endFieldProps}
          buttonProps={buttonProps}
          startDateLabel={startDateLabel}
          endDateLabel={endDateLabel}
        />
        <DateRangeCalendarWrapper
          state={state}
          onApply={onApply}
          onCancel={onCancel}
          calendarRef={calendarRef}
          dialogProps={dialogProps}
          calendarProps={calendarProps}
        />
      </StyledRangeDatepicker>
    )
  },
)

interface DateRangeInputsWrapperProps {
  state: DateRangePickerState
  label?: string | undefined
  labelProps: DOMAttributes
  groupProps: DOMAttributes
  startFieldProps: AriaDatePickerProps<DateValue>
  endFieldProps: AriaDatePickerProps<DateValue>
  buttonProps: AriaButtonProps
  startDateLabel?: string | undefined
  endDateLabel?: string | undefined
}

const DateRangeInputsWrapper = React.forwardRef<
  HTMLDivElement,
  DateRangeInputsWrapperProps
>((props, ref) => {
  const {
    state,
    label,
    labelProps,
    groupProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    startDateLabel,
    endDateLabel,
  } = props

  return (
    <StyledDateRangeInputsWrapper>
      <span {...labelProps} className='date-range-label'>
        {label}
      </span>
      <div {...groupProps} ref={ref} className='date-range-inputs-body'>
        <div className='date-range-fields'>
          <DateField
            {...startFieldProps}
            label={startDateLabel}
            buttonProps={buttonProps}
          />
          <DateField
            {...endFieldProps}
            label={endDateLabel}
            buttonProps={buttonProps}
          />
          {state.validationState === 'invalid' && (
            <span aria-hidden='true'>🚫</span>
          )}
        </div>
      </div>
    </StyledDateRangeInputsWrapper>
  )
})

interface DateRangeCalendarWrapperProps {
  state: DateRangePickerState
  calendarRef: React.RefObject<HTMLDivElement>
  dialogProps: AriaDialogProps
  calendarProps: RangeCalendarProps<DateValue>
  onApply: ((e?: DateRange) => void) | undefined
  onCancel: (() => void) | undefined
}

const DateRangeCalendarWrapper = (props: DateRangeCalendarWrapperProps) => {
  const {state, calendarRef, dialogProps, calendarProps, onApply, onCancel} =
    props

  return (
    <>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={calendarRef}
          placement='bottom start'
          offset={8}
        >
          <Dialog {...dialogProps}>
            <RangeCalendar
              state={state}
              hasFooter={true}
              onApplyCallback={onApply}
              onCancelCallback={onCancel}
              {...calendarProps}
            />
          </Dialog>
        </Popover>
      )}
    </>
  )
}

export default DateRangepicker
