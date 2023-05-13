import React from 'react'
import {DragAndDropListItemProps} from './item'

export const pickChilds = (
  children: React.ReactNode | undefined,
  targetType: React.ElementType,
): Array<
  React.DetailedReactHTMLElement<DragAndDropListItemProps, HTMLElement>
> => {
  const matched: Array<
    React.DetailedReactHTMLElement<DragAndDropListItemProps, HTMLElement>
  > = []
  React.Children.forEach(children, (item) => {
    if (!React.isValidElement(item)) return item
    if (item.type === targetType) {
      matched.push(
        item as React.DetailedReactHTMLElement<
          DragAndDropListItemProps,
          HTMLElement
        >,
      )
    }
    return item
  })
  const childs = matched.length >= 0 ? matched : []

  return childs
}
