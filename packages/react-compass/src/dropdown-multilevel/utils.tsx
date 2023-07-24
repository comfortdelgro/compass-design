import React, {Key} from 'react'
import {DropdownMultilevelItemProps} from './dropdown-multilevel-item'

const findItemByValue = (
  items: Array<React.ReactElement<DropdownMultilevelItemProps>>,
  value: Key,
  disabledKeys: Key[] = [],
): React.ReactElement<DropdownMultilevelItemProps> | null => {
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    if (item?.props) {
      if (
        item.props.id === value.toString() &&
        !disabledKeys?.includes(item.props.id)
      ) {
        return item
      }
    }
  }
  return null
}

/**
 * Get previous dropdown item
 * @param key current key
 * @param children All Dropdown.Item elements
 * @param strings All keys of Dropdown.Item elements
 */
export const getItemAbove = (
  key: Key,
  children?: React.ReactNode,
  strings: string[] = [],
) => {
  if (!strings.length) return null

  // Get the currently displayed items
  // const visibleDropdownItems = strings.filter((item) => item.visibility)

  // if (visibleDropdownItems.length) {
  //   const index = visibleDropdownItems.findIndex(
  //     (item) => item.value.toString() === key.toString(),
  //   )
  //   if (index !== -1) {
  //     // Get prev item or last item(when we are at first index)
  //     const nextKey =
  //       visibleDropdownItems[index - 1] ??
  //       visibleDropdownItems[visibleDropdownItems.length - 1]
  //     if (nextKey) {
  //       const nextItem = getItemByKey(nextKey.value, children)
  //       return nextItem
  //     }
  //   }
  // }

  const lastItem = getLastItem(children, strings)
  return lastItem
}

/**
 * Get next dropdown item
 * @param key current key
 * @param children All Dropdown.Item elements
 * @param strings All keys of Dropdown.Item elements
 */
export const getItemBelow = (
  key: Key,
  children?: React.ReactNode,
  visibleDropdownItemIds: string[] = [],
) => {
  if (!visibleDropdownItemIds.length) return null

  if (visibleDropdownItemIds.length) {
    // Get next item or first item(when we are at last index)
    const index = visibleDropdownItemIds.findIndex(
      (item) => item.toString() === key.toString(),
    )
    if (index !== -1) {
      const nextKey =
        visibleDropdownItemIds[index + 1] ?? visibleDropdownItemIds[0]
      if (nextKey) {
        const nextItem = getItemByKey(nextKey, children)
        return nextItem
      }
    }
  }

  const firstItem = getFirstItem(children, visibleDropdownItemIds)
  return firstItem
}

/**
 * Get first Dropdown.Item in children
 * @param children All Dropdown.Item elements
 * @param strings All keys of Dropdown.Item elements
 */
export const getFirstItem = (
  children?: React.ReactNode,
  visibleDropdownItemIds: string[] = [],
) => {
  if (!visibleDropdownItemIds?.length) return null

  let selectItem: React.ReactElement<DropdownMultilevelItemProps> | null = null

  for (let index = 0; index < visibleDropdownItemIds.length; index++) {
    const string = visibleDropdownItemIds[index]
    // The first item is being displayed
    if (string) {
      selectItem = getItemByKey(string, children)
      break
    }
  }

  return selectItem
}

/**
 * Get last Dropdown.Item in children
 * @param children All Dropdown.Item elements
 * @param strings All keys of Dropdown.Item elements
 */
export const getLastItem = (
  children?: React.ReactNode,
  strings: string[] = [],
) => {
  if (!strings?.length) return null

  const selectItem: React.ReactElement<DropdownMultilevelItemProps> | null =
    null

  for (let index = strings.length - 1; index >= 0; index--) {
    const string = strings[index]
    // The last item is being displayed
    // if (string?.visibility) {
    //   selectItem = getItemByKey(string.value, children)
    //   break
    // }
  }

  return selectItem
}

/**
 * Get Dropdown.Item element in children by key
 * @param key current key
 * @param children All Dropdown.Item elements
 */
export const getItemByKey = (key: Key, children?: React.ReactNode) => {
  const childrenArr = React.Children.toArray(children)
  if (!childrenArr?.length) return null

  const selectItem = findItemByValue(
    children as Array<React.ReactElement<DropdownMultilevelItemProps>>,
    key,
  )

  return selectItem ?? null
}
