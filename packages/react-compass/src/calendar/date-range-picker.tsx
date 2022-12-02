/* eslint-disable @typescript-eslint/unbound-method */
import {DateValue, getLocalTimeZone, today} from '@internationalized/date'
import {useDateRangePicker} from '@react-aria/datepicker'
import {AriaDialogProps} from '@react-aria/dialog'
import {
  DateRangePickerState,
  useDateRangePickerState,
} from '@react-stately/datepicker'
import type {AriaButtonProps} from '@react-types/button'
import type {RangeCalendarProps} from '@react-types/calendar'
import type {
  AriaDatePickerProps,
  SpectrumDateRangePickerProps,
} from '@react-types/datepicker'
import type {DOMAttributes} from '@react-types/shared'
import React from 'react'
import Button from '../button'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {DateField} from './components'
import Dialog from './components/dialog'
import Popover from './components/popover'
import {StyledDatepicker} from './date-picker.style'
import RangeCalendar from './range-calendar'

interface Props
  extends StyledComponentProps,
    SpectrumDateRangePickerProps<DateValue> {
  children?: React.ReactNode
  label?: string
}

const DateRangepicker = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const state = useDateRangePickerState({
      ...props,
      shouldCloseOnSelect: () => false,
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
    } = useDateRangePicker(props, state, calendarRef)

    return (
      <StyledDatepicker>
        <DateRangeInputsWrapper
          ref={calendarRef}
          state={state}
          label={props.label}
          labelProps={labelProps}
          groupProps={groupProps}
          startFieldProps={startFieldProps}
          endFieldProps={endFieldProps}
          buttonProps={buttonProps}
        />
        <DateRangeCalendarWrapper
          state={state}
          calendarRef={calendarRef}
          dialogProps={dialogProps}
          calendarProps={calendarProps}
        />
      </StyledDatepicker>
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
  } = props

  return (
    <>
      <span {...labelProps}>{label}</span>
      <div {...groupProps} ref={ref}>
        <div className='field'>
          <DateField {...startFieldProps} />
          <DateField {...endFieldProps} />
          {state.validationState === 'invalid' && (
            <span aria-hidden='true'>🚫</span>
          )}
        </div>
        <Button {...buttonProps}>🗓</Button>
      </div>
    </>
  )
})

interface DateRangeCalendarWrapperProps {
  state: DateRangePickerState
  calendarRef: React.RefObject<HTMLDivElement>
  dialogProps: AriaDialogProps
  calendarProps: RangeCalendarProps<DateValue>
}

const DateRangeCalendarWrapper = (props: DateRangeCalendarWrapperProps) => {
  const {state, calendarRef, dialogProps, calendarProps} = props

  return (
    <>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={calendarRef}
          placement='bottom start'
        >
          <Dialog {...dialogProps}>
            <RangeCalendar
              defaultValue={{
                start: today(getLocalTimeZone()),
                end: today(getLocalTimeZone()).add({weeks: 2}),
              }}
              {...calendarProps}
            />
          </Dialog>
        </Popover>
      )}
    </>
  )
}

export default DateRangepicker
