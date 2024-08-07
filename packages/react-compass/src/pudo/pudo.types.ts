import {CSSProperties, FocusEvent, FocusEventHandler, ReactNode} from 'react'
import {CSS} from '../utils/objectToCss'

export type PudoValueChange<TItemKeys extends PropertyKey = string> = Array<{
  name: TItemKeys
  value: string
}>

export type PudoProps<TItemKeys extends PropertyKey> = {
  className?: string
  css?: CSS
  style?: CSSProperties
  /**
   * PUDO's item list.
   * ___
   * This item list will be automatically de-duplicated (by `name`).
   */
  items: Readonly<Array<PudoItemProps<TItemKeys>>>
  onValuesChange?: (values: PudoValueChange<TItemKeys>) => void
  /**
   * @param focusingItem the input name of the focused item.
   * If no items are focusing, the value will be `undefined`.
   */
  onItemFocusChange?: (
    focusingItem?: TItemKeys,
    event?: FocusEvent<HTMLInputElement, Element>,
  ) => void
  /** @param pairItemSwapped a pair of item names that have just swapped their values. */
  onItemSwap?: (pairItemSwapped: [itemA: TItemKeys, itemB: TItemKeys]) => void
  /**
   * This will override the `type` of all items.
   */
  type?: PudoItemProps<TItemKeys>['type']
  /**
   * Min length of item list.
   * ___
   * Must be smaller than `maxLength`
   * @default
   * minLength = 2
   * maxLength = 3
   */
  minLength?: number
  /**
   * Max length of item list.
   * ___
   * Must be greater than `minLength`
   * @default
   * minLength = 2
   * maxLength = 3
   */
  maxLength?: number
  /**
   * Remove all items by its `name` according to provided keys.
   * This prop will be ignored if PUDO's `type` is `'custom'`.
   * ___
   * This array will be de-duplicated automatically.
   */
  removableItems?: TItemKeys[]
  /** @default "Remove" */
  removableLabel?: string
  /**
   * Add all provided items to the existing item list.
   * This prop will be ignored if PUDO's `type` is `'custom'`.
   * ___
   * This array will be de-duplicated automatically (by `name`).
   */
  addItems?: Readonly<Array<PudoItemProps<TItemKeys>>>
  /** @default "Add" */
  addItemsLabel?: string
  compact?: 'sm' | 'md'
  /** If provided, `alignIcon` of all items will be overwritten */
  alignIcon?: PudoItemProps['alignIcon']
  /**
   * Background color of PUDO items wrapper.
   *
   * `bgColor` will be ignored if `data-background` is provided.
   */
  bgColor?: string
  /** if provided, `isClearable` of all items will be overwritten */
  isClearable?: boolean

  /**
   * ~ `[data-*]` - any data attributes are accepted.
   *
   * Data attributes list:
   *
   * - `data-background`: PUDO items wrapper's background color.
   */
  [key: `data-${string}`]: string
}

export type PudoItemProps<TName extends PropertyKey = string> = {
  name: TName
  className?: string
  icon?: ReactNode
  /**
   * `type` of each item will be overwritten
   * if provided in the PUDO component.
   * @default 'input'
   */
  type?: 'input' | 'custom'
  /** `value` is used for `'input'` type item. */
  value?: string
  /** `placeholder` is used for `'input'` type item. */
  placeholder?: string
  /** `title` is used for `'custom'` type item. */
  title?: ReactNode
  /** `content` is used for `'custom'` type item. */
  content?: ReactNode
  /** @default false */
  allowSwap?: boolean
  /** @default 255 */
  maxLength?: number
  /** @default false */
  isRequired?: boolean
  /** @default "center" */
  alignIcon?: 'top' | 'center'
  /** @default false */
  isClearable?: boolean
}

export type PudoItemPrivateProps<TName extends PropertyKey> = {
  index: number
  itemsLength: number
  compact?: PudoProps<TName>['compact']
  onValueChange?: (value: string) => void
  handleSwap?: () => void
  onInputFocus?: FocusEventHandler<HTMLInputElement>
} & PudoItemProps<TName>
