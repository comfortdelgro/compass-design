/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import {useLocale} from '@react-aria/i18n'
import {RefObject, useMemo} from 'react'
import {
  DateFieldState,
  DatePickerState,
  DateRangePickerState,
  FocusableElement,
} from '../types'
import {createFocusManager, getFocusableTreeWalker} from '../utils'
import {usePress} from './usePress'

export function useDatePickerGroup(
  state: DatePickerState | DateRangePickerState | DateFieldState,
  ref: RefObject<Element>,
  disableArrowNavigation?: boolean,
) {
  const {direction} = useLocale()
  const focusManager = useMemo(() => createFocusManager(ref), [ref])

  // Open the popover on alt + arrow down
  const onKeyDown = (e: KeyboardEvent) => {
    if (
      e.altKey &&
      (e.key === 'ArrowDown' || e.key === 'ArrowUp') &&
      'setOpen' in state
    ) {
      e.preventDefault()
      e.stopPropagation()
      state.setOpen(true)
    }

    if (disableArrowNavigation) {
      return
    }

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        e.stopPropagation()
        if (direction === 'rtl') {
          focusManager.focusNext()
        } else {
          focusManager.focusPrevious()
        }
        break
      case 'ArrowRight':
        e.preventDefault()
        e.stopPropagation()
        if (direction === 'rtl') {
          focusManager.focusPrevious()
        } else {
          focusManager.focusNext()
        }
        break
    }
  }

  // Focus the first placeholder segment from the end on mouse down/touch up in the field.
  const focusLast = () => {
    // Try to find the segment prior to the element that was clicked on.
    let target = window.event?.target as FocusableElement
    // @ts-ignore
    const walker = getFocusableTreeWalker(ref.current, {tabbable: true})
    if (target) {
      walker.currentNode = target
      target = walker.previousNode() as FocusableElement
    }

    // If no target found, find the last element from the end.
    if (!target) {
      let last: FocusableElement
      do {
        last = walker.lastChild() as FocusableElement
        if (last) {
          target = last
        }
      } while (last)
    }

    // Now go backwards until we find an element that is not a placeholder.
    while (target?.hasAttribute('data-placeholder')) {
      const prev = walker.previousNode() as FocusableElement
      if (prev && prev.hasAttribute('data-placeholder')) {
        target = prev
      } else {
        break
      }
    }

    if (target) {
      target.focus()
    }
  }

  // @ts-ignore
  const {pressProps} = usePress({
    preventFocusOnPress: true,
    allowTextSelectionOnPress: true,
    onPressStart(e) {
      if (e.pointerType === 'mouse') {
        focusLast()
      }
    },
    onPress(e) {
      if (e.pointerType !== 'mouse') {
        focusLast()
      }
    },
  })

  return {
    ...pressProps,
    onKeyDown,
  }
}
