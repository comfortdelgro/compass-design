import React, {Key} from 'react'
import {pickChild} from '../utils/pick-child'
import {DropdownItemKey} from './dropdown-context'
import {DropdownItemProps} from './dropdown-item'
import DropdownHeader from './dropdown.header'

/**
 * Get text in Element
 * @param elem React.ReactElement
 * @returns string
 */
export function textContent(
  elem: React.ReactElement<DropdownItemProps> | string,
): string {
  if (!elem) {
    return ''
  }
  if (typeof elem === 'string') {
    return elem
  }
  if (elem.props?.textValue) {
    return elem.props.textValue
  }

  const children = elem.props?.children
  if (children instanceof Array) {
    return children.map(textContent).join(' ')
  }
  return textContent(children as React.ReactElement<DropdownItemProps>)
}

const findItemByValue = (
  items: Array<React.ReactElement<DropdownItemProps>>,
  value: Key,
  disabledKeys: Key[] = [],
): React.ReactElement<DropdownItemProps> | null => {
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    if (item?.props) {
      if (
        item.props.value?.toString() === value.toString() &&
        !disabledKeys?.includes(item.props.value)
      ) {
        return item
      }
      if (item.props.children) {
        const foundItem = findItemByValue(
          React.Children.toArray(item.props.children) as Array<
            React.ReactElement<DropdownItemProps>
          >,
          value,
        )
        if (foundItem) {
          return foundItem
        }
      }
    }
  }
  return null
}

/**
 * Get previous dropdown item
 * @param key current key
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export const getItemAbove = (
  key: Key,
  children?: React.ReactNode,
  dropdownItemKeys: DropdownItemKey[] = [],
) => {
  if (!dropdownItemKeys.length) return null

  // Get the currently displayed items
  const visibleDropdownItems = dropdownItemKeys.filter(
    (item) => item.visibility,
  )

  if (visibleDropdownItems.length) {
    const index = visibleDropdownItems.findIndex(
      (item) => item.value.toString() === key.toString(),
    )
    if (index !== -1) {
      // Get prev item or last item(when we are at first index)
      const nextKey =
        visibleDropdownItems[index - 1] ??
        visibleDropdownItems[visibleDropdownItems.length - 1]
      if (nextKey) {
        const nextItem = getItemByKey(nextKey.value, children)
        return nextItem
      }
    }
  }

  const lastItem = getLastItem(children, dropdownItemKeys)
  return lastItem
}

/**
 * Get next dropdown item
 * @param key current key
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export const getItemBelow = (
  key: Key,
  children?: React.ReactNode,
  dropdownItemKeys: DropdownItemKey[] = [],
) => {
  if (!dropdownItemKeys.length) return null

  // Get the currently displayed items
  const visibleDropdownItems = dropdownItemKeys.filter(
    (item) => item.visibility,
  )

  if (visibleDropdownItems.length) {
    // Get next item or first item(when we are at last index)
    const index = visibleDropdownItems.findIndex(
      (item) => item.value.toString() === key.toString(),
    )
    if (index !== -1) {
      const nextKey = visibleDropdownItems[index + 1] ?? visibleDropdownItems[0]
      if (nextKey) {
        const nextItem = getItemByKey(nextKey.value, children)
        return nextItem
      }
    }
  }

  const firstItem = getFirstItem(children, dropdownItemKeys)
  return firstItem
}

/**
 * Get first Dropdown.Item in children
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export const getFirstItem = (
  children?: React.ReactNode,
  dropdownItemKeys: DropdownItemKey[] = [],
) => {
  if (!dropdownItemKeys?.length) return null

  let selectItem: React.ReactElement<DropdownItemProps> | null = null

  for (let index = 0; index < dropdownItemKeys.length; index++) {
    const dropdownItemKey = dropdownItemKeys[index]
    // The first item is being displayed
    if (dropdownItemKey?.visibility) {
      selectItem = getItemByKey(dropdownItemKey.value, children)
      break
    }
  }

  return selectItem
}

/**
 * Get last Dropdown.Item in children
 * @param children All Dropdown.Item elements
 * @param dropdownItemKeys All keys of Dropdown.Item elements
 */
export const getLastItem = (
  children?: React.ReactNode,
  dropdownItemKeys: DropdownItemKey[] = [],
) => {
  if (!dropdownItemKeys?.length) return null

  let selectItem: React.ReactElement<DropdownItemProps> | null = null

  for (let index = dropdownItemKeys.length - 1; index >= 0; index--) {
    const dropdownItemKey = dropdownItemKeys[index]
    // The last item is being displayed
    if (dropdownItemKey?.visibility) {
      selectItem = getItemByKey(dropdownItemKey.value, children)
      break
    }
  }

  return selectItem
}

/**
 * Get Dropdown.Item element in children by key
 * @param key current key
 * @param children All Dropdown.Item elements
 */
export const getItemByKey = (key: Key, children?: React.ReactNode) => {
  // Pick Dropdown.Item in children except for DropdownHeader
  const {rest: dropdownItems} = pickChild<typeof DropdownHeader>(
    children,
    DropdownHeader,
  )
  const childrenArr = React.Children.toArray(dropdownItems)

  if (!childrenArr?.length) return null

  const selectItem = findItemByValue(
    children as Array<React.ReactElement<DropdownItemProps>>,
    key,
  )

  return selectItem ?? null
}

export const getDistanceBetweenElements = (
  a: HTMLDivElement,
  b: HTMLDivElement,
) => {
  const getTop = (element: Element) => {
    const {top} = element.getBoundingClientRect()
    return top
  }
  const aPosition = getTop(a)
  const bPosition = getTop(b)
  return Math.hypot(aPosition - bPosition)
}
