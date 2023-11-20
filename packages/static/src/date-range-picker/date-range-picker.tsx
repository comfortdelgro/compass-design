/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react'
import {ButtonProps} from '../button'
import DateField from '../calendar/components/date-field'
import Dialog from '../calendar/components/dialog'
import Popover from '../calendar/components/popover'
import {useDateRangePicker} from '../calendar/hooks/useDateRangePicker'
import {useDateRangePickerState} from '../calendar/hooks/useDateRangePickerState'
import {
  AriaDatePickerProps,
  AriaDialogProps,
  DateRangePickerState,
  DOMAttributes,
  RangeCalendarProps,
  RangeValue,
  SpectrumDateRangePickerProps,
} from '../calendar/types'
import DatePickerProvider from '../date-picker/date-picker-context'
import {DateValue, parseDate} from '../internationalized/date'
import RangeCalendar from '../range-calendar/range-calendar'
import {CustomShortcutsProps} from '../range-calendar/range-calendar-shortcuts'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {useMediaQuery} from '../utils/use-media-query'
import styles from './styles/date-range-picker.module.css'

interface Props extends SpectrumDateRangePickerProps<DateValue> {
  css?: unknown
  children?: React.ReactNode
  label?: string | React.ReactNode
  isInvalid?: boolean
  startDateLabel?: string | React.ReactNode
  endDateLabel?: string | React.ReactNode
  shouldCloseOnSelect?: boolean
  isMobile?: boolean
  calendarCSS?: unknown
  helperText?: React.ReactNode
  maxValue?: DateValue | null | undefined
  hasShortcuts?: boolean
  ctaButtonRender?: React.ReactNode
  visibleMonths?: 1 | 2
  shouldOnChangeTriggerOnSameDate?: boolean
  onSearchButtonClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.TouchEvent<HTMLButtonElement>,
  ) => void
  customShortcuts?: CustomShortcutsProps
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
      hasShortcuts,
      ctaButtonRender,
      visibleMonths,
      shouldOnChangeTriggerOnSameDate,
      onSearchButtonClick,
      customShortcuts,
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
      <CssInjection css={css} childrenRef={calendarRef}>
        <div
          ref={calendarRef}
          className={`date-range-picker-wrapper ${styles.dateRangePicker}`}
        >
          <DatePickerProvider>
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
              maxValue={maxValue}
              state={state}
              calendarRef={calendarRef}
              dialogProps={dialogProps}
              calendarProps={calendarProps}
              hasShortcuts={hasShortcuts}
              ctaButtonRender={ctaButtonRender}
              onSearchButtonClick={onSearchButtonClick}
              customShortcuts={customShortcuts}
              css={props.calendarCSS}
              visibleMonths={visibleMonths}
              shouldOnChangeTriggerOnSameDate={shouldOnChangeTriggerOnSameDate}
            />
          </DatePickerProvider>
        </div>
      </CssInjection>
    )
  },
)

interface DateRangeInputsWrapperProps {
  state: DateRangePickerState
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
    <div>
      <span {...labelProps} className='date-range-label'>
        {label}
      </span>
      <div {...groupProps} ref={ref} className='date-range-inputs-body'>
        <div className={`date-range-fields ${styles.dateRangeFields}`}>
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
    </div>
  )
})

interface DateRangeCalendarWrapperProps {
  state: DateRangePickerState
  calendarRef: React.RefObject<HTMLDivElement>
  dialogProps: AriaDialogProps
  calendarProps: RangeCalendarProps<DateValue | null>
  maxValue?: DateValue | null | undefined
  css?: unknown | undefined
  hasShortcuts?: boolean | undefined
  ctaButtonRender?: React.ReactNode | undefined
  visibleMonths?: 1 | 2 | undefined
  shouldOnChangeTriggerOnSameDate?: boolean | undefined
  onSearchButtonClick?:
    | ((
        e:
          | React.MouseEvent<HTMLButtonElement, MouseEvent>
          | React.TouchEvent<HTMLButtonElement>,
      ) => void)
    | undefined
  customShortcuts?: CustomShortcutsProps
}

const DateRangeCalendarWrapper = (props: DateRangeCalendarWrapperProps) => {
  const {
    state,
    calendarRef,
    dialogProps,
    calendarProps,
    css = {},
    hasShortcuts = false,
    maxValue = parseDate('2999-03-10'),
    ctaButtonRender,
    visibleMonths,
    shouldOnChangeTriggerOnSameDate,
    onSearchButtonClick,
    customShortcuts,
  } = props

  const {value, onChange, ...resCalendarProps} = calendarProps
  const isMobileView = useMediaQuery('(max-width: 768px)')

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
              aria-label=''
              aria-labelledby=''
              {...(value ? {value} : {})}
              onChange={onChangeRangeCalendar}
              {...resCalendarProps}
              maxValue={maxValue}
              hasShortcuts={hasShortcuts}
              ctaButtonRender={ctaButtonRender}
              onSearchButtonClick={onSearchButtonClick}
              customShortcuts={customShortcuts}
              visibleMonths={
                visibleMonths ? visibleMonths : isMobileView ? 1 : 2
              }
              shouldOnChangeTriggerOnSameDate={
                !!shouldOnChangeTriggerOnSameDate
              }
            />
          </Dialog>
        </Popover>
      )}
    </>
  )
}

export default DateRangePicker
