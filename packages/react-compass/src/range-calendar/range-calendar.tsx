import * as InternationalizedDate from '@internationalized/date'
import {
  createCalendar,
  getLocalTimeZone,
  parseDate,
} from '@internationalized/date'
import {useDateFormatter, useLocale} from '@react-aria/i18n'
import React, {useCallback} from 'react'
import Box from '../box'
import Button, {ButtonProps} from '../button'
import CalendarGrid from '../calendar/calendar-grid'
import CalendarHeader from '../calendar/calendar-header'
import {useRangeCalendar} from '../calendar/hooks/useRangeCalendar'
import {useRangeCalendarState} from '../calendar/hooks/useRangeCalendarState'
import {DateRangePickerState, DateValue, RangeValue} from '../calendar/types'
import {useDatePickerContext} from '../date-picker/date-picker-context'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import RangeCalendarShorcuts, {
  CustomShortcutsProps,
} from './range-calendar-shortcuts'
import {StyledRangeCalendar} from './range-calendar.style'

interface Props extends StyledComponentProps {
  value?: RangeValue<DateValue | null>
  children?: React.ReactNode
  state?: DateRangePickerState
  hasFooter?: boolean
  minValue?: DateValue | null | undefined
  maxValue?: DateValue | null | undefined
  onChange?: (e: unknown) => void
  allowsNonContiguousRanges?: boolean
  isDateUnavailable?: (date: DateValue) => boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  hasShortcuts?: boolean
  ctaButtonRender?: React.ReactNode
  visibleMonths?: 1 | 2
  onSearchButtonClick?:
    | ((
        e:
          | React.MouseEvent<HTMLButtonElement, MouseEvent>
          | React.TouchEvent<HTMLButtonElement>,
      ) => void)
    | undefined
  customShortcuts?: CustomShortcutsProps
}

export type RangeCalendarProps = Props

const RangeCalendar = React.forwardRef<HTMLDivElement, RangeCalendarProps>(
  (props, ref) => {
    const {
      state: pickerState,
      hasFooter,
      css = {},
      maxValue = parseDate('2999-02-17'),
      hasShortcuts = false,
      ctaButtonRender,
      visibleMonths = 2,
      onSearchButtonClick,
      customShortcuts,
      ...delegated
    } = props

    const {locale} = useLocale()
    const state = useRangeCalendarState({
      ...delegated,
      value: props.state
        ? (props.state?.value as RangeValue<DateValue>)
        : (props.value as RangeValue<DateValue>),
      visibleDuration: {months: visibleMonths},
      locale,
      createCalendar,
    })

    const rangeCalendarRef = useDOMRef(ref)

    const {calendarProps, prevButtonProps, nextButtonProps} = useRangeCalendar(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delegated,
      state,
      rangeCalendarRef,
    )

    const formatter = useDateFormatter({})

    const {setIsReset} = useDatePickerContext()

    const handleClearButtonClick = () => {
      state.setValue({start: null, end: null})

      state.setAnchorDate(null)

      setIsReset?.(true)
    }

    const handleTodayButtonClick = () => {
      const todayRange = {
        start: InternationalizedDate.today(
          InternationalizedDate.getLocalTimeZone(),
        ),
        end: InternationalizedDate.today(
          InternationalizedDate.getLocalTimeZone(),
        ),
      }

      if (pickerState) {
        pickerState?.setDateRange(todayRange)
      } else {
        state.setValue(todayRange)
      }

      state.setAnchorDate(null)

      state.setFocusedDate?.(
        InternationalizedDate.today(InternationalizedDate.getLocalTimeZone()),
      )
    }

    const isRangeCalendar = visibleMonths === 1 ? false : true

    const showShortcut = isRangeCalendar && hasShortcuts ? true : false

    const renderCTAButton = useCallback(() => {
      if (ctaButtonRender) {
        return ctaButtonRender
      } else {
        if (showShortcut) {
          return (
            <Button variant='primary' onPress={(e) => onSearchButtonClick?.(e)}>
              Search
            </Button>
          )
        } else {
          return (
            <Button variant='primary' onPress={handleTodayButtonClick}>
              Today
            </Button>
          )
        }
      }
    }, [ctaButtonRender, showShortcut])

    return (
      <StyledRangeCalendar
        ref={rangeCalendarRef}
        css={css}
        variants={showShortcut ? 'extend' : 'basic'}
      >
        {showShortcut ? (
          <RangeCalendarShorcuts
            state={state}
            pickerState={pickerState}
            customShortcuts={customShortcuts}
          />
        ) : (
          <></>
        )}
        <Box>
          <CalendarHeader
            state={state}
            variant={isRangeCalendar ? 'range' : 'default'}
            calendarProps={calendarProps}
            prevButtonProps={prevButtonProps as unknown as ButtonProps}
            nextButtonProps={nextButtonProps as unknown as ButtonProps}
          />
          <div className='calendar-body'>
            <CalendarGrid state={state} maxValue={maxValue} />
            {isRangeCalendar ? (
              <CalendarGrid
                state={state}
                offset={{months: 1}}
                maxValue={maxValue}
              />
            ) : (
              <></>
            )}
          </div>
          {hasFooter && (
            <div className='calendar-footer'>
              <Button variant='ghost' onPress={handleClearButtonClick}>
                Clear
              </Button>
              <div className='calendar-footer-right-side'>
                <p className='preview-date'>
                  {state?.value?.start && state?.value?.end
                    ? formatter.formatRange(
                        state.value.start.toDate(getLocalTimeZone()),
                        state.value.end.toDate(getLocalTimeZone()),
                      )
                    : `${
                        state?.value?.start
                          ? formatter.format(
                              state.value.start.toDate(getLocalTimeZone()),
                            )
                          : ''
                      } - ${
                        state?.value?.end
                          ? formatter.format(
                              state.value.end.toDate(getLocalTimeZone()),
                            )
                          : ''
                      }`}
                </p>
                {renderCTAButton()}
              </div>
            </div>
          )}
        </Box>
      </StyledRangeCalendar>
    )
  },
)

export default RangeCalendar
