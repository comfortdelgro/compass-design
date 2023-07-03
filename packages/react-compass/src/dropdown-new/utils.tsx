import React from 'react'
import {pickChild} from '../utils/pick-child'
import {DropdownItemProps} from './dropdown-new-item'
import DropdownHeader from './dropdown-new.header'

export function textContent(elem: React.ReactElement | string): string {
  if (!elem) {
    return ''
  }
  if (typeof elem === 'string') {
    return elem
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const children = elem.props && elem.props.children
  if (children instanceof Array) {
    return children.map(textContent).join(' ')
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return textContent(children)
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
  disabledKeys?: Array<string | number>,
) => {
  const {rest: dropdownItems} = pickChild<typeof DropdownHeader>(
    children,
    DropdownHeader,
  )
  const childrenArr = React.Children.toArray(dropdownItems)

  if (!childrenArr?.length) return null

  const lastItem = getLastItem(children)

  const dropdownItemIndex = childrenArr.findIndex((child) => {
    const dropdownItem = child as React.ReactElement<DropdownItemProps>
    return (
      dropdownItem.props.value === key &&
      !disabledKeys?.includes(dropdownItem.props.value)
    )
  })

  const selectItem = childrenArr[
    dropdownItemIndex - 1
  ] as React.ReactElement<DropdownItemProps>

  return selectItem ?? lastItem ?? null
}

export const getItemBelow = (
  key: string | number,
  children?: React.ReactNode,
  disabledKeys?: Array<string | number>,
) => {
  const {rest: dropdownItems} = pickChild<typeof DropdownHeader>(
    children,
    DropdownHeader,
  )
  const childrenArr = React.Children.toArray(dropdownItems)

  if (!childrenArr?.length) return null

  console.log(
    findItemByValue(
      children as Array<React.ReactElement<DropdownItemProps>>,
      key,
      disabledKeys,
    ),
  )

  const firstItem = getFirstItem(children)

  const dropdownItemIndex = childrenArr.findIndex((child) => {
    const dropdownItem = child as React.ReactElement<DropdownItemProps>
    return (
      dropdownItem.props.value === key &&
      !disabledKeys?.includes(dropdownItem.props.value)
    )
  })

  const selectItem = childrenArr[
    dropdownItemIndex + 1
  ] as React.ReactElement<DropdownItemProps>

  return selectItem ?? firstItem ?? null
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

export const getFirstItem = (children?: React.ReactNode) => {
  const {rest: dropdownItems} = pickChild<typeof DropdownHeader>(
    children,
    DropdownHeader,
  )
  const childrenArr = React.Children.toArray(dropdownItems)

  if (!childrenArr?.length) return null

  const selectItem = childrenArr[0] as React.ReactElement<DropdownItemProps>

  return selectItem ?? null
}

export const getLastItem = (children?: React.ReactNode) => {
  const {rest: dropdownItems} = pickChild<typeof DropdownHeader>(
    children,
    DropdownHeader,
  )
  const childrenArr = React.Children.toArray(dropdownItems)

  if (!childrenArr?.length) return null

  const selectItem = childrenArr[
    childrenArr.length - 1
  ] as React.ReactElement<DropdownItemProps>

  return selectItem ?? null
}
