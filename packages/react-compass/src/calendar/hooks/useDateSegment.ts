/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-self-assign */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {CalendarDate, toCalendar} from '@internationalized/date'
import {NumberParser} from '@internationalized/number'
import {useDateFormatter, useFilter, useLocale} from '@react-aria/i18n'
import React, {RefObject, useLayoutEffect, useMemo, useRef} from 'react'
import {DateFieldState, DateSegment, DateSegmentAria} from '../types'
import {
  commonPrefixLength,
  getScrollParent,
  hookData,
  isIOS,
  isMac,
  scrollIntoViewport,
} from '../utils'
import {useEvent} from './useEvent'
import {useId} from './useId'
import {useLabels} from './useLabels'
import {useSpinButton} from './useSpinButton'

export function useDateSegment(
  segment: DateSegment,
  state: DateFieldState,
  ref: RefObject<HTMLElement>,
): DateSegmentAria {
  const enteredKeys = useRef('')
  const {locale} = useLocale()
  // @ts-ignore
  let {ariaLabel, ariaLabelledBy, ariaDescribedBy, focusManager} =
    // @ts-ignore
    hookData.get(state)

  let textValue = segment.isPlaceholder ? '' : segment.text
  const options = useMemo(
    () => state.dateFormatter.resolvedOptions(),
    [state.dateFormatter],
  )
  const monthDateFormatter = useDateFormatter({
    month: 'long',
    timeZone: options.timeZone,
  })
  const hourDateFormatter = useDateFormatter({
    hour: 'numeric',
    hour12: options.hour12,
    timeZone: options.timeZone,
  })

  if (segment.type === 'month' && !segment.isPlaceholder) {
    const monthTextValue = monthDateFormatter.format(state.dateValue)
    textValue =
      monthTextValue !== textValue
        ? `${textValue} – ${monthTextValue}`
        : monthTextValue
  } else if (segment.type === 'hour' && !segment.isPlaceholder) {
    textValue = hourDateFormatter.format(state.dateValue)
  }
  // @ts-ignore
  const {spinButtonProps} = useSpinButton({
    value: segment.value,
    textValue,
    minValue: segment.minValue,
    maxValue: segment.maxValue,
    isDisabled: state.isDisabled,
    isReadOnly: state.isReadOnly || !segment.isEditable,
    isRequired: state.isRequired,
    onIncrement: () => {
      enteredKeys.current = ''
      state.increment(segment.type)
    },
    onDecrement: () => {
      enteredKeys.current = ''
      state.decrement(segment.type)
    },
    onIncrementPage: () => {
      enteredKeys.current = ''
      state.incrementPage(segment.type)
    },
    onDecrementPage: () => {
      enteredKeys.current = ''
      state.decrementPage(segment.type)
    },
    onIncrementToMax: () => {
      enteredKeys.current = ''
      // @ts-ignore
      state.setSegment(segment.type, segment.maxValue)
    },
    onDecrementToMin: () => {
      enteredKeys.current = ''
      // @ts-ignore
      state.setSegment(segment.type, segment.minValue)
    },
  })

  const parser = useMemo(
    () => new NumberParser(locale, {maximumFractionDigits: 0}),
    [locale],
  )

  const backspace = () => {
    if (
      parser.isValidPartialNumber(segment.text) &&
      !state.isReadOnly &&
      !segment.isPlaceholder
    ) {
      const newValue = segment.text.slice(0, -1)
      const parsed = parser.parse(newValue)
      if (newValue.length === 0 || parsed === 0) {
        state.clearSegment(segment.type)
      } else {
        state.setSegment(segment.type, parsed)
      }
      enteredKeys.current = newValue
    } else if (segment.type === 'dayPeriod') {
      state.clearSegment(segment.type)
    }
  }
  // @ts-ignore
  const onKeyDown = (e) => {
    if (e.key === 'a' && (isMac() ? e.metaKey : e.ctrlKey)) {
      e.preventDefault()
    }

    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
      return
    }

    switch (e.key) {
      case 'Backspace':
      case 'Delete': {
        // Safari on iOS does not fire beforeinput for the backspace key because the cursor is at the start.
        e.preventDefault()
        e.stopPropagation()
        backspace()
        break
      }
    }
  }

  // @ts-ignore
  const {startsWith} = useFilter({sensitivity: 'base'})
  const amPmFormatter = useDateFormatter({hour: 'numeric', hour12: true})
  const am = useMemo(() => {
    const date = new Date()
    date.setHours(0)
    // @ts-ignore
    return amPmFormatter
      .formatToParts(date)
      .find((part) => part.type === 'dayPeriod').value
  }, [amPmFormatter])

  const pm = useMemo(() => {
    const date = new Date()
    date.setHours(12)
    // @ts-ignore
    return amPmFormatter
      .formatToParts(date)
      .find((part) => part.type === 'dayPeriod').value
  }, [amPmFormatter])

  // Get a list of formatted era names so users can type the first character to choose one.
  const eraFormatter = useDateFormatter({
    year: 'numeric',
    era: 'narrow',
    timeZone: 'UTC',
  })
  const eras = useMemo(() => {
    if (segment.type !== 'era') {
      return []
    }

    const date = toCalendar(new CalendarDate(1, 1, 1), state.calendar)
    const eras = state.calendar.getEras().map((era) => {
      const eraDate = date.set({year: 1, month: 1, day: 1, era}).toDate('UTC')
      const parts = eraFormatter.formatToParts(eraDate)
      // @ts-ignore
      const formatted = parts.find((p) => p.type === 'era').value
      return {era, formatted}
    })

    const prefixLength = commonPrefixLength(eras.map((era) => era.formatted))
    if (prefixLength) {
      for (const era of eras) {
        era.formatted = era.formatted.slice(prefixLength)
      }
    }

    return eras
  }, [eraFormatter, state.calendar, segment.type])

  const onInput = (key: string) => {
    if (state.isDisabled || state.isReadOnly) {
      return
    }

    const newValue = enteredKeys.current + key

    switch (segment.type) {
      case 'dayPeriod':
        if (startsWith(am, key)) {
          state.setSegment('dayPeriod', 0)
        } else if (startsWith(pm, key)) {
          state.setSegment('dayPeriod', 12)
        } else {
          break
        }
        focusManager.focusNext()
        break
      case 'era': {
        const matched = eras.find((e) => startsWith(e.formatted, key))
        if (matched) {
          state.setSegment('era', matched.era)
          focusManager.focusNext()
        }
        break
      }
      case 'day':
      case 'hour':
      case 'minute':
      case 'second':
      case 'month':
      case 'year': {
        if (!parser.isValidPartialNumber(newValue)) {
          return
        }

        let numberValue = parser.parse(newValue)
        let segmentValue = numberValue
        let allowsZero = segment.minValue === 0
        if (
          segment.type === 'hour' &&
          state.dateFormatter.resolvedOptions().hour12
        ) {
          switch (state.dateFormatter.resolvedOptions().hourCycle) {
            case 'h11':
              if (numberValue > 11) {
                segmentValue = parser.parse(key)
              }
              break
            case 'h12':
              allowsZero = false
              if (numberValue > 12) {
                segmentValue = parser.parse(key)
              }
              break
          }
          // @ts-ignore
          if (segment.value >= 12 && numberValue > 1) {
            numberValue += 12
          }
          // @ts-ignore
        } else if (numberValue > segment.maxValue) {
          segmentValue = parser.parse(key)
        }

        if (isNaN(numberValue)) {
          return
        }

        const shouldSetValue = segmentValue !== 0 || allowsZero
        if (shouldSetValue) {
          // @ts-ignore
          state.setSegment(segment.type, segmentValue)
        }

        if (
          // @ts-ignore
          Number(numberValue + '0') > segment.maxValue ||
          newValue.length >= String(segment.maxValue).length
        ) {
          enteredKeys.current = ''
          if (shouldSetValue) {
            focusManager.focusNext()
          }
        } else {
          enteredKeys.current = newValue
        }
        break
      }
    }
  }

  const onFocus = () => {
    enteredKeys.current = ''
    // @ts-ignore
    scrollIntoViewport(ref.current, {
      // @ts-ignore
      containingElement: getScrollParent(ref.current),
    })

    // Collapse selection to start or Chrome won't fire input events.
    const selection = window.getSelection()
    // @ts-ignore
    selection.collapse(ref.current)
  }

  const compositionRef = useRef('')
  useEvent(ref, 'beforeinput', (e) => {
    e.preventDefault()

    switch (e.inputType) {
      case 'deleteContentBackward':
      case 'deleteContentForward':
        if (parser.isValidPartialNumber(segment.text) && !state.isReadOnly) {
          backspace()
        }
        break
      case 'insertCompositionText':
        // @ts-ignore
        compositionRef.current = ref.current.textContent
        // @ts-ignore
        ref.current.textContent = ref.current.textContent
        break
      default:
        if (e.data != null) {
          onInput(e.data)
        }
        break
    }
  })

  // @ts-ignore
  useEvent(ref, 'input', (e: InputEvent) => {
    const {inputType, data} = e
    switch (inputType) {
      case 'insertCompositionText':
        // @ts-ignore
        ref.current.textContent = compositionRef.current
        // @ts-ignore
        if (startsWith(am, data) || startsWith(pm, data)) {
          // @ts-ignore
          onInput(data)
        }
        break
    }
  })

  useLayoutEffect(() => {
    const element = ref.current
    return () => {
      // If the focused segment is removed, focus the previous one, or the next one if there was no previous one.
      if (document.activeElement === element) {
        const prev = focusManager.focusPrevious()
        if (!prev) {
          focusManager.focusNext()
        }
      }
    }
  }, [ref, focusManager])

  const touchPropOverrides =
    isIOS() || segment.type === 'timeZoneName'
      ? {
          role: 'textbox',
          'aria-valuemax': null,
          'aria-valuemin': null,
          'aria-valuetext': null,
          'aria-valuenow': null,
        }
      : {}

  const firstSegment = useMemo(
    // @ts-ignore
    () => state.segments.find((s) => s.isEditable),
    // @ts-ignore
    [state.segments],
  )
  if (segment !== firstSegment && state.validationState !== 'invalid') {
    // @ts-ignore
    ariaDescribedBy = undefined
  }

  const id = useId()
  const isEditable =
    !state.isDisabled && !state.isReadOnly && segment.isEditable

  const name = segment.type === 'literal' ? '' : segment.type
  // @ts-ignore
  const labelProps = useLabels({
    // @ts-ignore
    'aria-label': (ariaLabel ? ariaLabel + ' ' : '') + name,
    'aria-labelledby': ariaLabelledBy,
  })

  // Literal segments should not be visible to screen readers. We don't really need any of the above,
  // but the rules of hooks mean hooks cannot be conditional so we have to put this condition here.
  if (segment.type === 'literal') {
    return {
      segmentProps: {
        // @ts-ignore
        'aria-hidden': true,
      },
    }
  }

  return {
    // @ts-ignore
    segmentProps: {
      ...spinButtonProps,
      ...labelProps,
      ...{
        id,
        ...touchPropOverrides,
        'aria-invalid':
          state.validationState === 'invalid' ? 'true' : undefined,
        'aria-describedby': ariaDescribedBy,
        'aria-readonly':
          state.isReadOnly || !segment.isEditable ? 'true' : undefined,
        'data-placeholder': segment.isPlaceholder || undefined,
        contentEditable: isEditable,
        suppressContentEditableWarning: isEditable,
        spellCheck: isEditable ? 'false' : undefined,
        autoCapitalize: isEditable ? 'off' : undefined,
        autoCorrect: isEditable ? 'off' : undefined,
        // Capitalization was changed in React 17...
        [parseInt(React.version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']:
          isEditable ? 'next' : undefined,
        inputMode:
          state.isDisabled ||
          segment.type === 'dayPeriod' ||
          segment.type === 'era' ||
          !isEditable
            ? undefined
            : 'numeric',
        tabIndex: state.isDisabled ? undefined : 0,
        onKeyDown,
        onFocus,
        style: {
          caretColor: 'transparent',
        },
        // Prevent pointer events from reaching useDatePickerGroup, and allow native browser behavior to focus the segment.
        onPointerDown(e) {
          e.stopPropagation()
        },
        onMouseDown(e) {
          e.stopPropagation()
        },
      },
    },
  }
}
