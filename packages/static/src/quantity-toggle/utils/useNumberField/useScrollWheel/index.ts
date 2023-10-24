import {RefObject, useCallback} from 'react'
import {useEvent} from './useEvent'

export interface ScrollEvent {
  deltaX: number
  deltaY: number
}

export interface ScrollEvents {
  onScroll?: (e: ScrollEvent) => void
}

export interface ScrollWheelProps extends ScrollEvents {
  isDisabled?: boolean
}

export default function useScrollWheel(
  props: ScrollWheelProps,
  ref: RefObject<HTMLElement>,
): void {
  const {onScroll, isDisabled} = props
  const onScrollHandler = useCallback(
    (e: Event) => {
      const event = e as unknown as React.WheelEvent<HTMLElement>
      if (!event.ctrlKey) {
        event.preventDefault()
        event.stopPropagation()

        if (onScroll) {
          onScroll({deltaX: event.deltaX, deltaY: event.deltaY})
        }
      }
    },
    [onScroll],
  )

  useEvent(ref, 'wheel', isDisabled ? null : onScrollHandler, {passive: false})
}
