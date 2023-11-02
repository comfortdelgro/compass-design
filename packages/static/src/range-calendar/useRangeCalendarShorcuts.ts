import {useEffect, useState} from 'react'
import {CalendarProps} from '../calendar'
import {RangeValue} from '../calendar/types'
import {isInvalid} from '../calendar/utils'
import {
  DateValue,
  endOfMonth,
  endOfWeek,
  endOfYear,
  startOfMonth,
  startOfWeek,
  startOfYear,
  today,
} from '../internationalized/date'
import {useLocale} from '../internationalized/i18n'
import {
  RangeCalendarShorcutItem,
  RangeCalendarShortcutsProps,
} from './range-calendar-shortcuts'

export const useRangeCalendarShortcuts = (
  props: RangeCalendarShortcutsProps,
) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [currentRangeDate, setCurrentRangeDate] =
    useState<RangeValue<CalendarProps | null> | null>(null)

  const {state, customShortcuts = (shorcuts) => shorcuts} = props
  const {locale} = useLocale()

  useEffect(() => {
    if (!currentRangeDate?.start || !currentRangeDate.end) {
      return
    }
    if (
      selectedItem &&
      state.value.end?.compare(currentRangeDate.end) !== 0 &&
      state.value.start?.compare(currentRangeDate.start) !== 0
    ) {
      setSelectedItem(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.value])

  const timeZone = new Intl.DateTimeFormat(locale).resolvedOptions().timeZone

  const todayDate = today(timeZone)
  const yesterday = todayDate.subtract({days: 1})
  const lastWeekDay = todayDate.subtract({weeks: 1})
  const lastMonthDay = todayDate.subtract({months: 1})
  const startOfThisWeek = startOfWeek(todayDate, locale)
  const endOfThisWeek = endOfWeek(todayDate, locale)
  const startOfLastWeek = startOfWeek(lastWeekDay, locale)
  const endOfLastWeek = endOfWeek(lastWeekDay, locale)
  const startOfThisMonth = startOfMonth(todayDate)
  const endOfThisMonth = endOfMonth(todayDate)
  const startOfLastMonth = startOfMonth(lastMonthDay)
  const endOfLastMonth = endOfMonth(lastMonthDay)
  const startOfThisYear = startOfYear(todayDate)
  const endOfThisYear = endOfYear(todayDate)

  const items: RangeCalendarShorcutItem[] = [
    {
      label: 'Today',
      isDisable: (() => {
        return isInvalid(todayDate, state.minValue, state.maxValue)
      })(),
      getValue: () => {
        return {end: todayDate, start: todayDate}
      },
    },
    {
      label: 'Yesterday',
      isDisable: (() => {
        return isInvalid(yesterday, state.minValue, state.maxValue)
      })(),
      getValue: () => {
        return {end: yesterday, start: yesterday}
      },
    },
    {
      label: 'This Week',
      isDisable: (() => {
        return (
          isInvalid(startOfThisWeek, state.minValue, state.maxValue) ||
          isInvalid(endOfThisWeek, state.minValue, state.maxValue)
        )
      })(),
      getValue: () => {
        return {start: startOfThisWeek, end: endOfThisWeek}
      },
    },
    {
      label: 'Last Week',
      isDisable: (() => {
        return (
          isInvalid(startOfLastWeek, state.minValue, state.maxValue) ||
          isInvalid(endOfLastWeek, state.minValue, state.maxValue)
        )
      })(),
      getValue: () => {
        return {start: startOfLastWeek, end: endOfLastWeek}
      },
    },
    {
      label: 'This Month',
      isDisable: (() => {
        return (
          isInvalid(startOfThisMonth, state.minValue, state.maxValue) ||
          isInvalid(endOfThisMonth, state.minValue, state.maxValue)
        )
      })(),
      getValue: () => {
        return {start: startOfThisMonth, end: endOfThisMonth}
      },
    },
    {
      label: 'Last Month',
      isDisable: (() => {
        return (
          isInvalid(startOfLastMonth, state.minValue, state.maxValue) ||
          isInvalid(endOfLastMonth, state.minValue, state.maxValue)
        )
      })(),
      getValue: () => {
        return {start: startOfLastMonth, end: endOfLastMonth}
      },
    },
    {
      label: 'This Year',
      isDisable: (() => {
        return (
          isInvalid(startOfThisYear, state.minValue, state.maxValue) ||
          isInvalid(endOfThisYear, state.minValue, state.maxValue)
        )
      })(),
      getValue: () => {
        return {start: startOfThisYear, end: endOfThisYear}
      },
    },
  ]

  const customIsInvalid = (date: DateValue | null | undefined) => {
    return isInvalid(date, state.minValue, state.maxValue)
  }

  const shorcuts = customShortcuts(items, customIsInvalid)

  return {shorcuts, selectedItem, setSelectedItem, setCurrentRangeDate}
}
