import React, {Key} from 'react'
import TabItem, {TabItemProps} from './item'

export type Orientation = 'horizontal' | 'vertical'

export type Icon = 'left' | 'right' | 'top' | 'none'

export type Variant = 'rounded' | 'simple'

const pickChilds = (
  children: React.ReactNode | undefined,
  targetType: React.ElementType,
): Array<React.DetailedReactHTMLElement<TabItemProps, HTMLElement>> => {
  const matched: Array<
    React.DetailedReactHTMLElement<TabItemProps, HTMLElement>
  > = []
  React.Children.forEach(children, (item) => {
    if (!React.isValidElement(item)) return item
    if (item.type === targetType) {
      matched.push(
        item as React.DetailedReactHTMLElement<TabItemProps, HTMLElement>,
      )
    }
    return item
  })
  const childs = matched.length >= 0 ? matched : []

  return childs
}

function getDefaulValue(
  collection: Array<React.DetailedReactHTMLElement<TabItemProps, HTMLElement>>,
  defaulValue: React.Key | undefined,
  value: React.Key | undefined,
  disabledKeys: React.Key[],
): React.Key | undefined {
  let res = undefined
  if (defaulValue !== undefined) {
    if (!disabledKeys.includes(defaulValue)) {
      res = defaulValue
    }
  }
  if (value !== undefined) {
    if (!disabledKeys.includes(value)) {
      return value
    }
  }
  for (const i of collection) {
    if (i.key) {
      if (!disabledKeys.includes(i.key)) {
        return i.key
      }
    }
  }
  return res
}

export function useTab(
  ref: React.RefObject<HTMLDivElement>,
  children: React.ReactNode,
  defaulValue: React.Key | undefined,
  value: React.Key | undefined,
  disabledKeys: React.Key[],
) {
  const collection = React.useMemo(
    () => pickChilds(children, TabItem),
    [children],
  )

  const delegate = React.useMemo(
    () => new ListKeyboardDelegate(collection, disabledKeys),
    [collection, disabledKeys],
  )

  const [currentKey, setCurrentKey] = React.useState<React.Key | undefined>(
    getDefaulValue(collection, defaulValue, value, disabledKeys),
  )

  const [focusKey, setFocusKey] = React.useState<React.Key | undefined>(
    getDefaulValue(collection, defaulValue, value, disabledKeys),
  )

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.altKey && e.key === 'Tab') {
      e.preventDefault()
    }

    if (!ref.current?.contains(e.target as Element)) {
      return
    }

    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()
        const key =
          focusKey != undefined && focusKey != -1
            ? delegate.getKeyAbove(focusKey)
            : delegate.getFirstKey()
        if (key) setFocusKey(key)
        break
      }
      case 'PageDown':
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()
        const key =
          focusKey != undefined && focusKey != -1
            ? delegate.getKeyBelow(focusKey)
            : delegate.getFirstKey()
        if (key) setFocusKey(key)
        break
      }
      case 'Home': {
        e.preventDefault()
        const key = delegate.getFirstKey()
        if (key) setFocusKey(key)
        break
      }
      case 'End': {
        e.preventDefault()
        const key = delegate.getLastKey()
        if (key) setFocusKey(key)
        break
      }
      case 'Enter': {
        e.preventDefault()
        if (focusKey) {
          setCurrentKey(focusKey)
        }
        break
      }
    }
  }

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('keydown', onKeyDown)
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('keydown', onKeyDown)
      }
    }
  }, [ref, onKeyDown])

  const onSelection = (key: Key) => {
    setCurrentKey(key)
    setFocusKey(key)
  }

  return {collection, currentKey, setCurrentKey: onSelection, focusKey}
}

export interface KeyboardDelegate {
  getKeyBelow?(key: Key): Key | null
  getKeyAbove?(key: Key): Key | null
  getFirstKey?(key?: Key, global?: boolean): Key | null
  getLastKey?(key?: Key, global?: boolean): Key | null
}
export class ListKeyboardDelegate implements KeyboardDelegate {
  private collection: Array<
    React.DetailedReactHTMLElement<TabItemProps, HTMLElement>
  >
  private disabledKeys: Iterable<React.Key>

  constructor(
    collection: Array<
      React.DetailedReactHTMLElement<TabItemProps, HTMLElement>
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
