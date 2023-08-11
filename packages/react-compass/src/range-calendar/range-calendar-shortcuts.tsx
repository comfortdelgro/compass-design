import React from 'react'
import {CalendarProps} from '../calendar'
import {
  DateRangePickerState,
  DateValue,
  RangeCalendarState,
  RangeValue,
} from '../calendar/types'
import {CalendarDate} from '../internationalized/date'
import {
  StyledRangeCalendarShorcuts,
  StyledRangeCalendarShorcutsItem,
} from './range-calendar-shortcuts.styles'
import {useRangeCalendarShortcuts} from './useRangeCalendarShorcuts'

export interface RangeCalendarShorcutItem {
  label: string
  isDisable?: boolean
  getValue: () => RangeValue<CalendarProps | null>
}

export type CustomShortcutsProps =
  | ((
      shortcuts: RangeCalendarShorcutItem[],
      isInvalid: (date: DateValue | null | undefined) => boolean,
    ) => RangeCalendarShorcutItem[])
  | undefined

export interface RangeCalendarShortcutsProps {
  state: RangeCalendarState
  pickerState?: DateRangePickerState | undefined
  customShortcuts?: CustomShortcutsProps
}

const RangeCalendarShorcuts = (props: RangeCalendarShortcutsProps) => {
  const {state, pickerState} = props

  const {shorcuts, selectedItem, setSelectedItem, setCurrentRangeDate} =
    useRangeCalendarShortcuts(props)

  const handleShortcutClick = (shorcut: RangeCalendarShorcutItem) => {
    const rangeValue = shorcut.getValue()
    if (pickerState) {
      pickerState.setDateRange(rangeValue)
    } else {
      state.setValue(rangeValue)
    }
    if (rangeValue.end) state.setFocusedDate?.(rangeValue.end as CalendarDate)
    setSelectedItem(shorcut.label)
    setCurrentRangeDate(rangeValue)
    state.setAnchorDate(null)
  }

  return (
    <StyledRangeCalendarShorcuts>
      {shorcuts &&
        shorcuts.map((shorcut) => {
          return (
            <StyledRangeCalendarShorcutsItem
              key={shorcut.label}
              aria-disabled={shorcut.isDisable}
              type='button'
              variants={selectedItem === shorcut.label ? 'active' : 'inactive'}
              disabled={shorcut.isDisable}
              onClick={() => handleShortcutClick(shorcut)}
            >
              {shorcut.label}
            </StyledRangeCalendarShorcutsItem>
          )
        })}
    </StyledRangeCalendarShorcuts>
  )
}

export default RangeCalendarShorcuts
