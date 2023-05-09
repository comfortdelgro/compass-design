/* eslint-disable @typescript-eslint/unbound-method */
import {DateValue} from '@internationalized/date'
import React from 'react'
import {ButtonProps} from '../button'
import {DateField} from '../calendar/components'
import Dialog from '../calendar/components/dialog'
import Popover from '../calendar/components/popover'
import {useDateRangePicker} from '../calendar/hooks/useDateRangePicker'
import {useDateRangePickerState} from '../calendar/hooks/useDateRangePickerState'
import {
  AriaDatePickerProps,
  AriaDialogProps,
  DateRange,
  DateRangePickerState,
  DOMAttributes,
  RangeCalendarProps,
  SpectrumDateRangePickerProps,
} from '../calendar/types'
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
  isInvalid?: boolean
  startDateLabel?: string
  endDateLabel?: string
  shouldCloseOnSelect?: boolean
  onApply?: (e?: DateRange) => void
  onCancel?: () => void
}

export type DateRangePickerProps = Props

const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (props, ref) => {
    const {
      startDateLabel,
      endDateLabel,
      shouldCloseOnSelect = false,
      css = {},
      onApply,
      onCancel,
      ...delegated
    } = props

    const state = useDateRangePickerState({
      ...delegated,
      shouldCloseOnSelect: props.granularity
        ? true
        : props.shouldCloseOnSelect ?? false,
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

    const extendedStartFieldProps = {
      necessityIndicator: props.necessityIndicator,
      ...startFieldProps,
    }

    const extendedEndFieldProps = {
      necessityIndicator: props.necessityIndicator,
      ...endFieldProps,
    }

    return (
      <StyledRangeDatepicker ref={calendarRef} css={css}>
        <DateRangeInputsWrapper
          state={state}
          label={props.label}
          labelProps={labelProps}
          groupProps={groupProps}
          startFieldProps={extendedStartFieldProps}
          endFieldProps={extendedEndFieldProps}
          buttonProps={buttonProps as unknown as ButtonProps}
          startDateLabel={startDateLabel}
          endDateLabel={endDateLabel}
          isInvalid={props.isInvalid}
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
  buttonProps: ButtonProps
  startDateLabel?: string | undefined
  endDateLabel?: string | undefined
  isInvalid?: boolean | undefined
}

const DateRangeInputsWrapper = React.forwardRef<
  HTMLDivElement,
  DateRangeInputsWrapperProps
>((props, ref) => {
  const {
    label,
    labelProps,
    groupProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    startDateLabel,
    endDateLabel,
    isInvalid,
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
            isInvalid={isInvalid}
          />
          <DateField
            {...endFieldProps}
            label={endDateLabel}
            buttonProps={buttonProps}
            isInvalid={isInvalid}
          />
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
  const {state, calendarRef, calendarProps, onApply, onCancel} = props

  return (
    <>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={calendarRef}
          placement='bottom start'
          offset={8}
        >
          <Dialog>
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

export default DateRangePicker
