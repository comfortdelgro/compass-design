/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import {CalendarDate} from '@internationalized/date'
import {useLocale} from '@react-aria/i18n'
import {CalendarState, RangeCalendarState} from '../types'
import {hookData} from '../utils'
import {useLabels} from './useLabels'
import {useVisibleRangeDescription} from './useVisibleRangeDescription'

export interface AriaCalendarGridProps {
  startDate?: CalendarDate
  endDate?: CalendarDate
}

export interface CalendarGridAria {
  gridProps: any
  headerProps: any
  weekDays: string[]
}

export function useCalendarGrid(
  props: AriaCalendarGridProps,
  state: CalendarState | RangeCalendarState,
): CalendarGridAria {
  const {startDate = state.visibleRange?.start} = props

  const {direction} = useLocale()

  const visibleRangeDescription = useVisibleRangeDescription(
    startDate as CalendarDate,
    state.timeZone,
  )

  const {ariaLabel, ariaLabelledBy} = hookData.get(state) ?? {
    ariaLabel: undefined,
    ariaLabelledBy: undefined,
  }

  const labelProps = useLabels({
    id: '',
    'aria-label': [ariaLabel, visibleRangeDescription]
      .filter(Boolean)
      .join(', '),
    'aria-labelledby': ariaLabelledBy,
  })

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        state.selectFocusedDate()
        break
      case 'PageUp':
        e.preventDefault()
        e.stopPropagation()
        state.focusPreviousSection(e.shiftKey)
        break
      case 'PageDown':
        e.preventDefault()
        e.stopPropagation()
        state.focusNextSection(e.shiftKey)
        break
      case 'End':
        e.preventDefault()
        e.stopPropagation()
        state.focusSectionEnd()
        break
      case 'Home':
        e.preventDefault()
        e.stopPropagation()
        state.focusSectionStart()
        break
      case 'ArrowLeft':
        e.preventDefault()
        e.stopPropagation()
        if (direction === 'rtl') {
          state.focusNextDay()
        } else {
          state.focusPreviousDay()
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        e.stopPropagation()
        state.focusPreviousRow()
        break
      case 'ArrowRight':
        e.preventDefault()
        e.stopPropagation()
        if (direction === 'rtl') {
          state.focusPreviousDay()
        } else {
          state.focusNextDay()
        }
        break
      case 'ArrowDown':
        e.preventDefault()
        e.stopPropagation()
        state.focusNextRow()
        break
      case 'Escape':
        // Cancel the selection.
        if ('setAnchorDate' in state) {
          e.preventDefault()
          state.setAnchorDate(null)
        }
        break
    }
  }

  return {
    gridProps: {
      ...labelProps,
      role: 'grid',
      'aria-readonly': state.isReadOnly || null,
      'aria-disabled': state.isDisabled || null,
      'aria-multiselectable': 'highlightedRange' in state || undefined,
      onKeyDown,
      onFocus: () => state.setFocused(true),
      onBlur: () => state.setFocused(false),
    },
    headerProps: {
      'aria-hidden': true,
    },
    weekDays,
  }
}
