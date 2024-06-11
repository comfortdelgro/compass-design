import React from 'react'
import Button, {ButtonProps} from '../button'
import {DateValue} from '../internationalized/date'
import {useDateFormatter} from '../internationalized/i18n'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {MONTH_YEAR_STATE, MonthYearState} from './hooks/useMonthYearState'
import styles from './styles/calendar-header.module.css'
import {AriaLabelingProps, DOMProps} from './types'
import {
  CalendarState,
  DOMAttributes,
  RangeCalendarState,
} from './types/calendar.types'

interface Props {
  css?: CSS
  children?: React.ReactNode
  variant?: 'default' | 'range'
  state: CalendarState | RangeCalendarState
  calendarProps: DOMProps | AriaLabelingProps | DOMAttributes
  prevButtonProps: ButtonProps
  nextButtonProps: ButtonProps
  middleButtonProps?: MonthYearState
  maxValue?: DateValue
}

const iconButtonStyle = {
  width: '18px',
  height: '16px',
}

const CalendarHeader = (props: Props) => {
  const {
    state,
    variant = 'default',
    prevButtonProps: datePrevButtonProps,
    nextButtonProps: dateNextButtonProps,
    middleButtonProps,
    css = {},
  } = props

  const monthDateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    timeZone: state.timeZone,
  })

  const months = middleButtonProps?.months ?? null

  const renderMiddleButtonContent = (formatedDate: string) => {
    switch (middleButtonProps?.currentState) {
      case MONTH_YEAR_STATE.DATE:
        return formatedDate
      case MONTH_YEAR_STATE.MONTH:
        return months ? `${months[0]}-${months[months.length - 1]}` : 'Jan-Dec'
      case MONTH_YEAR_STATE.YEAR:
        return `${middleButtonProps.endStartYears.start}-${middleButtonProps.endStartYears.end}`
      default:
        return formatedDate
    }
  }

  let prevButtonProps = datePrevButtonProps
  let nextButtonProps = dateNextButtonProps

  if (variant === 'default' && middleButtonProps) {
    const {
      prevButtonProps: yearPrevButtonProps,
      nextButtonProps: yearNextButtonProps,
    } = middleButtonProps

    prevButtonProps =
      middleButtonProps.currentState === MONTH_YEAR_STATE.YEAR
        ? yearPrevButtonProps
        : middleButtonProps.currentState === MONTH_YEAR_STATE.DATE
        ? datePrevButtonProps
        : {isDisabled: true}

    nextButtonProps =
      middleButtonProps.currentState === MONTH_YEAR_STATE.YEAR
        ? yearNextButtonProps
        : middleButtonProps.currentState === MONTH_YEAR_STATE.DATE
        ? dateNextButtonProps
        : {isDisabled: true}
  }

  return (
    <CssInjection css={css}>
      <div className={classNames(styles.calendarHeader, 'cdg-calendar-header')}>
        <div
          className={classNames(
            styles.calendarHeaderLeftSide,
            'cdg-calendar-header-left-side',
          )}
        >
          <Button
            {...prevButtonProps}
            type='button'
            variant='ghost'
            css={{
              '& #cdg-calendar-arrow-left': iconButtonStyle,
            }}
          >
            <svg
              width='1em'
              height='1em'
              viewBox='0 0 32 32'
              id='cdg-calendar-arrow-left'
            >
              <g fill='currentColor'>
                <path d='M21.7146 0.999998C22.2995 0.999998 22.8846 1.24412 23.3304 1.73237C24.2232 2.70887 24.2232 4.2908 23.3304 5.2673L13.5146 15.999L23.3304 26.7327C24.2232 27.7092 24.2232 29.2911 23.3304 30.2676C22.4375 31.2441 20.9911 31.2441 20.0982 30.2676L8.66964 17.7684C7.77679 16.7919 7.77679 15.21 8.66964 14.2335L20.0982 1.73433C20.5446 1.24217 21.1296 0.999998 21.7146 0.999998Z'></path>
              </g>
            </svg>
          </Button>
          {variant === 'default' ? (
            <button
              // We have a visually hidden heading describing the entire visible range,
              // and the calendar itself describes the individual month
              // so we don't need to repeat that here for screen reader users.
              className={classNames(
                styles.calendarHeaderMiddle,
                'cdg-calendar-header-middle',
              )}
              aria-hidden
              type='button'
              onClick={() => {
                if (variant === 'default' && middleButtonProps) {
                  middleButtonProps.nextState()
                }
              }}
            >
              {renderMiddleButtonContent(
                monthDateFormatter.format(
                  state?.visibleRange?.start?.toDate(
                    state.timeZone ?? 'UTC',
                  ) as Date,
                ),
              )}
            </button>
          ) : (
            <h2
              className={classNames(
                styles.calendarHeaderTitle,
                'cdg-calendar-header-title',
              )}
            >
              {renderMiddleButtonContent(
                monthDateFormatter.format(
                  state?.visibleRange?.start?.toDate(
                    state.timeZone ?? 'UTC',
                  ) as Date,
                ),
              )}
            </h2>
          )}
          {variant === 'default' && (
            <Button
              {...nextButtonProps}
              type='button'
              variant='ghost'
              css={{
                '& #cdg-calendar-arrow-right': iconButtonStyle,
              }}
            >
              <svg
                width='1em'
                height='1em'
                viewBox='0 0 32 32'
                id='cdg-calendar-arrow-right'
              >
                <g fill='currentColor'>
                  <path d='M10.9997 30C10.4879 30 9.97594 29.7722 9.58594 29.3165C8.80469 28.4051 8.80469 26.9286 9.58594 26.0172L18.1747 16.0009L9.58594 5.98281C8.80469 5.07141 8.80469 3.59495 9.58594 2.68355C10.3672 1.77215 11.6328 1.77215 12.4141 2.68355L22.4141 14.3495C23.1953 15.2609 23.1953 16.7373 22.4141 17.6487L12.4141 29.3146C12.0234 29.774 11.5116 30 10.9997 30Z'></path>
                </g>
              </svg>
            </Button>
          )}
        </div>
        {variant === 'range' && (
          <div
            className={classNames(
              styles.calendarHeaderRightSide,
              'cdg-calendar-header-right-side',
            )}
          >
            <h2
              className={classNames(
                styles.calendarHeaderTitle,
                'cdg-calendar-header-title',
              )}
            >
              {renderMiddleButtonContent(
                monthDateFormatter.format(
                  state?.visibleRange?.start
                    ?.add({months: 1})
                    .toDate(state.timeZone ?? 'UTC') as Date,
                ),
              )}
            </h2>
            <Button
              {...nextButtonProps}
              type='button'
              variant='ghost'
              css={{
                '& #cdg-calendar-arrow-right': iconButtonStyle,
              }}
            >
              <svg
                width='1em'
                height='1em'
                viewBox='0 0 32 32'
                id='cdg-calendar-arrow-right'
              >
                <g fill='currentColor'>
                  <path d='M10.9997 30C10.4879 30 9.97594 29.7722 9.58594 29.3165C8.80469 28.4051 8.80469 26.9286 9.58594 26.0172L18.1747 16.0009L9.58594 5.98281C8.80469 5.07141 8.80469 3.59495 9.58594 2.68355C10.3672 1.77215 11.6328 1.77215 12.4141 2.68355L22.4141 14.3495C23.1953 15.2609 23.1953 16.7373 22.4141 17.6487L12.4141 29.3146C12.0234 29.774 11.5116 30 10.9997 30Z'></path>
                </g>
              </svg>
            </Button>
          </div>
        )}
      </div>
    </CssInjection>
  )
}

export default CalendarHeader
