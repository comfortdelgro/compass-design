import React from 'react'

export const pickChild = <T = React.ReactNode>(
  children: React.ReactNode | undefined,
  targetType: React.ElementType,
): {
  child: T | undefined
  rest: React.ReactElement
} => {
  const matched: React.ReactNode[] = []
  const rest = React.Children.map(children, (item) => {
    if (!React.isValidElement(item)) return item
    if (item.type === targetType) {
      matched.push(item)
      return null
    }
    return item
  })
  const child = matched.length >= 0 ? matched[0] : undefined

  return {
    child: child as T,
    rest: rest as unknown as React.ReactElement,
  }
}
