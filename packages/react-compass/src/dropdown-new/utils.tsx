import React from 'react'
import {DropdownItemProps} from './dropdown-new-item'

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

export const getItemAbove = (
  key: string | number,
  children?: React.ReactNode,
  disabledKeys?: Array<string | number>,
) => {
  const childrenArr = React.Children.toArray(children)

  if (!childrenArr?.length) return null

  const lastItem = childrenArr[
    childrenArr.length - 1
  ] as React.ReactElement<DropdownItemProps>

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
  const childrenArr = React.Children.toArray(children)

  if (!childrenArr?.length) return null

  const firstItem = childrenArr[0] as React.ReactElement<DropdownItemProps>

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
  const childrenArr = React.Children.toArray(children)

  if (!childrenArr?.length) return null

  const dropdownItemIndex = childrenArr.findIndex((child) => {
    const dropdownItem = child as React.ReactElement<DropdownItemProps>
    return dropdownItem.props.value === key
  })

  const selectItem = childrenArr[
    dropdownItemIndex
  ] as React.ReactElement<DropdownItemProps>

  return selectItem ?? null
}

export const getFirstItem = (children?: React.ReactNode) => {
  const childrenArr = React.Children.toArray(children)

  if (!childrenArr?.length) return null

  const selectItem = childrenArr[0] as React.ReactElement<DropdownItemProps>

  return selectItem ?? null
}

export const getLastItem = (children?: React.ReactNode) => {
  const childrenArr = React.Children.toArray(children)

  if (!childrenArr?.length) return null

  const selectItem = childrenArr[
    childrenArr.length - 1
  ] as React.ReactElement<DropdownItemProps>

  return selectItem ?? null
}
