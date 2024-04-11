import React, {
  ChangeEvent,
  InputHTMLAttributes,
  RefObject,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import useFocusable from '../../quantity-toggle/utils/useFocusable'
import {focusWithoutScrolling} from '../../quantity-toggle/utils/useFocusable/focusWithoutScrolling'
import {useKeyboard} from '../../quantity-toggle/utils/useFocusable/useKeyboard'
import mergeProps from '../../utils/mergeProps'
import {clamp} from './number'
import {
  DOMAttributes,
  KeyboardEvent,
  SliderState,
  SliderThumbBaseProps,
} from './types'
import {useFormReset} from './useFormReset'
import {useGlobalListeners} from './useGlobalListeners'
import {useMove} from './useMove'

export interface SliderThumbAria {
  isFocused: boolean
  isDragging: boolean
  isDisabled: boolean
  thumbProps: DOMAttributes
  inputProps: InputHTMLAttributes<HTMLInputElement>
}

export interface SliderThumbOptions extends SliderThumbBaseProps {
  trackRef: RefObject<Element>
  inputRef: RefObject<HTMLInputElement>
}

export function useSliderThumb(
  opts: SliderThumbOptions,
  state: SliderState,
): SliderThumbAria {
  const {
    index = 0,
    trackRef,
    inputRef,
    orientation = state.orientation,
    name,
  } = opts

  const isDisabled = opts.isDisabled || state.isDisabled
  const isVertical = orientation === 'vertical'

  const {addGlobalListener, removeGlobalListener} = useGlobalListeners()

  const value = state.values[index]

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      focusWithoutScrolling(inputRef.current)
    }
  }, [inputRef])

  const isFocused = state.focusedThumb === index

  useEffect(() => {
    if (isFocused) {
      focusInput()
    }
  }, [isFocused, focusInput])

  const currentPosition = useRef<number | null>(null)

  const {keyboardProps} = useKeyboard({
    onKeyDown(e: KeyboardEvent) {
      const {
        getThumbMaxValue,
        getThumbMinValue,
        decrementThumb,
        incrementThumb,
        setThumbValue,
        setThumbDragging,
        pageSize,
      } = state
      if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
        e.continuePropagation()
        return
      }
      e.preventDefault()
      setThumbDragging(index, true)
      switch (e.key) {
        case 'PageUp':
          incrementThumb(index, pageSize)
          break
        case 'PageDown':
          decrementThumb(index, pageSize)
          break
        case 'Home':
          setThumbValue(index, getThumbMinValue(index))
          break
        case 'End':
          setThumbValue(index, getThumbMaxValue(index))
          break
      }
      setThumbDragging(index, false)
    },
  })

  const {moveProps} = useMove({
    onMoveStart() {
      currentPosition.current = null
      state.setThumbDragging(index, true)
    },
    onMove({deltaX, deltaY, pointerType, shiftKey}) {
      const {
        getThumbPercent,
        setThumbPercent,
        decrementThumb,
        incrementThumb,
        step,
        pageSize,
      } = state
      if (trackRef.current) {
        const {width, height} = trackRef.current.getBoundingClientRect()
        const size = isVertical ? height : width

        if (currentPosition.current == null) {
          currentPosition.current = getThumbPercent(index) * size
        }
        if (pointerType === 'keyboard') {
          if (deltaX < 0 || deltaY > 0) {
            decrementThumb(index, shiftKey ? pageSize : step)
          } else {
            incrementThumb(index, shiftKey ? pageSize : step)
          }
        } else {
          let delta = isVertical ? deltaY : deltaX
          if (isVertical) {
            delta = -delta
          }

          currentPosition.current += delta
          setThumbPercent(index, clamp(currentPosition.current / size, 0, 1))
        }
      }
    },
    onMoveEnd() {
      state.setThumbDragging(index, false)
    },
  })

  state.setThumbEditable(index, !isDisabled)

  const {focusableProps} = useFocusable(
    mergeProps(opts, {
      onFocus: () => state.setFocusedThumb(index),
      onBlur: () => state.setFocusedThumb(undefined),
    }),
    inputRef,
  )

  const currentPointer = useRef<number | undefined>(undefined)
  const onDown = (id?: number) => {
    focusInput()
    currentPointer.current = id
    state.setThumbDragging(index, true)

    addGlobalListener(window, 'mouseup', onUp, false)
    addGlobalListener(window, 'touchend', onUp, false)
    addGlobalListener(window, 'pointerup', onUp, false)
  }

  const onUp = (e) => {
    const id = e.pointerId ?? e.changedTouches?.[0].identifier
    if (id === currentPointer.current) {
      focusInput()
      state.setThumbDragging(index, false)
      removeGlobalListener(window, 'mouseup', onUp, false)
      removeGlobalListener(window, 'touchend', onUp, false)
      removeGlobalListener(window, 'pointerup', onUp, false)
    }
  }

  let thumbPosition = state.getThumbPercent(index)
  if (isVertical) {
    thumbPosition = 1 - thumbPosition
  }

  const interactions = !isDisabled
    ? mergeProps(keyboardProps, moveProps, {
        onMouseDown: (e: React.MouseEvent) => {
          if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) {
            return
          }
          onDown()
        },
        onPointerDown: (e: React.PointerEvent) => {
          if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) {
            return
          }
          onDown(e.pointerId)
        },
        onTouchStart: (e: React.TouchEvent) => {
          onDown(e.changedTouches[0].identifier)
        },
      })
    : {}

  useFormReset(inputRef, value, (v) => {
    state.setThumbValue(index, v)
  })

  return {
    inputProps: mergeProps(focusableProps, {
      name,
      value: value,
      type: 'range',
      step: state.step,
      disabled: isDisabled,
      tabIndex: !isDisabled ? 0 : undefined,
      min: state.getThumbMinValue(index),
      max: state.getThumbMaxValue(index),
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        state.setThumbValue(index, parseFloat(e.target.value))
      },
    }),
    thumbProps: {
      ...interactions,
      style: {
        touchAction: 'none',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        [isVertical ? 'top' : 'left']: `${thumbPosition * 100}%`,
      },
    },
    isDragging: state.isThumbDragging(index),
    isDisabled,
    isFocused,
  }
}
