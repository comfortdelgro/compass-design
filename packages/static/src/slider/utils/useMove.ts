import React, {useMemo, useRef} from 'react'
import {DOMAttributes, MoveEvents, PointerType} from './types'
import {useEffectEvent} from './useEffectEvent'
import {useGlobalListeners} from './useGlobalListeners'

export interface MoveResult {
  moveProps: DOMAttributes
}

interface EventBase {
  shiftKey: boolean
  ctrlKey: boolean
  metaKey: boolean
  altKey: boolean
}

export function useMove(props: MoveEvents): MoveResult {
  const {onMoveStart, onMove, onMoveEnd} = props

  const state = useRef<{
    didMove: boolean
    lastPosition: {pageX: number; pageY: number} | null
    id: number | null
  }>({didMove: false, lastPosition: null, id: null})

  const {addGlobalListener, removeGlobalListener} = useGlobalListeners()

  const move = useEffectEvent(
    (
      originalEvent: EventBase,
      pointerType: PointerType,
      deltaX: number,
      deltaY: number,
    ) => {
      if (deltaX === 0 && deltaY === 0) {
        return
      }

      if (!state.current.didMove) {
        state.current.didMove = true
        onMoveStart?.({
          type: 'movestart',
          pointerType,
          altKey: originalEvent.altKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          shiftKey: originalEvent.shiftKey,
        })
      }
      onMove?.({
        type: 'move',
        pointerType,
        deltaX: deltaX,
        deltaY: deltaY,
        altKey: originalEvent.altKey,
        metaKey: originalEvent.metaKey,
        ctrlKey: originalEvent.ctrlKey,
        shiftKey: originalEvent.shiftKey,
      })
    },
  )

  const end = useEffectEvent(
    (originalEvent: EventBase, pointerType: PointerType) => {
      if (state.current.didMove) {
        onMoveEnd?.({
          type: 'moveend',
          pointerType,
          altKey: originalEvent.altKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          shiftKey: originalEvent.shiftKey,
        })
      }
    },
  )

  const moveProps = useMemo(() => {
    const moveProps: DOMAttributes = {}

    const start = () => {
      state.current.didMove = false
    }

    if (typeof PointerEvent === 'undefined') {
      const onMouseMove = (e: MouseEvent) => {
        if (e.button === 0) {
          move(
            e,
            'mouse',
            e.pageX - (state.current.lastPosition?.pageX ?? 0),
            e.pageY - (state.current.lastPosition?.pageY ?? 0),
          )
          state.current.lastPosition = {pageX: e.pageX, pageY: e.pageY}
        }
      }
      const onMouseUp = (e: MouseEvent) => {
        if (e.button === 0) {
          end(e, 'mouse')
          removeGlobalListener(window, 'mouseup', onMouseUp, false)
          removeGlobalListener(window, 'mousemove', onMouseMove, false)
        }
      }
      moveProps.onMouseDown = (e: React.MouseEvent) => {
        if (e.button === 0) {
          start()
          e.stopPropagation()
          e.preventDefault()
          state.current.lastPosition = {pageX: e.pageX, pageY: e.pageY}
          addGlobalListener(window, 'mouseup', onMouseUp, false)
          addGlobalListener(window, 'mousemove', onMouseMove, false)
        }
      }

      const onTouchMove = (e: TouchEvent) => {
        const touch = [...e.changedTouches].findIndex(
          ({identifier}) => identifier === state.current.id,
        )
        if (touch >= 0) {
          const {pageX, pageY} = e.changedTouches[touch]
          move(
            e,
            'touch',
            pageX - (state.current.lastPosition?.pageX ?? 0),
            pageY - (state.current.lastPosition?.pageY ?? 0),
          )
          state.current.lastPosition = {pageX, pageY}
        }
      }
      const onTouchEnd = (e: TouchEvent) => {
        const touch = [...e.changedTouches].findIndex(
          ({identifier}) => identifier === state.current.id,
        )
        if (touch >= 0) {
          end(e, 'touch')
          state.current.id = null
          removeGlobalListener(window, 'touchend', onTouchEnd)
          removeGlobalListener(window, 'touchmove', onTouchMove)
          removeGlobalListener(window, 'touchcancel', onTouchEnd)
        }
      }
      moveProps.onTouchStart = (e: React.TouchEvent) => {
        if (e.changedTouches.length === 0 || state.current.id != null) {
          return
        }

        const {pageX, pageY, identifier} = e.changedTouches[0]
        start()
        e.stopPropagation()
        e.preventDefault()
        state.current.lastPosition = {pageX, pageY}
        state.current.id = identifier
        addGlobalListener(window, 'touchmove', onTouchMove, false)
        addGlobalListener(window, 'touchend', onTouchEnd, false)
        addGlobalListener(window, 'touchcancel', onTouchEnd, false)
      }
    } else {
      const onPointerMove = (e: PointerEvent) => {
        if (e.pointerId === state.current.id) {
          const pointerType = (e.pointerType || 'mouse') as PointerType

          // Problems with PointerEvent#movementX/movementY:
          // 1. it is always 0 on macOS Safari.
          // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS
          move(
            e,
            pointerType,
            e.pageX - (state.current.lastPosition?.pageX ?? 0),
            e.pageY - (state.current.lastPosition?.pageY ?? 0),
          )
          state.current.lastPosition = {pageX: e.pageX, pageY: e.pageY}
        }
      }

      const onPointerUp = (e: PointerEvent) => {
        if (e.pointerId === state.current.id) {
          const pointerType = (e.pointerType || 'mouse') as PointerType
          end(e, pointerType)
          state.current.id = null
          removeGlobalListener(window, 'pointerup', onPointerUp, false)
          removeGlobalListener(window, 'pointermove', onPointerMove, false)
          removeGlobalListener(window, 'pointercancel', onPointerUp, false)
        }
      }

      moveProps.onPointerDown = (e: React.PointerEvent) => {
        if (e.button === 0 && state.current.id == null) {
          start()
          e.stopPropagation()
          e.preventDefault()
          state.current.lastPosition = {pageX: e.pageX, pageY: e.pageY}
          state.current.id = e.pointerId
          addGlobalListener(window, 'pointerup', onPointerUp, false)
          addGlobalListener(window, 'pointermove', onPointerMove, false)
          addGlobalListener(window, 'pointercancel', onPointerUp, false)
        }
      }
    }

    const triggerKeyboardMove = (
      e: EventBase,
      deltaX: number,
      deltaY: number,
    ) => {
      start()
      move(e, 'keyboard', deltaX, deltaY)
      end(e, 'keyboard')
    }

    moveProps.onKeyDown = (e) => {
      switch (e.key) {
        case 'Left':
        case 'ArrowLeft':
          e.preventDefault()
          e.stopPropagation()
          triggerKeyboardMove(e, -1, 0)
          break
        case 'Right':
        case 'ArrowRight':
          e.preventDefault()
          e.stopPropagation()
          triggerKeyboardMove(e, 1, 0)
          break
        case 'Up':
        case 'ArrowUp':
          e.preventDefault()
          e.stopPropagation()
          triggerKeyboardMove(e, 0, -1)
          break
        case 'Down':
        case 'ArrowDown':
          e.preventDefault()
          e.stopPropagation()
          triggerKeyboardMove(e, 0, 1)
          break
      }
    }

    return moveProps
  }, [state, addGlobalListener, removeGlobalListener, move, end])

  return {moveProps}
}
