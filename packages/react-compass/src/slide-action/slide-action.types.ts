import {HTMLAttributes, ReactNode, RefObject} from 'react'
import {DraggableOptions} from '../utils/hooks'
import {StyledComponentProps} from '../utils/stitches.types'

type Props = {
  icon?: ReactNode
  label?: string
  color?: string
  onChange?: (isSuccess: boolean) => void
  onSuccess?: (reset: () => void) => void
  /** @default false */
  enableDragOnSuccess?: boolean
} & StyledComponentProps

export type SlideActionProps = Props &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

export type SlideDraggerProps = {
  slideRef: RefObject<HTMLDivElement>
  icon?: ReactNode
  color?: string
  onDrag?: (
    maxSlideDistance: number,
    ...params: Parameters<NonNullable<DraggableOptions['onMove']>>
  ) => void
  onDragEnd?: (
    maxSlideDistance: number,
    ...params: Parameters<NonNullable<DraggableOptions['onEnd']>>
  ) => void
  disableDrag?: boolean
} & StyledComponentProps
