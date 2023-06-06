/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import {
  autoUpdate,
  flip,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import {DateValue, parseDate} from '@internationalized/date'
import {CSS} from '@stitches/react'
import React from 'react'
import {ButtonProps} from '../button'
import {DateField} from '../calendar/components'
import {useDateRangePicker} from '../calendar/hooks/useDateRangePicker'
import {useDateRangePickerState} from '../calendar/hooks/useDateRangePickerState'
import {
  AriaDatePickerProps,
  DateRangePickerState,
  DOMAttributes,
  RangeCalendarProps,
  RangeValue,
  SpectrumDateRangePickerProps,
} from '../calendar/types'
import DatePickerProvider from '../date-picker/date-picker-context'
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
  label?: string | React.ReactNode
  isInvalid?: boolean
  startDateLabel?: string | React.ReactNode
  endDateLabel?: string | React.ReactNode
  shouldCloseOnSelect?: boolean
  isMobile?: boolean
  calendarCSS?: CSS
  helperText?: React.ReactNode
  maxValue?: DateValue | null | undefined
}

export type DateRangePickerProps = Props

const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (props, ref) => {
    const {
      startDateLabel,
      endDateLabel,
      shouldCloseOnSelect = false,
      css = {},
      errorMessage,
      helperText,
      maxValue,
      ...delegated
    } = props

    const state = useDateRangePickerState({
      ...delegated,
      isReadOnly: props.isReadOnly ? true : props.isMobile ? true : false,
      shouldCloseOnSelect: props.granularity
        ? true
        : shouldCloseOnSelect ?? false,
    })

    const calendarRef = useDOMRef(ref)

    const {
      labelProps,
      groupProps,
      startFieldProps,
      endFieldProps,
      buttonProps,
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
    // ====================================== CONST ======================================

    return (
      <StyledRangeDatepicker ref={calendarRef} css={css}>
        <DatePickerProvider>
          <DateRangeInputsWrapper
            {...getReferenceProps}
            setReference={refs.setReference}
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
              <DateRangeCalendarWrapper
                maxValue={maxValue}
                state={state}
                calendarProps={calendarProps}
                css={props.calendarCSS}
              />
            </div>
          )}
        </DatePickerProvider>
      </StyledRangeDatepicker>
    )
  },
)

interface DateRangeInputsWrapperProps {
  state: DateRangePickerState
  setReference: (r: any) => void
  label?: string | React.ReactNode | undefined
  labelProps: DOMAttributes
  groupProps: DOMAttributes
  startFieldProps: AriaDatePickerProps<DateValue>
  endFieldProps: AriaDatePickerProps<DateValue>
  buttonProps: ButtonProps
  startDateLabel?: string | React.ReactNode | undefined
  endDateLabel?: string | React.ReactNode | undefined
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
    setReference,
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
            ref={setReference}
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
  calendarProps: RangeCalendarProps<DateValue>
  maxValue?: DateValue | null | undefined
  css?: CSS | undefined
}

const DateRangeCalendarWrapper = (props: DateRangeCalendarWrapperProps) => {
  const {
    state,
    calendarProps,
    css = {},
    maxValue = parseDate('2999-03-10'),
  } = props

  const {value, onChange, ...resCalendarProps} = calendarProps

  const onChangeRangeCalendar = (e: unknown) => {
    onChange && onChange(e as RangeValue<DateValue>)
  }

  return (
    <RangeCalendar
      css={css}
      state={state}
      hasFooter={true}
      aria-label=''
      aria-labelledby=''
      {...(value ? {value} : {})}
      onChange={onChangeRangeCalendar}
      {...resCalendarProps}
      maxValue={maxValue}
    />
  )
}

export default DateRangePicker
