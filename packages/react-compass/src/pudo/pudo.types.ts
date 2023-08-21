import {HTMLAttributes, ReactNode} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {PudoItemVariantProps} from './pudo.styles'

export type PudoProps<TItemKeys extends string | number | symbol> = {
  /**
   * PUDO's item list.
   * ___
   * This item list will be automatically de-duplicated (by `name`).
   */
  items: Readonly<Array<PudoItemProps<TItemKeys>>>
  /**
   * This will override the `type` of all items.
   */
  type?: PudoItemProps<TItemKeys>['type']
  onValuesChange?: (
    values: Record<TItemKeys, string>,
    arrValues: Array<{name: TItemKeys; value: string}>,
  ) => void
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
   * if PUDO's `type` is `'label'`.
   */
  removableItems?: TItemKeys[]
  removableLabel?: string
  /**
   * Add all provided items to the existing item list.
   * ___
   * This array will be de-duplicated automatically (by `name`) and will be ignored
   * if PUDO's `type` is `'label'`.
   */
  addItems?: Readonly<Array<PudoItemProps<TItemKeys>>>
  addItemsLabel?: string
} & StyledComponentProps &
  HTMLAttributes<HTMLDivElement>

export type PudoItemProps<TName extends string | number | symbol = string> = {
  name: TName
  className?: string
  icon?: ReactNode
  /**
   * `type` of each item will be overwritten
   * if provided in the PUDO component.
   * @default 'input'
   */
  type?: 'input' | 'label'
  value: string
  placeholder?: string
  hideIcon?: boolean

  /** @default false */
  allowSwap?: boolean

  /** @default 255 */
  maxLength?: number
} & StyledComponentProps

export type PudoItemPrivateProps<TName extends string | number | symbol> = {
  index: number
  itemsLength: number
  onValueChange?: (value: string) => void
  handleSwap?: () => void
} & PudoItemProps<TName> &
  PudoItemVariantProps
