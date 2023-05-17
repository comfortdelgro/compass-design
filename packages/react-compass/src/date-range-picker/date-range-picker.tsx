/* eslint-disable @typescript-eslint/unbound-method */
import {DateValue} from '@internationalized/date'
import {CSS} from '@stitches/react'
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
  RangeValue,
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
  isMobile?: boolean
  calendarCSS?: CSS
  helperText?: React.ReactNode
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
      errorMessage,
      helperText,
      ...delegated
    } = props

    const state = useDateRangePickerState({
      ...delegated,
      isReadOnly: props.isReadOnly ? true : props.isMobile ? true : false,
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
    } = useDateRangePicker(
      {
        ...delegated,
        isReadOnly: props.isReadOnly ? true : props.isMobile ? true : false,
        'aria-label': 'date range picker',
        'aria-describedby': '',
      },
      state,
      calendarRef,
    )

    const extendedStartFieldProps = {
      necessityIndicator: props.necessityIndicator,
      ...startFieldProps,
    }

    const extendedEndFieldProps = {
      necessityIndicator: props.necessityIndicator,
      ...endFieldProps,
    }

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

    calendarProps.isReadOnly = checkIfCalendarInMobile()

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
          isReadOnly={props.isReadOnly}
          isMobile={props.isMobile}
          errorMessage={errorMessage}
          helperText={helperText}
        />
        <DateRangeCalendarWrapper
          state={state}
          onApply={onApply}
          onCancel={onCancel}
          calendarRef={calendarRef}
          dialogProps={dialogProps}
          calendarProps={calendarProps}
          css={props.calendarCSS}
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
  isMobile?: boolean | undefined
  isReadOnly?: boolean | undefined
  errorMessage?: React.ReactNode
  helperText?: React.ReactNode
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
    isMobile,
    isReadOnly = false,
    errorMessage,
    helperText,
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
            isMobile={isMobile}
            isReadOnly={isReadOnly}
            errorMessage={errorMessage}
            helperText={helperText}
          />
          <DateField
            {...endFieldProps}
            label={endDateLabel}
            buttonProps={buttonProps}
            isInvalid={isInvalid}
            isMobile={isMobile}
            isReadOnly={isReadOnly}
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
  css?: CSS | undefined
}

const DateRangeCalendarWrapper = (props: DateRangeCalendarWrapperProps) => {
  const {
    state,
    calendarRef,
    dialogProps,
    calendarProps,
    css = {},
    onApply,
    onCancel,
  } = props

  const {value, onChange, ...resCalendarProps} = calendarProps

  const onChangeRangeCalendar = (e: unknown) => {
    onChange && onChange(e as RangeValue<DateValue>)
  }

  return (
    <>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={calendarRef}
          placement='bottom start'
          offset={8}
        >
          <Dialog
            {...dialogProps}
            aria-describedby={dialogProps['aria-describedby'] ?? ''}
            aria-label={dialogProps['aria-label'] ?? ''}
            aria-labelledby={dialogProps['aria-labelledby'] ?? ''}
          >
            <RangeCalendar
              css={css}
              state={state}
              hasFooter={true}
              onApplyCallback={onApply}
              onCancelCallback={onCancel}
              aria-label=''
              aria-labelledby=''
              {...(value ? {value} : {})}
              onChange={onChangeRangeCalendar}
              {...resCalendarProps}
            />
          </Dialog>
        </Popover>
      )}
    </>
  )
}

export default DateRangePicker
