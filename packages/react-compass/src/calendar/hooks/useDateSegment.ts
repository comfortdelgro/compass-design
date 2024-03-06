/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Reference: https://github.com/adobe/react-spectrum/blob/98cad3f064c5302c04a1140d12a2cacc3ee921a2/packages/%40react-aria/datepicker/src/useDateSegment.ts
/* eslint-disable prefer-const */
import React, {
  KeyboardEvent,
  RefObject,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
import {CalendarDate, toCalendar} from '../../internationalized/date'
import {
  useDateFormatter,
  useFilter,
  useLocale,
} from '../../internationalized/i18n'
import {NumberParser} from '../../internationalized/number'
import {
  DOMAttributes,
  DateFieldState,
  DateSegment,
  FocusableElement,
} from '../types'
import {
  getScrollParent,
  hookData,
  isIOS,
  isMac,
  scrollIntoViewport,
} from '../utils'
import {useDisplayNames} from './useDisplayName'
import {useEvent} from './useEvent'
import {useId} from './useId'
import {useLabels} from './useLabels'
import {useSpinButton} from './useSpinButton'

export interface DateSegmentAria {
  /** Props for the segment element. */
  segmentProps: DOMAttributes
}

export function useDateSegment(
  segment: DateSegment,
  state: DateFieldState,
  ref: RefObject<HTMLElement>,
): DateSegmentAria {
  const enteredKeys = useRef('')
  const {locale} = useLocale()
  const displayNames = useDisplayNames()

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let {ariaLabel, ariaLabelledBy, ariaDescribedBy, focusManager} = hookData.get(
    state,
  ) as unknown as {
    ariaLabel: string
    ariaLabelledBy: string
    ariaDescribedBy: string
    focusManager: any
  }

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

  const {spinButtonProps} = useSpinButton({
    value: segment.value!,
    textValue,
    minValue: segment.minValue!,
    maxValue: segment.maxValue!,
    isDisabled: !!state.isDisabled,
    isReadOnly: state.isReadOnly || !segment.isEditable,
    isRequired: !!state.isRequired,
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
      state.setSegment(segment.type, segment.maxValue!)
    },
    onDecrementToMin: () => {
      enteredKeys.current = ''
      state.setSegment(segment.type, segment.minValue!)
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
      // remove all segments of type when backspace
      const newValue = ''
      state.clearSegment(segment.type)
      enteredKeys.current = newValue
    } else if (segment.type === 'dayPeriod') {
      state.clearSegment(segment.type)
    }
  }

  const onKeyDown = (e: KeyboardEvent) => {
    // Firefox does not fire selectstart for Ctrl/Cmd + A
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1742153
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
      default: {
        spinButtonProps.onKeyDown?.(
          e as unknown as React.KeyboardEvent<FocusableElement>,
        )
        break
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {startsWith} = useFilter({sensitivity: 'base'})
  const amPmFormatter = useDateFormatter({hour: 'numeric', hour12: true})
  const am = useMemo(() => {
    const date = new Date()
    date.setHours(0)
    return amPmFormatter
      .formatToParts(date)
      .find((part) => part.type === 'dayPeriod')?.value
  }, [amPmFormatter])

  const pm = useMemo(() => {
    const date = new Date()
    date.setHours(12)
    return amPmFormatter
      .formatToParts(date)
      .find((part) => part.type === 'dayPeriod')?.value
  }, [amPmFormatter])

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
      const formatted = parts.find((p) => p.type === 'era')?.value
      return {era, formatted}
    })

    // Remove the common prefix from formatted values. This is so that in calendars with eras like
    // ERA0 and ERA1 (e.g. Ethiopic), users can press "0" and "1" to select an era. In other cases,
    // the first letter is used.
    const prefixLength = commonPrefixLength(
      eras.map((era) => era.formatted) as string[],
    )
    if (prefixLength) {
      for (const era of eras) {
        era.formatted = era.formatted?.slice(prefixLength)
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
        if (startsWith(am!, key)) {
          state.setSegment('dayPeriod', 0)
        } else if (startsWith(pm!, key)) {
          state.setSegment('dayPeriod', 12)
        } else {
          break
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        focusManager.focusNext()
        break
      case 'era': {
        const matched = eras.find((e) => startsWith(e.formatted!, key))
        if (matched) {
          state.setSegment('era', matched.era)
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
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

          if (segment.value! >= 12 && numberValue > 1) {
            numberValue += 12
          }
        } else if (numberValue > segment.maxValue!) {
          segmentValue = parser.parse(key)
        }

        if (isNaN(numberValue)) {
          return
        }

        const shouldSetValue = segmentValue !== 0 || allowsZero
        if (shouldSetValue) {
          state.setSegment(segment.type, segmentValue)
        }

        if (
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          Number(numberValue + '0') > segment.maxValue! ||
          newValue.length >= String(segment.maxValue).length
        ) {
          enteredKeys.current = ''
          if (shouldSetValue) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            focusManager?.focusNext()
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
    scrollIntoViewport(ref.current!, {
      containingElement: getScrollParent(ref.current!),
    })

    // Collapse selection to start or Chrome won't fire input events.
    const selection = window.getSelection()
    selection?.collapse(ref.current)
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
        // insertCompositionText cannot be canceled.
        // Record the current state of the element so we can restore it in the `input` event below.
        // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
        compositionRef.current = ref.current?.textContent as string

        // Safari gets stuck in a composition state unless we also assign to the value here.
        // eslint-disable-next-line no-self-assign, @typescript-eslint/ban-ts-comment
        // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
        ref.current.textContent = ref.current?.textContent as string
        break
      default:
        if (e.data != null) {
          onInput(e.data)
        }
        break
    }
  })

  useEvent(ref, 'input', (e) => {
    const {inputType, data} = e as InputEvent
    switch (inputType) {
      case 'insertCompositionText':
        // Reset the DOM to how it was in the beforeinput event.
        // eslint-disable-next-line no-self-assign, @typescript-eslint/ban-ts-comment
        ref.current.textContent = compositionRef.current

        // Android sometimes fires key presses of letters as composition events. Need to handle am/pm keys here too.
        // Can also happen e.g. with Pinyin keyboard on iOS.
        if (startsWith(am!, data!) || startsWith(pm!, data!)) {
          onInput(data!)
        }
        break
    }
  })

  useLayoutEffect(() => {
    const element = ref.current
    return () => {
      // If the focused segment is removed, focus the previous one, or the next one if there was no previous one.
      if (document.activeElement === element) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access,  @typescript-eslint/no-unsafe-call
        const prev = focusManager.focusPrevious()
        if (!prev) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access,  @typescript-eslint/no-unsafe-call
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    () => state?.['segments']?.find((s: any) => s.isEditable),
    [state['segments']],
  )
  if (segment !== firstSegment && state.validationState !== 'invalid') {
    ariaDescribedBy = ''
  }

  const id = useId()
  const isEditable =
    !state.isDisabled && !state.isReadOnly && segment.isEditable

  // Prepend the label passed from the field to each segment name.
  // This is needed because VoiceOver on iOS does not announce groups.
  const name = segment.type === 'literal' ? '' : displayNames.of(segment.type)
  const labelProps = useLabels({
    'aria-label': (ariaLabel ? ariaLabel + ' ' : '') + name,
    'aria-labelledby': ariaLabelledBy,
  })

  if (segment.type === 'literal') {
    return {
      segmentProps: {
        // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
        //@ts-ignore
        'aria-hidden': true,
      },
    }
  }

  return {
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
        onPointerDown(e: Event) {
          e.stopPropagation()
        },
        onMouseDown(e: Event) {
          e.stopPropagation()
        },
      },
    } as unknown as DOMAttributes,
  }
}

function commonPrefixLength(strings: string[]): number {
  // Sort the strings, and compare the characters in the first and last to find the common prefix.
  strings.sort()
  const first = strings[0]!
  const last = strings[strings.length - 1]!
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== last[i]) {
      return i
    }
  }
  return 0
}
