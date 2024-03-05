import {CalendarProps} from '../calendar'
import {
  DateRangePickerState,
  DateValue,
  RangeCalendarState,
  RangeValue,
} from '../calendar/types'
import {CalendarDate} from '../internationalized/date'
import styles from './styles/range-calendar-shortcuts.module.css'
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
    <div className={styles.rangeCalendarShortcuts}>
      {shorcuts &&
        shorcuts.map((shorcut) => {
          return (
            <button
              className={`${styles.rangeCalendarShortcutsItem} ${
                selectedItem === shorcut.label ? styles.active : ''
              }`}
              key={shorcut.label}
              aria-disabled={shorcut.isDisable}
              type='button'
              disabled={shorcut.isDisable}
              onClick={() => handleShortcutClick(shorcut)}
            >
              {shorcut.label}
            </button>
          )
        })}
    </div>
  )
}

export default RangeCalendarShorcuts
