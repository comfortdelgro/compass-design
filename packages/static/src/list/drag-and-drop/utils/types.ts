import {DragAndDropListItemProps} from '../item'

export interface IItemProps {
  key?: number
  tabIndex?: number
  className?: string
  style?: React.CSSProperties
  ref?: React.RefObject<HTMLLIElement>
  onKeyDown?: (e: React.KeyboardEvent) => void
  onWheel?: (e: React.WheelEvent) => void
}

export interface IProps {
  values: React.Key[]
  removableByMove?: boolean
  collection: Array<
    React.DetailedReactHTMLElement<DragAndDropListItemProps, HTMLElement>
  >
  onChange: (meta: {oldIndex: number; newIndex: number}) => void
}

export type TEvent = React.MouseEvent | React.TouchEvent | React.KeyboardEvent
