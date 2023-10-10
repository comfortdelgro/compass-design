import React, {Key} from 'react'
import {DropdownItemProps} from './item'

export const Icon = () => (
  <svg width='16' height='16' viewBox='0 0 16 16'>
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='currentColor'
    />
  </svg>
)

export const pickChilds = <T extends DropdownItemProps>(
  children: React.ReactNode | undefined,
  targetType: React.ElementType,
): Array<React.DetailedReactHTMLElement<T, HTMLElement>> => {
  const matched: Array<React.DetailedReactHTMLElement<T, HTMLElement>> = []
  React.Children.forEach(children, (item) => {
    if (!React.isValidElement(item)) return item
    if (item.type === targetType) {
      matched.push(item as React.DetailedReactHTMLElement<T, HTMLElement>)
    }
    return item
  })
  const childs = matched.length >= 0 ? matched : []

  return childs
}

export function getDefaultValue(
  defaultValue: React.Key | undefined,
  value: React.Key | undefined,
  disableDefault?: boolean,
): React.Key | undefined {
  let res = undefined
  if (
    defaultValue !== undefined &&
    defaultValue !== null &&
    defaultValue.toString().trim() &&
    value !== '' &&
    !disableDefault
  ) {
    res = defaultValue
  }
  if (
    value !== undefined &&
    value !== null &&
    defaultValue !== undefined &&
    defaultValue !== null &&
    defaultValue.toString().trim()
  ) {
    res = value
  }
  return res
}

export interface KeyboardDelegate {
  getKeyBelow?(key: Key): Key | null
  getKeyAbove?(key: Key): Key | null
  getFirstKey?(key?: Key, global?: boolean): Key | null
  getLastKey?(key?: Key, global?: boolean): Key | null
}

export class ListKeyboardDelegate implements KeyboardDelegate {
  private collection: Array<
    React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  >
  private disabledKeys: Iterable<React.Key>

  constructor(
    collection: Array<
      React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
    >,
    disabledKeys: Iterable<React.Key>,
  ) {
    this.collection = collection
    this.disabledKeys = disabledKeys
  }

  getKeyIndex = (key: Key) => {
    const index = this.collection.findIndex((item) => item.key === key)
    if (index !== -1) return index
    return null
  }

  private getKeyAfter = (key: Key) => {
    const currentKeyIndex = this.getKeyIndex(key)
    if (currentKeyIndex === null) return null
    const nextKey = this.collection[currentKeyIndex + 1]?.key
    if (nextKey) return nextKey
    return null
  }

  private getKeyBefore = (key: Key) => {
    const currentKeyIndex = this.getKeyIndex(key)
    if (currentKeyIndex === null) return null
    const nextKey = this.collection[currentKeyIndex - 1]?.key
    if (nextKey) return nextKey
    return null
  }

  getKeyBelow(key: Key) {
    let nextKey = this.getKeyAfter(key)
    while (nextKey != null) {
      if (![...this.disabledKeys].includes(nextKey)) {
        return nextKey
      }
      nextKey = this.getKeyAfter(nextKey)
    }
    return null
  }

  getKeyAbove(key: Key) {
    let prevKey = this.getKeyBefore(key)
    while (prevKey != null) {
      if (![...this.disabledKeys].includes(prevKey)) {
        return prevKey
      }
      prevKey = this.getKeyBefore(prevKey)
    }
    return null
  }

  getFirstKey() {
    let key = this.collection[0]?.key
    while (key != null) {
      if (![...this.disabledKeys].includes(key)) {
        return key
      }
      key = this.getKeyAfter(key)
    }

    return null
  }

  getLastKey() {
    let key = this.collection[this.collection.length - 1]?.key
    while (key != null) {
      if (![...this.disabledKeys].includes(key)) {
        return key
      }
      key = this.getKeyBefore(key)
    }
    return null
  }
}
