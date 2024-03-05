import {HTMLAttributes, ReactNode, RefObject} from 'react'
import {DraggableOptions} from '../utils/hooks'

type Props = {
  css?: unknown
  icon?: ReactNode
  label?: string
  color?: string
  /** Trigger when component's status changes */
  onChange?: (isSuccess: boolean) => void
  /**
   * Trigger when users swiped all the way to the end. It will be considered as a successful or confirmatory action.
   *
   * Call the `reset()` function to reset the component status.
   */
  onSwipeEnd?: (reset: () => void) => void
  /**
   * ⚠️ Avoid enabling this flag as much as possible.
   *
   * If you wanna reset this component, please use the `reset()` function that shipped with `onSwipeEnd` instead.
   * ___
   * ⚠️ **Accessibility considerations** (Act unintentionally)
   *
   * Since an action is a successful action when they dragged/swiped this component all the way to the end.
   * If users tap & release without dragging, this component will assume that it is another successful or confirmatory action. As a result, onSwipeEnd will be re-triggered.
   *
   * @default false
   */
  allowSwipeAfterEnd?: boolean
  compact?: boolean

  /** @default 'default' */
  labelType?: 'default' | 'slide'

  /** @default 'static' */
  slideType?: 'static' | 'slide'

  /** @default 'mono' */
  slideColor?: 'mono' | 'gradient'
}

export type SlideActionProps = Props &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

export type SlideDraggerProps = {
  slideRef: RefObject<HTMLDivElement>
  icon?: ReactNode
  onDrag?: (
    slideDragInfo: {slideDragWidth: number; maxSlideDistance: number},
    ...params: Parameters<NonNullable<DraggableOptions['onMove']>>
  ) => void
  onDragEnd?: (
    slideDragInfo: {slideDragWidth: number; maxSlideDistance: number},
    ...params: Parameters<NonNullable<DraggableOptions['onEnd']>>
  ) => void
  disableDrag?: boolean
}
