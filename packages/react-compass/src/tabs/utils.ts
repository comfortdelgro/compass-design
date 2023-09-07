import React from 'react'
import TabItem, {TabItemProps} from './item'

export type Orientation = 'horizontal' | 'vertical'

export type Icon = 'left' | 'right' | 'top' | 'none'

export type Variant = 'rounded' | 'simple' | 'h5'

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
  children: React.ReactNode,
  defaulValue: React.Key | undefined,
  value: React.Key | undefined,
  disabledKeys: React.Key[],
) {
  const collection = React.useMemo(
    () => pickChilds(children, TabItem),
    [children],
  )

  const [currentKey, setCurrentKey] = React.useState<React.Key | undefined>(
    getDefaulValue(collection, defaulValue, value, disabledKeys),
  )
  return {collection, currentKey, setCurrentKey}
}
