import {CSSProperties, FocusEvent, ReactNode} from 'react'

export type PudoValueChange<
  TItemKeys extends string | number | symbol = string,
> = Array<{
  name: TItemKeys
  value: string
  isFocusing?: boolean
}>

export type PudoProps<TItemKeys extends string | number | symbol> = {
  className?: string
  css?: unknown
  style?: CSSProperties
  /**
   * PUDO's item list.
   * ___
   * This item list will be automatically de-duplicated (by `name`).
   */
  items: Readonly<Array<PudoItemProps<TItemKeys>>>
  onValuesChange?: (values: PudoValueChange<TItemKeys>) => void
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
   * ___
   * This array will be de-duplicated automatically and will be ignored
   * if PUDO's `type` is `'custom'`.
   */
  removableItems?: TItemKeys[]
  /** @default "Remove" */
  removableLabel?: string
  /**
   * Add all provided items to the existing item list.
   * ___
   * This array will be de-duplicated automatically (by `name`) and will be ignored
   * if PUDO's `type` is `'custom'`.
   */
  addItems?: Readonly<Array<PudoItemProps<TItemKeys>>>
  /** @default "Add" */
  addItemsLabel?: string
  compact?: 'sm' | 'md'
  /**
   * if provided, `alignIcon` of all items will be overwritten
   */
  alignIcon?: PudoItemProps['alignIcon']
  /**
   * Background color of PUDO items wrapper.
   *
   * `bgColor` will be ignored if `data-background` is provided.
   */
  bgColor?: string

  /**
   * ~ `[data-*]` - any data attributes are accepted.
   *
   * Data attributes list:
   *
   * - `data-background`: PUDO items wrapper's background color.
   */
  [key: `data-${string}`]: string
}

export type PudoItemProps<TName extends string | number | symbol = string> = {
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

  isRequired?: boolean
  /** @default "center" */
  alignIcon?: 'top' | 'center'
}

export type PudoItemPrivateProps<TName extends string | number | symbol> = {
  index: number
  itemsLength: number
  compact?: PudoProps<TName>['compact']
  onValueChange?: (value: string) => void
  handleSwap?: () => void
  onInputFocus?: (e: FocusEvent<HTMLInputElement>) => void
} & PudoItemProps<TName>
