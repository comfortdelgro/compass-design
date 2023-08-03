/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import {useEffect, useMemo, useState} from 'react'
import {ButtonProps} from '../../button'
import {CalendarDate} from '../../internationalized/date'
import {useDateFormatter, useLocale} from '../../internationalized/i18n'
import {MAX_YEAR, MIN_YEAR} from '../constants/common'
import {CalendarState, DateValue, RangeCalendarState} from '../types'

export enum MONTH_YEAR_STATE {
  DATE = 0,
  YEAR = 1,
  MONTH = 2,
}

interface Props {
  state: CalendarState | RangeCalendarState
  maxValue?: DateValue | null | undefined
}

export type StateType = 0 | 1 | 2 | MONTH_YEAR_STATE

export interface MonthYearState {
  months: string[]
  currentState: StateType
  renderedYears: number[]
  endStartYears: {
    start: number | undefined
    end: number | undefined
  }
  setMonthYearState: (state: StateType) => void
  nextState: () => void
  prevState: () => void
  nextButtonProps: ButtonProps
  prevButtonProps: ButtonProps
}

export const useMonthYearCalendar = (props: Props): MonthYearState => {
  const {state} = props

  const [currentState, setCurrentState] = useState<StateType>(
    MONTH_YEAR_STATE.DATE,
  )

  const dayFormatter = useDateFormatter({
    month: 'short',
    timeZone: state.timeZone,
  })

  const {locale} = useLocale()

  const months = useMemo(() => {
    const dayOfEachMonths = []
    for (let month = 0; month < 12; month++) {
      const date = new Date(new Date().getFullYear(), month, 1)
      dayOfEachMonths.push(date)
    }

    return dayOfEachMonths.map((day) => {
      return dayFormatter.format(day)
    })
  }, [locale])

  const generateYears = (
    year: number,
    type: 'middle' | 'end' | 'start' = 'middle',
  ) => {
    // const focusedDateYear = focusedDate?.year ?? new Date().getFullYear()
    const years = []
    if (type === 'middle') {
      for (let i = year - 4; i <= year + 7; i++) {
        if (validateYear(i)) years.push(i)
      }
    } else if (type === 'end') {
      for (let i = year; i <= year + 11; i++) {
        if (validateYear(i)) years.push(i)
      }
    } else {
      for (let i = year - 11; i <= year; i++) {
        if (validateYear(i)) years.push(i)
      }
    }
    return years
  }

  const validateYear = (year: number) => {
    if (year > MAX_YEAR) {
      return false
    } else if (year < MIN_YEAR) {
      return false
    }
    return true
  }

  const [renderedYears, setRenderedYears] = useState(
    generateYears(state.focusedDate?.year ?? new Date().getFullYear()),
  )

  const [endStartYears, setEndStartYears] = useState({
    start: generateYears((state.value as CalendarDate)?.year)[0],
    end: generateYears((state.value as CalendarDate)?.year)[
      generateYears((state.value as CalendarDate)?.year).length - 1
    ],
  })

  useEffect(() => {
    const focusedDate = state.focusedDate
    const years = generateYears(focusedDate?.year ?? new Date().getFullYear())
    setEndStartYears({start: years[0], end: years[11]})
    setRenderedYears(years)
  }, [state.focusedDate, currentState])

  useEffect(() => {
    setEndStartYears({
      start: renderedYears[0],
      end: renderedYears[renderedYears.length - 1],
    })
  }, [renderedYears])

  const setMonthYearState = (state: 0 | 1 | 2 | MONTH_YEAR_STATE) => {
    setCurrentState(state)
  }

  const nextState = () => {
    setCurrentState((currentState) => (currentState + 1) % 3)
  }

  const prevState = () => {
    if (currentState - 1 < 0) {
      setCurrentState(2)
      return
    }
    setCurrentState((currentState) => (currentState - 1) % 3)
  }

  const prevYears = () => {
    setRenderedYears(
      generateYears(endStartYears.start ?? new Date().getFullYear(), 'start'),
    )
  }

  const nextYears = () => {
    setRenderedYears(
      generateYears(endStartYears.end ?? new Date().getFullYear(), 'end'),
    )
  }

  return {
    months,
    currentState,
    renderedYears,
    endStartYears,
    setMonthYearState,
    nextState,
    prevState,
    prevButtonProps: {
      onClick: () => {
        prevYears()
      },
      isDisabled: endStartYears.start
        ? (state.minValue?.year ?? MIN_YEAR) >= endStartYears.start
        : false,
    },
    nextButtonProps: {
      onClick: () => {
        nextYears()
      },
      isDisabled: endStartYears.end
        ? (props.maxValue?.year ?? MAX_YEAR) <= endStartYears.end
        : false,
    },
  }
}
