import ArrowLeft from '@comfortdelgro/compass-icons/react/arrow-left'
import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import React from 'react'
import Button, {ButtonProps} from '../button'
import {DateValue} from '../internationalized/date'
import {useDateFormatter} from '../internationalized/i18n'
import {CSS, CssInjection} from '../utils/objectToCss'
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
      <div className={styles.calendarHeader}>
        <div
          className={`calendar-header-left-side ${styles.calendarHeaderLeftSide}`}
        >
          <Button
            variant='ghost'
            type='button'
            css={{
              '& #cdg-calendar-arrow-left': iconButtonStyle,
            }}
            {...prevButtonProps}
          >
            <ArrowLeft id='cdg-calendar-arrow-left' />
          </Button>
          {variant === 'default' ? (
            <button
              // We have a visually hidden heading describing the entire visible range,
              // and the calendar itself describes the individual month
              // so we don't need to repeat that here for screen reader users.
              className={`calendar-header-middle ${styles.calendarHeaderMiddle}`}
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
            <h2 className={styles.calendarHeaderTitle}>
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
              variant='ghost'
              type='button'
              css={{
                '& #cdg-calendar-arrow-right': iconButtonStyle,
              }}
              {...nextButtonProps}
            >
              <ArrowRight id='cdg-calendar-arrow-right' />
            </Button>
          )}
        </div>
        {variant === 'range' && (
          <div
            className={`calendar-header-right-side ${styles.calendarHeaderRightSide}`}
          >
            <h2 className={styles.calendarHeaderTitle}>
              {renderMiddleButtonContent(
                monthDateFormatter.format(
                  state?.visibleRange?.start
                    ?.add({months: 1})
                    .toDate(state.timeZone ?? 'UTC') as Date,
                ),
              )}
            </h2>
            <Button
              variant='ghost'
              type='button'
              css={{
                '& #cdg-calendar-arrow-right': iconButtonStyle,
              }}
              {...nextButtonProps}
            >
              <ArrowRight id='cdg-calendar-arrow-right' />
            </Button>
          </div>
        )}
      </div>
    </CssInjection>
  )
}

export default CalendarHeader
