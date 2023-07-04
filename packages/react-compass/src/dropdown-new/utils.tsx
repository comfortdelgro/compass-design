import React from 'react'
import {pickChild} from '../utils/pick-child'
import {DropdownItemKey} from './dropdown-new-context'
import {DropdownItemProps} from './dropdown-new-item'
import DropdownHeader from './dropdown-new.header'

export function textContent(
  elem: React.ReactElement<DropdownItemProps> | string,
): string {
  if (!elem) {
    return ''
  }
  if (typeof elem === 'string') {
    return elem
  }

  const children = elem.props?.children
  if (children instanceof Array) {
    return children.map(textContent).join(' ')
  }
  return textContent(children as React.ReactElement<DropdownItemProps>)
}

export const findItemByValue = (
  items: Array<React.ReactElement<DropdownItemProps>>,
  value: string | number,
  disabledKeys: Array<string | number> = [],
): React.ReactElement<DropdownItemProps> | null => {
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    if (item?.props) {
      if (
        item.props.value === value &&
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

export const getItemAbove = (
  key: string | number,
  children?: React.ReactNode,
  dropdownItemKeys: DropdownItemKey[] = [],
) => {
  if (!dropdownItemKeys.length) return null

  const lastItem = getLastItem(children, dropdownItemKeys)

  const visibleDropdownItems = dropdownItemKeys.filter(
    (item) => item.visibility,
  )

  if (visibleDropdownItems.length) {
    const index = visibleDropdownItems.findIndex((item) => item.value === key)
    if (index !== -1) {
      const nextKey =
        visibleDropdownItems[index - 1] ??
        visibleDropdownItems[visibleDropdownItems.length - 1]
      if (nextKey) {
        const nextItem = getItemByKey(nextKey.value, children)
        return nextItem
      }
    }
  }
  return lastItem
}

export const getItemBelow = (
  key: string | number,
  children?: React.ReactNode,
  dropdownItemKeys: DropdownItemKey[] = [],
) => {
  if (!dropdownItemKeys.length) return null

  const firstItem = getFirstItem(children, dropdownItemKeys)

  const visibleDropdownItems = dropdownItemKeys.filter(
    (item) => item.visibility,
  )
  if (visibleDropdownItems.length) {
    const index = visibleDropdownItems.findIndex((item) => item.value === key)
    if (index !== -1) {
      const nextKey = visibleDropdownItems[index + 1] ?? visibleDropdownItems[0]
      if (nextKey) {
        const nextItem = getItemByKey(nextKey.value, children)
        return nextItem
      }
    }
  }
  return firstItem
}

export const getFirstItem = (
  children?: React.ReactNode,
  dropdownItemKeys: DropdownItemKey[] = [],
) => {
  if (!dropdownItemKeys?.length) return null

  let selectItem: React.ReactElement<DropdownItemProps> | null = null

  for (let index = 0; index < dropdownItemKeys.length; index++) {
    const dropdownItemKey = dropdownItemKeys[index]
    // Last item without disabled
    if (dropdownItemKey?.visibility) {
      selectItem = getItemByKey(dropdownItemKey.value, children)
      break
    }
  }

  return selectItem
}

export const getLastItem = (
  children?: React.ReactNode,
  dropdownItemKeys: DropdownItemKey[] = [],
) => {
  if (!dropdownItemKeys?.length) return null

  let selectItem: React.ReactElement<DropdownItemProps> | null = null

  for (let index = dropdownItemKeys.length - 1; index >= 0; index--) {
    const dropdownItemKey = dropdownItemKeys[index]
    // Last item without disabled
    if (dropdownItemKey?.visibility) {
      selectItem = getItemByKey(dropdownItemKey.value, children)
      break
    }
  }

  return selectItem
}

export const getItemByKey = (
  key: string | number,
  children?: React.ReactNode,
) => {
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
