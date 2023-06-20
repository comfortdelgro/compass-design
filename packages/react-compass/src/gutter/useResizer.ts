import React from 'react'
import {useGutterContext} from './gutter-context'

export const useResizer = (ref: React.RefObject<HTMLDivElement>) => {
  const {
    isResizing,
    gutterRef,
    isGutterLeftSide,
    setGutterWidth,
    setIsResizing,
  } = useGutterContext()

  const startResizing = React.useCallback(() => {
    setIsResizing?.(true)
  }, [])

  const stopResizing = React.useCallback(() => {
    setIsResizing?.(false)
  }, [])

  const calculateRightSide = (
    currentX: number,
    mouseX: number,
    offset: number,
  ) => {
    let width = 0
    width = mouseX - currentX + offset
    width = width < 0 ? 0 : width
    return width
  }

  const calculateLeftSide = (
    currentX: number,
    mouseX: number,
    offset: number,
  ) => {
    let result = 0
    result = currentX - mouseX + offset
    result = result < 0 ? 0 : result
    return result
  }

  const calculateWidth = (currentX: number, mouseX: number, offset: number) => {
    return isGutterLeftSide
      ? calculateLeftSide(currentX, mouseX, offset)
      : calculateRightSide(currentX, mouseX, offset)
  }

  const resize = React.useCallback(
    (moveEvent: MouseEvent | TouchEvent) => {
      if (isResizing) {
        const centerResizerOffset = (ref.current?.clientWidth ?? 0) / 2
        const gutterCurrentX = isGutterLeftSide
          ? gutterRef?.current?.getBoundingClientRect().right ?? 0
          : gutterRef?.current?.getBoundingClientRect().left ?? 0
        let width = 0
        if (moveEvent instanceof MouseEvent) {
          // mouse handler
          width = calculateWidth(
            gutterCurrentX,
            moveEvent.clientX,
            centerResizerOffset,
          )
          moveEvent.preventDefault()
          setGutterWidth?.(width)
        } else {
          // mobile touching handler
          width = calculateWidth(
            gutterCurrentX,
            moveEvent.touches[0]?.pageX ?? 0,
            centerResizerOffset,
          )
          setGutterWidth?.(width)
        }
      }
    },
    [isResizing],
  )

  React.useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0

    if (!isTouchDevice) {
      document.addEventListener('pointermove', resize)
      document.addEventListener('pointerup', stopResizing)
    } else {
      document.addEventListener('touchmove', resize)
      document.addEventListener('touchend', stopResizing)
    }
    return () => {
      if (!isTouchDevice) {
        document.removeEventListener('pointermove', resize)
        document.removeEventListener('pointerup', stopResizing)
      } else {
        document.removeEventListener('touchmove', resize)
        document.removeEventListener('touchend', stopResizing)
      }
    }
  }, [resize, stopResizing])

  return {startResizing}
}
