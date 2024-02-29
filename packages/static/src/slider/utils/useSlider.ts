import React, {RefObject, useRef} from 'react'
import mergeProps from '../../utils/mergeProps'
import {clamp} from './number'
import {DOMAttributes, SliderBaseProps, SliderState} from './types'
import {useGlobalListeners} from './useGlobalListeners'
import {useMove} from './useMove'

export interface SliderAria {
  trackProps: DOMAttributes
}

export function useSlider<T extends number | number[]>(
  props: SliderBaseProps<T>,
  state: SliderState,
  trackRef: RefObject<Element>,
): SliderAria {
  const isVertical = props.orientation === 'vertical'

  const {addGlobalListener, removeGlobalListener} = useGlobalListeners()

  const realTimeTrackDraggingIndex = useRef<number | null>(null)

  const currentPosition = useRef<number | null>(null)
  const {moveProps} = useMove({
    onMoveStart() {
      currentPosition.current = null
    },
    onMove({deltaX, deltaY}) {
      if (trackRef.current) {
        const {height, width} = trackRef.current.getBoundingClientRect()
        const size = isVertical ? height : width

        if (
          currentPosition.current == null &&
          realTimeTrackDraggingIndex.current
        ) {
          currentPosition.current =
            state.getThumbPercent(realTimeTrackDraggingIndex.current) * size
        }

        const delta = isVertical ? deltaY : deltaX

        if (currentPosition.current) currentPosition.current += delta

        if (
          realTimeTrackDraggingIndex.current != null &&
          trackRef.current &&
          currentPosition.current
        ) {
          const percent = clamp(currentPosition.current / size, 0, 1)
          state.setThumbPercent(realTimeTrackDraggingIndex.current, percent)
        }
      }
    },
    onMoveEnd() {
      if (realTimeTrackDraggingIndex.current != null) {
        state.setThumbDragging(realTimeTrackDraggingIndex.current, false)
        realTimeTrackDraggingIndex.current = null
      }
    },
  })

  const currentPointer = useRef<number | null | undefined>(undefined)
  const onDownTrack = (
    e: React.UIEvent,
    id: number | undefined,
    clientX: number,
    clientY: number,
  ) => {
    if (
      trackRef.current &&
      !props.isDisabled &&
      state.values.every((_, i) => !state.isThumbDragging(i))
    ) {
      const {height, width, top, left} =
        trackRef.current.getBoundingClientRect()
      const size = isVertical ? height : width
      const trackPosition = isVertical ? top : left
      const clickPosition = isVertical ? clientY : clientX
      const offset = clickPosition - trackPosition
      const percent = offset / size
      let value = state.getPercentValue(percent)
      if (isVertical) {
        value = state.getPercentValue(1 - percent)
      }

      let closestThumb
      const split = state.values.findIndex((v) => value - v < 0)
      if (split === 0) {
        closestThumb = split
      } else if (split === -1) {
        closestThumb = state.values.length - 1
      } else {
        const lastLeft = state.values[split - 1]
        const firstRight = state.values[split]
        if (Math.abs(lastLeft - value) < Math.abs(firstRight - value)) {
          closestThumb = split - 1
        } else {
          closestThumb = split
        }
      }

      if (closestThumb >= 0 && state.isThumbEditable(closestThumb)) {
        e.preventDefault()

        realTimeTrackDraggingIndex.current = closestThumb
        state.setFocusedThumb(closestThumb)
        currentPointer.current = id

        state.setThumbDragging(realTimeTrackDraggingIndex.current, true)
        state.setThumbValue(closestThumb, value)

        addGlobalListener(window, 'mouseup', onUpTrack, false)
        addGlobalListener(window, 'touchend', onUpTrack, false)
        addGlobalListener(window, 'pointerup', onUpTrack, false)
      } else {
        realTimeTrackDraggingIndex.current = null
      }
    }
  }

  const onUpTrack = (e) => {
    const id = e.pointerId ?? e.changedTouches?.[0].identifier
    if (id === currentPointer.current) {
      if (realTimeTrackDraggingIndex.current != null) {
        state.setThumbDragging(realTimeTrackDraggingIndex.current, false)
        realTimeTrackDraggingIndex.current = null
      }

      removeGlobalListener(window, 'mouseup', onUpTrack, false)
      removeGlobalListener(window, 'touchend', onUpTrack, false)
      removeGlobalListener(window, 'pointerup', onUpTrack, false)
    }
  }

  return {
    trackProps: mergeProps(
      {
        onMouseDown(e: React.MouseEvent) {
          if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) {
            return
          }
          onDownTrack(e, undefined, e.clientX, e.clientY)
        },
        onPointerDown(e: React.PointerEvent) {
          if (
            e.pointerType === 'mouse' &&
            (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)
          ) {
            return
          }
          onDownTrack(e, e.pointerId, e.clientX, e.clientY)
        },
        onTouchStart(e: React.TouchEvent) {
          onDownTrack(
            e,
            e.changedTouches[0].identifier,
            e.changedTouches[0].clientX,
            e.changedTouches[0].clientY,
          )
        },
        style: {
          position: 'relative',
          touchAction: 'none',
        },
      },
      moveProps,
    ),
  }
}
