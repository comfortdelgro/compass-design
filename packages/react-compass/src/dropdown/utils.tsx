import isEmpty from 'lodash/isEmpty'
import React, {Key, RefObject} from 'react'
import {styled} from '../theme'
import {StyledComponentProps} from '../utils/stitches.types'
import DropdownItem, {DropdownItemBase, DropdownItemProps} from './item'
import DropdownSection, {DropdownSectionProps} from './section'

export const POPOVER_Z_INDEX = 2147483600
export const LISTBOX_Z_INDEX = 2147483641

const StyledIcon = styled('svg', {
  color: '$primaryText',
})

export const Icon = () => (
  <StyledIcon width='16' height='16' viewBox='0 0 16 16'>
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='currentColor'
    />
  </StyledIcon>
)

export const pickChilds = <T extends DropdownItemBase>(
  children: React.ReactNode | undefined,
  targetType: React.ElementType,
): Array<React.DetailedReactHTMLElement<T, HTMLElement>> => {
  const matched: Array<React.DetailedReactHTMLElement<T, HTMLElement>> = []
  React.Children.forEach(children, (item) => {
    if (!React.isValidElement(item)) return item
    if (item.type === targetType) {
      matched.push(item as React.DetailedReactHTMLElement<T, HTMLElement>)
    }
    if (item.type === DropdownSection) {
      const child = (item as React.DetailedReactHTMLElement<T, HTMLElement>)
        .props.children
      React.Children.forEach(child, (i) => {
        if (!React.isValidElement(i)) return i
        if (i.type === targetType) {
          matched.push(i as React.DetailedReactHTMLElement<T, HTMLElement>)
        }
        return i
      })
    }
    return item
  })
  const childs = matched.length >= 0 ? matched : []

  return childs
}

export interface SectionCollection {
  title?: React.ReactNode
  isClickable?: boolean
  onClick?: (title: React.ReactNode) => void
  isChecked?: boolean
  checkmark?: 'tick' | 'checkbox'
  keys?: React.Key[]
}

export const pickSections = (
  children: React.ReactNode | undefined,
): SectionCollection[] => {
  const matched: SectionCollection[] = []
  React.Children.forEach(children, (item) => {
    if (!React.isValidElement(item)) return item // if the item is not a valid React element, return it
    if (item.type === DropdownSection) {
      // if the item is a DropdownSection component
      const dSectionItem = React.cloneElement(
        item as React.ReactElement<DropdownSectionProps>, // clone the element and cast it as a DropdownSection component
      )
      const keys: React.Key[] = []
      React.Children.forEach(dSectionItem.props.children, (j) => {
        // loop through the children of the DropdownSection component
        const dItemItem = React.cloneElement(
          j as React.ReactElement<DropdownItemProps>, // clone the element and cast it as a DropdownItem component
        )
        if (dItemItem.key) keys.push(dItemItem.key) // if the DropdownItem component has a key property, push it to the keys array
      })
      matched.push({
        // push an object with title and keys properties to the matched array
        title: dSectionItem.props.title,
        isClickable: dSectionItem.props.isClickable as boolean,
        onClick: dSectionItem.props.onClick as (title: React.ReactNode) => void,
        isChecked: dSectionItem.props.isChecked as boolean,
        checkmark: dSectionItem.props.checkmark as 'tick' | 'checkbox',
        keys: keys,
      })
    }

    if (item.type === DropdownItem) {
      // if the item is a DropdownItem component
      const dItemItem = React.cloneElement(
        item as React.ReactElement<DropdownItemProps>, // clone the element and cast it as a DropdownItem component
      )
      if (dItemItem.key)
        // if the DropdownItem component has a key property
        matched.push({
          // push an object with undefined title and keys array with one key to the matched array
          title: undefined,
          keys: [dItemItem.key],
        })
    }

    return item // return the item
  })
  const sections = matched.length >= 0 ? matched : [] // if matched array has length greater than or equal to zero, assign it to sections variable else assign an empty array to sections variable.
  return sections // return sections variable
}

export interface ListBoxCollections {
  id: number
  type: 'component' | 'group'
  title?: React.ReactNode
  isClickable?: boolean
  onClick?: (title: React.ReactNode) => void
  isChecked?: boolean
  checkmark?: 'tick' | 'checkbox'
  children: Array<
    React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement> | undefined
  >
}

export const getListBoxCollection = (
  sectionCollection: SectionCollection[],
  collection: Array<
    React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  >,
) => {
  const list: ListBoxCollections[] = []
  sectionCollection.forEach((i, index) => {
    if (i.title === undefined && i.keys) {
      list.push({
        id: index,
        type: 'component',
        isClickable: i.isClickable as boolean,
        onClick: i.onClick as (title: React.ReactNode) => void,
        isChecked: i.isChecked as boolean,
        checkmark: i.checkmark as 'tick' | 'checkbox',
        children: i.keys
          .map((j) => collection.find((k) => j === k.key))
          .filter((v) => v),
      })
    }
    if (i.title && i.keys) {
      list.push({
        id: index,
        type: 'group',
        title: i.title,
        isClickable: i.isClickable as boolean,
        onClick: i.onClick as (title: React.ReactNode) => void,
        isChecked: i.isChecked as boolean,
        checkmark: i.checkmark as 'tick' | 'checkbox',
        children: i.keys
          .map((j) => collection.find((k) => j === k.key))
          .filter((v) => v),
      })
    }
  })
  return list
}

export function useIsInViewport(ref: RefObject<Element>) {
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  const observer = React.useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(!!entry?.isIntersecting),
      ),
    [ref.current],
  )

  React.useEffect(() => {
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
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
export interface KeyboardDelegate {
  getKeyBelow?(key: Key): Key | null
  getKeyAbove?(key: Key): Key | null
  getFirstKey?(key?: Key, global?: boolean): Key | null
  getLastKey?(key?: Key, global?: boolean): Key | null
}
export interface DropdownBase extends StyledComponentProps {
  label?: React.ReactNode
  isOpen?: boolean
  isLoading?: boolean
  autoFocus?: boolean
  isErrored?: boolean
  helperText?: string
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  placeholder?: string
  errorMessage?: string
  defaultOpen?: boolean
  numberOfRows?: number
  icon?: React.ReactNode
  disabledKeys?: React.Key[]
  children?: React.ReactNode
  description?: React.ReactNode
  onBlur?: () => void
  onFocus?: () => void
  onLoadMore?: () => void
  onOpenChange?: (isOpen: boolean) => void
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

  private getKeyIndex = (key: Key) => {
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

export function getDefaulValue(
  defaulValue: React.Key | undefined,
  value: React.Key | undefined,
  disableDefault?: boolean,
): React.Key | undefined {
  let res = undefined
  if (
    defaulValue !== undefined &&
    defaulValue !== null &&
    !isEmpty(defaulValue.toString()) &&
    value !== '' &&
    !disableDefault
  ) {
    res = defaulValue
  }
  if (value !== undefined && value !== null && !isEmpty(value.toString())) {
    res = value
  }
  return res
}