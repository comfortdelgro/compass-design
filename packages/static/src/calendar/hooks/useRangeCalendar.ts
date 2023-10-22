/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import {RefObject, useRef} from 'react'
import {DateValue} from '../../internationalized/date'
import {
  AriaRangeCalendarProps,
  CalendarAria,
  FocusableElement,
  RangeCalendarState,
} from './../types'
import {useCalendarBase} from './useCalendarBase'
import {useEvent} from './useEvent'

export function useRangeCalendar<T extends DateValue>(
  props: AriaRangeCalendarProps<T>,
  state: RangeCalendarState,
  ref: RefObject<FocusableElement>,
): CalendarAria {
  const res = useCalendarBase(props, state)

  const isVirtualClick = useRef(false)
  const windowRef = useRef(typeof window !== 'undefined' ? window : null)
  useEvent(windowRef, 'pointerdown', (e) => {
    isVirtualClick.current = e.width === 0 && e.height === 0
  })

  // Stop range selection when pressing or releasing a pointer outside the calendar body,
  // except when pressing the next or previous buttons to switch months.
  const endDragging = (e: PointerEvent) => {
    if (isVirtualClick.current) {
      isVirtualClick.current = false
      return
    }

    state.setDragging(false)
    if (!state.anchorDate) {
      return
    }

    const target = e.target as Element
    // @ts-ignore
    const body = document.getElementById(res.calendarProps.id)
    if (
      body &&
      body.contains(document.activeElement) &&
      (!body.contains(target) || !target.closest('button, [role="button"]'))
    ) {
      state.selectFocusedDate?.()
    }
  }

  useEvent(windowRef, 'pointerup', endDragging)
  useEvent(windowRef, 'pointercancel', endDragging)

  // @ts-ignore
  res.calendarProps.onBlur = (e) => {
    if (
      // @ts-ignore
      (!e.relatedTarget || !ref.current.contains(e.relatedTarget)) &&
      state.anchorDate
    ) {
      state.selectFocusedDate?.()
    }
  }

  // Prevent touch scrolling while dragging
  useEvent(
    ref,
    'touchmove',
    (e) => {
      if (state.isDragging) {
        e.preventDefault()
      }
    },
    {passive: false, capture: true},
  )

  return res
}
