/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {useRef} from 'react'
import {ButtonProps} from '../button'
import Calendar from '../calendar/calendar'
import DateField from '../calendar/components/date-field'
import {useDatePicker} from '../calendar/hooks/useDatePicker'
import {useDatePickerState} from '../calendar/hooks/useDatePickerState'
import {
  AriaDatePickerProps,
  CalendarProps,
  DatePickerState,
  DOMAttributes,
  SpectrumDatePickerProps,
} from '../calendar/types'
import {DateValue, parseDate} from '../internationalized/date'
import Popover from '../popover'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import DatePickerProvider from './date-picker-context'
import styles from './styles/date-picker.module.css'
interface Props extends SpectrumDatePickerProps<DateValue> {
  css?: CSS
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

export type DatePickerProps = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props>

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    const {
      css = {},
      maxValue = parseDate('2999-03-10'),
      ctaButtonRender,
      className,
    } = props
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

    const {groupProps, fieldProps, buttonProps, calendarProps} = useDatePicker(
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

    const datePickerRef = useRef(null)

    const rootClasses = [styles.datePicker, className, 'cdg-date-picker']
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={datePickerRef}>
        <div ref={datePickerRef} className={rootClasses}>
          <DatePickerProvider>
            <Popover
              isOpen={state.isOpen}
              anchor={
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
              }
              css={{width: '100%'}}
              direction='bottom-left'
              onOpenChange={(open) => state.setOpen(open)}
              onOutsidePress={() => state.close()}
            >
              <DatePickerCalendarWrapper
                maxValue={maxValue}
                state={state}
                calendarProps={calendarProps}
                calendarRef={calendarRef}
                css={props.calendarCSS}
                ctaButtonRender={ctaButtonRender}
              />
            </Popover>
          </DatePickerProvider>
        </div>
      </CssInjection>
    )
  },
)

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
    <div {...groupProps} ref={ref}>
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
    </div>
  )
})

interface DatePickerCalendarWrapperProps {
  state: DatePickerState
  calendarRef: React.RefObject<HTMLDivElement>
  calendarProps: CalendarProps
  onCancel?: (() => void) | undefined
  maxValue?: DateValue | null | undefined
  ctaButtonRender?: React.ReactNode
  css?: CSS
}

const DatePickerCalendarWrapper = (props: DatePickerCalendarWrapperProps) => {
  const {
    state,
    calendarProps,
    maxValue = parseDate('2999-03-10'),
    ctaButtonRender,
    css = {},
  } = props

  return (
    <Calendar
      state={state}
      hasFooter={true}
      {...calendarProps}
      maxValue={maxValue}
      css={css}
      ctaButtonRender={ctaButtonRender}
    />
  )
}

export default DatePicker
